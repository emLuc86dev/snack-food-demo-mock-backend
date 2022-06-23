import React, { createContext, useReducer } from "react";
import { messageVoteType, VoteContextType } from "../utiles/typeUtility";
import { User } from "../utiles/User";
import voteReducer from "./voteReducer";
type typeNode = {
  children: React.ReactNode;
};

type VoteContextPlusType = VoteContextType & {
  signUp: (user: User) => void;
};

const user = JSON.parse(localStorage.getItem("user")!);

const VoteContext = createContext({} as VoteContextPlusType);

const initalState: VoteContextType = {
  user: user ? user : null,
  users: [],
  isLogged: false,
  messageVote: {} as messageVoteType,
};

export const VoteProvider = ({ children }: typeNode) => {
  const [{ user, users, isLogged, messageVote }, dispatch] = useReducer(
    voteReducer,
    initalState
  );

  const signUp = (user: User) => {
    const findUser = users.find((item) => item.email === user.email);
    if (findUser) {
      console.log(`El ususario ${findUser.email} ya existe`);
      return;
    }
    dispatch({ type: "SIGN_UP", payload: user });
  };
  return (
    <VoteContext.Provider
      value={{ user, users, isLogged, messageVote, signUp }}
    >
      {children}
    </VoteContext.Provider>
  );
};

export default VoteContext;
