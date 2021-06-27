import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-toggle',
  templateUrl: './custom-toggle.component.html',
  styleUrls: ['./custom-toggle.component.scss']
})
export class CustomToggleComponent implements OnInit {
  checked = false;
  @Input() label = "";
  @Output() toggleClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.checked = !this.checked;
    this.toggleClick.emit(this.checked);
  }
}
