import axios from "axios";

const api = axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    // 563492ad6f917000010000018cececa94cbd4dcba75c64cd8413fc21
    // 563492ad6f917000010000019750b207459f471bb14eab5846f72b3e
    Authorization: "563492ad6f917000010000018cececa94cbd4dcba75c64cd8413fc21",
  },
});

export default api;
