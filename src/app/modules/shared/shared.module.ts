import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './input/input.component';
import { SteperComponent } from './components/steper/steper.component';


@NgModule({
  declarations: [
    InputComponent,
    SteperComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    InputComponent,
    SteperComponent
  ]
})
export class SharedModule { }
