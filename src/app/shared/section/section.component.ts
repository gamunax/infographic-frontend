import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { CarouselComponent } from '../carousel/carousel.component';
import { Infographic } from '../models/infographic';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() data: Infographic[];

  isVisible = false;
  infographics: Infographic;

  constructor() { }

  ngOnInit(): void {
  }

  resetData(): void{
    this.infographics = undefined;
  }

  openModalImages(infographic: Infographic): void {
    console.log(infographic);
    this.isVisible = true;
    this.infographics = infographic;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.resetData();
    this.isVisible = false;
  }

  ngOnDestroy(): void {
  }
}
