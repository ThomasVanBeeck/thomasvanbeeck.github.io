import { Component } from '@angular/core';
import { NewTabDirective } from "../../shared/directives/new-tab.directive";

@Component({
  selector: 'app-repos',
  imports: [NewTabDirective],
  templateUrl: './repos.component.html',
  styleUrl: './repos.component.css'
})
export class ReposComponent {

}
