import { Button, Card, Tag, Row, Col, Space } from "antd";
import { DownloadOutlined, YoutubeFilled } from "@ant-design/icons";
import styles from "./styles/Products.module.css";

export function Products() {
  return (
    <div className={styles.center} id="products">
      <h2 className={styles.title}>Products</h2>
      <p>制作物の紹介（工事中）</p>

      <Row gutter={16}>
        <Col xs={24} sm={24} md={12}>
          <Card title="Eater" style={{ marginBottom: "1rem" }}>
            <p>
              学祭で展示するために部活動で作成したゲームです。最大4人でプレイできます。
              <br />
              ステージ上のポイントを集めるも良し、他のプレイヤーを倒してポイントを奪うも良し。
              アイテムをうまく使うのが勝利のカギです。
            </p>
            <Button type="link" icon={<DownloadOutlined />}>
              Download
            </Button>
            <div>
              <Tag color="gold">Unity</Tag>
              <Tag color="blue">C#</Tag>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="名工大からの脱出">
            <p>
              学祭で展示するために部活動で作成したOculus Rift向けVRゲームです。
              <br />
              名工大を舞台にしたVR脱出ゲームです。Oculus
              Touchコントローラーを用いて直感的にアイテムを操作することができ、ゲームに慣れていない方にも好評でした。
              名工大を360°カメラで撮影した画像を使用しており、本当に名工大に閉じ込められてしまったかのような不思議な体験を味わうことができます。
            </p>
            <Button type="link" icon={<DownloadOutlined />}>
              Download
            </Button>
            <div>
              <Tag color="gold">Unity</Tag>
              <Tag color="blue">C#</Tag>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="怪異からの脱出">
            <p>
              部活動で作成したゲームです。1人用。
              あなたは目を覚ますと怪異の潜む夜の学校に閉じ込められていました。
              怪異から逃げながら、謎を解き明かして脱出しましょう。
            </p>
            <Button type="link" icon={<DownloadOutlined />}>
              Download
            </Button>
            <div>
              <Tag color="gold">Unity</Tag>
              <Tag color="blue">C#</Tag>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="KASAnaru">
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
            <div>
              <Tag color="blue">TypeScript</Tag>
              <Tag color="gold">Angular</Tag>
              <Tag color="gold">Ionic</Tag>
              <Tag color="magenta">Azure</Tag>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="マイルド翻訳">
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
            <div>
              <Tag color="blue">Python</Tag>
            </div>
          </Card>
        </Col>
      </Row>
      <div style={{ marginTop: "1rem" }}>and more</div>
    </div>
  );
}
