import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'
import DealList from './DealList'
import DealDetail from './DealDetail'
import SearchBar from './SearchBar'
import { connect } from 'react-redux'
import { searchDeals, setCurrentDeal, unsetCurrentDeal } from '../redux/action/AppAction'

class App extends React.Component {

  static propTypes = {
    appData: PropTypes.object.isRequired,
    searchDeals: PropTypes.func.isRequired,
    setCurrentDeal: PropTypes.func.isRequired,
    unsetCurrentDeal: PropTypes.func.isRequired
  }

  async componentWillMount() {
  }

  async componentDidMount() {
    this.props.searchDeals()
  }

  currentDeal = () => {
    return this.props.appData.deals.find(x => x.key === this.props.appData.currentDealId)
  }
  
  render() {
    if (this.props.appData.currentDealId) {
      return (
        <View style={styles.main}>
         {this.currentDeal() && (
          <DealDetail
            initialDealData={this.currentDeal()}
            onBack={this.props.unsetCurrentDeal}
          />
         )}
        </View>
      )
    }
  
      return (
        <View style={styles.main}>
          <SearchBar searchDeals={this.props.searchDeals} searchTerm={this.props.appData.searchTerm} />
          <DealList deals={this.props.appData.deals} onItemPress={this.props.setCurrentDeal}  />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    marginTop: 30,
  },
  header: {
    fontSize: 40,
  },
})

function mapStateToProps(state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchDeals: (searchTerm) => dispatch(searchDeals(searchTerm)),
    setCurrentDeal: (dealId) => dispatch(setCurrentDeal(dealId)),
    unsetCurrentDeal: () => dispatch(unsetCurrentDeal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
