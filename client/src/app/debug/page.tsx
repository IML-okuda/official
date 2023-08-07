"use client";

import * as styles from "@/styles";
import { Button } from "@/ui";

const Page = () => {
  return (
    <main className={styles.layout}>
      <h1>Page</h1>
      <div style={{ height: "150vh" }}>
        <Button>aaa</Button>
      </div>
    </main>
  );
};

export default Page;
