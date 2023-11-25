"use client";
import * as styles from "@/styles";
import { News, ResearchTopic, ResearchTopics } from "./_component";

const researchTopics: ResearchTopic[] = [
  // {
  //   title: "高精細テクスチャ識別",
  //   description: "",
  //   tags: ["高精細画像 AI"],
  // },
  {
    title: "AIの癖を読み解く",
    description: (
      <>
        ディープラーニングの構成要素であるニューラルネットワークは様々な“癖”を持っています．
        例えば畳み込みニューラルネットワークは物体の大域的形状よりも局所的特徴を捉える能力に優れています(*2)．
        また，入力画像に目に見えない少しの揺らぎを与えるだけで，AIの判断を狂わせる事ができます(*3)．
        我々は様々な手法でこのような
        <strong>
          ニューラルネットワークの癖を読み解き，システムの安定化，認識精度の向上を達成
        </strong>
        し，SNS/Webシステム解析や時系列データ予測などの分野に応用しています．
      </>
    ),
    tags: ["高精細画像 AI", "テクスチャバイアス", "Adversarial Attack"],
    figs: [
      {
        src: "/fig/adversarial-attack.png",
        caption: "数式画像にアタックをかけて数式OCRに誤認識させる",
      },
      {
        src: "/fig/kaeru.png",
        caption:
          "画像分解を用いてニューラルネットワークの“癖”をコントロールすることができる",
      },
    ],
  },
  {
    title: "ゼロショット画像復元",
    description: (
      <>
        機械学習を用いてノイズやボケなどで劣化した観測画像から元の綺麗な画像を復元するには，一般に劣化画像と劣化のない原画像のペアが大量に必要となります．
        しかし実際のシチュエーションにおいて，このような原画像を用意するのは現実的ではありません．
        この問題を解決するために，
        <strong>
          我々は，教師画像のみならず，学習データを一切必要としないゼロショット学習法
        </strong>
        を考案し，様々なデノイズ，ボケ除去，超解像などの復元タスクに応用する研究を行っています．
        学習データが一切なくても，学習データがある場合と同等の精度で復元が可能になります．
      </>
    ),
    tags: ["高精細画像 AI", "画像復元", "ゼロショット学習"],
    figs: [
      {
        src: "/fig/zero-shot.png",
        caption:
          "画素を意図的に欠損させ，その画素を周りの画素で埋めるように学習をすると，1 枚の画像のみで欠損復元が可能となる．",
      },
    ],
  },
  {
    title: "人流データ・経済データ解析",
    description: (
      <>
        AIによる時空間解析は，近年，多くの産業や研究分野でその有用性が証明されています．
        特に，「AIを用いた人流データ解析，経済データ解析，時空間データ解析」は，都市計画，交通，マーケティング，など，多くの応用分野で極めて重要です．
        <strong>
          我々は，スパースコーディングと呼ばれる数理的手法や深層学習を用いて，人々の移動パターンや集まり方の分析，市場動態や消費者行動の予測，などの研究を行っています．
        </strong>
        これにより，より効率的な交通システムや公共施設の配置や，製品戦略の最適化が可能になります．
      </>
    ),
    tags: ["時空間", "グラフ"],
  },
  {
    title: "色彩の定量化",
    description: (
      <>
        AIは形状や模様の特徴を把握するのは得意な反面，色の差異を識別するのはあまり得意ではありません．
        また，人間は二つの画像を見比べて，色彩の構成が類似しているか否かを直感的に判断することが可能ですが，これもまたAIにとってみれば難しいタスクなのです．
        <strong>
          我々は色構成をグラフ構造で表現し，機械学習手法を適用することで，色彩の分布や相対的な位置関係を考慮した色彩構成の類似度を算出する，新たな手法を開発しました．
        </strong>
        この手法は，従来の手法では捉えきれなかった色彩構成の類似度をより精緻に評価することが可能となります．
      </>
    ),
    tags: ["色彩構成", "グラフ"],
    figs: [
      {
        src: "/fig/color-similarity.png",
        caption: "色彩構成の類似度の定量化",
      },
    ],
  },
  {
    title: "医療画像解析",
    description: (
      <>
        MRIやCT画像などの高次元データは内部に豊富な情報が包含されているが，その情報を抽出するのはチャレンジングな問題です．
        医療画像から様々な特徴量を抽出して，画像診断に応用する技術はRadiomicsと呼ばれ，近年注目を集めています．
        <strong>
          本研究室では，スパースコーディングや深層学習技術をRadoimicsに応用し，画像高精細化による診断精度の向上や脳腫瘍患者の術後生存期間予測に取り組んでいます．
        </strong>
      </>
    ),
    tags: ["高次元データの知識抽出", "医療画像"],
    figs: [
      {
        src: "/fig/radiomics.png",
        caption: "Radiomicsの概要",
      },
    ],
  },
  {
    title: "主観のデータ化",
    description: (
      <>
        これまでの画像分類は，画像に，車，イヌ，などのラベルをつけて，画像とラベルの関係を学習することで，分類を可能にしていました．
        しかし，この方法ではその画像の持つ「雰囲気」やそのシーンがもつ「状況」などの，ラベルで表現することが難しい分類タスクに適用することはできません．
        <strong>
          我々はこのような曖昧で直接ラベル付けが困難な画分類を可能にする手法を研究しています．これにより従来にはない，新しい観点の画像検索や推薦が可能になります．
        </strong>
      </>
    ),
    tags: ["高次元データの知識抽出"],
  },
];

const Page = () => {
  return (
    <main
      className={styles.layout}
      style={{
        padding: "5rem 1rem",
        gap: "2.5rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <section>
        <h2
          style={{
            paddingBottom: "2rem",
          }}
        >
          News
        </h2>
        <News
          news={[
            {
              date: "2023/3",
              title:
                "Effects on Selective Removal of Adversarial Examples for Noisy X-ray Images",
              authors: ["Haruto Namura", "Tatsuki Itasaka", "Masahiro Okuda"],
            },
          ]}
        />
      </section>

      <section
        style={{
          gap: "2.5rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2>研究内容 / Research</h2>
        <ResearchTopics researchTopics={researchTopics} />
      </section>
    </main>
  );
};

export default Page;
