import React from 'react';
import Header from './Header';
import Main from './Main';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePageId: 0,

        }

        this.pages = [
            {pageId: 0, name: 'Магазин'},
            {pageId: 1, name: 'Акции'},
            {pageId: 2, name: 'Новости'},
            {pageId: 3, name: 'Как приобрести?'},
            {pageId: 4, name: 'Доставка и оплата'},
            {pageId: 5, name: 'Контакты'},
            {pageId: 6, name: 'О мастере и мастерской'},
        ];

        this.mainPages = [
            {pageId: 0, name: 'Поиск'},
            {pageId: 1, name: 'Как приобрести?'},
            {pageId: 2, name: 'Доставка и оплата'},
            {pageId: 2, name: 'Контакты'},
        ];


    }





    render() {
        return (
            <div className="site-wrapper">
                <div className="agata">
                    <Header pages = {this.pages}/>
                    <div className="w-100"></div>
                    <Main pages = {this.mainPages}/>
                </div>
            </div>
        );
    }
}