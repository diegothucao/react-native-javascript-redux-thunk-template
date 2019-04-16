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