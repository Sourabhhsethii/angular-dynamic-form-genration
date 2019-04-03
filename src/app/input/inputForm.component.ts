import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { TemplateOptions,Fields } from './fieldVo';

@Component({
    templateUrl: 'InputComponent.html',
    styleUrls: ['InputComponent.css'], 
})
export class InputComponent {
  
  model = {};
  fieldsObj: Array<Fields> =[];
  options: FormGroup;

  requiredSelected: string;
  typeSelected:'input';
  key: string;
  label: 'label';
  fields: FormlyFieldConfig[] =[];
 
  
  /* fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        required: true,
        label: 'Name',
      }
    },
  ]; */

  add() {
      let templateOptions : TemplateOptions =  new TemplateOptions();
        let requiredSelected = false;
        console.log(this.key);
      if(this.requiredSelected === 'true'){
        requiredSelected = true;
      }else{
        requiredSelected = false;
      }
      templateOptions.required = requiredSelected;
      templateOptions.label = this.label;

      let fields: Fields = new Fields();
      fields.key = this.key;
      fields.type = this.typeSelected;
      fields.templateOptions = templateOptions;
    this.fieldsObj.push(fields);
    console.log(this.fieldsObj);

    this.fields= this.fieldsObj;
  }

  submit() {
    console.log(this.model);
  }
}