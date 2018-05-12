import { Component, OnInit } from '@angular/core';

import { DespesaService } from '../services/despesa.service';

import { Despesa } from '../models/despesa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  despesa:Despesa

  constructor(
    private despesaService:DespesaService,
    private router:Router
  ) { }

  ngOnInit() {
    this.despesa = new Despesa(new Date().getTime(), '', '', new Date, 0);
  }

  save():void{
    this.despesaService.saveDespesa(this.despesa).then(()=>{
      this.router.navigate(['/list']);
    }).catch(()=>{
      console.log('Erro ao inserir');
    })
  }

  delete(id:string){
    console.log(id);
  }

  voltar(){
    this.router.navigate(['/list']);
  }

}
