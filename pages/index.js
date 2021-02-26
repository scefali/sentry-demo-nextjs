import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const sentryUrl = "http://35.188.112.188:9000"

  return (
    <div className={styles.container}>
      <Head>
        <title>Sentry Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sentry Demo Helloooooo
        </h1>

        <form action={`${sentryUrl}/demo/start/`}>
          <button>Start Demo</button>
        </form>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
