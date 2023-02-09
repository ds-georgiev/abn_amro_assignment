import axios from "axios";

async function mockAPICall() {
  const response = await axios.get("https://api.tvmaze.com/shows");
  return response.status === 200;
}

export default mockAPICall();
