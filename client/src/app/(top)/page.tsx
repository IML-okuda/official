"use client";
import * as styles from "@/styles";
import { blackA } from "@radix-ui/colors";
import { FC } from "react";

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

const ResearchTopics: FC<{ researchTopics: ResearchTopic[] }> = ({
  researchTopics,
}) => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {researchTopics.map((topic, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateRows: "subgrid",
              gridRow: "span 3",
              rowGap: "1rem",

              border: `1px solid ${blackA.blackA6}`,
              borderRadius: "5px",
              padding: "1rem",
            }}
          >
            <h3>{topic.title}</h3>
            <p
              style={{
                fontSize: "0.875rem",
              }}
            >
              {topic.description}
            </p>
            <p
              style={{
                fontSize: "0.875rem",
              }}
            >
              KeyWord: hoge fuga piyo
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

const Page = () => {
  return (
    <main
      className={styles.layout}
      style={{
        padding: "3rem 1rem",
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
        <div
          style={{
            gap: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "0.75rem",
              }}
            >
              <div>2023/3</div>
              <div>
                <div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "bold",
                      color: blackA.blackA9,
                    }}
                  >
                    Effects on Selective Removal of Adversarial Examples for
                    Noisy X-ray Images
                  </p>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      paddingTop: "0.5rem",
                      gap: "0.5rem",
                      fontSize: "0.875rem",
                      color: blackA.blackA9,
                    }}
                  >
                    <div>Haruto Namura,</div>
                    <div>Tatsuki Itasaka,</div>
                    <div>Masahiro Okuda</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          gap: "2.5rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2>Research Topics</h2>
        <ResearchTopics researchTopics={researchTopics} />
      </section>
    </main>
  );
};

export default Page;
