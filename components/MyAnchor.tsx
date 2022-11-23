import { Anchor } from "antd";
import styles from "./styles/MyAnchor.module.css";

const { Link } = Anchor;

export function MyAnchor() {
  const getCurrentAnchor = () => {
    const url = window.location.href;
    return url.replace(`${process.env.NEXT_PUBLIC_HOST}`, ".");
  };

  return (
    <div style={{ position: "absolute", top: 0, margin: "1rem", zIndex: 10 }}>
      <Anchor>
        <Link href="#top" title="Top" />
        <Link href="#about" title="About" />
        <Link href="#products" title="Products" />
        <Link href="#links" title="Links" />
      </Anchor>
    </div>
  );
}
