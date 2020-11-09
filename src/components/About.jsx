import React, { Component } from 'react';
import './style/About.css'

export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="about">
                <div className="test">
                    <div className="test2">
                        <div className="about-title">О Нас</div>
                        <div className="about-description">
                            <div className="about-description__text">Дизайн это не просто работа, а образ жизни, возможность сделать мир чуть интересней, а его обитателей счастливее. Мы постоянно учимся и ищем новое. <br /> <br /> Следим за трендами в дизайне и строительной отрасли, для того чтобы предлагать вам все только самое лучшее, быть в тонусе и поддерживать достойный уровень дизайна. Студия дизайна интерьера Пространство основана в 2008 году. За это время мы реализовали более 300 дизайн-проектов интерьера для квартир и коттеджей в Москве и Московской области. <br /> <br /> В нашей студии работают настоящие фанаты и профи своего дела. Профессиональные дизайнеры интерьера с высшим архитектурным образованием и опытом работы от 5 до 15 лет, классные визуализаторы и другие люди, влюбленные в дизайн. <br /><br /> Каждый проект для нас это возможность использовать все свои знания и умения, чтобы сделать ваше пространство красивым, гармоничным и дарющем счастье.</div>
                            <div className="about-description__img"><img className="" src={require('./img/photos.svg')} alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="test3">
                    <div className="about-list">
                        <div className="about-list__description">
                            <img className="about-list__description-figure" src={require('./img/figure13.svg')} alt="" />
                            Осуществляя <br /> ремонт вместе <br /> с нами:
                            <img className="about-list__description-reverceFigure" src={require('./img/figure13.svg')} alt="" />
                        </div>
                        <div className="about-list__items">
                            <ul>
                                <li className="about-list__items-item">Вы получите грамотно спланированное красивое пространство интерьера.</li>
                                <li className="about-list__items-item">Вы снимете с себя множество забот при проведении ремонта, сохраните свое время.</li>
                                <li className="about-list__items-item">До начала строительных работ Вы будете знать полную стоимость своего проекта.</li>
                                <li className="about-list__items-item">Вы будете получать профессиональную поддержку на всех этапах строительства.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="test4">
                    <div className="about-exemplies">
                        <div className="about-exemplies__title">Новые проекты в портфолио</div>
                        <div className="about-exemplies__line1">
                            <div className="about-exemplies__line1-1"><img className="about-list__description-figure" src={require('./img/project1.svg')} alt="" /></div>
                            <div className="about-exemplies__line1-2"><img className="about-list__description-figure" src={require('./img/project2.svg')} alt="" /></div>
                            <div className="about-exemplies__line1-3"><img className="about-list__description-figure" src={require('./img/project3.svg')} alt="" /></div>
                            <div className="about-exemplies__line1-4"><img className="about-list__description-figure" src={require('./img/project4.svg')} alt="" /></div>
                        </div>
                        <div className="about-exemplies__line2">
                            <div className="about-exemplies__line2-1"><img className="about-list__description-figure" src={require('./img/project5.svg')} alt="" /></div>
                            <div className="about-exemplies__line2-2"><img className="about-list__description-figure" src={require('./img/project6.svg')} alt="" /></div>
                            <div className="about-exemplies__line2-3"><img className="about-list__description-figure" src={require('./img/project7.svg')} alt="" /></div>
                            <div className="about-exemplies__line2-link"><div>Перейти в <br/> портфолио</div><img className="about-list__description-figure" src={require('./img/arrow.svg')} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}