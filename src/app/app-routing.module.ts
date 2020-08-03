import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { CvComponent } from './cv/cv.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CvDetailsComponent } from './cv-details/cv-details.component';
import { ErrorComponent } from './error/error.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuard } from './guards/route.guard';

const routes: Routes = [
  { 
    path: '',
    component: HeaderComponent,
    children: 
    [ 
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent, canActivate: [RouteGuard] },
      { path: 'welcome', component: WelcomeComponent, canActivate: [RouteGuard] },
      { path: 'cv',
        component: CvComponent,
        canActivate: [RouteGuard],
        children: [
          { path: ':id/cvDetails', component: CvDetailsComponent, canActivate: [RouteGuard] }
        ]
      },
      { path: 'addCv', component: AddCvComponent, canActivate: [RouteGuard] }
    ] 
  },
  { path: '**' , component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
