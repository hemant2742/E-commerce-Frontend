import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethod";

const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(loginFailure());
  }
};
export default login;
