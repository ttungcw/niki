import React, { useEffect, useState } from 'react';

import { Link, NavLink, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import popularSearch from '../../assets/data/popularSearch';
import { cart } from '../../redux/selectors';
import Popular from '../../pages/Home/Popular/Popular';
import list from '../../assets/data/shopData';

const cx = classNames.bind(styles);

function Header() {
    const cartItems = useSelector(cart);
    const [sticky, setSticky] = useState('flex');
    const [y, setY] = useState(0);
    const [prevY, setPrevY] = useState(0);
    const [modal, setModal] = useState('none');
    const [widthSearch, setWidthSearch] = useState('18%');
    const [pdSearch, setPdSearch] = useState('200px');
    const [btn, setBtn] = useState('none');
    const [icons, setIcons] = useState('block');
    const [nav, setNav] = useState('flex');
    const [searchValue, setSearchValue] = useState('');

    const searchList = list.filter((item) =>
        item.productName.includes(searchValue),
    );

    let style = {
        display: sticky,
    };
    let styleModal = {
        display: modal,
    };
    let styleSearch = {
        width: widthSearch,
        right: pdSearch,
    };

    let styleBtn = {
        display: btn,
    };

    let styleIcons = {
        display: icons,
    };
    let styleNav = {
        display: nav,
    };

    const handleSearch = () => {
        setModal('block');
        setWidthSearch('55%');
        setPdSearch('300px');
        setBtn('block');
        setIcons('none');
        setNav('none');
    };

    const handleModal = () => {
        setModal('none');
        setWidthSearch('17%');
        setPdSearch('200px');
        setBtn('none');
        setIcons('block');
        setNav('flex');
    };

    const scroll = () => {
        window.addEventListener('scroll', () => {
            setPrevY(y);
            setY(window.scrollY);
        });
    };
    scroll();
    useEffect(() => {
        if (y - prevY > 0 && y >= 70) {
            setSticky('none');
        } else {
            setSticky('flex');
        }
    }, [y, prevY]);

    // navigate
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    };
    const navigateToCart = () => {
        navigate('/cart');
    };

    return (
        <header className={cx('header')} style={style}>
            <div className={cx('logo')} onClick={navigateToHome}>
                <svg
                    aria-hidden="true"
                    className="pre-logo-svg"
                    focusable="false"
                    viewBox="0 0 24 24"
                    role="img"
                    width="70px"
                    height="70px"
                    fill="none"
                >
                    <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </div>
            <div className={cx('navigation')} style={styleNav}>
                <NavLink to="/shop">New & Featured</NavLink>
                <NavLink to="/shop">Men</NavLink>
                <NavLink to="/shop">Women</NavLink>
                <NavLink to="/shop">Kids</NavLink>
                <NavLink to="/shop">Sale</NavLink>
            </div>
            <div className={cx('icons')}>
                <div
                    className={cx('search')}
                    onClick={handleSearch}
                    style={styleSearch}
                >
                    <div className={cx('icon')}>
                        <i className="ri-search-line"></i>
                    </div>
                    <input
                        className={cx('abc')}
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
                <div className={cx('wishlist')} style={styleIcons}>
                    <div className={cx('icon')}>
                        <i className="ri-heart-line"></i>
                    </div>
                </div>
                <div
                    className={cx('cart')}
                    onClick={navigateToCart}
                    style={styleIcons}
                >
                    <div className={cx('icon')}>
                        <i className="ri-shopping-cart-line"></i>
                    </div>
                    <p>{cartItems.length}</p>
                </div>
            </div>
            <div
                className={cx('wrapper')}
                style={styleModal}
                onClick={handleModal}
            >
                <div
                    className={cx('modal')}
                    onClick={(e) => e.stopPropagation()}
                >
                    {searchValue.length === 0 ? (
                        <div className={cx('content')}>
                            <h3>Popular Search Terms</h3>
                            {popularSearch.map((item, index) => (
                                <Link key={index} to="/shop">
                                    {item}
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className={cx('products')}>
                            {searchList.length ? (
                                <Popular data={searchList} />
                            ) : (
                                <p>ko co san pham</p>
                            )}
                        </div>
                    )}
                </div>
                <button className={cx('close__btn')} style={styleBtn}>
                    Cancel
                </button>
            </div>
        </header>
    );
}

export default Header;
