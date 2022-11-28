import type { NextPage } from "next";

import { Page } from "../components/Page";
import { Button } from "../components/Button";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Page>
        <Button label="Ruth Borgonha" />
      </Page>
    </>
  );
};

export default Home;
