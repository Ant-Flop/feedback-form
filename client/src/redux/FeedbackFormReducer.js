const UPDATE_FEEDBACK_FORM = "UPDATE_FEEDBACK_FORM";

const defaultState = {
    name: "",
    email: "",
    message: "",
    emptyName: null,
    emptyEmail: null,
    emptyMessage: null,
    responseSuccess: null
}

export const feedbackFormReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_FEEDBACK_FORM:
            if (action.payload.type === "name")
                return {
                    ...state,
                    name: action.payload.value
                }
            else if (action.payload.type === "email")
                return {
                    ...state,
                    email: action.payload.value
                }
            else if (action.payload.type === "message")
                return {
                    ...state,
                    message: action.payload.value
                }
            else if (action.payload.type === "error") {
                return {
                    ...state,
                    emptyName: action.payload.name,
                    emptyEmail: action.payload.email,
                    emptyMessage: action.payload.message
                }
            } else if (action.payload.type === "responseSuccess") {
                return {
                    ...state,
                    responseSuccess: action.payload.value
                }
            } else break;
        default:
            return defaultState;
    }
}

export const updateFeedbackForm = (data) => ({type: UPDATE_FEEDBACK_FORM, payload: data});