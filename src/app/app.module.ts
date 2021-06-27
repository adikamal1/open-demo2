import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { LandingFirstViewComponent } from './content/landing-first-view/landing-first-view.component';
import { SharedModule } from './shared/shared.module';
import { LandingSecondViewComponent } from './content/landing-second-view/landing-second-view.component';
import { EligibilityCalculatorComponent } from './content/landing-first-view/eligibility-calculator/eligibility-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavBarComponent,
    LandingFirstViewComponent,
    LandingSecondViewComponent,
    EligibilityCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
