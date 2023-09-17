import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-all-checklist',
  templateUrl: './list-all-checklist.component.html',
  styleUrls: ['./list-all-checklist.component.scss']
})
export class ListAllChecklistComponent implements OnInit {
  newList: any[] = []
  checklists = [
    {
      "id": 1,
      "titulo": "Lista de compras",
      "descricao": "Lista de compras, Lista de compras, Lista de compras, Lista de compras",
      "vencimento": "2023-01-01",
      "status": 1,
      "posicao": 1
    },
    {
      "id": 2,
      "titulo": "Lista de compras",
      "descricao": "Lista de compras, Lista de compras, Lista de compras, Lista de compras",
      "vencimento": "2023-01-01",
      "status": 0,
      "posicao": 2
    },
    {
      "id": 3,
      "titulo": "Lista de compras",
      "descricao": "Lista de compras, Lista de compras, Lista de compras, Lista de compras",
      "vencimento": "2023-01-01",
      "status": 2,
      "posicao": 3
    },
    {
      "id": 4,
      "titulo": "Lista de compras",
      "descricao": "Lista de compras, Lista de compras, Lista de compras, Lista de compras",
      "vencimento": "2023-01-01",
      "status": 3,
      "posicao": 3
    }
  ]
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.newList = this.checklists.filter(c => c.status == id)
    });
  }

}
