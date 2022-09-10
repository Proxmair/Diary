import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: "LOGIN_REQUEST" });
      const { data } = await axios.post(
        `/api/v1/login`,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: data.message });
    } catch (error) {
      dispatch({ type: "LOGIN_FAIL", payload: error.response.data.message });
    }
};
export const register = (name,email, password) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_REQUEST" });
    const { data } = await axios.post(
      `/api/v1/register`,
      { name,email, password },
      { headers: { "Content-Type": "application/json" } }
    );
    dispatch({ type: "REGISTER_SUCCESS", payload: data.message });
  } catch (error) {
    dispatch({ type: "REGISTER_FAIL", payload: error.response.data.message });
  }
};
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOAD_USER_REQUEST",
    });
    const { data } = await axios.get("/api/v1/me");
    dispatch({
      type: "LOAD_USER_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LOAD_USER_FAIL",
      payload: error.response.data.message,
    });
  }
};
export const getUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_USER_REQUEST",
    });
    const { data } = await axios.get("/api/v1/user");
    dispatch({
      type: "GET_USER_SUCCESS",
      payload: data.subjects,
    });
  } catch (error) {
    dispatch({
      type: "GET_USER_FAILURE",
      payload: error.response.data.message,
    });
  }
};
export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT_REQUEST",
    });

    const { data } = await axios.get("/api/v1/logout");

    dispatch({
      type: "LOGOUT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LOGOUT_FAILURE",
      payload: error.response.data.message,
    });
  }
};
