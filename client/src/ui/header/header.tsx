"use client";
import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { headerStyle } from "./header.css";

type Props = Omit<ComponentPropsWithoutRef<"header">, "className"> & {
  leftChildren?: ReactNode;
  rightChildren?: ReactNode;
};

const _Header = forwardRef<HTMLElement, Props>(
  ({ leftChildren, rightChildren, ...props }, ref) => {
    return (
      <header className={headerStyle} {...props} ref={ref}>
        {/* left */}
        <div>{leftChildren}</div>
        {/* right */}
        <div style={{ paddingRight: "1rem" }}>{rightChildren}</div>
      </header>
    );
  }
);

_Header.displayName = "Header";

export const Header = _Header;
