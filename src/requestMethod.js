import axios from "axios";

// const BASE_URL = "http://localhost:5000";
const HEROKU_URL = "https://stark-scrubland-62059.herokuapp.com";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGY5Y2NhZTlmYzgyYjhmNDhhMzVkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDA2NDQzNCwiZXhwIjoxNjU0MjM3MjM0fQ.oK4rzOXncrXDrAxeK8GAl-dwefnKhOlrKEHP3fcdke0";

export const publicRequest = axios.create({
  baseURL: HEROKU_URL,
});

export const userRequest = axios.create({
  baseURL: HEROKU_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});

//Heroku url : https://stark-scrubland-62059.herokuapp.com/
