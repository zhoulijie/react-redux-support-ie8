import React,{Component} from 'react';

// export default class TodoItem extends Component{
export default class TodoItem extends Component{
    filterCompleted(){
        const {todo, completeTodo} = this.props;
        if(todo.completed){
            return <del onClick={()=>completeTodo(todo.id)}>{todo.text}</del>
        }else{
            return <a onClick={()=>completeTodo(todo.id)}>{todo.text}</a>
        }
    }
    render(){
        const {todo, completeTodo} = this.props;
        return (
            <li>{this.filterCompleted()}</li>
        );
    }
}

module.exports = TodoItem;