import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import Content from '../../components/Content';
import Header from '../../components/Header';
import * as Actions from './action';


import './app.css';

class App extends Component{
    render(){
        const {todos, actions} = this.props;
        return (
            <div style={{"backgroundColor":"red"}}>
                1111222
                <Header />
                {/*<Content todos={todos} actions={actions} />*/}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        todos : state.todos
    }
}
function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators(Actions, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
