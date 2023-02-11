import React from 'react';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import Helmet from '../../components/Helmet/Helmet';

import styles from './Login.module.scss';
const cx = classNames.bind(styles);
function Login() {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    };
    return (
        <div className={cx('wrapper')}>
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
            <h4>Enter your email address to join or log in.</h4>
            <div className={cx('form')}>
                <input type="email" placeholder="E-mail"></input>
            </div>
            <p className={cx('request')}>
                By continuing, I agree to Nike 's <Link>Privacy Policy </Link>
                and
                <Link> Terms of Service</Link> .
            </p>

            <button type="submit">Continue</button>
        </div>
    );
}

export default Login;
