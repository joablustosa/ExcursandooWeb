import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeoplesData, Person } from 'src/app/core/dummy-datas/peoples.data';
import { ChecklistModel } from 'src/app/models/checklist-models/checklist.model';
import { ChecklistService } from 'src/app/services/checklist-services/checklist.service';

@Component({
  selector: 'app-checklists-pages',
  templateUrl: './checklists-pages.component.html',
  styleUrls: ['./checklists-pages.component.scss']
})
export class ChecklistsPagesComponent implements OnInit {
  public isAsideNavCollapsed = true;
  selectedItem: string = '';
  checklists: ChecklistModel[];
  checklistForm!: FormGroup;

  selectedSearchPersonId: string = '';
  people: Person[] = [];
  simpleItems: any = [];
  
  constructor(
    private router: Router,
    private checklistService: ChecklistService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getChacklist();
    this.validationChecklist();
    this.simpleItems = [true, 'Two', 3];

    // array of objects
    this.people = PeoplesData.peoples;
  }

  selected(item: string, id: number) {
    this.selectedItem = item;
    this.router.navigate([`/checklists/${id}`])
  }

  getChacklist(){
    this.checklistService.getAllChecklist().subscribe(
      checklistResponse => {
        this.checklists = checklistResponse as ChecklistModel[];
        console.log(this.checklists)
      }
    )
  }

  saveChecklist(){
    var checklistTemp = Object.assign({
        image: '',
        position_list: 1,
        id_trip: 1,
        status: 1,
        user_created: 1,
        datetime_created: '2023-01-01',
        user_status: 1,
        status_created: 1,
        id_enterprise: 1,
    }, this.checklistForm.value);
    this.checklistService.saveChecklist(checklistTemp).subscribe(
      checklistResponse => {
        this.getChacklist();
      }
    )
  }

  validationChecklist(){
    this.checklistForm = this.fb.group(
      {
        checklist_name: ['', Validators.required],
        description: [0, [Validators.required]],
        title: [0, [Validators.required]],
        datetime_status: ['', [Validators.required]],
      }
    );
  }
}
