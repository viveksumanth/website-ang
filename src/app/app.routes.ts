import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { Project1Component } from './projects/project1/project1.component';

export const routes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'project1', component:Project1Component}
];
