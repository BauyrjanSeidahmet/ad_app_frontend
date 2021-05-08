import axios from 'axios';
import store from "./store/configureStore";

const instance = axios.create({
    baseURL: 'http://localhost:8000'
});

instance.interceptors.request.use(req => {
    const users = store.getState().users;
    if (users.user) req.headers["Authentication"] = users.user.token;
    return req;
  });

export default instance;