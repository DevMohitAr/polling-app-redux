import { ADDPOLL, RECEIVEPOLLS } from "../actions/polls";
import { ADDANSWERS } from "../actions/answers";

export default function polls(state = {}, action) {
  switch (action.type) {
    case ADDPOLL:
      return { ...state, [action.poll.id]: action.poll };
    case RECEIVEPOLLS:
      return { ...state, ...action.polls };
    case ADDANSWERS: {
      const { answer, id, authUser } = action;
      const poll = state[id];
      const voteskey = answer + "Votes";

      return {
        ...state,
        [action.id]: { ...poll, [voteskey]: poll[voteskey].concat([authUser]) },
      };
    }
    default:
      return state;
  }
}
