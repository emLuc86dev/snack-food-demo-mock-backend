import { VoteContextType } from "../utiles/typeUtility";
import { User } from "../utiles/User";

type VoteActionType =
  | { type: "IS_LOGGED", payload: User }
  | { type: "SIGN_UP"; payload: User }
  | {type: "VOTE", payload: User};

const voteReducer = (state: VoteContextType, action: VoteActionType) => {
  switch (action.type) {
    case "IS_LOGGED":
      return {
        ...state,
        isLogged: true,
        message: {
          info: "Warnig",
          text: `User ${state.user.email} already exists`,
        },
      };
    case "SIGN_UP":
      return {
        ...state,
        user: action.payload,
        users: [...state.users, action.payload],
        isLogged: true,
        messageVote: {
            info: "Great",
            text: `User ${action.payload.email} has been logged`,
          },
      };
      case "VOTE":
        return {
            ...state,
            isLogged: true,
            user: action.payload,
            users: [...state.users, action.payload]
        }

    default:
      return state;
  }
};

export default voteReducer;
