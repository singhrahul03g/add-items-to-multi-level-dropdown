import { createSlice } from '@reduxjs/toolkit'
import { data } from '../dummyData'

const initialState = {
  data: data,
}

export const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    add: (state, action) => {
        const newItem = {
            name:action.payload,
            children:[]
        }
       
      state.data = [...state.data,newItem]
    },
  },
})

export const { add } = treeSlice.actions

export default treeSlice.reducer


