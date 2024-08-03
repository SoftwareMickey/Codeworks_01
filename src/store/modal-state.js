import { configureStore, createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name : 'Modal',
    initialState: { isModalOpen : false },
    reducers: {
        openModalHandler: (state) => {
            state.isModalOpen = true;
            console.log('clicked...');
        },
        closeModalHandler: (state) => {
            state.isModalOpen = false;
        }
    }
})

export const modalActions = modalSlice.actions;

const store = configureStore({
    reducer : {
        modalState: modalSlice.reducer
    }
})

export default store;