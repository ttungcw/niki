import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('link')}>
                <div className={cx('main')}>
                    <Link>GIFT CARDS</Link>
                    <Link>PROMOTIONS</Link>
                    <Link>FIND A STORE</Link>
                    <Link>SIGN UP FOR EMAIL</Link>
                    <Link>BECOME A MEMBER</Link>
                    <Link>NIKE JOURNAL</Link>
                    <Link>SEND US FEEDBACK</Link>
                </div>
                <div className={cx('get')}>
                    <Link>
                        <h4>GET HELP</h4>
                    </Link>
                    <Link>Order Status</Link>
                    <Link>Shipping and Delivery</Link>
                    <Link>Returns</Link>
                    <Link>Payment Options</Link>
                    <Link>Gift Card Balance</Link>
                    <Link>Contact Us</Link>
                </div>
                <div className={cx('about')}>
                    <Link>
                        <h4>ABOUT NIKE</h4>
                    </Link>
                    <Link>News</Link>
                    <Link>Careers</Link>
                    <Link>Inventors</Link>
                    <Link>Purpose</Link>
                    <Link>Sustainability</Link>
                </div>
                <div className={cx('socials')}>
                    <a href="">
                        <i className="ri-twitter-fill"></i>
                    </a>
                    <a href="">
                        <i className="ri-facebook-fill"></i>
                    </a>
                    <a href="">
                        <i className="ri-youtube-fill"></i>
                    </a>
                    <a href="">
                        <i className="ri-instagram-fill"></i>
                    </a>
                </div>
            </div>
            <div className={cx('info')}>
                <div className={cx('address')}>
                    <i className="ri-map-pin-fill"></i>
                    <p>United States</p>
                    <div className={cx('copy')}>
                        © 2023 Nike, Inc. All Rights Reserved
                    </div>
                </div>
                <div className={cx('nav')}>
                    <Link>Guides</Link>
                    <Link>Terms of Sale</Link>
                    <Link>Terms of Use</Link>
                    <Link>Nike Privacy Policy</Link>
                    <Link>CA Supply Chains Act</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
