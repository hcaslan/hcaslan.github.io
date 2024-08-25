// actions.ts
export const SET_HEADER_OUT_OF_VIEW = "SET_HEADER_OUT_OF_VIEW";

export const setHeaderOutOfView = (isOutOfView: boolean) => ({
    type: SET_HEADER_OUT_OF_VIEW,
    payload: isOutOfView,
});
