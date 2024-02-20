const SHOW_MODAL = "SHOW_MODAL";
const HIDE_MODAL = "HIDE_MODAL";

export const showModal = (payload) => ({
  type: SHOW_MODAL,
  payload,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});

const initialState = {
  isVisible: false,
  message: "",
};

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isVisible: true,
        message: action.payload.message,
        onCanel: action.payload.onCancel,
        onConfirm: action.payload.onConfirm,
        showCancelButton: action.payload.showCancelButton,
      };
    case HIDE_MODAL:
      return {
        ...initialState,
        isVisible: false,
      };
    default:
      return state;
  }
}

export default modalReducer;
