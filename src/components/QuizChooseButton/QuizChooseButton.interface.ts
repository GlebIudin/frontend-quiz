import type { ButtonHTMLAttributes, ReactNode } from "react"

export interface QuizChooseButtonProps {
    onClick?: () => void;
    children: ReactNode;
    text: string;
}