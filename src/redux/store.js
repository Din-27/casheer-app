import { configureStore } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import productReducer from './slice/productSlice'
import cartReducer from './slice/cartSlice'
import cashReducer from './slice/cashSlice'
import modalReducer from './slice/modalSlice'
import authReducer from './slice/authSlice'



const productPersistConfig = {
    key: "product",
    storage,
    whitelist: ['firstTime'],
};

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ['token'],
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    cart: cartReducer,
    cash: cashReducer,
    modal: persistReducer(productPersistConfig, modalReducer),
    product: productReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
                ignoredPaths: ['register', 'rehydrate'],
            },
        }),
})

const persistor = persistStore(store);

export { store, persistor };