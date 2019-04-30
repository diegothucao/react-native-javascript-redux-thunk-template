# react-native-javascript-redux-thunk-example
This is an essential example to build react-native app using Javascript and Redux Thunk

Step to run
1. Clone the [repo](https://github.com/diegothucao/react-native-javascript-redux-thunk-template)
2. `yarn install` OR `npm install`
3. `react-native eject`
4. `react-native run-ios` OR `react-native run-android`

Define actions 

```javascript 
import C from '../../util/constants'
import ajax from '../../util/ajax'

// async action
export const searchDeals = (searchTerm = "") => {
	return async (dispatch, _) => {
		try {
			dispatch ({
				type: C.SEARCH_DEALS,
				payload: await ajax.fetchDealSearchResults(searchTerm)
			})
		}
		catch (_) {
			dispatch ({
				type: C.SEARCH_ERROR,
				errorMessage: "fail to get deals"
			})

		}
	}
}

// sync action
export function setCurrentDeal(dealId) {
		return {
			type: C.SHOW_DEAL_DETAIL,
			payload: dealId
		}
}

export function unsetCurrentDeal() {
		return {
			type: C.SHOW_DEAL_LIST
		}
}
```

Define Reducer 

```javascript 
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
```

If you see any issue, please do not hesitate to create an issue here or can contact me via email cao.trung.thu@gmail.com or [Linkedin](https://www.linkedin.com/in/diegothucao/)

Thanks

references
1. https://facebook.github.io/react-native/docs/tutorial
2. https://github.com/jscomplete/react-native-essential-training
3. https://www.tutorialspoint.com/es6
4. https://github.com/reduxjs/redux-thunk
