import { useCallback, useMemo, useState } from "react";
import useToggle from '../useToggle/index';

export interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  set: (value: boolean) => void;
  toggle: () => void;
}

export default function useBoolean(defaultValue = false): [Boolean, Actions] {
  const [boolean, setBoolean] = useState<Boolean>(defaultValue);

  const actions:Actions = useMemo(() => {
    return {
      set: (v) => setBoolean(!!v),
      setTrue: () => setBoolean(true),
      setFalse : () => setBoolean(false),
      toggle: () => setBoolean(!boolean)
    }
  }, [])
  return [boolean, actions]
}

export let useBooleanFormToggle = () => {
  const [state, { toggle, set}] = useToggle();
  const actions: Actions = useMemo(() => {
    return {
      toggle,
      set: (v) => set(!!v),
      setTrue: () => set(true),
      setFalse : () => set(false),
    }
  }, [])
  return [state, actions]
}