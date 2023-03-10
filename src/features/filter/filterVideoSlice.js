


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    tags: [],
    search:'',

};



const filterSLice = createSlice({
    name: "search",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags.push(action.payload);
        },
        tagRemoved: (state, action) => {
            const indexToRemove = state.tags.indexOf(action.payload);
            if(indexToRemove !== -1) state.tags.splice(indexToRemove,1);
        },
        searched: (state, action) => {
            state.search = action.payload;
        }

    }
});

export default filterSLice.reducer;
export const {tagSelected, tagRemoved, searched} = filterSLice.actions;
