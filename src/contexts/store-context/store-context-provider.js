import React from 'react';
import PropTypes from 'prop-types';
import { axiosInstance } from './api-helper';
import StoreContext from './store-context';
import axios from 'axios';


function StoreProvider({ children }) {
  const apiUrl = process.env.API_URL; 

  const api = axiosInstance({
    apiUrl,
    onError: (error) => {
      if (error.response && [400, 404, 409, 403].includes(error.response.status) ) {
        const { data: errorData, message: defaultMessage } = error.response.data;
        const { code } = errorData || {};
        error.displayMessage = code ? (`${code}`, { ...errorData }) : defaultMessage;
      }
      return error;
    },
  }); 

  const actions = {
    fetchEvents: async () => {
      const response = await api.get('/events');
      return response;
    },

    fetchUsers: async (params) => {
      const users = await api.get('/users', {
        params,
      });
      return users;
    },

    uploadFile: async (data) => {
        const {
          file, title,
        } = data;
        const result = await api('/s3/url', {
          method: 'POST',
          params: {
            title,
          },
          data: file,
        });
  
        return result;
      },
  }

  return <StoreContext.Provider value={actions}>{children}</StoreContext.Provider>;
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreProvider;
