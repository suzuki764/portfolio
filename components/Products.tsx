import { Button, Card, Tag, Row, Col, Space } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
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
              学祭で展示するために作成したゲームです。最大4人でプレイできます。
              <br />
              ステージ上のポイントを集めるも良し、他のプレイヤーを倒してポイントを奪うも良し。
              アイテムをうまく使うのが勝利のカギです。
            </p>
            <Button type="link" icon={<DownloadOutlined />}>
              Download
            </Button>
            <p>担当箇所：プログラマ</p>
            <Tag color="gold">Unity</Tag>
            <Tag color="blue">C#</Tag>
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
            <p>担当箇所：プログラマ</p>
            <Tag color="gold">Unity</Tag>
            <Tag color="blue">C#</Tag>
          </Card>
        </Col>
      </Row>
      <div>and more</div>
    </div>
  );
}
