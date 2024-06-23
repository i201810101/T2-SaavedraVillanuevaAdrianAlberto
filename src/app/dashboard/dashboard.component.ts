import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router,
     private route: ActivatedRoute,
     private authService: AuthService
    ){

  }

  salir(): void{
    this.authService.logout();
    this.router.navigateByUrl("/login")
  }


  irPregunta2(): void{
    this.router.navigate(["pregunta2"],{relativeTo: this.route})
  }
  irPregunta3(): void{
    this.router.navigate(["pregunta3"],{relativeTo: this.route})
  }
  irPregunta4(): void{
    this.router.navigate(["pregunta4"],{relativeTo: this.route})
  }

}
