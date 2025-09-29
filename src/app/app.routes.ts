import { Routes } from '@angular/router';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { ReposComponent } from './pages/repos/repos.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: AboutmeComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'repos', component: ReposComponent},
  { path: '**', redirectTo: '' }
];