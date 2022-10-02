import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export function createCtx<A>(defaultValue: A) {
  type UpdateType = Dispatch<SetStateAction<typeof defaultValue>>;

  const dataContext = createContext<A>(defaultValue);
  const apiContext = createContext<UpdateType>(() => defaultValue);

  const Provider = ({ children }: { children: ReactNode }) => {
    const [state, update] = useState(defaultValue);
    return (
      <dataContext.Provider value={state}>
        <apiContext.Provider value={update}>{children}</apiContext.Provider>
      </dataContext.Provider>
    );
  };
  return { Provider, dataContext, apiContext };
}
