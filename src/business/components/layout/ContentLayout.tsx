import React from "react";

const ContentLayout = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: string;
}) => {
  return (
    <div
      className={`max-w-8xl mx-auto px-4 md:px-12 lg:px-24 py-12 lg:py-[100px] ${style}`}
    >
      {children}
    </div>
  );
};

export default ContentLayout;
