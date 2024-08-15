import {configureStore} from '@reduxjs/toolkit'
import dataReducer from './features/dataSlice'


const store=configureStore({
    reducer:{
        datas:dataReducer
    }
})

export default store