import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import { Stars } from "../components/Stars";
import { MyAnchor } from "../components/MyAnchor";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kosuke Suzuki&#39;s Portfolio Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MyAnchor />
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
        <div className={styles.title}>
          <h1>
            Kosuke Suzuki&#39;s <br />
            Portfolio Site
          </h1>
        </div>
      </main>
      <footer className={styles.footer}>© 2022 Kosuke Suzuki</footer>
    </div>
  );
}
