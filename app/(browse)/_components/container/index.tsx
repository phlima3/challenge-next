"use client";
interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="flex-1">{children}</div>;
};
