import axios, { AxiosResponse } from "axios";
import { User, UserFormValues } from "./models/User";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = " https://localhost:44368/api";

axios.interceptors.request.use(async (config: any) => {
  const token = window.localStorage.getItem("jwtToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response as AxiosResponse;
  },
  (error) => {
    toast.error(error.response.data)
    return Promise.reject;
  }
);
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Account = {
  current: () => requests.get<User>("/account"),
  login: (user: UserFormValues) => requests.post<User>("/account/login", user),
  register: (user: UserFormValues) =>
    requests.post<User>("/account/register", user),
};

const Company = {
  list: () => axios.get<[]>("/companies").then(responseBody),
  create: (company: any) => requests.post<void>("/companies", company),
  update: (company: any) =>
    requests.put<void>("/companies", company),
  delete: (id: number) => requests.del<[]>(`/companies/${id}`),
};

const agent = {
  Account,
  Company,
};

export default agent;
