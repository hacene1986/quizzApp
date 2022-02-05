import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from '../services/confirm-dialog.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modalInfo: any;
  constructor(
    private confirmDialogService: ConfirmDialogService
  ) { }

  ngOnInit(): void {
    this.confirmDialogService.getModalInfo().subscribe(modalInfo => {
      this.modalInfo = modalInfo;
      console.log(this.modalInfo)
    });
  }

}
