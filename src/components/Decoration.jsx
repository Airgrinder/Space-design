import React, { Component } from 'react';
import './style/Decoration.css'

export default class Decoration extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="main-background"></div>
                <div className="middle-background"><img src={require('./img/decor.svg')} alt="" /></div>
            </>
        )
    }
}