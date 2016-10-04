import { RouterConfig, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './login/home.component';

import { AuthComponent } from './auth/auth.component';
import { ADMIN_ROUTES } from './auth/admin.routes';


const routes: RouterConfig = ([
    { path: '', component: HomeComponent},
    { path: 'auth', component: AuthComponent, children: ADMIN_ROUTES }
]);

export const routing = RouterModule.forRoot(routes);