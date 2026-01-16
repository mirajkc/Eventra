"use client";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { store } from "./store";
import { getUserDetails } from "./slices/auth.slice";
import { useAppDispatch } from "./hooks";


function ReduxInitializer() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  return null;
}

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <ReduxInitializer />
      {children}
    </Provider>
  );
}
