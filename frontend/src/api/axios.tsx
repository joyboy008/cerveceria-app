import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const getAllBreweries = async (token: string) => {
  if (!token) return;

  return api.get("/breweries/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getBreweriesCalifornia = async (token: string) => {
  if (!token) return;

  return api.get("/breweries/state", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getBreweriesById = async (token: string, id: string) => {
  if (!token) return;

  return api.get(`/breweries/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const postRegister = async (username: string, password: string) => {
  return api.post("/auth/register", {
    username,
    password,
  });
};

export const postLogin = async (username: string, password: string) => {
  return api.post("/auth/login", {
    username,
    password,
  });
};
