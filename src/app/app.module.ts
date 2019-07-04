import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';
import { CountDownComponent } from './count-down/count-down.component';
import { CopyRightComponent } from './copy-right/copy-right.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    CountDownComponent,
    CopyRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
