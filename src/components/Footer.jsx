import React, { Component } from 'react';
import './style/Footer.css'

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="footer">
                <div className="footer-background"><img className="" src={require('./img/footer.svg')} alt="" /></div>
                <div className="footer-content">
                    <div className="footer-content__callnumber"><img src={require('./img/telephone.png')} alt="" />+7<span> (977) </span>933 12 57</div>
                    <div className="footer-content__copyright">© Copyright 2020</div>
                    <div className="footer-content__socialButtons">
                        <img src={require('./img/socialbuttonFB.png')} alt=""/>
                        <img src={require('./img/socialbuttonInsta.png')} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}