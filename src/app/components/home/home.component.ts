import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popupIsOpen = false;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  openPopup() {
    this.popupIsOpen = true;
  }
  closePopup() {
    this.popupIsOpen = false;
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
