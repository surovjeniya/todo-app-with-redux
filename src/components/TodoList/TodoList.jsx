import {useSelector} from 'react-redux'
import TodoItem from '../TodoItem/';

function TodoList() {

    const todos = useSelector(state => state.todoReducer.todos)

    return (
        <ul className="todo-list">
            {todos.length ? todos.map((item,index) => (
                <li key={item.id}>
                    <TodoItem data={item} index={index}/>
                </li>
            )): <p>Havent Todo</p>}
        </ul>
    )
}

export default TodoList;