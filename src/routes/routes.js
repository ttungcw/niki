// page
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import Cart from '../pages/Cart/Cart';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';

// Layouts
import DefaultLayout from '../components/Layouts/DefaultLayout/DefaultLayout';
import Normal from '../components/Layouts/Normal/Normal';

const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    {
        path: '/shop',
        component: Shop,
        layout: DefaultLayout,
    },
    {
        path: '/cart',
        component: Cart,
        layout: DefaultLayout,
    },
    {
        path: '/shop/:id',
        component: ProductDetail,
        layout: DefaultLayout,
    },
    {
        path: '/login',
        component: Login,
        layout: Normal,
    },
    {
        path: '/signup',
        component: Signup,
        layout: Normal,
    },
];

export { publicRoutes };
