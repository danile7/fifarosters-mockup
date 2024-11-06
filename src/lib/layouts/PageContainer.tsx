import type {ReactNode} from "react";

export default function PageContainer({children}: { children: ReactNode }) {
    return <div
        className="w-full sm:w-[748px] lg:w-[968px]  xl:w-[1168px] text-gray-main">
        {children}
    </div>
}