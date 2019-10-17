import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckBoxComponent } from './shared/components/check-box/check-box.component';
import { CounterComponent } from './shared/components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckBoxComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
