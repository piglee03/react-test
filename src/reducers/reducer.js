import * as types from '../actions/actionTypes';

const initialState = {
    todolist : []
}

export default function reducer(state=initialState, action){
    switch(action.type) {
        case types.ADD:
            return { 
                todolist:state.todolist.concat({
                    id:action.id, 
                    text:action.text, 
                    done:action.done})
            };
        case types.REMOVE:
            return {
                todolist:state.todolist.filter(item =>item.id !== action.id)
            }
        case types.DONE:
            return {
                todolist:state.todolist.map(
                    item => item.id === action.id
                    ? {...item, done:!item.done} 
                    : item
                )
            }

        default:
            return state;
    }

}