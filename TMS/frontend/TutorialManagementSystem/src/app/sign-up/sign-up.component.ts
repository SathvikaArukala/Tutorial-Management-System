import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  userId: any;
  constructor(private userService: UserService, private router: Router) {}

  user: any;
  saveUser(userName: any, dob: any, email: any, password: any, repassword: any, about: any,role:any) {
    if (password == repassword) {
      this.user = new User(this.userId, userName, password, email, dob, about, "USER");
      console.log(this.user)
      this.userService.signup(this.user).subscribe(
        response => {
          console.log(response);
          alert('Signup successful!!');
          this.router.navigate(['/signin']);
        },

      );

    }
    else {
      alert('password does not match!!');
      window.location.reload();
    }
  }
}
