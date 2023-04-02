import { RouteType } from "../model/RouteType";

export const routes: RouteType[] = [
    {path: '/', label: 'Home',  authenticated: true, admin: true},
    {path: '/customers', label: 'Customers', admin: true},
    {path: '/shoppingcart', label: 'Shopping Cart', authenticated: true, admin: true},
    {path: '/orders', label: 'Orders', authenticated: true, admin: true},
    {path: '/products', label: 'Products', always: true},
     {path: '/login', label: 'Login', no_authenticated: true},
     {path: '/logout', label: 'Logout', authenticated: true, admin: true}
]