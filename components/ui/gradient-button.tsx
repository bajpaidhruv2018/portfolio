"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import "./gradient-button.css"
import gsap from "gsap"

const gradientButtonVariants = cva(
    [
        "gradient-button",
        "inline-flex items-center justify-center",
        "rounded-[11px] min-w-[132px] px-9 py-4",
        "text-base leading-[19px] font-[500] text-white",
        "font-sans font-bold",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        "disabled:pointer-events-none disabled:opacity-50",
    ],
    {
        variants: {
            variant: {
                default: "",
                variant: "gradient-button-variant",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface GradientButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
    asChild?: boolean
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
    ({ className, variant, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        const buttonRef = React.useRef<HTMLButtonElement>(null)

        const combinedRef = (node: HTMLButtonElement) => {
            // Handle both refs (parent ref and local ref)
            if (typeof ref === 'function') ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
            (buttonRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
        };

        const handleMouseEnter = () => {
            if (buttonRef.current) {
                gsap.to(buttonRef.current, {
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        };

        const handleMouseLeave = () => {
            if (buttonRef.current) {
                gsap.to(buttonRef.current, {
                    scale: 1,
                    boxShadow: "none",
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        };

        return (
            <Comp
                className={cn(gradientButtonVariants({ variant, className }))}
                ref={combinedRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                {...props}
            />
        )
    }
)
GradientButton.displayName = "GradientButton"

export { GradientButton, gradientButtonVariants }
