import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ItemComponent } from './item/item.component';
import { HiredCvComponent } from './hired-cv/hired-cv.component';
import { HiredCvItemComponent } from './hired-cv-item/hired-cv-item.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CvDetailsComponent } from './cv-details/cv-details.component';
import { ErrorComponent } from './error/error.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListComponent,
    DetailComponent,
    ItemComponent,
    HiredCvComponent,
    HiredCvItemComponent,
    HeaderComponent,
    WelcomeComponent,
    CvDetailsComponent,
    ErrorComponent,
    AddCvComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
