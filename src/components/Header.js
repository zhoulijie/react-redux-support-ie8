import React,{Component} from 'react';

export default class Header extends Component{

    constructor(props,context){
        super(props,context);
        this.state ={
            text : ''
        };
    }

    handelChange(e){
        this.setState({
            text : e.target.value
        });
    }

    handelClick(){
        this.props.actions.addTodo(this.state.text);
        this.setState({
            text : ''
        });
    }

    render(){
        const {addTodo} = this.props;
        return (
            <div>
                <input type="text" value={this.state.text} onChange={(e)=>this.handelChange(e)} />
                <button onClick={this.handelClick.bind(this)}>add</button>
            </div>
        );
    }
}
module.exports = Header;