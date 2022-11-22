import { Anchor } from "antd";
import styles from "./styles/MyAnchor.module.css";

const { Link } = Anchor;

export function MyAnchor() {
  const getCurrentAnchor = () => {
    const url = window.location.href;
    return url.replace(`${process.env.NEXT_PUBLIC_HOST}`, ".");
  };

  return (
    <div style={{ position: "absolute", top: 0, margin: "1rem" }}>
      <Anchor getCurrentAnchor={getCurrentAnchor} className={styles.anchor}>
        <Link href="./" title="Top" />
        <Link href="./aboutme" title="About me" />
        <Link href="./products" title="Products">
          <Link href="./apps" title="Apps" />
          <Link href="./games" title="Games" />
        </Link>
      </Anchor>
    </div>
  );
}
