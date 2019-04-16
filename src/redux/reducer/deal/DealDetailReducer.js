import C from '../../../util/constants'

const initialState = {
    deal: undefined,
    error: false,
    errorMessage: ""
}

export default dealDetailReducer = (state = initialState, action) => {
    switch (action.type) {
            case C.INITIAL_DETAIL:
                    return {
                            ...state,
                            deal: action.payload
                    }
            case C.DEAL_FETCH_DETAIL:
                    return {
                            ...state,
                            deal: action.payload
                    }
          
           case C.GET_DEALS_ERROR:
                    return {
                            ...state,
                            errorMessage: action.errorMessage,
                            error: true
                    }
            default:
                    return state
    }
}