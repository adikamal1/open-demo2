import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {

  showList: boolean = false;
  selectedValue: any = "";
  @Input() label = "";
  @Input() options = [];
  @ViewChild('dropdown', { static: true }) dropdown: ElementRef;
  @Output() dropdownClick = new EventEmitter();
  constructor(private renderer: Renderer2) {
    // TODO: Change this implementation, try to use angular directive.
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.dropdown.nativeElement.contains(e.target) && this.showList === true) {
        this.showList = false;
      }
    });
  }
  ngOnInit() {
    this.selectedValue = this.options[0];
  }
  onValueChange(item) {
    this.selectedValue = item;
    this.dropdownClick.emit(item);
  }
}
