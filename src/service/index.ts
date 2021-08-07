import axios from 'axios';
import { Developer } from '../types/Developer';
import { Params } from '../types/Params';
import { Repository } from '../types/Repository';

export const fetchRepos = (params: Params) => () =>
  axios
    .get<Repository[]>('https://gh-trending-api.herokuapp.com/repositories', {
      params,
    })
    .then((res) => res.data);

export const fetchDevs = (params: Params) => () =>
  axios
    .get<Developer[]>('https://gh-trending-api.herokuapp.com/developers', {
      params,
    })
    .then((res) => res.data);
