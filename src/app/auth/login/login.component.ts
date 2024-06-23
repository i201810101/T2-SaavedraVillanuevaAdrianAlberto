import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MaterialModule } from '../../angular-material/material/material.module';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  /*imports: [MatCardModule, MatButtonModule,MatFormFieldModule, MatInputModule],*/
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router,
private authService: AuthService
  ){

  }

  submit(usuario: HTMLInputElement,
    password: HTMLInputElement
  ):void{
    this.authService.login(usuario.value, password.value);
     this.router.navigateByUrl("/dashboard");
  }

}
