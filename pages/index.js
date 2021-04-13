import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const sentryUrl =
  process.env.NEXT_PUBLIC_SENTRY_URL || "https://try.sentry-demo.com";

export default function Home() {
  const router = useRouter()
  const { skip_buffer } = router.query;
  return (
    <div className={styles.container}>
      <Head>
        <title>Sentry Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sentry Show & Tell</h1>

        <form action={`${sentryUrl}/demo/start/`} method="post">
          {/* <input name="accepted_tracking" type="hidden" value="0" /> */}
          <input name="scenario" type="hidden" />
          <input name="skip_buffer" type="hidden" value={skip_buffer} />
          <button
            style={{
              "text-transform": "uppercase",
              background: "#e1557c",
              color: "#ffffff",
              border: "none",
              "border-radius": "20px",
              "margin-top": "20px",
              padding: "4px",
            }}
            className="start-demo"
          >
            Start Demo
          </button>
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
