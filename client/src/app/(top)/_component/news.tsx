import { blackA } from "@radix-ui/colors";
import { FC } from "react";

type News = {
  date: string;
  title: string;
  authors: string[];
};

export const News: FC<{ news: News[] }> = ({ news }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {news.map((news, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            rowGap: "1em",
          }}
        >
          <div>{news.date}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  color: blackA.blackA9,
                }}
              >
                {news.title}
              </p>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontSize: "0.875rem",
                  gap: "0.5rem",
                  color: blackA.blackA9,
                }}
              >
                {news.authors.map((author, i) => (
                  <div key={i}>{author}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
