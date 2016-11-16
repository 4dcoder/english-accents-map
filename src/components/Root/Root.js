import React, { Component, PropTypes } from 'react'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import CoreLayout from '../CoreLayout'
import HomePage from '../../scenes/home/components/HomePage'
import SuggestPage from '../../scenes/suggest/components/SuggestPage'
import CountriesList from '../../scenes/home/components/CountriesList'
import AccentsList from '../../scenes/home/components/AccentsList'
import '../../styles/main.scss'

class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render () {
    const { store } = this.props

    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route component={CoreLayout}>
            <Route path='/suggest' component={SuggestPage} />
            <Route path='/' component={HomePage}>
              <IndexRoute component={CountriesList} />
              <Route path=':countryId' component={AccentsList} />
              <Route path=':countryId/:accentId' component={AccentsList} />
            </Route>
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default Root
