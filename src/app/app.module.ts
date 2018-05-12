import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

import { DespesaService } from './services/despesa.service';

import { LocalStorageModule } from 'angular-2-local-storage';
import { MomentModule } from 'angular2-moment';
import 'moment/locale/pt-br';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NgbModule,
    FormsModule,
    LocalStorageModule.withConfig({
      prefix: 'despesaspp',
      storageType: "localStorage"
    }),
    MomentModule
  ],
  providers: [
    DespesaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
