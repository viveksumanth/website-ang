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

}
