import { useCallback, useMemo, useState } from "react";

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