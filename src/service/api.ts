import axios, { AxiosResponse } from 'axios';
import { User } from '../interfaces/User';
import { Plan } from '../interfaces/Plan';

const Api = {
  baseUrl: 'http://localhost:3000',

  getUsers: async (): Promise<AxiosResponse<User[]>> => {
    return axios.get(`${Api.baseUrl}/users`);
  },

  removeUser: async (userId: string) => {
    return axios.delete(`${Api.baseUrl}/users/${userId}`);
  },

  authenticate: async (
    user: string,
    password: string
  ): Promise<AxiosResponse<User>> => {
    return axios.post(`${Api.baseUrl}/authenticate`, {
      user,
      password,
    });
  },

  getPlans: async (): Promise<AxiosResponse<Plan[]>> => {
    return axios.get(`${Api.baseUrl}/plans`);
  },
};

export default Api;
