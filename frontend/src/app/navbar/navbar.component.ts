import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAddClick() {
    console.log('add clicked')
    setTimeout(() => this.router.navigate(['add']),0)
  }

  onSearchClick() {
    console.log('search clicked')
    setTimeout(() => this.router.navigate(['results']),0)
  }
}
