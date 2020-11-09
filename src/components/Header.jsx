import React, { Component } from 'react';
import './style/Header.css'

import {
    Link,
} from "react-router-dom";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="header">
                <img className="header-phone" src={require('./img/header.svg')} alt="" />
                <div className="header-logo">
                    <div className="header-logo__top">
                        <div className="header-logo__top-designStudio">Студия дизайна</div>
                        <div className="header-logo__top-img"><img src={require('./img/logo.png')} alt="" /></div>
                    </div>
                    <div className="header-logo__bottom">Пространство</div>
                </div>
                <div className="header-menu">
                    <div className="header-menu__about"><Link to="/">О Нас</Link></div>
                    <div className="header-menu__portfolio"><Link to="/portfolio">Портфолио</Link></div>
                    <div className="header-menu__price"><Link to="price">Услуги и цены</Link></div>
                    <div className="header-menu__contacts"><Link to="/contacts">Контакты</Link></div>
                </div>
                <div className="header-feedback">
                    <div className="header-feedback__top">
                        <img src={require('./img/telephone.png')} alt="" />
                        <div className="header-feedback__top-callback">
                            <div className="header-feedback__top-callback-container">
                                <a href=""><div className="">Обратный</div>
                                    <div className="">звонок</div></a>
                            </div>
                        </div>
                        <img src={require('./img/mail.png')} alt="" />
                        <div className="header-feedback__top-sendMail">
                            <div className="header-feedback__top-sendMail-container">
                                <a href=""><div className="">Написать</div>
                                    <div className="">Письмо</div></a>
                            </div>
                        </div>
                    </div>
                    <div className="header-feedback__bottom">+7<span> (977) </span>933 12 57</div>
                </div>
            </div>
        )
    }
}