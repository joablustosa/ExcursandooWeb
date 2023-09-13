import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioApi } from 'src/app/models/administracao/usuarioApi.model';
import { LoginService } from 'src/app/services/administrator/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'Excursandoo!';
  returnUrl: any;
  loginForm!: FormGroup;

  ngOnInit(): void {
    // this.loginService.logado();
    this.validationForm();
  }

  constructor(
    private loginService: LoginService,
    public router: Router,
    private fb: FormBuilder
  ) { }

  onLoggedin() {
    var userDoo = Object.assign({}, this.loginForm.value);
    this.loginService.efetivaLogin(userDoo);
  }

  validationForm(){
    this.loginForm = this.fb.group(
      {
        usuarioLogin: ['', Validators.required],
        chaveDeAcesso: ['', Validators.required]
      }
    );
  }
}
