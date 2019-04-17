import C from '../../../util/constants'
import ajax from '../../../util/ajax'

export function fetchDetail(deal) {
	// return async (dispatch, getState)  => {
	return async (dispatch, _)  => {
		try {
	//		let { dealDetailData } =  getState()
	//	if (dealDetailData.deal === undefined || dealDetailData.deal.key !== deal.key) {
				dispatch({
					type: C.INITIAL_DETAIL,
					payload: deal
				})
	//	}
			dispatch({
				type: C.DEAL_FETCH_DETAIL,
				payload: await ajax.fetchDealDetail(deal.key)
			})
		}
		catch (_) {
			dispatch({
				type: C.GET_DEALS_ERROR,
				errorMessage: "fail to get deals"
			})
		}
	}
}
