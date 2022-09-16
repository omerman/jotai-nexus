import { Getter, Setter } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { useCallback, useEffect } from "react";

export let readAtom!: Getter;
export let writeAtom!: Setter;

const JotaiNexus = () => {
  const init = useAtomCallback(
    useCallback((get, set) => {
      readAtom = get;
      writeAtom = set;
    }, [])
  );

  useEffect(() => {
    init();
  }, []);

  return null;
};

export default JotaiNexus;
