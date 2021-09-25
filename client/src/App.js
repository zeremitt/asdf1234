import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import Home from './pages/Home'

const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path={['/']} render={(routeProps) => {
          return <Home match={routeProps.match} />
        }}
        />
      </Switch>
    </Router>
    </ApolloProvider>
  );
}

export default App;
