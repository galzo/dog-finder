import { FC, ReactNode } from "react";

const RTLWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <div dir="rtl">{children}</div>;
};

export default RTLWrapper;
