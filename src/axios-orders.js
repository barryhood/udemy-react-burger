import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-91e96.firebaseio.com/'
});
// const instance = 'a';
export default instance;
