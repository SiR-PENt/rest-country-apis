
import Head from "next/head";

export default function PageTitle({ title }) {

  return (
    <>
      <Head>
        <title>{`${title}`}</title>
      </Head>
    </>
  );
}
