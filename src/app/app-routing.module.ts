import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { SummaryComponent } from './summary/summary.component'
import { IntroductionComponent } from './introduction/introduction.component'
import { LiteratureComponent } from './literature/literature.component';
import { MethodComponent } from './method/method.component';
import { FindingsComponent } from './findings/findings.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { AppendicesComponent } from './appendices/appendices.component';
import { StartComponent } from './start/start.component';
import { NotFoundComponent } from './notfound/notfound.component';

const appRoutes: Routes =[
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '', component: StartComponent},
  { path: 'executive_summary', component: SummaryComponent},
  { path: 'introduction', component: IntroductionComponent},
  { path: 'literature_review', component: LiteratureComponent},
  { path: 'method_and_references', component: MethodComponent},
  { path: 'findings', component: FindingsComponent},
  { path: 'discussion', component: DiscussionComponent},
  { path: 'conclusion', component: ConclusionComponent},
  { path: 'appendices', component: AppendicesComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
