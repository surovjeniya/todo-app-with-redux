import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../../redux/actions/addTodo'

function AddInput() {

    const dispatch = useDispatch()
    const [title,setTitle] = useState('')
    const onChangeHandler = (e) => {
        setTitle(e.target.value)
    }

    const onSubmitHandler = async  (e) => {
        e.preventDefault()
        dispatch(addTodo(title))
        setTitle('')
    }

    return (
        <form 
            onSubmit={onSubmitHandler}
            action="/api/add-note" method='post'>
            <input      
                onChange={onChangeHandler}
                value={title}
                type="text"  
                placeholder="Add Todo..." 
                name="title"/>
            <button className='btn btn-primary'>Add</button>
        </form>
    )
}

export default AddInput;