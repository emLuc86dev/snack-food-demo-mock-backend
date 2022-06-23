import { User } from "./User";

export type MessageType = {
    info: string
    success?: string | null,
    error?: string | null,
    suggest?: string | null,
    
  }

  export type SelectionType = {
    id: number;
    name: string;
    amount: number;
  };

  export type formDataType = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    loggedAt: Date | null
  };

 export type checkListType = {
    name: string;
    value: string;
    checked: boolean;
  };
  
  export type messageVoteType = {
    info: string;
    text: string;
  };
  
  export type VoteContextType = {
    user: User;
    users: User[];
    isLogged: boolean;
    messageVote: messageVoteType;
  };