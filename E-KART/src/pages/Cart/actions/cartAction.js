import { ActionTypes } from "../../../redux/constants/action-type";



export const removeFromCartAction = (id) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: { id },
  };
};
