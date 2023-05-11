import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-panel',
  templateUrl: './card-panel.component.html',
  styleUrls: ['./card-panel.component.css']
})
export class CardPanelComponent implements OnInit {
  
  @Input() width: string = 'unset';
  @Input() isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
