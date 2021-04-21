import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showSideMenu(id: string) {
    let element = document.getElementById(id) as HTMLElement;
    element.style.opacity = "1";
    element.style.transform = "translateX(0%)";

  }

  closeSideMenu(id: string) {
    let element = document.getElementById(id) as HTMLElement;
    element.style.opacity = "0";
    element.style.transform = "translateX(100%)";
  }
}
