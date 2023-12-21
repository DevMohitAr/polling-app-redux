import { SETAUTHEDUSER } from "../actions/authAction";
export default function authReducer(state="", action) {
  switch (action.type) {
    case SETAUTHEDUSER :
        return action.id  
    default:
        return state
  }
}
