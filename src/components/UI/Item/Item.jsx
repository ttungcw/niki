import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Item.module.scss';
const cx = classNames.bind(styles);

function Item({ item }) {
    const [img, setImg] = useState(item.imgUrl);
    const navigate = useNavigate();
    const navigateToDetail = () => {
        navigate(`/shop/${item.id}`);
    };
    return (
        <div className={cx('item')}>
            <div className={cx('img')} onClick={navigateToDetail}>
                <img src={img} alt="" />
            </div>
            <article className={cx('colors')}>
                {item.color.map((image, id) => (
                    <img
                        src={image}
                        key={id}
                        alt=""
                        onClick={() => setImg(image)}
                    />
                ))}
            </article>
            <article className={cx('content')}>
                {item.status && <h3 className={cx('status')}>{item.status}</h3>}
                <div className={cx('info')}>
                    <h4 className={cx('name')}>{item.productName}</h4>
                    <h5 className={cx('type')}>{item.productType}</h5>
                    {item.color.length > 0 && (
                        <h6 className={cx('count')}>
                            {item.color.length} Colors
                        </h6>
                    )}
                </div>
                <p className={cx('price')}>${item.price}</p>
            </article>
        </div>
    );
}

export default Item;
