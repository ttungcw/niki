import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import styles from './ProductCard.module.scss';
const cx = classNames.bind(styles);

function ProductCart({ product }) {
    const navigate = useNavigate();
    const navigateToShop = () => {
        navigate('/shop');
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={cx('product')}>
            <div className={cx('img')}>
                <img src={product.imgUrl} alt="" />
            </div>
            <div className={cx('content')}>
                <h4 className={cx('title')}>{product.title}</h4>
                <p className={cx('des')}>{product.des}</p>
                <div className={cx('btn')}>
                    {product.btn1 && (
                        <button
                            className={cx(`btn-${product.typeBtn}`)}
                            onClick={navigateToShop}
                        >
                            {product.viewIcon && (
                                <i className="ri-eye-line"></i>
                            )}
                            {product.btn1}
                        </button>
                    )}

                    {product.btn2 && (
                        <button
                            className={cx(`btn-${product.typeBtn}`)}
                            onClick={navigateToShop}
                        >
                            {product.btn2}
                        </button>
                    )}
                </div>
            </div>
            <article className={cx('info')}>
                <div className={cx('detail')}>
                    <h5 className={cx('name')}>{product.productName}</h5>
                    <h6 className={cx('type')}>{product.productType}</h6>
                </div>
                {product.price && (
                    <div className={cx('price')}>${product.price}</div>
                )}
            </article>
        </div>
    );
}

export default ProductCart;
