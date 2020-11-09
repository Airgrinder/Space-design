import React, { Component } from 'react';
import './style/Example.css'

export default class Example extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="example">
                <div className="example-buffer"></div>
                <div className="example-content">
                    <div className="example-content__photo">
                        <div className="example-content__photo-main"><img src={require('./img/Examplemain.svg')} alt="" /></div>
                        <div className="example-content__photo-list">
                            <img src={require('./img/Example1.svg')} alt="" />
                            <img src={require('./img/Example2.svg')} alt="" />
                            <img src={require('./img/Example3.svg')} alt="" />
                            <img src={require('./img/Example4.svg')} alt="" />
                        </div>
                    </div>
                    <div className="example-content__description">
                        <div className="example-content__description-title">Дизайн интерьера квартир в ЖК Трибека</div>
                        <div className="example-content__description-text">Наши герои – молодая семья с двумя очаровательными детишками, которые решили подойти к дизайну интерьера очень основательно. ЖК «Трибека» изначально сдавали квартиры в свободной планировке одним помещением. Заказчики имели вполне конкретные пожелания, и в очень короткие сроки дизайнер собрал «конструктор» идеальной квартиры, где нашлось место двум детским, двум санузлам, спальне, рабочему кабинету и совмещенной со столовой гостиной.</div>
                        <div className="example-content__description-button"><a href="">Заказать дизайн</a></div>
                    </div>
                </div>
            </div>
        )
    }
}