import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mobileQuery: MediaQueryList;

  constructor(media: MediaMatcher) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnInit(): void {}
}
