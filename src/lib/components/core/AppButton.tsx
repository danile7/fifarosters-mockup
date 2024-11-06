'use client'

import type {MouseEvent, ReactNode} from "react";
import {Button} from "@chakra-ui/react";

interface AppButtonType {
    title?: string;
    className?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    children: ReactNode;
    active?: boolean;
    disabled?: boolean;
}

export default function AppButton(props: AppButtonType) {
    const {
        title = "",
        onClick,
        children,
        active = false,
        disabled = false
    } = props;

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        // Prevent onClick execution if button is disabled
        if (disabled) {
            return;
        }
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <Button
            fontWeight={active ? "bold" : "normal"}
            fontSize="sm"
            variant={active ? "solid" : "outline"}
            colorScheme={active ? "green" : "gray"}
            isDisabled={disabled}
            onClick={handleClick}
            title={title}
            _disabled={{
                bg: "gray.300",        // Background color for disabled state
                color: "gray.500",      // Text color for disabled state
                borderColor: "gray.400", // Border color for disabled state
                cursor: "not-allowed",   // Change the cursor when disabled
                _hover: { bg: "gray.300" }, // Prevent hover effect when disabled
                fontWeight: "normal"
            }}
        >
            {children}
        </Button>
    );
}
