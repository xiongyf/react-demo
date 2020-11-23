export const countReducer = (state, action) => {
    switch (action.type) {
        case('countUp'):
            return {
                ...state,
                count: state.count + 1
            }
        case('countDown'):
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}