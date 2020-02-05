import React from 'react';
import { Switch, Route } from "react-router-dom"


//===============Imports Components=================//
import LandingPage from './components/landingpage/LandingPage';
import Login from './components/login/Login';
import LogOut from './components/logout/Logout';
import UserRegister from './components/registeration/UserRegister';
import CompanyRegister from './components/registeration/CompanyRegister';
import UserProfile from './components/profiles/UserProfile';
import CompanyProfile from './components/profiles/CompanyProfile';
import UserEdit from './components/editprofile/UserEdit';
import CompanyEdit from './components/editprofile/CompanyEdit';
import UserMatch from './components/matchingpage/UserMatch';
import CompanyMatch from './components/matchingpage/CompanyMatch';
import ProtectedRoute from './components/ProtectedRoute';

//==================================================//

function App() {
  return (
    <div className="App">

      <Switch>

        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/user_register">
          <UserRegister />
        </Route>

        <Route path="/company_register">
          <CompanyRegister />
        </Route>

        <Route path="/user_profile">
          <UserProfile />
        </Route>

        <Route path="/company_profile">
          <CompanyProfile />
        </Route>

        <Route path="/user_edit">
          <UserEdit />
        </Route>

        <Route path="/company_edit">
          <CompanyEdit />
        </Route>

        <Route path="/user_matched">
          <UserMatch />
        </Route>

        <Route path="/company_matched">
          <CompanyMatch />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
