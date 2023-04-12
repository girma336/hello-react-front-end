import { configureStore } from "@reduxjs/toolkit";
import { greetingReducers } from "./greetingSlices"

const store = configureStore({
    reducer: {
        greeting: greetingReducers,
    }
})

export default store;