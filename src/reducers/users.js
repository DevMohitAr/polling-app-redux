import { RECEIVEUSERS } from "../actions/users";
import { ADDPOLL } from "../actions/polls";
import { ADDANSWERS } from "../actions/answers";
export default function receiveusers(state = {}, action) {
  switch (action.type) {
    case RECEIVEUSERS:
      return { ...state, ...action.users };
    case ADDPOLL: {
      const poll = action.poll;
      const { author, id } = poll;
      return {
        ...state,
        [author]: {
          ...state[author],
          polls: state[author]?.polls.concat([id]),
        },
      };
    }

    case ADDANSWERS: {
      const user = state[action.authUser];
      
      return {
        ...state,
        [action.authUser]: {
          ...user,
          answers: user.answers.concat([action.id]),
        },
      };
    }

    default:
      return state;
  }
}
