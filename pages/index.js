import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../components/Container";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:3000/api/hello")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }

    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container />
    </div>
  );
}
