import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  popupIsOpen = false;
  currentCountSubs: Subscription;
  incrementSubs: Subscription;
  currentCount = 0;
  nextCount = 0;
  constructor(
    private router: Router,
    private authService: AuthService,
    public counterService: CounterService
  ) {}

  ngOnInit(): void {}

  increment() {
    this.incrementSubs = this.counterService
      .increment(this.currentCount)
      .subscribe(
        (responseCount) => {
          this.nextCount = +responseCount;
        },
        (err) => {
          console.log(err);
        }
      );

    this.openPopup();
  }

  confirm() {
    this.currentCount = this.nextCount;
    this.closePopup();
  }

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
  ngOnDestroy(): void {
    this.currentCountSubs?.unsubscribe();
    this.incrementSubs?.unsubscribe();
  }
}
