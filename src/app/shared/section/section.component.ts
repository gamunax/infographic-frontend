import { Component, Input, OnInit } from '@angular/core';
import { Infographic } from '../models/infographic';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() title: string;
  @Input() data: Infographic[];

  constructor() { }

  ngOnInit(): void {
  }

}
