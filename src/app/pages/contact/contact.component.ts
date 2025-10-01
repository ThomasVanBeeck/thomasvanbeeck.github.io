import { Component } from '@angular/core';
import { NewTabDirective } from '../../shared/directives/new-tab.directive';


@Component({
  selector: 'app-contact',
  imports: [NewTabDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
