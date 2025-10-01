
import { Directive, HostBinding } from '@angular/core';

@Directive({

  selector: 'a[targetNewTab]' 
})
export class NewTabDirective {
  @HostBinding('attr.target') target = '_blank';
  
  @HostBinding('attr.rel') rel = 'noopener noreferrer';
}