import { useContext } from 'react';
import StoreContext from '../contexts/store-context';

export function useStore() {
    return useContext(StoreContext);
}