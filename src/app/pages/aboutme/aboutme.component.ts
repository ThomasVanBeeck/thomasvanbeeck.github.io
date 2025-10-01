import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewTabDirective } from '../../shared/directives/new-tab.directive';

@Component({
  selector: 'app-aboutme',
  imports: [NewTabDirective],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent {

}



