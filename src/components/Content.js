import React,{Component} from 'react';
import TodoItem from '../components/TodoItem';


export default class Content extends Component{
    render(){
        const {todos,actions} = this.props;
        return (
            <div>
                <ul>{todos.map(todo =>
                    <TodoItem key={todo.id} todo={todo} {...actions} />
                )}</ul>
            </div>
        );
    }
}