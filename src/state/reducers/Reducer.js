let initialState = {
    data: [],
    loading: true
}

export default test = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA_FULFILLED':
            return {
                ...state,
                data: action.payload.data.results,
                loading: false
            }
        default:
            return state
    }
}