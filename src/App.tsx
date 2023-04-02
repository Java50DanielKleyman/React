import React, { ReactNode, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Bread } from './components/pages/Bread';
import { Customers } from './components/pages/Customers';
import { Dairy } from './components/pages/Dairy';
import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound';
import { Orders } from './components/pages/Orders';
import { Products } from './components/navigators/Products';
import { ShoppingCart } from './components/pages/ShoppingCart';
import { routes } from './config/layout-config'
import { Navigator } from './components/navigators/Navigator';
import { routesProduct } from './config/products-config';
import { NavigatorDesktop } from './components/navigators/NavigatorDesktop';
import { useSelector } from 'react-redux';
import { Login } from './components/pages/Login';
import { Logout } from './components/pages/Logout';
import { Type } from 'typescript';
import { RouteType } from './model/RouteType';

function App() {
     const authUser = useSelector<any, string>(state => state.auth.authUser)
     // const newRoutes: RouteType[] = [];
     const [newRoutes, getNewRoutes] = useState(routes);
     useEffect(() => {
          getNewRoutes(getRoutes)
     }, [authUser]);
     function getRoutes(): RouteType[] {
          let updatedRoutes: RouteType[] = [];
          if (!authUser) {
               updatedRoutes = routes.filter(route => route.no_authenticated || route.always)
          } else if (authUser.includes('admin')) {
               updatedRoutes = routes.filter(route => route.always || route.authenticated && route.admin)
          } else {
               updatedRoutes = routes.filter(route =>  route.always || route.authenticated && !route.admin)
          }
          return updatedRoutes;
     }
     return <BrowserRouter>
          <Routes>
               <Route path='/' element={<NavigatorDesktop routes={newRoutes} />}>
                    <Route index element={<Home />} />
                    <Route path='customers' element={<Customers />} />
                    <Route path='orders' element={<Orders />} />
                    <Route path='shoppingcart' element={<ShoppingCart />} />
                    <Route path='login' element={<Login />} />
                    <Route path='logout' element={<Logout />} />
                    <Route path='products' element={<Navigator subnav routes={routesProduct} />}>
                         <Route path='dairy' element={<Dairy />} />
                         <Route path='bread' element={<Bread />} />

                    </Route>
               </Route>





               <Route path='/*' element={<NotFound />} />

          </Routes>
     </BrowserRouter>
}

export default App;