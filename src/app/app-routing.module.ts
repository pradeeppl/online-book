import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EssayComponent } from './essay/essay.component';
import { ContentComponent } from './layout/content/content.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WriteEssayComponent } from './write-essay/write-essay.component';
import { WritingComponent } from './writing/writing.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'dashboard',
    component: ContentComponent,
    children: [{
      path: '',
      component: DashboardComponent
    }]
  },
  {
    path:'writing',
    component: ContentComponent,
    children: [{
      path: '',
      component: WritingComponent
    }]
  },
  {
    path:'writing/essay',
    component: ContentComponent,
    children: [{
      path: '',
      component: EssayComponent
    }]
  },
  {
    path:'writing/essay/write-essay',
    component: ContentComponent,
    children: [{
      path: '',
      component: WriteEssayComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
