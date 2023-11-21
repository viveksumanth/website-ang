import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../menu/menu.component';


@Component({
  selector: 'app-project1',
  standalone: true,
  imports: [
    CommonModule, 
    MenuComponent,
  ],
  templateUrl: './project1.component.html',
  styleUrl: './project1.component.css'
})
export class Project1Component {
  
  projectOneName = "Low cost storage for Audit logs";
  projectOneDescription = "project description";
  projectOneProblemStatement = "Currently, the HumboldtLogPuller’s(HLP) AuditLogConsumer consumes audit logs from Humboldt every minute" +
  "and archives them in S3 in S3 Standard storage class format." + "However, S3 Standard storage class is expensive, we must consider other" + 
  "low-cost storage class options.";

  projectTwoName = "";
  projectTwoDescription = "";
  projectTwoProblemStatement = "";

}
