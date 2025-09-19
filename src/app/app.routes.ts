import { Routes } from '@angular/router';
import { Pagenotfound } from './pages/pagenotfound/pagenotfound';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: '**', component: Pagenotfound }
];
