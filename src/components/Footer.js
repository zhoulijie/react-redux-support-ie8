import React,{Component} from 'react';

// export default class Footer extends Component{
export default class Footer extends Component{
    render(){
        return (
            <div>
                <a href="#">all</a>{' '}
                <a href="#">active</a>{' '}
                <a href="#">completed</a>{' '}
            </div>
        );
    }
}

module.exports = Footer;