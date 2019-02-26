import React from 'react';
import vk from '../img/vk.png';
import inst from '../img/inst.png';
import pint from '../img/pint.png';
import img2 from '../img/11.jpg';


export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.getPages();
    }

    getPages() {
        return this.props.pages.map((obj, i) => {
            return (
                <a href="#" className="nav-link" key={i}>
                    {obj.name}
                </a>
            );
        });
    }

    render() {
        return (
            <div className="main">
                <div className="main-welcome">
                    <img src={img2} className="main-img"/>
                    <div className="carousel-text">
                        <p className="p">Добро пожаловать на мою страничку!</p>
                        <p className="p">Здесь вы можете поближе познакомиться с моими творениями из кожи и выбрать лучшее для себя.</p>
                        <div className="links">
                            <div className="social-link">
                                <img src={vk} className="social"></img>
                                <img src={inst} className="social"></img>
                                <img src={pint} className="social"></img>
                            </div>
                            <div className="main-mail-div">
                                <p className="main-mail">agatha@yandex.ru</p>
                                <p className="main-mail">+7 (950) 55 55 657</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <nav className="navbar">
                        {this.getPages()}
                    </nav>
                </div>
            </div>
        );
    }
}