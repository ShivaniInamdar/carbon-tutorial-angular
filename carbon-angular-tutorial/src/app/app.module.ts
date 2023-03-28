import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// carbon-components-angular default imports
import { UIShellModule, IconModule } from 'carbon-components-angular';
import Notification20 from '@carbon/icons/es/notification/20.js';
import UserAvatar20 from '@carbon/icons/es/user--avatar/20.js';
import Switcher20 from '@carbon/icons/es/switcher/20';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    IconModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
