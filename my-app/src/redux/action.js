import * as types from "./actionTypes";
import axios from "axios";

const fetchDataLoadingAction = () => ({type: types.FETCH_DATA_LOADING});

const fetchDataErrorAction = (payload) => ({type: types.FETCH_DATA_ERROR, payload});

const fetchDataSuccessAction = (payload) => ({type: types.FETCH_DATA_SUCCESS, payload});

let query;

const instance = axios.create({
    baseURL: `https://www.googleapis.com/customsearch/v1?key=AIzaSyAe005ik_fQe4kYoLughhdT3BjnKevfJCo&cx=67ade0795f3ca4de7&q=${query}`, // Replace with your API base URL
    timeout: 10000, // Timeout of 10 seconds
  });
  
  // Request interceptor
  instance.interceptors.request.use(function (config) {
    console.log('Starting Request', config);
    return config;
  }, function (error) {
    console.error('Request Error', error);
    return Promise.reject(error);
  });
  
  // Response interceptor
  instance.interceptors.response.use(function (response) {
    console.log('Response Received', response);
    return response;
  }, function (error) {
    console.error('Response Error', error);
    return Promise.reject(error);
  });

const getData = (query) => (dispatch) => {
    // console.log("inside.....")
    query = query;
    dispatch(fetchDataLoadingAction());
    return axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAe005ik_fQe4kYoLughhdT3BjnKevfJCo&cx=67ade0795f3ca4de7&q=${query}`).then(res => {
        // console.log("Response", res);
        dispatch(fetchDataSuccessAction(res));
    }).catch(err => {
        dispatch(fetchDataErrorAction(err));
    })
};

export {getData};