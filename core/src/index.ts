import axios from 'axios';

const baseURL = 'https://randomuser.me';
const instance = axios.create({ baseURL });

export const apiClient = {
  randomName: {
    async get(): Promise<string> {
      try {
        const response = await instance.get('/api');
        const result = response.data.results;

        if (result) {
          const name = `${result[0].name.first} ${result[0].name.last}`;
          return name;
        }

        return 'No name :(';
      } catch (error) {
        console.log('error :>> ', error);
        return 'No name :(';
      }
    },
  },
};
