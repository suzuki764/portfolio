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
          <Tag color="blue">TypeScript</Tag>
          <Tag color="gold">React</Tag>
          <Tag color="gold">Unity</Tag>
          <Tag color="blue">C#</Tag>
          <Tag color="magenta">Kubernetes</Tag>
          <Tag color="magenta">Docker</Tag>
          <Tag color="blue">Python</Tag>
          <Tag color="gold">TensorFlow</Tag>
          <Tag color="magenta">Azure</Tag>
          <Tag color="magenta">GCP</Tag>
          <Tag color="magenta">Git</Tag>
          <Tag color="magenta">PostgreSQL</Tag>
          <Tag color="magenta">MySQL</Tag>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <Divider plain>そこそこ使える</Divider>
          <Tag color="blue">Java</Tag>
          <Tag color="gold">Flutter</Tag>
          <Tag color="blue">Dart</Tag>
          <Tag color="blue">C</Tag>
          <Tag color="blue">C++</Tag>
          <Tag color="blue">PHP</Tag>
          <Tag color="magenta">AWS</Tag>
          <Tag color="magenta">Arduino</Tag>
          <Tag color="magenta">GraphQL</Tag>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <Divider plain>使ったことある</Divider>
          <Tag color="blue">Haskel</Tag>
          <Tag color="blue">Go</Tag>
          <Tag color="blue">Rust</Tag>
          <Tag color="blue">Swift</Tag>
          <Tag color="blue">Kotlin</Tag>
        </div>
      </div>
    </div>
  );
}
