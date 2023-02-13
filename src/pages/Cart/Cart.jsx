import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Cart.module.scss';
import { cart, totalAmount } from '../../redux/selectors';
import CartItem from './CartItem';
import list from '../../assets/data/shopData';
import Popular from '../Home/Popular/Popular';
import Helmet from '../../components/Helmet/Helmet';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function Cart() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const cartItems = useSelector(cart);
    const totalPrice = useSelector(totalAmount);
    const relatedData = list.filter(
        (item) => item.price < 200 && item.price > 100,
    );
    const navigate = useNavigate();
    const navigateToSignup = () => {
        navigate('/login');
    };
    return (
        <Helmet title="Niki - Cart">
            <section>
                <div className={cx('container')}>
                    <div className={cx('info')}>
                        <div className={cx('title')}>
                            <h4>Free Shipping for Members</h4>
                            <p>
                                Become a Nike Member for fast and free shipping.{' '}
                                <Link>Join us</Link> or{' '}
                                <Link to="/login">Sign-in</Link>
                            </p>
                        </div>
                        <h3>Bag</h3>
                        {cartItems.length ? (
                            <ul>
                                {cartItems.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <CartItem item={item} />
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : (
                            <p>There are no items in your bag.</p>
                        )}
                    </div>
                    <div className={cx('summary')}>
                        <h4>Summary</h4>
                        <div className={cx('subtotal')}>
                            <p>Subtotal</p>
                            <p>${totalPrice}</p>
                        </div>
                        <div className={cx('shipping')}>
                            <p>Estimated Shipping & Handling:</p>
                            <p>$0</p>
                        </div>
                        <div className={cx('total')}>
                            <p>Total:</p>
                            <p>${totalPrice}</p>
                        </div>
                        <button
                            className={cx('btn-checkout')}
                            onClick={navigateToSignup}
                        >
                            Checkout
                        </button>
                        <button className={cx('btn-paypal')}>PayPal</button>
                    </div>
                </div>
                <div>
                    <h5 className={cx('related')}>You Might Also Like</h5>
                    <Popular data={relatedData} />
                </div>
            </section>
        </Helmet>
    );
}

export default Cart;
