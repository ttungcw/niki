import React from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import banner from '../../assets/images/banner.jpg';
import happening from '../../assets/images/happening.jpg';
import ProductList from '../../components/UI/ProductList/ProductList';
import products from '../../assets/data/productsData';
import Popular from './Popular/Popular';
import list from '../../assets/data/shopData';
const cx = classNames.bind(styles);

function Home() {
    const collectionData = products.filter(
        (product) => product.type === 'collection',
    );
    const customData = products.filter((product) => product.type === 'custom');
    const iconicData = products.filter((product) => product.type === 'iconic');
    const featuredData = products.filter(
        (product) => product.type === 'featured',
    );
    const setData = products.filter((product) => product.type === 'set');
    const memberbannerData = products.filter(
        (product) => product.type === 'member-banner',
    );
    const memberData = products.filter((product) => product.type === 'member');
    const popularData = list.filter((product) => product.color.length > 3);
    return (
        <div className={cx('wrapper')}>
            <section className={cx('banner')}>
                <img src={banner} alt="" />
            </section>

            <section className={cx('collections')}>
                <h3>Fits to Move Into '23</h3>
                <ProductList data={collectionData} />
            </section>

            <section className={cx('custom')}>
                <h3>Nike By You</h3>
                <ProductList data={customData} />
            </section>

            <section className={cx('happening')}>
                <h3>Happening Now</h3>
                <div className={cx('happening__img')}>
                    <img src={happening} alt="" />
                    <div className={cx('happening__content')}>
                        <p className={cx('happening__time')}>
                            Start Strong Sale | Ends 1.12
                        </p>
                        <h4 className={cx('happening__count')}>
                            50% OFF
                            <br /> SELECT BRAS AND SHORTS
                        </h4>
                        <p className={cx('happening__des')}>
                            Log in and use code MOVE50 at checkout for 50% off
                            select women's bras and shorts. Exclusions apply.
                        </p>
                        <button className={cx('btn-dark')}>Shop</button>
                    </div>
                </div>
            </section>

            <section className={cx('iconic')}>
                <h3>Always Iconic</h3>
                <ProductList data={iconicData} />
            </section>

            <section className={cx('featured')}>
                <h3>Move Into 2023</h3>
                <ProductList data={featuredData} />
            </section>

            <section className={cx('set')}>
                <h3>Must-Have Matching Sets</h3>
                <ProductList data={setData} />
            </section>

            <section className={cx('popular')}>
                <h3>Popular Right Now</h3>
                <Popular data={popularData} />
            </section>

            <section className={cx('member')}>
                <h3>Nike Membership</h3>
                <ProductList data={memberbannerData} />
                <div className={cx('member__list')}>
                    <ProductList data={memberData} />
                </div>
            </section>
        </div>
    );
}

export default Home;
