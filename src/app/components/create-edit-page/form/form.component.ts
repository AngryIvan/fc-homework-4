import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  newsForm = new FormGroup({
    heading: new FormControl(),
    description: new FormControl(),
    content: new FormControl(),
    image: new FormControl(),
    date: new FormControl(),
    author: new FormControl(),
    sourceUrl: new FormControl(),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('sss');
  }

}
