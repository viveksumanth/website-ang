import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';
import { TechnicalSkillsComponent } from '../technical-skills/technical-skills.component';
import { TopSkillsComponent } from '../top-skills/top-skills.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { ProjectsComponent } from '../projects/projects.component';
import { MenuComponent } from '../menu/menu.component';
import { HeaderComponent } from '../header/header.component';
import { BlogComponent } from '../blog/blog.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule, 
    ProfileComponent, 
    TechnicalSkillsComponent, 
    TopSkillsComponent,
    TimelineComponent,
    ProjectsComponent,
    MenuComponent,
    HeaderComponent,
    BlogComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
