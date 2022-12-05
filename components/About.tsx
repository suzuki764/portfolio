import { Avatar, Button, Divider, List, Tag } from "antd";
import styles from "./styles/About.module.css";
import { LinkOutlined } from "@ant-design/icons";

export function About() {
  return (
    <div className={styles.center} id="about">
      <h2 className={styles.title}>About</h2>
      <Avatar
        size={{ xs: 128, sm: 128, md: 256, lg: 256, xl: 256, xxl: 256 }}
        src="./my-image.jpeg"
      />
      <p style={{ fontStyle: "italic" }}>脳波の実験中</p>
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
          <Tag color="gold">Angular</Tag>
          <Tag color="gold">Ionic</Tag>
          <Tag color="magenta">AWS</Tag>
          <Tag color="magenta">Arduino</Tag>
          <Tag color="magenta">GraphQL</Tag>
          <Tag color="blue">Go</Tag>
          <Tag color="magenta">GitHub Actions</Tag>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <Divider plain>使ったことある</Divider>
          <Tag color="blue">Haskel</Tag>
          <Tag color="blue">Rust</Tag>
          <Tag color="blue">Swift</Tag>
          <Tag color="blue">Kotlin</Tag>
        </div>

        <h3 className={styles.title}>Study</h3>
        <p>研究について</p>
        <h4>テーマ</h4>
        <p>
          『機械学習を用いたCT画像からのリンパ節検出とそのがん転移有無分類』
        </p>
        <h4>概要</h4>
        <p>
          機械学習でCT画像からリンパ節へのがん転移有無を診断するためには、リンパ節の検出とそのがん転移有無分類という2つのタスクが必要である。
          そのどちらか一方のみを行う先行研究は存在するが、それでは医療現場の実態に合わない。
          そこで、単一のU-Netモデルを用いて2つのタスクを同時に行う手法を提案し、先行研究の手法を組み合わせるよりも、労力を減らしつつ、精度が向上することを確認した。
        </p>

        <h4>実績など</h4>
        <List bordered size="small">
          <List.Item>
            <a href="https://sites.google.com/view/miru2022">MIRU2022</a>{" "}
            ポスター発表
          </List.Item>
          <List.Item>
            国際学会 <a href="http://kes2022.kesinternational.org/">KES2022</a>{" "}
            オンライン口述発表
          </List.Item>
          <List.Item>
            Procedia Computer Science 掲載
            <Button type="link" size="small" icon={<LinkOutlined />}>
              Link
            </Button>
          </List.Item>
        </List>
      </div>
    </div>
  );
}
