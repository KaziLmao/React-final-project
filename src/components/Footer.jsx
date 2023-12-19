import React from 'react';
import MainButton from "./UI/buttons/MainButton";
import {Link} from "react-router-dom";
import { Instagram } from 'lucide-react';
import { Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-col">
                    <div className="footer-nav">
                        <ul className="footer-nav-links">
                            <li className="footer-links-list"><Link to="/">Поддержка</Link></li>
                            <li className="footer-links-list"><Link to="/">Контакты</Link></li>
                            <li className="footer-links-list"><Link to="#"><Instagram/></Link></li>
                            <li className="footer-links-list"><Link to="#"><Send/></Link></li>
                        </ul>
                    </div>
                    <div className="footer-nav">
                        <div className="footer-nav-text">
                            <h4 className="footer-title">Новости</h4>
                            <p className="footer-text">Подписывайся и первым узнавай о новых постах</p>
                            <MainButton>Подписаться на рассылку</MainButton>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;