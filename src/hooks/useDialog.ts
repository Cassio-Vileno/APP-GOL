import { useContext } from 'react';
import DialogContext from '../context/dialog.context';

export function useDialog() {
  const context = useContext(DialogContext);

  return context;
}
