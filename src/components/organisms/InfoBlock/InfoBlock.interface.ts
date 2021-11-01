import { HTMLAttributes } from "react";

export interface InfoBlockProps extends HTMLAttributes<HTMLElement> {
  image?: any;
  title?: string;
  checkBadge?: boolean;
  proBadge?: boolean;
  content?: string;
  link?: { label: string; url: string };
}
