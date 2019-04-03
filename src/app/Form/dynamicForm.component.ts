import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'my-app',
  template: `
    <h1>@ngx-formly/material</h1>
    <form role="form" novalidate [formGroup]="form" (ngSubmit)="submit()">
      <formly-form [model]="model" [fields]="fields" [form]="form">
        <button type="submit" color="primary" mat-raised-button>Submit</button>
      </formly-form>
   
    </form>
  `,
})
export class DynamicFormComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        required: true,
        label: 'Name',
      }
    },
  ];

  submit() {
    console.log(this.model);
  }
}