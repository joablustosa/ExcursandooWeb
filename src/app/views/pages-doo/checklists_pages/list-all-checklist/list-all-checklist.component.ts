import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChecklistModel } from 'src/app/models/checklist-models/checklist.model';
import { ChecklistService } from 'src/app/services/checklist-services/checklist.service';

@Component({
  selector: 'app-list-all-checklist',
  templateUrl: './list-all-checklist.component.html',
  styleUrls: ['./list-all-checklist.component.scss']
})
export class ListAllChecklistComponent implements OnInit {
  newList: any[] = []
  checklists: ChecklistModel[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private checklistService: ChecklistService,
  ) { }

  ngOnInit(): void {
    this.getChacklist();
  }

  getChacklist(){
    this.checklistService.getAllChecklist().subscribe(
      checklistResponse => {
        this.checklists = checklistResponse as ChecklistModel[];
        this.activatedRoute.params.subscribe(params => {
          const id = params['id'];
          this.newList = this.checklists.filter(c => c.status == id)
        });
      }
    )
  }

}
