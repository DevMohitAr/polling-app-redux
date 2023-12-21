import React from "react";
import { useDispatch } from "react-redux";
import { receivePolls } from "./actions/polls";
import receiveusers from "./actions/users";
import authAction from "./actions/authAction";
import AddPollComp from "./components/AddPollComp";
import { polls, users } from "../data";
import Users from "./components/Users";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Poll from "./components/Poll";
import { formatUsers } from "../data";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(receivePolls(polls));
    dispatch(receiveusers(formatUsers(users)));
    dispatch(authAction("devmohitar"));
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/poll" element={<AddPollComp />} />
          <Route path="/users/:id" element={<Poll />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
