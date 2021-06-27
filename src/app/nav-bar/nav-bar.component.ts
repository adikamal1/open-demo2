import { ViewChild } from '@angular/core';
import { Component, ElementRef, Input, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild('navElem',{static:true}) navElem: ElementRef;
  @Input() links;
  showLinks = false;
  navVisible=false;
  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      if(typeof window === 'undefined'){
        return;
      }
      window.addEventListener('scroll', () => {
         this.navVisible = document.documentElement.scrollTop >= 80;
        const navClass = this.navVisible ? 'nav-bar ' : 'nav-bar transparent';
        this.navElem.nativeElement.className = navClass;
      });
    })
  }

}