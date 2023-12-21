import { useSelector } from "react-redux";

export const ADDPOLL = "ADDPOLLS";
export const RECEIVEPOLLS = "RECEIVEPOLLS";

export const addPoll = (poll, author , id) => {
  return {
    type: ADDPOLL,
    poll: { ...poll, author,id },
  };
};

export const receivePolls = (polls) => {
  return {
    type: RECEIVEPOLLS,
    polls,
  };
};
