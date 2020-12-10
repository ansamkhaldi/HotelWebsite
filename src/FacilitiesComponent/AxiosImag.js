import React from 'react';
import './facilities.css';
import axios from 'axios';
import { VscLoading } from 'react-icons/vsc';
import { useEffect, useReducer } from 'react';

const initialState = {
  Image: [],
  loading: false,
  error: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, loading: true };
    case 'success':
      return { ...state, loading: false, Image: action.payload };
    case 'error':
      return { ...state, loading: false, error: action.error };
    default:
      throw new Error('Invalid action type');
  }
}

export default function AxiosImag() {
  // console.log(`${process.env.REACT_APP_UNSPLASH_KEY}`);
  const [state, dispatch] = useReducer(reducer, initialState);

  const { loading, error, Image } = state;
  // REACT_APP_UNSPLASH_KEY
  useEffect(() => {
    dispatch({ type: 'loading' });
    axios
      .get(
        'https://api.unsplash.com/photos?page=5&per_page=6&query=hotel&client_id=blx3tWvA-FllWL1OAWE46bJyd4uEpzrSOpJHDccuo4I'
      )
      .then((res) => {
        dispatch({ type: 'success', payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: 'error', error: 'Invalid action' });
      });
  }, []);

  return (
    <div className="facilities-container">
      {!!loading && state.Image.length === 0 && (
        <div className="loadingDiv">
          <VscLoading size="40" />
        </div>
      )}
      {!!error && <div className="errorDiv">somthing went wrong</div>}
      {!loading &&
        !error &&
        state.Image.map((item, index) => (
          <figure>
            <img
              src={item.urls.regular}
              key={item.id}
              alt={item.alt_description}
            />
            <figcaption>{`${item.alt_description}`.toUpperCase()}</figcaption>
          </figure>
        ))}
    </div>
  );
}
