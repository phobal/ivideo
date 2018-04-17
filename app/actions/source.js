import * as api from '../utils/fetch';

export function getAllVideoSource() {
  return (dispatch) => {
    api.source.getAllVideoSource().then(res => {
      return dispatch({
        type: 'GETALLVIDEOSOURCE',
        payload: res.data
      });
    });
  }
}