import React from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

import styles from './cartItem.module.scss';
import { cartActions } from '../../redux/slices/cartSlices';

const cx = classNames.bind(styles);

function CartItem({ item }) {
    const dispatch = useDispatch();
    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product')}>
                <div className={cx('img')}>
                    <img src={item.imgUrl} alt="" />
                </div>
                <div className={cx('des')}>
                    <p className={cx('name')}>{item.productName}</p>
                    <p className={cx('type')}>{item.productType}</p>
                    <p className={cx('quantity')}>Quantity: {item.quantity}</p>
                    <div className={cx('icons')}>
                        <div className={cx('icon')}>
                            <i className="ri-heart-line"></i>
                        </div>
                        <div className={cx('icon')} onClick={deleteProduct}>
                            <i className="ri-delete-bin-line"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('price')}>${item.totalPrice}</div>
        </div>
    );
}

export default CartItem;
