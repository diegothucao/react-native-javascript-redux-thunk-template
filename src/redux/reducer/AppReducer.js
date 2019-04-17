import C from '../../util/constants'

var componentState = {
        initial: 0,
        loading: 1,
        loaded: 2,
        error: 3
}
const initialState = {
        deals: [],
        currentDealId: null,
        searchTerm: "",
        state: componentState.initial,
        error: false,
        errorMessage: ""
}

export default appReducer = (state = initialState, action) => {
        switch (action.type) {
                case C.GET_DEALS:
                        return {
                                ...state,
                                deals: action.payload,
                                state: componentState.loading
                        }
                case C.SEARCH_DEALS:
                        return {
                                ...state,
                                searchTerm: action.searchTerm,
                                deals: action.payload
                        }
                case C.SHOW_DEAL_DETAIL:
                        return {
                                ...state,
                                currentDealId: action.payload
                        }
                case C.SHOW_DEAL_LIST:
                        return {
                                ...state,
                                currentDealId: null,
                                state: componentState.loaded
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