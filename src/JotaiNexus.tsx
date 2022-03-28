import { useEffect } from "react";
import { Getter, Setter, Atom, WritableAtom } from "jotai";
import { useAtomCallback } from "jotai/utils";

let _get!: Getter;
let _set!: Setter;

const JotaiNexus: React.FC = () => {
  const initReader = useAtomCallback((get, set) => {
    _get = get;
    _set = set;
  });

  useEffect(() => {
    initReader();
  }, [initReader]);

  return null;
};

export default JotaiNexus;

export const readAtom = <A extends Atom<any>>(
  a: A
): A extends Atom<infer Data> ? Data : never => _get(a);

export const writeAtom = <A extends WritableAtom<any, any>>(
  a: A,
  update: A extends WritableAtom<any, infer Update> ? Update : never
) => a.write(_get, _set, update);
