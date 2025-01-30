import { ReactNode } from "react";

export interface IPageContainerProps {
  className?: string;
  children: ReactNode;
  withNavbar?: boolean;
  withFooter?: boolean;
}

export interface ISectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export interface IServices {
  title: string;
  description: string;
  icon: string;
}
