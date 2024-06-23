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

  irHome(): void{
    this.router.navigate(["home"],{relativeTo: this.route})
  }
  irCurso(): void{
    this.router.navigate(["curso"],{relativeTo: this.route})
  }
  irPost(): void{
    this.router.navigate(["post"],{relativeTo: this.route})
  }
  irEstado(): void{
    this.router.navigate(["estado"],{relativeTo: this.route})
  }

}
