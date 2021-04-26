import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar option={open ? "w-screen absolute z-10" : "w-0"} />
      <CloseIcon
        className="absolute bottom-5 left-5 cursor-pointer lg:invisible z-20"
        onClick={() => setOpen(!open)}
      />
      <div className="flex-1">
        <Header openCallback={open} />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
