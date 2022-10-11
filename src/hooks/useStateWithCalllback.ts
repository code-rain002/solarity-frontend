import { useState, useCallback, useRef, useEffect } from 'react';



export const useStateWithCalllback = (iniitialState) => {
  const [state, setState] = useState(iniitialState);

  const cbRef = useRef();

  const updateState = useCallback((newState, cb) => {
    cbRef.current = cb;

    setState((prev) => {
      return typeof newState === 'function' ? newState(prev) : newState;
    })

  }, []);


  useEffect(() => {
    if (cbRef.current) {
      (cbRef as any).current(state);
      cbRef.current = null;
    }
  }, [state]);

  return [state, updateState]
}