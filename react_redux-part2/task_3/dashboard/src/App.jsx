import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotifications } from "./app/notificationsSlice";
import { fetchCourses } from "./app/coursesSlice";
import { selectIsLoggedIn } from "./app/authSlice";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import CourseList from "./components/CourseList/CourseList";
import Footer from "./components/Footer/Footer";
import Notifications from "./components/Notifications/Notifications";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchCourses());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <div className="App">
      <Header />
      <Notifications />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </div>
  );
};

export default App;
