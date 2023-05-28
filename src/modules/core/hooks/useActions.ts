import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import allActionsCreators from '../store/allActions';

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActionsCreators, dispatch);
};
