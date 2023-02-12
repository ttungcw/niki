import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import ListItem from '../../components/UI/ListItem/ListItem';
import {
    brandFilter,
    genderFilter,
    heightFilter,
    listSelector,
    priceFilter,
} from '../../redux/selectors';
import { shopActions } from '../../redux/slices/shopSlices';
import styles from './Shop.module.scss';
import Helmet from '../../components/Helmet/Helmet';
const cx = classNames.bind(styles);

function Shop() {
    //
    const gender = useSelector(genderFilter);
    const selectorList = useSelector(listSelector);
    const brand = useSelector(brandFilter);
    const height = useSelector(heightFilter);
    const price = useSelector(priceFilter);
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    console.log(gender);
    console.log(brand);
    console.log(height);
    console.log(price);
    console.log(typeof Number(price[0]));

    console.log(selectorList);
    const dispatch = useDispatch();
    const handleGender = (e) => {
        dispatch(shopActions.filterGender(e.target.value));
    };
    const handleBrand = (e) => {
        dispatch(shopActions.filterBrand(e.target.value));
    };
    const handleHeight = (e) => {
        dispatch(shopActions.filterHeight(e.target.value));
    };
    const handlePrice = (e) => {
        dispatch(shopActions.filterPrice(e.target.value));
    };

    //
    const [selection, setSelection] = useState('');
    const [showFilter, setShowFilter] = useState(true);
    let showSidebar = 'block';
    let filterText = 'Hide Filter';
    let marginContainer = '0px';
    if (showFilter) {
        filterText = 'Hide Filter';
        showSidebar = 'block';
        marginContainer = '350px';
    } else {
        filterText = 'Show Filter';
        marginContainer = '50px';
        showSidebar = 'none';
    }
    return (
        <Helmet title="Niki - Shop">
            <div className={cx('wrapper')}>
                <section
                    className={cx('sidebar')}
                    style={{ display: showSidebar }}
                >
                    <form className={cx('gender')}>
                        <h4>Gender</h4>
                        <div
                            className={cx('sidebar__item')}
                            onChange={handleGender}
                        >
                            <input
                                type="checkbox"
                                id="men"
                                name="men"
                                value="men"
                            />
                            <label htmlFor="men">Men</label>
                        </div>
                        <div
                            className={cx('sidebar__item')}
                            onChange={handleGender}
                        >
                            <input
                                type="checkbox"
                                id="women"
                                name="women"
                                value="women"
                            />
                            <label htmlFor="women">Women</label>
                        </div>
                        <div
                            className={cx('sidebar__item')}
                            onChange={handleGender}
                        >
                            <input
                                type="checkbox"
                                id="unisex"
                                name="unisex"
                                value="unisex"
                            />
                            <label htmlFor="unisex">Unisex</label>
                        </div>
                    </form>
                    <form className={cx('brand')}>
                        <h4>Brand</h4>
                        <div
                            className={cx('sidebar__item')}
                            onChange={handleBrand}
                        >
                            <input
                                type="checkbox"
                                id="nikesport"
                                name="nikesport"
                                value="nikesport"
                            />
                            <label htmlFor="nikesport">Nike SportSwear</label>
                        </div>
                        <div
                            className={cx('sidebar__item')}
                            onChange={handleBrand}
                        >
                            <input
                                type="checkbox"
                                id="jordan"
                                name="jordan"
                                value="jordan"
                            />
                            <label htmlFor="jordan">Jordan</label>
                        </div>
                        <div
                            className={cx('sidebar__item')}
                            onChange={handleBrand}
                        >
                            <input
                                type="checkbox"
                                id="converse"
                                name="converse"
                                value="converse"
                            />
                            <label htmlFor="converse">Converse</label>
                        </div>
                    </form>
                    <form className={cx('shoeheight')}>
                        <h4>Shoe Hight</h4>
                        <div
                            className={cx('sidebar__item')}
                            onChange={handleHeight}
                        >
                            <input
                                type="checkbox"
                                id="low"
                                name="low"
                                value="low"
                            />
                            <label htmlFor="low">Low Top</label>
                        </div>
                        <div
                            className={cx('sidebar__item')}
                            onChange={handleHeight}
                        >
                            <input
                                type="checkbox"
                                id="mid"
                                name="mid"
                                value="mid"
                            />
                            <label htmlFor="mid">Mid Top</label>
                        </div>
                        <div
                            className={cx('sidebar__item')}
                            onChange={handleHeight}
                        >
                            <input
                                type="checkbox"
                                id="hight"
                                name="hight"
                                value="hight"
                            />
                            <label htmlFor="hight">Hight Top</label>
                        </div>
                    </form>
                    <form className={cx('price')}>
                        <h4>Shop by Price</h4>
                        <div
                            className={cx('sidebar__item')}
                            onChange={handlePrice}
                        >
                            <input
                                type="checkbox"
                                id="price2"
                                name="price2"
                                value="25"
                            />
                            <label htmlFor="price2">25$-50$</label>
                        </div>
                        <div
                            className={cx('sidebar__item')}
                            onChange={handlePrice}
                        >
                            <input
                                type="checkbox"
                                id="price3"
                                name="price3"
                                value="50"
                            />
                            <label htmlFor="price3">50$-100$</label>
                        </div>
                        <div
                            className={cx('sidebar__item')}
                            onChange={handlePrice}
                        >
                            <input
                                type="checkbox"
                                id="price4"
                                name="price4"
                                value="100"
                            />
                            <label htmlFor="price4">100$-200$</label>
                        </div>
                        <div
                            className={cx('sidebar__item')}
                            onChange={handlePrice}
                        >
                            <input
                                type="checkbox"
                                id="price4"
                                name="price4"
                                value="200"
                            />
                            <label htmlFor="price4">200$ </label>
                        </div>
                    </form>
                </section>
                <section
                    className={cx('container')}
                    style={{ marginLeft: marginContainer }}
                >
                    <div className={cx('title')}>
                        <h3>Shoes & Sneakers ({selectorList.length})</h3>
                        <div className={cx('tools')}>
                            <div
                                className={cx('filter')}
                                onClick={() => setShowFilter((pre) => !pre)}
                            >
                                <p>{filterText}</p>
                                <i className="ri-equalizer-line"></i>
                            </div>
                            <div className={cx('sort')}>
                                <label htmlFor="sort">
                                    Sort By {selection}
                                </label>
                                <select
                                    name="sort"
                                    id="sort"
                                    onChange={(e) =>
                                        setSelection(e.target.value)
                                    }
                                >
                                    <option value=""></option>
                                    <option value="Featured">Featured</option>
                                    <option value="Newest">Newest</option>
                                    <option value="Price: Hight-Low">
                                        Price: Hight-Low
                                    </option>
                                    <option value="Price: Low-Hight">
                                        Price: Low-Hight
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        {selectorList.length ? (
                            <ListItem data={selectorList} />
                        ) : (
                            <p>There are not items</p>
                        )}
                    </div>
                </section>
            </div>
        </Helmet>
    );
}

export default Shop;
