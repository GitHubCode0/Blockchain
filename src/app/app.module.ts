import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { SummaryComponent } from './summary/summary.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LiteratureComponent } from './literature/literature.component';
import { MethodComponent } from './method/method.component';
import { FindingsComponent } from './findings/findings.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { AppendicesComponent } from './appendices/appendices.component';
import { StartComponent } from './start/start.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SummaryComponent,
    IntroductionComponent,
    LiteratureComponent,
    MethodComponent,
    FindingsComponent,
    DiscussionComponent,
    ConclusionComponent,
    AppendicesComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }