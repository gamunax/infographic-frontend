import { Component, OnInit } from '@angular/core';
import { AutocompleteOptionGroups } from '../../models/autocomplete.model';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  inputValue?: string;
  filteredOptions: string[] = [];
  options = ['Animation', 'C - C++', 'Clean Code', 'Clean Code', 'Animation', 'C - C++', 'Animation', 'C - C++', 'Animation', 'C - C++', 'Animation', 'C - C++'];

  constructor() {
    this.filteredOptions = this.options;
  }

  ngOnInit(): void {
  }

  onChange(value: string): void {
    this.filteredOptions = this.options
    .filter(option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
}

