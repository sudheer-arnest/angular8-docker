import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from '../components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../components/modal/modal.component';
import { UppercasePipe } from '../pipes/uppercase.pipe';



@NgModule({
  declarations: [UppercasePipe,HomeComponent,ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule
  ],
  exports:[
    MatIconModule,
    ReactiveFormsModule,
    UppercasePipe,
    FormsModule,
    RouterModule,
    ModalComponent,
    UppercasePipe
  ]
})
export class SharedModule { }
