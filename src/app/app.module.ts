import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginButtonComponent } from './components/header/login-button/login-button.component';
import { SourceComponent } from './components/content-page/source/source.component';
import { ContentSettingsComponent } from './components/content-page/content-settings/content-settings.component';
import { SelectSourceComponent } from './components/content-page/content-settings/select-source/select-source.component';
import { FilterContentComponent } from './components/content-page/content-settings/filter-content/filter-content.component';
import { CheckboxComponent } from './components/content-page/content-settings/checkbox/checkbox.component';
import { AddArticleButtonComponent } from './components/content-page/content-settings/add-article-button/add-article-button.component';
import { ContentComponent } from './components/content-page/content.component';
import { NewsItemComponent } from './components/content-page/news-item/news-item.component';
import { LoadMoreComponent } from './components/content-page/load-more/load-more.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLogoComponent } from './components/header/header-logo/header-logo.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FilterPipe } from './pipes/filter.pipe';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CreateEditPageComponent } from './components/create-edit-page/create-edit-page.component';
import { FormComponent } from './components/create-edit-page/form/form.component';

const COMPONENTS = [
  AppComponent,
  HeaderComponent,
  HeaderLogoComponent,
  LoginButtonComponent,
  SourceComponent,
  ContentSettingsComponent,
  SelectSourceComponent,
  FilterContentComponent,
  CheckboxComponent,
  AddArticleButtonComponent,
  ContentComponent,
  NewsItemComponent,
  LoadMoreComponent,
  FooterComponent
];

const MAT_IMPORTS = [
  MatButtonModule,
  MatSelectModule,
  MatInputModule,
  MatCheckboxModule
]
@NgModule({
  declarations: [
    ...COMPONENTS,
    TruncatePipe,
    FilterPipe,
    CreateEditPageComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ...MAT_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
