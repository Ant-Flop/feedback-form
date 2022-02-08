import {feedbackFormReducer} from "./FeedbackFormReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers({
    feedbackForm: feedbackFormReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))