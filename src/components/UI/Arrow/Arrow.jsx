import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Arrow.module.scss';
const cx = classNames.bind(styles);

function Arrow() {
    const [showDown, setShowDown] = useState('block');
    const [showUp, setShowUp] = useState('none');
    let styleDown = {
        display: showDown,
    };
    let styleUp = {
        display: showUp,
    };
    const handleDown = () => {
        setShowDown('none');
        setShowUp('block');
    };
    const handleUp = () => {
        setShowUp('none');
        setShowDown('block');
    };
    return (
        <div className={cx('container')}>
            <span className={cx('down')} style={styleDown} onClick={handleDown}>
                <i className="ri-arrow-down-s-line"></i>
            </span>
            <span className={cx('up')} style={styleUp} onClick={handleUp}>
                <i className="ri-arrow-up-s-line"></i>
            </span>
        </div>
    );
}

export default Arrow;
