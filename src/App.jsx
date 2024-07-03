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

  return mobile ? (
    <RouterProvider router={router} />
  ) : (
    <p className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {t("being processing now")}
    </p>
  );
}

export default App;
