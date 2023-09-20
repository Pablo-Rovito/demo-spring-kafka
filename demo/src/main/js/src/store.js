import { configureStore } from "@reduxjs/toolkit";
import { mainApi } from "./rest/mainApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        [mainApi.reducerPath]: mainApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainApi.middleware)
})

setupListeners(store.dispatch)