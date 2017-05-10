/* eslint-disable import/prefer-default-export */
import $ from 'jquery';

import ReactOnRails from 'react-on-rails';

import { EXAMPLE, REQUEST_BEGIN, REQUEST_SUCCESS, REQUEST_ERROR } from '../constants/mainAppConstants';

const apiUrl = '/api/v1/';


export const requestBegin = () => ({
  type: REQUEST_BEGIN,
});

export const requestSuccess = (data, keyword) => ({
  type: REQUEST_SUCCESS,
  data,
  keyword,
});

export const requestError = (data, keyword) => ({
  type: REQUEST_ERROR,
  data,
  keyword,
});

export const callApi = (fetchUrl, method, keyword, data = {}) => (dispatch) => {
  dispatch(requestBegin());
  return $.ajax({
    url: apiUrl + fetchUrl,
    dataType: 'json',
    method,
    data,
    beforeSend: function(xhr){xhr.setRequestHeader('X-CSRF-Token', ReactOnRails.getStore('mainAppStore').getState().$mainAppStore.get('csrfToken'));},
    success(data) {
      dispatch(requestSuccess(data, keyword));
    },
    error(data) {
      dispatch(requestSuccess(data, keyword));
    },
  });
};
