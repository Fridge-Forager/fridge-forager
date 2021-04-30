import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private api: GetApiService) { }

  ngOnInit(): void {
    this.api.apiCall().subscribe((data) => {
      console.warn('get api data', data)
    })
  }

}
