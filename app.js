import navbarComponent from './components/navbar/navbar.component.js';
import homeComponent from './components/home/home.component.js';
import loginComponent from './components/login/login.component.js';
import catalogComponent from './components/catalog/catalog.component.js';
import dashboardComponent from './components/dashboard/dashboard.component.js';

import { Router } from "./util/router.js";

let routes = [

    {
        path: '/login',
        compponenet: loginComponent
    },
    {
        path: '/home',
        compponenet: homeComponent
    },
    {
        path: '/dashboard',
        compponenet: dashboardComponent
    },
    {
        path: '/catalog',
        compponenet: catalogComponent
    }
]

window.onload = () => {
    console.log('Loaded correctly');
    navbarComponent.render();
}