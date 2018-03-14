import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Input('parentData') public someData;
  @Input() public parentData;
  // Emit event back to the parent component
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onClick(event) {
    // Emit the value of parentData back to parent component
    this.childEvent.emit(!this.parentData);
  }
}
