import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ResumeComponent } from './components/main/resume/resume.component';
import { WorksComponent } from './components/main/works/works.component';
import { OpeningComponent } from './components/main/opening/opening.component';
import { SkillsComponent } from './components/main/skills/skills.component';
import { SkillComponent } from './components/main/skills/skill/skill.component';
import { WorkComponent } from './components/main/works/work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ResumeComponent,
    WorksComponent,
    OpeningComponent,
    SkillsComponent,
    SkillComponent,
    WorkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
