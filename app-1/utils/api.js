import axios from 'axios';

const HOST = process.env.NODE_ENV === 'development' ?
  '192.168.3.166:3000' : '';

export const getPosts = () => axios.get(`http://${HOST}/api/posts`);
