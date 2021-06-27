import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-range',
  templateUrl: './custom-range.component.html',
  styleUrls: ['./custom-range.component.scss']
})
export class CustomRangeComponent implements OnInit {
  @Input() label = "";
  @Input() value:any = "1000";
  @Input() range:any = {min:"1000",max:"100000"};
  @Input() step = "1000";
  @ViewChild('slider',{static:true}) slider:ElementRef;

  constructor() { }

  ngOnInit() {
    
    this.slider.nativeElement.style.background = `linear-gradient(to right, #663399 0%, #663399 ${(this.value-this.range.min)/(this.range.max-this.range.min)*100}%, rgba(178, 202, 247, 0.651) ${(this.value-this.range.min)/(this.range.max-this.range.min)*100}%, rgba(178, 202, 247, 0.651) 100%)`;

    this.slider.nativeElement.oninput=function() {
      this.slider.nativeElement.style.background = `linear-gradient(to right, #663399 0%, #663399 ${(this.slider.nativeElement.value-this.range.min)/(this.range.max-this.range.min)*100}%, rgba(178, 202, 247, 0.651) ${(this.slider.nativeElement.value-this.range.min)/(this.range.max-this.range.min)*100}%, rgba(178, 202, 247, 0.651) 100%)`
      this.value=this.slider.nativeElement.value;
    }.bind(this);
  }


}
