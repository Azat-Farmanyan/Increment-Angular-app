import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss'],
})
export class ConfirmPopupComponent implements OnInit {
  @Output() onClose = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  closePopup() {
    this.onClose.emit();
  }
}
