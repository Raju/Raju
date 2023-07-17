import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import SampleSlice from './SampleSlice';

const REDUXSTORENAME = `REDUX STORE DATABASE`,
  loadState = () => {
    try {
      const serializedState = localStorage.getItem ( REDUXSTORENAME );

      return serializedState
      // eslint-disable-next-line no-restricted-syntax
        ? ( console.log ( `%c Loading Store Data`, `color: #0d6efd; font-weight: bolder;` ), JSON.parse ( serializedState ) )
        : console.error ( `%c Store is Unavailable`, `color: #E10600; font-weight: bolder;` );
    } catch ( error ) {
      console.error ( error );

      return error;
    }
  },
  saveState = ( { getState } ) => next => ( action ) => {
    try {
      console.warn ( `%c ACTION`, `color: #FFE900; font-weight: bolder;`, action );
      console.log ( `%c Saving Store Data`, `color: #08FF08; font-weight: bolder;` );

      return next ( action ) && localStorage.setItem ( REDUXSTORENAME, JSON.stringify ( getState () ) );
    } catch ( error ) {
      console.error ( error );

      return error;
    }
  },
  store = configureStore ( {
    reducer : {
      sample : SampleSlice,
    },
    middleware     : [ thunk, saveState ],
    devTools       : true,
    preloadedState : loadState (),
    // enhancers: StoreEnhancer[] | ConfigureEnhancersCallback,
  } );

store.subscribe ( () => store.getState () );

export default store;
