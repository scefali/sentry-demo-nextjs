import Head from "next/head";
import styles from "../styles/Home.module.css";

const sentryUrl =
  process.env.NEXT_PUBLIC_SENTRY_URL || "https://try.sentry-demo.com";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sentry Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sentry Demo Helloooooo</h1>

        <form action={`${sentryUrl}/demo/start/`} method="post">
          <input name="accepted_tracking" type="hidden" value="1" />
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
