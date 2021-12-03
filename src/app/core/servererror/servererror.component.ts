import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servererror',
  templateUrl: './servererror.component.html',
  styleUrls: ['./servererror.component.scss']
})
export class ServererrorComponent implements OnInit {
  error: any;
  constructor(private router: Router) {

    // this navigationExtras are only available in the Contructor
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation && navigation.extras && navigation.extras.state && navigation.extras.state.error;

   }

  ngOnInit(): void {
  }

}
