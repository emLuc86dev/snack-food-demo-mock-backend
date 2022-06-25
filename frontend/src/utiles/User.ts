export type User = {
  firstName: string;
  lastName: string;
  email: string
  phone: string;
  message?: string | null;
  createdAt: Date 
  votedAt?: Date | null
};

 type formDataType = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    loggedAt: Date | null
  };