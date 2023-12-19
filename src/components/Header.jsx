import React from 'react';
import MainButton from "./UI/buttons/MainButton";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <span className="app-name"><a href="/" className="header-btn-link">BlogBridges</a></span>
                <nav className="header-nav">
                    <ul className="header-nav-links">
                        <li><Link to="/posts" className="header-btn-link">Посты</Link></li>
                        <li><Link to="/myposts" className="header-btn-link">Мои посты</Link></li>
                        <li><Link to="/profile" className="header-btn-link">Профиль</Link></li>
                        <li><Link to="/about" className="header-btn-link">О нас</Link></li>
                    </ul>
                </nav>
                <div className="header-buttons">
                    <Link to="/login"><MainButton>Войти</MainButton></Link>
                    <Link to="/registration"><MainButton>Регистрация</MainButton></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;