import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  loginStatus: any = sessionStorage.getItem("loginStatus");

  constructor(private userService: UserService, private router: Router) {
  }

  signin(email: any, password: any) {
    this.userService.signin(email, password).subscribe(
      response => {
        console.log(response);
        alert('login successful');
        sessionStorage.setItem("loginStatus", "active");
        sessionStorage.setItem("userId", response.userId);
        sessionStorage.setItem("userRole", response.userRole);
        this.goTo();
      },
      
    );
  }
  signUp() {
    
    this.router.navigate(['sign-up'])
  }

  goTo() {

    this.router.navigate(['tutorials'])

  }
  }
