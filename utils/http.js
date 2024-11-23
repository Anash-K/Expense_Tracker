import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../store/auth_context";



const FIREBASE_API = {
  BASE_URL: "https://reactnative-learning-d9bdf-default-rtdb.firebaseio.com",
};

const Auth_Key = "AIzaSyBBUp8nkkMiJ0_2jQBK8CQhpAwzZe3-JtY";

export const storeExpense = async (expenseData) => {
  try {
    const response = await axios.post(
      `${FIREBASE_API.BASE_URL}/expenses.json`,
      expenseData
    );
    return response.data.name;
  } catch (error) {
    console.error("Error storing expense:", error);
    throw error;
  }
};

export const getExpenses = async () => {
  try {
    const response = await axios.get(`${FIREBASE_API.BASE_URL}/expenses.json`);
    if (!response.data) return [];

    return Object.keys(response.data).map((key) => ({
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    }));
  } catch (error) {
    console.error("Error fetching expenses:", error);
    throw error;
  }
};

export const updateExpenseData = async (id, expenseData) => {
  try {
    await axios.put(
      `${FIREBASE_API.BASE_URL}/expenses/${id}.json`,
      expenseData
    );
    return { success: true };
  } catch (error) {
    console.error("Error updating expense:", error);
    throw error;
  }
};

export const deleteExpenseData = async (id) => {
  try {
    await axios.delete(`${FIREBASE_API.BASE_URL}/expenses/${id}.json`);
    return { success: true };
  } catch (error) {
    console.error("Error deleting expense:", error);
    throw error;
  }
};

const authentication = async (mode, email, password) => {
  let AUTH_URL = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=`;

  const response = await axios.post(`${AUTH_URL}${Auth_Key}`, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  let token = response.data.idToken

  return token;
};

export const createUser = (email, password) => {
  return authentication("signUp", email, password);
};

export const login = (email, password) => {
  return authentication("signInWithPassword", email, password);
};
