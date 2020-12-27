import { Component, Input, OnInit } from '@angular/core';
import { ImageConfig } from '../../models/image';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
