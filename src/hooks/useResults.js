import React from 'react';
import {useState, useEffect} from 'react';
import Yelp from '../api/Yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errMessage, setErrMessage] = useState('');

  const searchApi = async searchTerm => {
    try {
      const response = await Yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrMessage('SomeThing Went Wrong');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, errMessage, results];
};
