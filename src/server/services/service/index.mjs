import fetch from "node-fetch";

const POST_OPTIONS = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export class Service {
  async post(url, options) {
    const response = await fetch(url, { ...POST_OPTIONS, ...options });

    if (response.status !== 200) {
      throw Error(`Response ${response.status}`);
    }

    const data = await response.json();

    return data;
  }
}

export default Service;
