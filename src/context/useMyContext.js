import { useContext } from 'react';
import { MyContext } from './MyContext';

const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error(`This component cannot be rendered outside the MyContext`);
  }
  return context;
};

export default useMyContext;
