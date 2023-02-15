import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/Nav';
import Home from './pages/Home';

import UserProvider from './utils/UserContext';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default function App() {
  // const [currentPage, setCurrentPage] = useState('Home');

  // const renderPage = function() {
  //   switch (currentPage) {
  //     case 'Home':
  //       return <Home />
  //   }
  // };

  // const handlePageChange = function(page) {
  //   setCurrentPage(page);
  // };

  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Router>
          <div>
            <Nav />
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </Router>
      </UserProvider>
    </ApolloProvider>
  );
};
