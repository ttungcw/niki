import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '../../redux/slices/cartSlices';
import sizes from '../../assets/data/sizes';
import Popular from '../Home/Popular/Popular';
import list from '../../assets/data/shopData';
import { cart } from '../../redux/selectors';
import Arrow from '../../components/UI/Arrow/Arrow';
import styles from './ProductDetail.module.scss';
const cx = classNames.bind(styles);

function ProductDetail() {
    const { id } = useParams();
    const product = list.find((item) => item.id === Number(id));
    const [showComment, setShowComment] = useState('none');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const navigateToCart = () => {
        navigate('/cart');
    };

    //
    const [showModal, setShowModal] = useState('none');
    let styleModal = {
        display: showModal,
    };
    const handleModal = () => {
        setShowModal('none');
    };
    //
    const cartItems = useSelector(cart);
    console.log(cartItems);
    const relatedProducts = list.filter(
        (item) =>
            item.brand === product.brand && item.gender === product.gender,
    );
    let styleComment = {
        display: showComment,
    };
    const handleComment = () => {
        if (showComment === 'none') {
            setShowComment('block');
        } else {
            setShowComment('none');
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);
    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id: product.id,
                productName: product.productName,
                productType: product.productType,
                price: product.price,
                imgUrl: product.imgUrl,
            }),
        );
        setShowModal('block');
    };
    return (
        <div>
            <section>
                <div className={cx('wrapper')}>
                    <div className={cx('images')}>
                        {product.detailColor.length &&
                            product.detailColor.map((item, index) => {
                                return <img src={item} alt="" key={index} />;
                            })}
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('name')}>{product.productName}</div>
                        <div className={cx('type')}>{product.productType}</div>
                        <div className={cx('price')}>${product.price}</div>
                        <div className={cx('colors')}>
                            {product.color.length > 0 &&
                                product.color.map((item, index) => {
                                    return (
                                        <div
                                            className={cx('color')}
                                            key={index}
                                        >
                                            <img src={item} alt="" />
                                        </div>
                                    );
                                })}
                        </div>
                        <h5>Select Size</h5>
                        <div className={cx('size')}>
                            {sizes.map((size, index) => {
                                return <button key={index}>{size}</button>;
                            })}
                        </div>
                        <button className={cx('btn-add')} onClick={addToCart}>
                            Add to Bag
                        </button>
                        <button className={cx('btn-favorite')}>Favorite</button>
                        <div className={cx('reviews')}>
                            <div className={cx('reviews__title')}>
                                <h6>Reviews ({product.reviews.length})</h6>
                                <div className={cx('stars')}>
                                    <i className="ri-star-s-fill"></i>
                                    <i className="ri-star-s-fill"></i>
                                    <i className="ri-star-s-fill"></i>
                                    <i className="ri-star-s-fill"></i>
                                    <i className="ri-star-s-fill"></i>
                                </div>
                                <div
                                    className={cx('arrow')}
                                    onClick={handleComment}
                                >
                                    <Arrow />
                                </div>
                            </div>
                            <div
                                className={cx('comments')}
                                style={styleComment}
                            >
                                {product.reviews.map((item, index) => {
                                    return (
                                        <div
                                            className={cx('comment')}
                                            key={index}
                                        >
                                            <div
                                                className={cx('comment__title')}
                                            >
                                                {item.title}
                                            </div>
                                            <div
                                                className={cx(
                                                    'comment__rating',
                                                )}
                                            >
                                                <div className={cx('rating')}>
                                                    <i className="ri-star-s-fill"></i>
                                                    <i className="ri-star-s-fill"></i>
                                                    <i className="ri-star-s-fill"></i>
                                                    <i className="ri-star-s-fill"></i>
                                                    <i className="ri-star-s-fill"></i>
                                                </div>
                                                <div className={cx('customer')}>
                                                    {item.customer}
                                                </div>
                                            </div>
                                            <div
                                                className={cx('comment__text')}
                                            >
                                                {item.text}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className={cx('related')}>You Might Also Like</h5>
                    <Popular data={relatedProducts} />
                </div>
            </section>
            <div
                className={cx('modal')}
                style={styleModal}
                onClick={handleModal}
            >
                <div
                    className={cx('container')}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={cx('title')}>
                        <i className="ri-checkbox-circle-fill"></i>
                        <p>Added to Bag</p>
                        <div
                            className={cx('close')}
                            onClick={() => setShowModal('none')}
                        >
                            <i className="ri-close-line"></i>
                        </div>
                    </div>
                    <div className={cx('product')}>
                        <img src={product.imgUrl} alt="" />
                        <div className={cx('product__info')}>
                            <div className={cx('product__name')}>
                                {product.productName}
                            </div>
                            <div className={cx('product__type')}>
                                {product.productType}
                            </div>
                            <div className={cx('product__price')}>
                                ${product.price}
                            </div>
                        </div>
                    </div>
                    <div className={cx('btn')}>
                        <button
                            className={cx('btn-view')}
                            onClick={navigateToCart}
                        >
                            View Bag ({cartItems.length})
                        </button>
                        <button className={cx('btn-check')}>Checkout</button>
                    </div>
                    <h6>
                        Shipping is free as a member + 60 day returns on every
                        order
                    </h6>
                    <h6>Signup for free.</h6>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
