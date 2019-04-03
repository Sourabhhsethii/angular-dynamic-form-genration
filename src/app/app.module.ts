import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { DynamicFormComponent } from './Form/dynamicForm.component';
import { InputComponent } from './input/inputForm.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,MatButtonModule, MatSidenavModule, MatSelectModule,MatRadioModule,MatIconModule, MatListModule, MatCardModule,MatTableModule,MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'CreateForm', component: InputComponent},
  { path: 'Form', component: DynamicFormComponent},
  { path: '**', component: InputComponent},
];

@NgModule({
  imports: [ 
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule ,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,MatFormFieldModule,MatRadioModule,FormsModule,MatSelectModule,

    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyMaterialModule,
  ],
  declarations: [ AppComponent,MyNavComponent,DynamicFormComponent,InputComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
