'use client'

import type {ChangeEvent, ReactNode} from "react";
import {useEffect, useState} from 'react';
import {Input, InputGroup, InputLeftElement, InputRightElement, Spinner} from "@chakra-ui/react";
import {IoIosSearch} from "react-icons/io";
import type {SystemStyleObject} from "@chakra-ui/styled-system";

type InputType = "text" | "password" | "number";

interface AppInputPropType {
    type?: InputType;
    name?: string;
    value?: string | number | undefined;
    placeholder?: string;
    title?: string;
    className?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onFinishTyping?: (value: string | number | undefined) => void;  // New prop for detecting finished typing
    min?: number;
    max?: number;
    readOnly?: boolean;
    loading?: boolean;
    colorScheme?:string;
    focusBorderColor?:string;
    border?:string;
    outline?:string;
    icon?:ReactNode;
    sx?:SystemStyleObject;
}

export default function AppInput(props: AppInputPropType) {

    const {
        type = "text",
        name = "",
        value,
        placeholder = "",
        title = "",
        onChange,
        className,
        min,
        max,
        readOnly = false,
        onFinishTyping,  // The callback when user stops typing
        loading = false,
        icon,
        sx,
        ...etc
    } = props;

    const [inputValue, setInputValue] = useState(value ?? "");
    const [typingTimer, setTypingTimer] = useState<NodeJS.Timeout | null>(null);
    const debounceTime = 850; // Set debounce time to 0.85 second

    // Handle input changes
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);

        if (onChange) {
            onChange(e);  // Trigger the original onChange if provided
        }

        // Clear any previously set timer
        if (typingTimer) {
            clearTimeout(typingTimer);
        }

        // Set a new timer to trigger the "finished typing" action
        const newTimer = setTimeout(() => {
            if (onFinishTyping) {
                onFinishTyping(newValue); // Call the onFinishTyping callback
            }
        }, debounceTime);

        setTypingTimer(newTimer); // Store the timer
    };

    useEffect(() => {
        setInputValue(value ?? "");
    }, [value]);

    // Clean up the timer on unmount
    useEffect(() => {
        return () => {
            if (typingTimer) {
                clearTimeout(typingTimer);
            }
        };
    }, [typingTimer]);

    return (
        <InputGroup>
            {icon && (
                <InputLeftElement pointerEvents="none">
                    {icon}
                </InputLeftElement>
            )}
            <Input
                className={`${className} ${loading ? 'pr-8' : 'pr-4'} duration-400 w-full rounded-md border pl-4 py-2 outline-none transition-all focus:border-blue-light focus:shadow-focus-blue`}
                type={type}
                name={name}
                value={inputValue}
                placeholder={placeholder}
                title={title}
                onChange={handleInputChange}  // Use the debounced input handler
                min={min}
                max={max}
                readOnly={readOnly}
                {...etc}
            />
            {loading && (
                <InputRightElement pointerEvents="none">
                    <Spinner size="sm" sx={{color: '#FFD841'}}/>
                </InputRightElement>
            )}
        </InputGroup>

    );
}
