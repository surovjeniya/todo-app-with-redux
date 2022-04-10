import {IMPORTANT_TODO} from '../actionTypes'

export const importantTodo = (id) => {
    return {
        type:IMPORTANT_TODO,
        id
    }
}