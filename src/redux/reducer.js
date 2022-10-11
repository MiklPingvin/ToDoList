const ADD_TASK = 'ADD_TASK'
const SET_EDIT_ON = 'SET_EDIT_ON'
const EDIT_TASK = 'EDIT_TASK'
const DELETE_TASK = 'DELETE_TASK'

export const UpdateObjectInArray = (items, itemID, objParam, newObjProps) => {
    return items.map(u => {
        if (u[objParam] === itemID) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}

const initialState = {
    tasks: [
        {
            id: 1,
            text: 'This is task',
            EditOn: false,
        },
        {
            id: 2,
            text: 'This is task2',
            EditOn: false,
        }
    ],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: state.tasks[state.tasks.length - 1].id + 1,
                    text: "",
                    EditOn: true,
                }],
            }
        case EDIT_TASK:
            return {
                ...state,
                tasks: UpdateObjectInArray(state.tasks, action.id, "id", {text: action.text}),
            }
        case SET_EDIT_ON:
            return {
                ...state,
                tasks: UpdateObjectInArray(state.tasks, action.id, "id", {EditOn: action.EditOn}),
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
export const addTask = () => ({
    type: ADD_TASK
})

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    id: id
})

export const editTask = (id, text) => ({
    type: EDIT_TASK,
    id: id,
    text: text,
})
export const setEditOn = (id, EditOn) => ({
    type: SET_EDIT_ON,
    id: id,
    EditOn: EditOn,
})


export default reducer