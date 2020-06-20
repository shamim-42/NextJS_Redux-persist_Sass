import axios from 'axios';
import Cookie from 'js-cookie';
import Router from 'next/router';
import * as actionTypes from 'redux/actions/actionTypes';


export const createUserAction = (user) => {
  console.log(user);
  return {
    type: actionTypes.CREATE_USER,
    payload: user,
  };
};
