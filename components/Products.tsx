import { Button, Card, Tag, Row, Col, Space } from "antd";
import { DownloadOutlined, YoutubeFilled } from "@ant-design/icons";
import styles from "./styles/Products.module.css";

export function Products() {
  return (
    <div className={styles.center} id="products">
      <h2 className={styles.title}>Products</h2>
      <p>制作物の紹介</p>

      <Row gutter={16}>
        <Col xs={24} sm={24} md={12}>
          <Card title="Eater" style={{ marginBottom: "1rem" }}>
            <p>
              大学祭で展示するために部活動で作成したゲームです。最大4人でプレイできます。
              <br />
              ステージ上のポイントを集めるも良し、他のプレイヤーを倒してポイントを奪うも良し。
              アイテムをうまく使うのが勝利のカギです。
            </p>
            <Button type="link" icon={<DownloadOutlined />}>
              <a href="https://drive.google.com/file/d/1aHU5Cq1kJGdTNE7Tb61Qr0m8AfWbZrc5/view?usp=sharing">
                Download
              </a>
            </Button>
            <div className={styles.tags}>
              <Tag color="gold">Unity</Tag>
              <Tag color="blue">C#</Tag>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="名工大からの脱出" style={{ marginBottom: "1rem" }}>
            <p>
              大学祭で展示するために部活動で作成したOculus
              Rift向けVRゲームです。
              <br />
              名工大を舞台にしたVR脱出ゲームです。Oculus
              Touchコントローラーを用いて直感的にアイテムを操作することができ、ゲームに慣れていない方にも好評でした。
              名工大を360°カメラで撮影した画像を使用しており、本当に名工大に閉じ込められてしまったかのような不思議な体験を味わうことができます。
            </p>
            <Button type="link" icon={<DownloadOutlined />}>
              <a href="https://drive.google.com/file/d/1IB0qldy9tKXMeViqCgAQvyp-yB41CGbC/view?usp=share_link">
                Download
              </a>
            </Button>
            <div className={styles.tags}>
              <Tag color="gold">Unity</Tag>
              <Tag color="blue">C#</Tag>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="怪異からの脱出" style={{ marginBottom: "1rem" }}>
            <p>
              オンライン大学祭で展示するために部活動で作成したゲームです。1人用。
              あなたは目を覚ますと怪異の潜む夜の学校に閉じ込められていました。
              怪異から逃げながら、謎を解き明かして脱出しましょう。
            </p>
            <Button type="link" icon={<DownloadOutlined />}>
              <a href="https://drive.google.com/file/d/1s3zjZaEM_ftrEyBBgXvy0MD5Vu2bzefY/view?usp=sharing">
                Download
              </a>
            </Button>
            <div className={styles.tags}>
              <Tag color="gold">Unity</Tag>
              <Tag color="blue">C#</Tag>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="KASAnaru" style={{ marginBottom: "1rem" }}>
            <p>
              ハッカソンで作成した、同じ大学の学生同士の相傘マッチングアプリです。
              <br />
              傘の使い捨てを減らしSDGsに貢献しながら、学生間の交流の場を提供します。
              <br />
              Hack Aichi 2021にて企業賞を受賞しました。
            </p>
            <Button
              type="link"
              icon={<YoutubeFilled style={{ marginRight: 5 }} />}
            >
              <a href="https://youtu.be/mh_Rr_Gm6BE?t=3940">プレゼン動画</a>
            </Button>
            <div className={styles.tags}>
              <Tag color="blue">TypeScript</Tag>
              <Tag color="gold">Angular</Tag>
              <Tag color="gold">Ionic</Tag>
              <Tag color="magenta">Azure</Tag>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="マイルド翻訳" style={{ marginBottom: "1rem" }}>
            <p>
              ハッカソンで作成した、テキストを親しみやすく変換するアプリです。
              <br />
              「言葉だけじゃ伝わらない思いがあります。マイルド翻訳は、絵文字で思いやりのあるテキストコミュニケーションを提供します。」
              <br />
              Hack Day 2022にてFun賞を受賞しました。
            </p>
            <Button
              type="link"
              icon={<YoutubeFilled style={{ marginRight: 5 }} />}
            >
              <a href="https://youtu.be/7by-7JRb6yk?t=10518">プレゼン動画</a>
            </Button>
            <div className={styles.tags}>
              <Tag color="blue">Python</Tag>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="みまもセル" style={{ marginBottom: "1rem" }}>
            <p>
              複数端末で連携することが特徴の子供見守りサービスです。ランドセル取り付け型のIoTデバイス、管理者用Webアプリ、保護者用スマートフォンアプリによって構成されています。
              <br />
              既存の見守りサービスのような個人での使用ではなく、学校・自治体単位で使用し、情報を共有することに焦点を当てています。
              位置情報をもとに保護者向けアプリに帰宅通知や緊急通知を送る基本機能に加え、複数の端末からの情報を蓄積することができるので、通学路の検討などに活かすことができます。
            </p>
            <Button
              type="link"
              icon={<YoutubeFilled style={{ marginRight: 5 }} />}
            >
              <a href="https://youtu.be/kxLct4XnflM">プレゼン動画</a>
            </Button>
            <div className={styles.tags}>
              <Tag color="blue">TypeScript</Tag>
              <Tag color="gold">React</Tag>
              <Tag color="gold">React Native</Tag>
              <Tag color="blue">Python</Tag>
              <Tag color="blue">C++</Tag>
              <Tag color="magenta">Spresense</Tag>
            </div>
          </Card>
        </Col>
      </Row>
      <div style={{ marginTop: "1rem" }}>and more</div>
    </div>
  );
}
