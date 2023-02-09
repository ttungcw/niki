import { createSlice } from '@reduxjs/toolkit';
import shopData from '../../assets/data/shopData';
const initialState = {
    filter: {
        gender: [],
        brand: [],
        height: [],
        price: [],
    },
    list: shopData,
};

const Shopslices = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        filterGender: (state, action) => {
            const gender = action.payload;
            if (!state.filter.gender.includes(gender)) {
                state.filter.gender.push(gender);
            } else {
                state.filter.gender.splice(
                    state.filter.gender.indexOf(gender),
                    1,
                );
            }
        },
        filterBrand: (state, action) => {
            const brand = action.payload;
            if (!state.filter.brand.includes(brand)) {
                state.filter.brand.push(brand);
            } else {
                state.filter.brand.splice(state.filter.brand.indexOf(brand), 1);
            }
        },
        filterHeight: (state, action) => {
            const height = action.payload;
            if (!state.filter.height.includes(height)) {
                state.filter.height.push(height);
            } else {
                state.filter.height.splice(
                    state.filter.height.indexOf(height),
                    1,
                );
            }
        },
        filterPrice: (state, action) => {
            const price = action.payload;
            if (!state.filter.price.includes(price)) {
                state.filter.price.push(price);
            } else {
                state.filter.price.splice(state.filter.price.indexOf(price), 1);
            }
        },
    },
});
export const shopActions = Shopslices.actions;
export default Shopslices.reducer;
