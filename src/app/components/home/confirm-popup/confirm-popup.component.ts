import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss'],
})
export class ConfirmPopupComponent implements OnInit {
  @Input() currentCount: number;
  @Input() nextCount: number;

  @Output() onClose = new EventEmitter();
  @Output() onConfirm = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  closePopup() {
    this.onClose.emit();
  }
  confirm() {
    this.onConfirm.emit();
  }
}
