import { Injectable } from '@angular/core';
import { Despesa } from '../models/despesa';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  private despesas: Despesa[];

  constructor(
    private localStorageService:LocalStorageService
  ){

  }

  private getDb():void{
    this.despesas = [];
    if(this.localStorageService.get("despesas") != null){
      this.despesas = JSON.parse(this.localStorageService.get("despesas"));
    }
  }

  getAll():Despesa[]{
    this.getDb();
    return this.despesas;
  }

  saveDespesa(despesa:Despesa):Promise<boolean>{
    this.getDb();
    this.despesas.push(despesa);
    return Promise.resolve(this.localStorageService.set('despesas',JSON.stringify(this.despesas)));
  }

  deleteDespesa(id:number){
    this.despesas.splice(id,1);
    this.localStorageService.set('despesas',JSON.stringify(this.despesas));
    this.getDb();
  }

}
