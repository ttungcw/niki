import { configureStore } from '@reduxjs/toolkit';
import cartSlices from './slices/cartSlices';
import shopSlices from './slices/shopSlices';

const store = configureStore({
    reducer: {
        shop: shopSlices,
        cart: cartSlices,
    },
});
export default store;
