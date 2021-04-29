import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  userIcon="https://fridgeforager.s3-us-west-2.amazonaws.com/user.png";
  favoriteIcon="https://fridgeforager.s3-us-west-2.amazonaws.com/favorite-heart-outline-button.png";

  constructor() { }

  ngOnInit(): void {
  }

  openFavorites(e:any) {
    e.preventDefault();
  }

  openLogin(e:any) {
    e.preventDefault();
  }
}
