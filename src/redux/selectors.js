import { createSelector } from '@reduxjs/toolkit';
export const listProducts = (state) => state.shop.list;
export const genderFilter = (state) => state.shop.filter.gender;
export const brandFilter = (state) => state.shop.filter.brand;
export const heightFilter = (state) => state.shop.filter.height;
export const priceFilter = (state) => state.shop.filter.price;

export const cart = (state) => state.cart.cartItems;
export const totalQuantity = (state) => state.cart.totalQuantity;
export const totalAmount = (state) => state.cart.totalAmount;

export const listSelector = createSelector(
    listProducts,
    genderFilter,
    brandFilter,
    heightFilter,
    priceFilter,
    (list, gender, brand, height, price, genderList, brandList, heightList) => {
        genderList = list.filter((item) =>
            gender.length ? gender.includes(item.gender) : true,
        );
        brandList = genderList.filter((item) =>
            brand.length ? brand.includes(item.brand) : true,
        );
        heightList = brandList.filter((item) =>
            height.length ? height.includes(item.height) : true,
        );
        if (price.length) {
            let priceList = [];
            let priceItem = [];
            for (let i = 0; i < price.length; i++) {
                priceItem = heightList.filter(
                    (item) =>
                        item.price < Number(price[i]) * 2 &&
                        item.price >= Number(price[i]),
                );
                priceList = priceList.concat(priceItem);
            }
            return priceList;
        }
        return heightList;
    },
);
