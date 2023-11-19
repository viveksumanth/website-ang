import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet  } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component'; 
import { TimelineComponent } from './timeline/timeline.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    RouterLink, 
    RouterLinkActive,
    MenuComponent,
    ProfileComponent, 
    TimelineComponent, 
    TechnicalSkillsComponent, 
    FooterComponent,
    BlogComponent,
    ProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'myApp';
}
