import { createSlice } from '@reduxjs/toolkit'



const dataSlice = createSlice({
    name: 'datas',
    initialState: [],
    reducers: {
        addData: (state, action) => {
            state.push({ name: action.payload, id: Date.now(), status: false })
        },
        dltData: (state, action) => {
            return state.filter((data) => data.id !== action.payload)
        },
        edtData: (state, action) => {

            const obj = state.find((data) => data.id === action.payload.id)
            console.log(action)
            if (obj) {
                obj.name = action.payload.newData
                console.log(obj.name)
            }
            // const obj = state.find((data) => data.id == action.payload)
            // if (obj) {
            //     const newData = prompt('enter a new Value')
            //     obj.name = newData
            // }
            // const index = state.findIndex((data) => data.id == action.payload)
            // state.splice(index, 1)
        },
        changeStatus: (state, action) => {
            const obj = state.find((data) => data.id == action.payload)
            if (obj) {
                obj.status = !obj.status
            }
        }
    }

})

export default dataSlice.reducer
export const { addData, dltData, edtData, changeStatus } = dataSlice.actions