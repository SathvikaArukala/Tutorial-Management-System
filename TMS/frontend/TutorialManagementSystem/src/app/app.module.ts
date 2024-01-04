import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { HttpClientModule } from '@angular/common/http';

import { DeleteTutorialComponent } from './delete-tutorial/delete-tutorial.component';
import { UpdateTutorialComponent } from './update-tutorial/update-tutorial.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialListComponent,
    AddTutorialComponent,
    DeleteTutorialComponent,
    UpdateTutorialComponent,
    TutorialDetailsComponent,
    SignInComponent,
    SignUpComponent,
    SignOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
