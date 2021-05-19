import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-9832c.cloudfunctions.net/api",
  //"http://localhost:5001/clone-9832c/us-central1/api",
});

export default instance;
