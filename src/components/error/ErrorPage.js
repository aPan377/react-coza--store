import { useRouteError } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <div className="error--page">
        <h1>Aaaah!</h1>
        <p>Unfortunately, something went wrong</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <Footer />
    </>
  );
}
