import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popupIsOpen = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  openPopup() {
    this.popupIsOpen = true;
  }
  closePopup() {
    this.popupIsOpen = false;
  }

  logOut() {
    this.router.navigate(['/login']);
  }
}
