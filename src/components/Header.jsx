import React from 'react';

export default class Header extends React.Component{
    constructor(props) {
        super(props);
        console.log('Im header constructor', this.props);
        this.getList();
    }

    getList() {
        return this.props.pages.map( (obj, i) => {
           return (
               <a href="#" className="nav-link" key={i}>
                   {obj.name}
               </a>
           );
        });
    }


    render() {
        return (
            <div className="header">
                <nav className="navbar">
                    {this.getList()}
                </nav>

            </div>
        );
    }
}