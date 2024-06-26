import {AnyAction, combineReducers, legacy_createStore} from 'redux'
import {ThunkDispatch} from 'redux-thunk'
import {PagesReducer} from "./pagesReducer";


const rootReducer = combineReducers({
    pages: PagesReducer
})
export const store = legacy_createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;

