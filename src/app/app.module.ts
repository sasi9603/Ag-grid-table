import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridNewComponent } from './ag-grid-new/ag-grid-new.component';
import { AgGridModule } from 'ag-grid-angular';
import { NewComponentComponent } from './new-component/new-component.component';  

@NgModule({
  declarations: [
    AppComponent,
    AgGridNewComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   AgGridModule.withComponents([]),  
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
