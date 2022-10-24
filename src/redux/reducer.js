const ADD_TASK = 'ADD_TASK'
const ADD_DESK = 'ADD_DESK'
const EDIT_TASK = 'EDIT_TASK'
const DELETE_TASK = 'DELETE_TASK'
const SET_CURRENT_TASK = 'SET_CURRENT_TASK'


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
            number_on_desk: 1,
        },
        {
            id: 2,
            text: 'This is task2',
            EditOn: false,
            desk_id: 2,
            number_on_desk: 1,
        }
    ],
    currentTask: null
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
                    desk_id: action.desk_id,
                    number_on_desk: state.tasks.filter(task => task.desk_id === action.desk_id).length + 1
                }],
            }
        case ADD_DESK:
            return {
                ...state,
                desks: [...state.desks, {
                    id_desk: state.desks[state.desks.length - 1].id_desk + 1,
                    name: action.name,
                }],
            }
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(u => {
                    if (u["id"] === action.id) {
                        return {...u, ...action.data}
                    }
                    return u;
                })
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: [...state.tasks.filter(task => task.id !== action.id)]
            }
        case SET_CURRENT_TASK:
            return {
                ...state,
                currentTask: action.task
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
export const setCurrentTask = (task) => ({
    type: SET_CURRENT_TASK,
    task: task
})

const editTask = (id, data) => ({
    type: EDIT_TASK,
    id: id,
    data: data
})

export const setText = (id, text) => {
    return editTask(id, {text: text})
}
export const setEditOn = (id, EditOn) => {
    return editTask(id, {EditOn: EditOn})
}
export const setDeskId = (id, desk_id) => {
    return editTask(id, {desk_id: desk_id})
}
export const setNumberOnDesk = (id, number_on_desk) => {
    return editTask(id, {number_on_desk: number_on_desk})
}


export default reducer