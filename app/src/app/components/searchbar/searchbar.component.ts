import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {

  @Input() debounceTime = 500;

  @Output() valueChange = new EventEmitter<string>();

  public searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.searchForm = this.formBuilder.group({
      searchField: [''],
    });
  }

  ngOnInit() {
    this.formSubscriberValues();
  }

  emitSearchValue(value: string) {
    this.valueChange.emit(value);
  }

  formSubscriberValues(): void {
    this.searchForm.controls.searchField.valueChanges.pipe(debounceTime(this.debounceTime))
      .subscribe(search => {
        if (typeof search === 'string' && search.trim() !== '') {
          this.emitSearchValue(search);
        } else {
          this.emitSearchValue('');
        }
      });
  }

}
