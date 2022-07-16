import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:4000";

export const getAllProducts = () => {
  return axios.get(`${BASE_URL}/api/products`);
};

export const getProductsById = (id) => {
  return axios.get(`${BASE_URL}/api/products/${id}`);
};

export const login = (name, password) => {
  const bodyJSON = {
    name: name,
    password: password,
  };

  return axios.post(`${BASE_URL}/api/users/login`, bodyJSON);
};

export const register = (name, address, phone_number, password) => {
  const bodyJSON = {
    name: name,
    address: address,
    phone_number: phone_number,
    password: password,
  };

  return axios.post(`${BASE_URL}/api/users`, bodyJSON);
};

export const deleteProduct = (id) => {
  const token = Cookies.get("token");

  const headerConfig = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return axios.delete(`${BASE_URL}/api/products/${id}`, headerConfig);
};

export const addProduct = (name, quantity, category, price, image, deskription) => {
  const bodyJSON = {
    name: name,
    quantity: quantity,
    category: category,
    price: price,
    image: image,
    deskription: deskription,
  };

  const token = Cookies.get("token");

  const headerConfig = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return axios.post(`${BASE_URL}/api/products`, bodyJSON, headerConfig);
};

export const updateProduct = (id, name, quantity, category, price, image, description) => {
  const bodyJSON = {
    name: name,
    quantity: quantity,
    category: category,
    price: price,
    image: image,
    description: description,
  };
  const token = Cookies.get("token");

  const headerConfig = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return axios.put(`${BASE_URL}/api/products/${id}`, bodyJSON, headerConfig);
};

export const searchAllProducts = async (query) => {
  return await axios.get(`${BASE_URL}/api/products?q=${query}`);
}