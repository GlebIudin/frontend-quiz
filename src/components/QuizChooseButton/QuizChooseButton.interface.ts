import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface QuizChooseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  children: ReactNode;
  topic: string;
}
