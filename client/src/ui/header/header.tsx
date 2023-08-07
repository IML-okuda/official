import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";

type Props = ComponentPropsWithoutRef<"header"> & {
  leftChildren?: ReactNode;
  rightChildren?: ReactNode;
};

const _Header = forwardRef<HTMLElement, Props>(
  ({ leftChildren, rightChildren, ...props }, ref) => {
    return (
      <header
        style={{
          position: "sticky",
          top: 0,
          height: "3.5rem",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 2rem",
          backgroundColor: "rgba(55, 55, 55, 0.3)",
          opacity: 0.8,
          backdropFilter: "blur(2rem)",
        }}
        {...props}
        ref={ref}
      >
        {/* left */}
        <div>{leftChildren}</div>
        {/* right */}
        <div>{rightChildren}</div>
      </header>
    );
  }
);

_Header.displayName = "Header";

export const Header = _Header;
