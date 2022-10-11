const ADD_TASK = 'ADD_TASK'
const ADD_DESK = 'ADD_DESK'
const SET_EDIT_ON = 'SET_EDIT_ON'
const SET_TEXT = 'SET_TEXT'
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
    desks: [
        {
            id_desk: 1,
            name: 'Must',
        }, {
            id_desk: 2,
            name: 'Done',
        }
    ],
    tasks: [
        {
            id: 1,
            text: 'This is task',
            EditOn: false,
            desk_id: 1,
        },
        {
            id: 2,
            text: 'This is task2',
            EditOn: false,
            desk_id: 2,
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
                    desk_id: action.desk_id
                }],
            }
        case ADD_DESK:
            return {
                ...state,
                desks: [...state.desks, {
                    id_desk: state.desks[state.desks.length - 1].id + 1,
                    name: action.name,
                }],
            }
        case EDIT_TASK:
            if (action.text === '') action.text = state.tasks.find(task => task.id === action.id).text
            return {
                ...state,
                tasks: UpdateObjectInArray(state.tasks, action.id, "id", {text: action.text, EditOn: action.EditOn}),
            }
        case SET_EDIT_ON:
            return {
                ...state,
                tasks: UpdateObjectInArray(state.tasks, action.id, "id", {EditOn: action.EditOn}),
            }
        case SET_TEXT:
            return {
                ...state,
                tasks: UpdateObjectInArray(state.tasks, action.id, "id", {text: action.text}),
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
export const addTask = (desk_id) => ({
    type: ADD_TASK,
    desk_id: desk_id
})
export const addDesk = (name) => ({
    type: ADD_DESK,
    name: name
})

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    id: id
})

export const setText = (id, text) => ({
    type: SET_TEXT,
    id: id,
    text: text,
})
export const setEditOn = (id, EditOn) => ({
    type: SET_EDIT_ON,
    id: id,
    EditOn: EditOn,
})
export const editTask = (id, text = '', EditOn = false) => ({
    type: EDIT_TASK,
    id: id,
    text: text,
    EditOn: EditOn,
})


export default reducer