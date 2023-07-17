import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = ({ api = axios, method = 'get', url, data = null, config = null }) => {
  const [ response, setResponse ] = useState( [] );
  const [ error, setError ] = useState( { isError: false, type: '', message: '' } );
  const [ isLoading, setIsLoading ] = useState( true );

  axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

  useEffect(() => {
    (async () => {
      try {
        const responseData = await api[ method ](url, JSON.parse( config ), JSON.parse( data ));

        setResponse(responseData.data);
      } catch (error) {
        const errorHandlers = {
          Error: () => setError({
            isError: true,
            type: error.constructor.name,
            message: 'A general error occurred.'
          }),
          InternalError: () => setError({
            isError: true,
            type: error.constructor.name,
            message: 'An internal error occurred.'
          }),
          RangeError: () => setError({
            isError: true,
            type: error.constructor.name,
            message: 'A number is outside the allowable range of values.'
          }),
          ReferenceError: () => setError({
            isError: true,
            type: error.constructor.name,
            message: 'A reference to a non-existent variable was made.'
          }),
          SyntaxError: () => setError({
            isError: true,
            type: error.constructor.name,
            message: 'There is a syntax error in the code.'
          }),
          TypeError: () => setError({
            isError: true,
            type: error.constructor.name,
            message: 'A value is not of the expected type.'
          }),
          URIError: () => setError({
            isError: true,
            type: error.constructor.name,
            message: 'A URI handling function was used in a wrong way.'
          }),
          Warning: () => setError({
            isError: true,
            type: error.constructor.name,
            message: 'A warning occurred.'
          }),
        };

        const errorHandler = errorHandlers[error.constructor.name];

        if (errorHandler) {
          return errorHandler();
        }

        setError({
          isError: true,
          type: error.constructor.name,
          message: 'A general error occurred.'
        });
      } finally {
        setIsLoading(false);
      }
    })();
	}, [method, url, data, config]);

  return { response, error, isLoading };
};

export default useAxios;
