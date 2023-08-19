import { useContext } from 'react';
import { StoreContext } from './store-context';

export const useStore = () => {
  return useContext(StoreContext);
}
