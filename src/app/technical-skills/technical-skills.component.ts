import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technical-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technical-skills.component.html',
  styleUrl: './technical-skills.component.css'
})
export class TechnicalSkillsComponent {
  tooltipVisible = false;
  tooltipText: string = '';

  showTooltip(skillName: string) {
    this.tooltipVisible = true;
    this.tooltipText = skillName;
  }

  hideTooltip() {
    this.tooltipVisible = false;
  }
}

