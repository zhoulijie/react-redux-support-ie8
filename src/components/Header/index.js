import React, {Component} from 'react';

import logoImg from './logo.png';

// export default class Footer extends Component{
export default class Header extends Component {
    render() {
        return (
            <div>
                <img src={logoImg} alt="weblog"/>
                <a href="#"></a>
                <a href="#">active</a>
                <a href="#">completed</a>
            </div>
        );
    }
}

// module.exports = Footer;