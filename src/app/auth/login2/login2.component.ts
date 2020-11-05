import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms'

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss'],
  providers: [AuthService],
})
export class Login2Component implements OnInit {
  loginForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onLogin(){
    const { email,password } = this.loginForm.value;
    try {
      const user = await this.authSvc.login(email,password);
      if (user){
        //redireccion a la pagina principal
        this.router.navigate(['/segundo']);
      }
    } catch (error) {
      console.log(error)
    }
  }
}