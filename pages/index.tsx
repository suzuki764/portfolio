import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import { Stars } from "../components/Stars";
import { Anchor } from "antd";

const { Link } = Anchor;

export default function Home() {
  const getCurrentAnchor = () => "./";

  return (
    <div>
      <Head>
        <title>Kosuke Suzuki&#39;s Portfolio Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
        <div className={styles.title}>
          <h1>Kosuke Suzuki&#39;s Portfolio Site</h1>
        </div>
        <div style={{ position: "absolute", top: 0, margin: "1rem" }}>
          <Anchor getCurrentAnchor={getCurrentAnchor}>
            <Link href="./" title="Top" />
            <Link href="./aboutme" title="About Me" />
            <Link href="./products" title="Products">
              <Link href="./apps" title="Apps" />
              <Link href="./games" title="Games" />
            </Link>
          </Anchor>
        </div>
      </main>
      <footer className={styles.footer}>© 2022 Kosuke Suzuki</footer>
    </div>
  );
}
