import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
};

export const LoginReducer = createSlice({
  name: 'emailPassword',
  initialState,
  reducers: {
    email_password: (state, action) => {
      return {...state, ...action.payload};
    },

    userData: () => {},
  },
});

export const {email_password, userData} = LoginReducer.actions;
export default LoginReducer.reducer;
