import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutocompleteOptionGroups } from '../../models/autocomplete.model';
import { Tag } from '../../models/tag';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  @Input() set dataList(data: Tag[]) {
    if (data) {
      this.options = data
        .map(tag => tag.name)
        .sort();
      this.filteredOptions = this.options;
    }
  };
  @Output() search = new EventEmitter();
  @Output() clear = new EventEmitter();

  inputValue?: string;
  filteredOptions: string[] = [];
  options;

  constructor() {

  }

  ngOnInit(): void {
  }

  onChange(value: string): void {
    this.filteredOptions = this.options
      .filter(option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1);

    const existTag = this.options.some(option => option === value);
    if (existTag) {
      this.search.emit(value)
    } else {
      this.search.emit(null)
    }
  }

  inputClear(): void {
    this.inputValue = null; 
    this.filteredOptions = this.options;
    this.clear.emit(true)
  }
}

