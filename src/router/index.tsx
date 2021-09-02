import React from 'react';
import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import HomeRoute from './route/home';
import LoginRoute from './route/login';

const Routers: RouteConfig[] = [
  {
    path: '/',
    component: React.lazy(() => import('../layouts/index')),
    name: 'root',
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to={'/home'} />,
      },
      ...HomeRoute,
      ...LoginRoute,
      {
        path: '*',
        component: React.lazy(() => import('./Exceptions/Error404')),
        name: 'err404',
      },
    ],
  },
];

export default Routers;