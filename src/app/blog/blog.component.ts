import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from '../projects/projects.component';
import { MenuComponent } from '../menu/menu.component';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, MenuComponent, ProjectsComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
