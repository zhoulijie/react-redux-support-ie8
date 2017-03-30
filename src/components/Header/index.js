import React,{Component} from 'react';
// import styled from 'styled-components';

import logoImg from './logo.png';

// const Wrapper = styled.div`
//   height:50px
// `;

// const Logo=styled.a`
//     display: block;
//     padding-top: 8px;
//     height: 35px;
//     width: 88px;
//     background: url('${logoImg}') 0 8px no-repeat;
// `

// export default class Footer extends Component{
export default class Header extends Component{
    render(){
        return (
            <div>
                {/*<Logo/>*/}
                <a href="#"></a>{' '}
                <a href="#">active</a>{' '}
                <a href="#">completed</a>{' '}
            </div>
        );
    }
}

// module.exports = Footer;