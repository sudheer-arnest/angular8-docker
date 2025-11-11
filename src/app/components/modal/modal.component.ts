import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  handleCloseClick(){
    this.closeModal.emit(true);
  }

}
