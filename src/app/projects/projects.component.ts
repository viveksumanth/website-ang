import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive  } from '@angular/router';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,    
    RouterLink, 
    RouterLinkActive
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectOneName = "Low cost storage for Audit logs";

  projectTwoName = "Generate performance metrics vs system metrics time-series charts";

  projectThreeName = "Application logs in Native JSON";
  
  projectFourName = "Credentials Migrartion without log of metrics"


}
