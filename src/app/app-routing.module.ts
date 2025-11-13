import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } // Wildcard route for GitHub Pages compatibility
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    useHash: false, // For GitHub Pages, we'll handle this with base href
    enableTracing: false 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }