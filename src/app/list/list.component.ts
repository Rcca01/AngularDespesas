import { Component, OnInit } from '@angular/core';

import { DespesaService } from '../services/despesa.service';
import { Router } from '@angular/router/';

import { Despesa } from '../models/despesa';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  despesas:Despesa[];

  constructor(
    private despesaService:DespesaService,
    private router:Router
  ){

  }

  ngOnInit() {
    this.despesas = this.despesaService.getAll();
  }

  delete(id:number){
    this.despesaService.deleteDespesa(id);
  }

  pageAdd(){
    this.router.navigate(['/add']);
  }

}
