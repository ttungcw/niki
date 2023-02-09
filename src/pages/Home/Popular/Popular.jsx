import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Popular.module.scss';
import Slide from './Slide';
const cx = classNames.bind(styles);

function Popular({ data }) {
    const [count, setCount] = useState(0);
    const [showPrev, setShowPrev] = useState('none');
    const [showNext, setShowNext] = useState('block');
    const width = `${data.length * 25}%`;

    useEffect(() => {
        if (count === 0) {
            setShowPrev('none');
        } else {
            setShowPrev('flex');
        }
        if (count === data.length - 4) {
            setShowNext('none');
        } else {
            setShowNext('flex');
        }
    }, [count, data.length]);

    const styleSlides = {
        marginLeft: `${count * -25}%`,
        width: width,
    };

    const styleShowPrev = {
        display: showPrev,
    };
    const styleShowNext = {
        display: showNext,
    };

    const nextProduct = () => {
        setCount((prev) => prev + 1);
    };

    const prevProduct = () => {
        setCount((prev) => prev - 1);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('display')}>
                <div className={cx('list')} style={styleSlides}>
                    <ul>
                        {data.map((product) => (
                            <li key={product.id}>
                                <Slide product={product} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={cx('btn')}>
                <button
                    className={cx('prev')}
                    onClick={prevProduct}
                    style={styleShowPrev}
                >
                    <i className="ri-arrow-left-s-line"></i>
                </button>
                <button
                    className={cx('next')}
                    onClick={nextProduct}
                    style={styleShowNext}
                >
                    <i className="ri-arrow-right-s-line"></i>
                </button>
            </div>
        </div>
    );
}

export default Popular;
