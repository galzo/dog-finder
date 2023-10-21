import { FC, ReactNode } from "react";

export const RTLWrapper: FC<{ children: ReactNode }> = ({ children }) => {
    return <div dir="rtl">{children}</div>;
};
