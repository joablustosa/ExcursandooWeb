import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../AppConstants';

export interface IFile {
  name: string;
  data: Uint8Array;
}

@Injectable({
  providedIn: 'root'
})
export class FileReaderService {

  constructor(
    private http: HttpClient
    ) { }

  readAsArrayBuffer(file: File): Promise<IFile> {
    // Create new file reader
    const fileReader = new FileReader();

    return new Promise((resolve, reject) => {

      fileReader.onerror = () => {
        fileReader.abort();
        reject(new DOMException('Problem parsing input file.'));
      };

      fileReader.onload = async (e) => {
        const name = file.name;
        const data = new Uint8Array(fileReader.result as any);
        resolve({ name, data });
      };

      // Read file as array buffer
      fileReader.readAsArrayBuffer(file);
    });
  }

  
  public uploadFiles(file: File) {
  const formData = new FormData();
  formData.append('file', file, 'doo_'+Date.toString()+file.name);

  let token = localStorage.getItem("tokenSessao");
  let headers = new HttpHeaders({
    // Set the Content-Type header with the correct boundary
    'Authorization': `Bearer ${token}`
  });
  
  let options = {
    headers,
  };

  return this.http.post(AppConstants.uploadMultipleFiles, formData, options);
}
}