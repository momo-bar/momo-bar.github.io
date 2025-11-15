import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  // French routes (default - no prefix)
  { path: '', component: HomeComponent },
  { path: 'a-propos', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  
  // English routes (with /en prefix)
  { path: 'en', component: HomeComponent },
  { path: 'en/about', component: AboutComponent },
  { path: 'en/services', component: ServicesComponent },
  { path: 'en/contact', component: ContactComponent },
  
  // Legacy redirects for backward compatibility
  { path: 'about', redirectTo: 'a-propos' },
  
  { path: '**', redirectTo: '' } // Wildcard route for GitHub Pages compatibility
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    useHash: false, // For GitHub Pages, we'll handle this with base href
    enableTracing: false,
    scrollPositionRestoration: 'enabled', // Restores scroll position on back/forward, scrolls to top on new navigation
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }