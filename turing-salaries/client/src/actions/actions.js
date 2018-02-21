import { getData } from '../helpers/API';


export const getAllData = () => async dispatch => {
  const newData = await getData();
  dispatch(fetchDataSuccess(newData));
};

export const fetchDataSuccess = data => {
  return {
    type: 'DATA_SUCCESS',
    data
  };
};
