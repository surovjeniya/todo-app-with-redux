import './TodoItem.scss'
import {useDispatch} from 'react-redux'
import {doneTodo} from '../../redux/actions/doneTodo'
import {importantTodo} from '../../redux/actions/importantTodo'
import {deleteTodo} from '../../redux/actions/deleteTodo'

function TodoItem({data,index}) {

    const dispatch = useDispatch()

    const doneHandler  = () => {
        dispatch(doneTodo(data.id))
        document.querySelector('.todo-item__title').classList.toggle('done')
    }   

    const importantHandler = () => {
        dispatch(importantTodo(data.id))
        document.querySelector('.todo-item__title').classList.toggle('important')
    }

    const deleteHandler = () => {
        dispatch(deleteTodo(data.id))
    }

    const titleClasses = `todo-item__title`

    return (
        <span className="todo-item">
            <span>{index+1}</span>
            <h2 className={titleClasses}>{data.title}</h2>
            <div className="todo-item__controls">
                <button 
                    onClick = {doneHandler}
                    className='btn green'><i className="material-icons">check</i></button>
                <button 
                    onClick = {importantHandler}
                    className='btn blue accent-3'><i className="material-icons">star</i></button>
                <button 
                    onClick = {deleteHandler}
                    className='btn red'><i className="material-icons">delete</i></button>
            </div>
        </span>
    )
}

export default TodoItem