import uniqid from 'uniqid'
import {ADD_TODO,DONE_TODO,IMPORTANT_TODO,DELETE_TODO} from '../actionTypes'

const initialState = {
    todos:[

    ]
}



export const todoReducer = (state = initialState,action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos:[...state.todos,{
                    title:action.data,
                    important:false,
                    done:false,
                    id:uniqid()
                }]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos:state.todos.filter(item => item.id !== action.id)
            }
        case IMPORTANT_TODO:
            const ids = state.todos.findIndex(item => item.id === action.id)
            console.log(state.todos[ids])
            return {
                ...state,
                todos:[
                    ...state.todos.slice(0,ids),
                    state.todos[ids] = {
                        ...state.todos[ids],
                        important:!state.todos[ids].important
                    },
                    ...state.todos.slice(ids+1)
                ]
            }
        case DONE_TODO: 
            const idx = state.todos.findIndex(item => item.id === action.id)
            return {
                ...state,
                todos:[
                    ...state.todos.slice(0,idx),
                    state.todos[idx] = {
                        ...state.todos[idx],
                        done:!state.todos[idx].done
                    },
                    ...state.todos.slice(idx+1)
                ]
            }
        default:
            return state

    }
}