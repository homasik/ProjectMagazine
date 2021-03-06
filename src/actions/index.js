import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURE
} from './actionTypes';
import {fetchPhones as fetchPhonesApi} from '../API';

// eslint-disable-next-line import/prefer-default-export
export const fetchPhones = () => async dispatch => {
  dispatch({type: FETCH_PHONES_START});
  try {
    const phones = await fetchPhonesApi();
    dispatch({
      type:FETCH_PHONES_SUCCESS,
      payload: phones
    })
  } catch (err) {
    dispatch({
      type: FETCH_PHONES_FAILURE,
      payload: err,
      error: true
    })
  }
};