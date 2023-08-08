"use client";

import * as styles from "@/styles";
import { blackA } from "@radix-ui/colors";

type ResearchTopic = {
  title: string;
  description: string;
};

const researchTopics: ResearchTopic[] = [
  {
    title: "深層学習",
    description: "Deep Learning",
  },
  {
    title: "時系列データ解析",
    description: "Time Series Data Analysis",
  },
  {
    title: "高次元データからの知識抽出",
    description: "Knowledge Extraction from High-Dimensional Data",
  },
  {
    title: "高ダイナミックレンジ(HDR)画像処理",
    description: "High Dynamic Range (HDR) Image Processing",
  },
  {
    title: "3次元画像処理",
    description: "3D Imaging",
  },
  {
    title: "医用画像のためのマルチコントラスト画像復元",
    description: "Multi-contrast Image Restoration for Medical Imaging",
  },
];

const Page = () => {
  return (
    <main
      className={styles.layout}
      style={{
        height: "120vh",
      }}
    >
      <div
        style={{
          paddingTop: "3rem",
        }}
      >
        {/* TODO: grid layout*/}
        <div
          style={{
            gap: "3rem",
            display: "flex",
            flexDirection: "column",
            color: blackA.blackA12,
          }}
        >
          <h2>Research Topics</h2>
          {researchTopics.map((topic, i) => (
            <div key={i}>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
