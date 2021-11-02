import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const withBasePage = (Component) => {
  const BasePage = (props) => {
    const [title, setTitle] = React.useState(
      "C & M - Computação, Programação e Matemática"
    );
    const [meta, setMeta] = React.useState(
      "Página com dezenas de exercícios de programação para iniciantes baseados em questões de matemática do ENEM."
    );

    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <meta name="description" content={meta} />
        </Head>
        <Component setTitle={setTitle} setMeta={setMeta} {...props} />
      </React.Fragment>
    );
  };

  return BasePage;
};

export const withBaseContentPage = (Component, message, submessage, height) => {
  const BasePage = (props) => {
    const [title, setTitle] = React.useState(
      "C & M - Computação, Programação e Matemática"
    );
    const [meta, setMeta] = React.useState(
      "Página com vários exercícios de programação para iniciantes baseados em questões de matemática do ENEM."
    );

    const [headerTitle, setHeaderTitle] = React.useState(message);
    const [headerSubTitle, setHeaderSubTitle] = React.useState(submessage);

    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <meta name="description" content={meta} />
        </Head>
        <div>
          <Header
            headerTitle={headerTitle}
            headerSubTitle={headerSubTitle}
            height={height}
          />
          <Component
            setTitle={setTitle}
            setMeta={setMeta}
            setHeaderTitle={setHeaderTitle}
            setHeaderSubTitle={setHeaderSubTitle}
            {...props}
          />
          <Footer />
        </div>
      </React.Fragment>
    );
  };

  return BasePage;
};

export default withBasePage;
