import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string = '';
  password: string = '';
  badLogin = false;

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  postLogin() {
    this.loginService.login({login: this.login, password: this.password}).subscribe((data: any) => {
      if (null === data) {
        this.badLogin = true;

        return;
      }

      this.authService.login(data.Id);
      this.router.navigate(['/transit'])
    })
  }

}
