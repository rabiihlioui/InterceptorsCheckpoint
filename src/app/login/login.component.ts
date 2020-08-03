import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleLogin(loginForm: NgForm) {
    this.authenticationService.login(loginForm.value).subscribe(
      (loginData) => {
        localStorage.setItem('loginToken', loginData.id)
        this.router.navigate(['welcome'])
      }
    )
  }

}
