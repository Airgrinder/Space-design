import React, { Component } from 'react';
import './style/Portfolio.css'

import {
    Link,
} from "react-router-dom";

export default class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="portfolio">
                <div className="test">
                    <div className="test2">
                        <div className="portfolio-content">
                            <div className="portfolio-content__heading">Портфолио</div>
                            <div className="portfolio-content__example">
                                <div className="portfolio-content__examples-text">
                                    <span>Дизайн трехкомнатной квартиры на ул. Столетова [117 кв.м., Срок 3 мес, Цена 409 т.р.]</span><br/>
Дизайн в приятных тонах, с декором в стиле ар-деко. Стильная отделка выполнена в светлых тонах по всей квартире и мелкие декоративные элементы связывают комнаты единой концепцией. <Link to="/example"><span>[подробнее...]</span></Link>
                                </div>
                                <div className="portfolio-content__examples-img"><img className="" src={require('./img/portfolioimg1.svg')} alt="" /></div>
                            </div>
                            <div className="portfolio-content__example">
                                <div className="portfolio-content__examples-text"><span>Дизайн квартиры в ЖК Корона [78 кв.м., Срок 2 мес, Цена 190т.р.]</span><br/>
Интерьер разработан для молодого человека, приверженца здорового и активного образа жизни, поэтому мы постарались оставить максимум пространства и минимум мебели, уделив больше внимания отделке стен и потолка. <span>[подробнее...]</span></div>
                                <div className="portfolio-content__examples-img"><img className="" src={require('./img/portfolioimg2.svg')} alt="" /></div>
                            </div>
                            <div className="portfolio-content__example">
                                <div className="portfolio-content__examples-text"><span>Дизайн интерьера коттеджа в п. Новая Опалиха [347 кв.м., Срок 4 мес, Цена 730т.р.]</span><br/>
                                Перед нашей студией стояла непростая задача — разработать стильный, современный интерьер, с использованием недорогих материалов, результат приятно порадовал! Двухуровневые детские комнаты пришлись по вкусу не только детям, но и самим заказчикам. <span>[подробнее...]</span>
                                </div>
                                <div className="portfolio-content__examples-img"><img className="" src={require('./img/portfolioimg3.svg')} alt="" /></div>
                            </div>
                            <div className="portfolio-content__example">
                                <div className="portfolio-content__examples-text"><span>Дизайн квартиры в ЖК Оранж Парк [88 кв.м., Срок 1.5 мес, Цена 210т.р.]</span><br/>
Мы разработали уникальный интерьер для молодой супружеской пары, которая отдала предпочтение скандинавскому стилю и стилю лофт. Умелое комбинирование цветов и игра с текстурами дали тот самый эффект легкости и свободы. <span>[подробнее...]</span></div>
                                <div className="portfolio-content__examples-img"><img className="" src={require('./img/portfolioimg4.svg')} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="test3">

                </div>
                <div className="test4">

                </div>
            </div>
        )
    }
}