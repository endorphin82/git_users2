import axios from "axios";

const API_PREFIX = "https://api.github.com";
const NUMBER_OF_PROFILES_TO_DISPLAY = 10;

export function getPopularUsersByLocation(location) {
  const params = {
    q: `location:${location}`,
    per_page: NUMBER_OF_PROFILES_TO_DISPLAY,
    access_token: process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN,
    token_type: "bearer",
    sort: "followers",
    order: "desc"
  };

  return axios.get(`${API_PREFIX}/search/users`, { params });
}

export default {
  getPopularUsersByLocation
};
