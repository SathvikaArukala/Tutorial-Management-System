import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { UpdateTutorialComponent } from './update-tutorial/update-tutorial.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignOutComponent } from './sign-out/sign-out.component';

const routes: Routes = [
  {path: 'tutorials', component: TutorialListComponent},
  {path: 'add-tutorial', component: AddTutorialComponent},
  {path: 'update-tutorial/:id', component: UpdateTutorialComponent},
  {path: 'tutorial-details/:id', component: TutorialDetailsComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-out', component: SignOutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

