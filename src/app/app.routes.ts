import { Routes } from '@angular/router';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { ReposComponent } from './pages/repos/repos.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'aboutme', pathMatch: 'full' },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'repos', component: ReposComponent},
  { path: '**', redirectTo: '' }
];