import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import '../styles/app.scss'

import NavBarContainer from "./nav/navbar_container";
import MainPageContainer from "./main/main_container";

import Footer from "./footer/footer"

import NewFileUploadContainer from "./upload/new_file_upload_container";
import FileUpload from "./upload/file_upload";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import DashboardContainer from './user/user_dash_container';
import SkillFormContainer from './skill/skill_form_container';

import TaskIndexContainer from './tasks/all_tasks/tasks_index_container';
import UserTasksContainer from "./tasks/user_tasks/user_tasks_container";

import "../styles/reset.scss";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/application.scss";




const App = () => (
  <div className="app">
    <div className="main-content">
      <NavBarContainer />
      <Switch>
        <ProtectedRoute path="/dashboard" component={DashboardContainer} />
        <AuthRoute exact path="/" component={MainPageContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
