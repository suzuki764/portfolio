import { GithubOutlined, LinkedinFilled } from "@ant-design/icons";
import styles from "./styles/Links.module.css";
import Link from "next/link";
import { Space } from "antd";

export function Links() {
  return (
    <div className={styles.center} id="links">
      <h2 className={styles.title}>Links</h2>
      <p>関連リンク</p>
      <Space size={20}>
        <Link href="https://github.com/suzuki764">
          <GithubOutlined style={{ fontSize: "5rem" }} />
        </Link>
        <Link href="">
          <LinkedinFilled style={{ fontSize: "5rem" }} />
        </Link>
      </Space>
    </div>
  );
}
