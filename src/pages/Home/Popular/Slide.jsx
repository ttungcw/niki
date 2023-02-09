import React from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import styles from './Slide.module.scss';
const cx = classNames.bind(styles);

function Slide({ product }) {
    const navigate = useNavigate();
    const navigateToDetail = () => {
        navigate(`/shop/${product.id}`);
    };
    return (
        <div className={cx('slide')}>
            <img src={product.imgUrl} alt="" onClick={navigateToDetail} />
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

export default Slide;
