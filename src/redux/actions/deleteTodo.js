import {DELETE_TODO} from '../actionTypes'

export const deleteTodo = (id) => {
    return {
        type:DELETE_TODO,
        id
    }
}