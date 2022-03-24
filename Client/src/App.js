import React from 'react';

import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { BrowserRouter as Router,Redirect, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



import Login from './components/pages/Auth/Login';
import Admin from './components/pages/Auth/Admin';


import HomeEboard from './components/Home/HomeEboard';
import { BrowserRouter }  from "react-router-dom";
import HomeClassroom from './components/Home/HomeClassroom';
import HomeCourse from './components/Home/HomeCourse';
import Page_404 from './components/Home/404';
import ForgetPwd from './components/pages/Auth/ForgetPwd';
import ResetPwd from './components/pages/Auth/ResetPwd';
import SignUp from './components/pages/Auth/SignUp';
import Chat from './components/ChatBot/Chat';
import ChatUser from './components/pages/Chat/ChatUser';
import AdminPage from './components/pages/Admin/AdminPage';
import HomeAdmin from './components/Home/HomeAdmin';


function App() {



  return (
      <>
        <div className='chatbot'>
             <Chat></Chat>
        </div>
        
        <BrowserRouter>
          
          <Switch>
                
             
           
            <Route exact path='/Eboard/auth/admin' component={Admin} />
            <Route
              path="/Eboard/home"
              exact
              render={(props) => <HomeAdmin {...props} />}
            />
            <Route
              path="/Eboard/Teachers"
              exact
              render={(props) => <HomeAdmin {...props} />}
            />
            <Route
              path="/Eboard/Organization"
              exact
              render={(props) => <HomeAdmin {...props} />}
            />
            <Route
              path="/Eboard/Students"
              exact
              render={(props) => <HomeAdmin {...props} />}
            />
            <Route
              path="/Eboard/Reclamations"
              exact
              render={(props) => <HomeAdmin {...props} />}
            />
            <Route
              path="/Eboard/Supports"
              exact
              render={(props) => <HomeAdmin {...props} />}
            />
            <Route exact path='/login' component={Login} />
            <Route path="/forget" component={ForgetPwd} />
            <Route exact path='/reset/:id' component={ResetPwd} />
            <Route  exact path='/sign-up' component={SignUp} />
            <Route
            path="/chat"
            exact
            render={(props) => <HomeEboard {...props} />}
          />
            <Route
            path="/"
            exact
            render={(props) => <HomeEboard {...props} />}
          />
          <Route
            path="/Contactus"
            exact
            render={(props) => <HomeEboard {...props} />}
          />
          <Route
            path="/Aboutus"
            exact
            render={(props) => <HomeEboard {...props} />}
          />
         
          <Route
            path="/classroom"
            exact
            render={(props) => <HomeClassroom {...props} />}
          />
          <Route
            path="/class"
            exact
            render={(props) => <HomeCourse {...props} />}
          />
          <Route
            path="/quizlist"
            exact
            render={(props) => <HomeCourse {...props} />}
          />
          <Route
            path="/createquiz"
            exact
            render={(props) => <HomeCourse {...props} />}
          />
          <Route
            path="/displayQuiz"
            exact
            render={(props) => <HomeCourse {...props} />}
          />
          <Route
            path="/404"
            exact
            render={(props) => <Page_404 {...props} />}
          />
          <Redirect to="/404" />
         
           
          </Switch>
          
          
          </BrowserRouter>
          
      </>
  );
}

export default App;