const ADD_TASK = 'ADD_TASK'
const CHANGE_TASK = 'CHANGE_TASK'
const DELETE_TASK = 'DELETE_TASK'


const initialState = {
    tasks: [
        {
            id: 1,
            text: 'This is task'
        },
        {
            id: 2,
            text: 'This is task2'
        }
    ],
    newTaskText: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TASK:
            return {
                ...state,
                newTaskText: action.text
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: state.tasks[state.tasks.length-1].id + 1,
                    text: state.newTaskText
                }],
                newTaskText: ''
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: [...state.tasks.filter(task => task.id !== action.id)]
            }
        default:
            return {...state}
    }
}
export const changeTask = (text) => (
    {
        type: CHANGE_TASK,
        text: text
    })
export const addTask = () => ({
    type: ADD_TASK
})

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    id: id
})

export default reducer