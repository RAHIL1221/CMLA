import { Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { ListAnnouncementsComponent } from './component/announcements/list-announcement/list-announcements.component';
import { AddAnnouncementComponent } from './component/announcements/add-announcement/add-announcement.component';
import { UpdateAnnouncementComponent } from './component/announcements/update-announcement/update-announcement.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: HeaderComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'user-profile',
                component: UserProfileComponent
            },
            {
                path: 'list-annoucements',
                component: ListAnnouncementsComponent
            },
            {
                path: 'add-annoucements',
                component: AddAnnouncementComponent
            },
            {
                path: 'update-announcement/:id', // New route for the update announcement
                component: UpdateAnnouncementComponent
            }
        ]
    }
];
