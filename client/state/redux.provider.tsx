"use client";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { store } from "./store";
import { getUserDetails } from "./slices/auth.slice";
import { useAppDispatch } from "./hooks";
import "../i18n/index";



function ReduxInitializer() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserDetails());

    // Sync language from localStorage after hydration to avoid mismatch
    const savedLanguage = localStorage.getItem("i18nextLng");
    if (savedLanguage) {
      import("../i18n/index").then((module) => {
        if (module.default.language !== savedLanguage) {
          module.default.changeLanguage(savedLanguage);
        }
      });
    }
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
