const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  value: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    wish: (state, action) => {
      if (state.value.some((arr) => arr.name == state.value.name)) { 
        state.value = state.value.filter((arr) => arr.name != state.value.name)
      } else {
        state.value = [...state.value, action.payload]
      }
      // state.value = action.payload;
    },
    // removeWish: (state, action) => {
    //   state.value -= action.payload;
    // },
  },
});

export const { wish } = wishlistSlice.actions;
export default wishlistSlice.reducer;
