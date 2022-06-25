export type SnanckType = {
  id: string;
  brand: string;
  description: string;
  image: string;
  inStock: number;
  product: string;
  votes: number;
};

type actionType =
  | { type: "GET_SNACKS"; payload: SnanckType[] }
  | { type: "LOADING" };

export type snackStateType = {
  snacksStock: SnanckType[];
  isLoading: boolean;
};



const snackReducer = (state: snackStateType, action: actionType) => {
  switch (action.type) {
    case "GET_SNACKS":
      return {
        ...state,
        snacksStock: action.payload,
        isLoading: false,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default snackReducer;
