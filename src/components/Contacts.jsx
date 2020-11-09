import React, { Component } from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";

import './style/Contacts.css'

export default class Contacts extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        const mapData = {
            center: [55.751574, 37.573856],
            zoom: 13,
        };

        const coordinates = [
            [55.751574, 37.573856]
        ];

        return (
            <div className="contacts">
                <div className="test">
                    <div className="test2">
                        <div className="contacts-content">
                            <div className="contacts-content__title">Контакты</div>
                            <div className="contacts-content__img">
                                <div className="contacts-content__img-photo"><img src={require('./img/photobuild.svg')} alt="" /></div>
                                <div className="contacts-content__img-map">
                                    {/* <img src={require('./img/map.svg')} alt="" /> */}
                                    <YMaps >
                                        <Map defaultState={mapData} width="360px" height="263px">
                                            {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                                        </Map>
                                    </YMaps>
                                </div>
                            </div>
                            <div className="contacts-content__description">
                                <div className="contacts-content__description-email"><img src={require('./img/mailicon.svg')} alt="" /> Имейл<span>prostranstvo@mail.ru</span></div>
                                <div className="contacts-content__description-adress"><img src={require('./img/markicon.svg')} alt="" /> Адрес<span>Москва, ул. Симоновский Вал, 9</span></div>
                                <div className="contacts-content__description-callnumber"><img src={require('./img/telephoneicon.svg')} alt="" /> Телефон<span>+7 (977) 933 12 57</span></div>
                            </div>
                            <div className="contacts-content__worktime">
                                Режим работы <span>Пн-Пт с 9:00 до 18:00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}