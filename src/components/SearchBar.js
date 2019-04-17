import React from 'react'
import debounce from 'lodash.debounce'
import { TextInput, StyleSheet } from 'react-native'

class SearchBar extends React.Component {

  debouncedSearchDeals = debounce(this.props.searchDeals, 300)
  
  handleChange = (searchTerm) => {
       this.debouncedSearchDeals(searchTerm)
   }
  
  render() {
    return (
      <TextInput
        placeholder="Search All Deals"
        style={styles.input}
        value={this.props.searchTerm}
        onChangeText={this.handleChange}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal: 16,
  },
})

export default SearchBar
