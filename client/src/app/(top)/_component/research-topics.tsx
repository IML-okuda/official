"use client";
import { blackA } from "@radix-ui/colors";
import Image from "next/image";
import { FC } from "react";

export type ResearchTopic = {
  title: string;
  description: JSX.Element;
  tags: string[];
  figs?: { src: string; caption: string }[];
};

export const ResearchTopics: FC<{ researchTopics: ResearchTopic[] }> = ({
  researchTopics,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
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
              rowGap: "1.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(20px)",
              border: `1px solid ${blackA.blackA3}`,
              borderRadius: "5px",
              padding: "1.5rem 1.0rem",
            }}
          >
            <h3>{topic.title}</h3>
            <div>
              <div style={{ fontSize: "0.875rem", lineHeight: "1.75rem" }}>
                {topic.description}
              </div>
              {/* 図 */}
              {topic.figs && topic.figs.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "2rem",
                    flexWrap: "wrap",
                    padding: "1.5rem 1rem",
                  }}
                >
                  {topic.figs.map((fig, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        alignContent: "center",
                        justifyContent: "center",
                        margin: "0 auto",
                      }}
                    >
                      <Image
                        style={{ margin: "0 auto" }}
                        src={fig.src}
                        width={500}
                        height={500}
                        layout="intrinsic"
                        alt={fig.caption}
                      />
                      <p
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: "bold",
                          color: blackA.blackA9,
                          textAlign: "center",
                        }}
                      >
                        {fig.caption}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: "bold",
                color: blackA.blackA9,
                display: "flex",
                flexDirection: "row",
                gap: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              {topic.tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    border: `1px solid ${blackA.blackA3}`,
                    borderRadius: "1.5rem",
                    height: "fit-content",
                    textAlign: "center",
                    justifyContent: "center",
                    padding: "0.5rem 1.0rem",
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
