import {DONE_TODO} from '../actionTypes'

export const doneTodo = (id) => {
    return {
        type:DONE_TODO,
        id
    }
}