import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InputNumberComponent } from './shared/components/input-number/input-number.component';
import { InputCheckboxComponent } from './shared/components/input-checkbox/input-checkbox.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { DefaultComponent } from './shared/templates/default/default.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputNumberComponent,
    InputCheckboxComponent,
    ButtonComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    InputCheckboxComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
