import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SoftwareSolutionComponent } from './components/services/software-solution/software-solution.component';
import { TrainingComponent } from './components/services/training/training.component';
import { NavManueComponent } from './components/nav-manue/nav-manue.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    AboutComponent,
    ContactUsComponent,
    SoftwareSolutionComponent,
    TrainingComponent,
    NavManueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: AboutComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'service', component: ServicesComponent },
      { path: 'contacts', component: ContactUsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
