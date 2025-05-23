import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RolesComponent } from './components/roles/roles.component';
import { DesignationComponent } from './components/designation/designation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterComponent } from './components/master/master.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClientComponent } from './components/client/client.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    DesignationComponent,
    MasterComponent,
    ClientComponent,
    EmployeeComponent,
    ClientProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
