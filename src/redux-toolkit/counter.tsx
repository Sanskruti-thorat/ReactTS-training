/* eslint-disable @typescript-eslint/no-explicit-any */
// // import { createAsyncThunk } from "@reduxjs/toolkit"
// // import axios from "axios"

// import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//     value: 0 , 
//     fetchData:[]
// }

// // export const fetchContent = createAsycThunk(
// //     'content/fetchContent',
    
// // async()=>{
// //     const res = await axios('')
// //     const data = await res.data
// //     return data
// // })


// export const counterSlice = createSlice({

//     name:'counter',
//     initialState,
//     reducers:{
//         incre:(state)=>{
//         state.value +=1
//         },
//         decre:(state)=>{
//         state.value -= 1
//         },
//         incrementByAmount:(state, action)=>{
//         state.value += action.payload
//         },
//     },
    
// });


// // extraReducer:(builder)=>{
// //     builder.addCase(fetchContent.pending , (state)=>{
// //         state.isLoading = true
// //     })
// //     builder.addCase(fetchContent.fulfilled , (state , action)=>{
// //         state.isLoading = false
// //         state.fetchData = action.payload
// //     })
// //     builder.addCase(fetchContent.rejected , (state, action )=>{
// //         state.isLoading = false
// //         state.error = action.error.message
// //     })
// // },
// export const {counterActions}= counterSlice.actions;

// export default counterSlice.reducer;


// counterSlice.ts
// counterSlice.ts
// counterSlice.ts
// counterSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface CounterState {
  value: number;
  fetchData: any[]; 
  isLoading: boolean;
  error: string | null | undefined;

}

const initialState: CounterState = {
  value: 0,
  fetchData: [],
  isLoading: false,
  error: null, 
};

export const fetchContent = createAsyncThunk(
  "counter/fetchContent",
  async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/photos"); 
    const data = await res.data;
    return data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incre: (state) => {
      state.value += 1;
    },
    decre: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.fetchData = action.payload;
      state.error = null; 
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const counterActions  = counterSlice.actions;

export default counterSlice.reducer;

