import { Avatar, Divider, Tag } from "antd";
import styles from "./styles/About.module.css";

export function About() {
  return (
    <div className={styles.center} id="about">
      <h2 className={styles.title}>About</h2>
      <Avatar
        size={{ xs: 128, sm: 128, md: 256, lg: 256, xl: 256, xxl: 256 }}
        src=""
      />
      <p style={{ marginTop: "2rem" }}>
        はじめまして。名古屋工業大学大学院の鈴木康介です。
        <br />
        このWebサイトには私の制作物などを載せていこうと思っています。
      </p>

      <h3 className={styles.title}>Skills</h3>
      <p>使える言語・フレームワーク・技術などの紹介</p>
      <div className={styles.tags}>
        <div style={{ marginBottom: "2rem" }}>
          <Divider plain>得意</Divider>
          <Tag color="magenta">TypeScript</Tag>
          <Tag color="magenta">React</Tag>
          <Tag color="magenta">Unity</Tag>
          <Tag color="magenta">C#</Tag>
          <Tag color="magenta">Kubernetes</Tag>
          <Tag color="magenta">Docker</Tag>
          <Tag color="magenta">Python</Tag>
          <Tag color="magenta">TensorFlow</Tag>
          <Tag color="magenta">Azure</Tag>
          <Tag color="magenta">GCP</Tag>
          <Tag color="magenta">Git</Tag>
          <Tag color="magenta">PostgreSQL</Tag>
          <Tag color="magenta">MySQL</Tag>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <Divider plain>そこそこ使える</Divider>
          <Tag color="magenta">Java</Tag>
          <Tag color="magenta">Flutter</Tag>
          <Tag color="magenta">Dart</Tag>
          <Tag color="magenta">C</Tag>
          <Tag color="magenta">C++</Tag>
          <Tag color="magenta">PHP</Tag>
          <Tag color="magenta">AWS</Tag>
          <Tag color="magenta">Arduino</Tag>
          <Tag color="magenta">GraphQL</Tag>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <Divider plain>使ったことある</Divider>
          <Tag color="magenta">Haskel</Tag>
          <Tag color="magenta">Go</Tag>
          <Tag color="magenta">Rust</Tag>
          <Tag color="magenta">Swift</Tag>
          <Tag color="magenta">Kotlin</Tag>
        </div>
      </div>
    </div>
  );
}
