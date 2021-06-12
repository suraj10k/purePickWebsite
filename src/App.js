import React,{useState,useEffect} from 'react';
import Layout from './components/layout/Layout';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Heading,GridItem} from '@chakra-ui/react';
import LoginForm from './components/auth/LoginForm';
import ConfirmForm from './components/auth/ConfirmForm';
import PrivateRoute from './components/route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import ShowData from './components/dashboard/ShowData';

function App() {
   
  return (
    <Router>
    <Layout>
    <Switch>
      <PrivateRoute exact path='/'>
        <Dashboard/>
        </PrivateRoute>
      <PrivateRoute exact path='/showData'>
        <ShowData />
        </PrivateRoute> 
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path='/confirm'>
        <ConfirmForm />
      </Route>
      <Route>
      <GridItem
      colStart={[1, null, null, 2, null, null]}
      colSpan={[3, null, null, 1, null, null]}
      p={6}
    >
      <Heading as="h1" mb={6}>
        404 : Page not found
      </Heading>
      </GridItem>
      </Route>
    </Switch>
    </Layout>
    </Router>
  )
}    

export default App;
