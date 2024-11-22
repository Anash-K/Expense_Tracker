import axios from "axios";
import { getFormateDate } from "./formateDate";

const Auth_Key = "AIzaSyBBUp8nkkMiJ0_2jQBK8CQhpAwzZe3-JtY";

const base_url = "https://reactnative-learning-d9bdf-default-rtdb.firebaseio.com";

const auth_url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="

export const storeExpense = async (expenseData) => {
  const response =  await axios.post(
    `${base_url}/expenses.json`,
    expenseData
  );

  const id = response.data.name;
  return id;
};

export const getExpenses = async () => {
 const response =  await axios.get(
    `${base_url}/expenses.json`
  );

  let expense = [];

  for(let key in response.data){
    const exportData = {
        id: key,
        amount : response.data[key].amount,
        date: new Date(response.data[key].date),
        description: response.data[key].description
    };

    expense.push(exportData);
  }

  return expense;
};


export const updateExpenseData = async (id,expenseData) =>{
    const response =  await axios.put(`${base_url}/expenses/${id}.json`,expenseData);
    return response;
};

export const deleteExpenseData = async (id) =>{
    const response = await axios.delete(`${base_url}/expenses/${id}.json`);
    return response;
};

export const createUser =  async (email,password) =>{
  const  response = await axios.post(`${auth_url}${Auth_Key}`,{
    email:email,
    password:password,
    returnSecureToken:true
  });
  return  response;
}