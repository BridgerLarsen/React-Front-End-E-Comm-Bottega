import React, { Component } from 'react';

class Details extends Component {
    constructor(props) {
        super(props);
    }

    renderData = () => {
        const { info, links } = this.props;
        let data = [];

        if(links) {
            data = links.map(link => {
                return <a key={link._id} onClick={link.onClick} className='details__link'>{link.title}</a>
            })
        } else if (info) {
            data = info.map(item => {
                return <a key={item._id} className='details__info'>{item.title}</a>
            })
        }

        return data;
    }

    render() {

        const {className, title} = this.props;

        return (
            <div className={`${className} details`}>
                <div className="details__title">{title}</div>
                <div className="details__links">
                    {this.renderData()}
                </div>
            </div>
        )
    }
}

export default Details;