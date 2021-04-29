import { Component, OnInit } from '@angular/core';

import { ModalService } from '../../modal.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  userIcon="https://fridgeforager.s3-us-west-2.amazonaws.com/user.png";
  favoriteIcon="https://fridgeforager.s3-us-west-2.amazonaws.com/favorite-heart-outline-button.png";

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openFavorites(e:any) {
    e.preventDefault();
  }

  openModal(id: string, e:any) {
    e.preventDefault();
    this.modalService.open(id);
}

  closeModal(id: string, e:any) {
    e.preventDefault();
    this.modalService.close(id);
}

}
