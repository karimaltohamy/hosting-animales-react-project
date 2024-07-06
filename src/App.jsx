import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const [mobile, setMobile] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (window.innerWidth <= 900) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  return <RouterProvider router={router} />
  
}

export default App;
