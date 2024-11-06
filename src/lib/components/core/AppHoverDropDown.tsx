import type { ReactNode } from "react";

type PositionType = "BOTTOM-LEFT" | "BOTTOM-RIGHT" | "TOP-LEFT" | "TOP-RIGHT";

interface AppHoverDropDownPropType {
    menuButton: ReactNode;
    children: ReactNode;
    position?: PositionType;
}

export default function AppHoverDropDown({
    menuButton,
    children,
    position = "BOTTOM-LEFT",
}: AppHoverDropDownPropType) {
    return (
        <button className="h-full white-space-none cursor-pointer transition-all duration-150 relative overflow-visible [&>div.hover-drop-down-menu-content]:hover:block">
            {menuButton}

            <div
                className={`hover-drop-down-menu-content animate__animated animate__fadeIn hidden absolute ${
                    position === "BOTTOM-LEFT"
                        ? "left-0"
                        : position === "BOTTOM-RIGHT"
                        ? "right-0"
                        : ""
                } z-[99] divide-y divide-gray-100 shadow min-w-44`}
            >
                {children}
            </div>
        </button>
    );
}
