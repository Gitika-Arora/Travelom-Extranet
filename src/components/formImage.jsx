import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export default function Image({ className, src, ...props }) {

    const [hover, setHover] = useState(false)

    return (
        <div
            className={cn("relative w-32 h-fit", className)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            {...props}
        >
            <div className={cn("transition-opacity ease-in-out duration-100 absolute flex w-full h-full justify-center items-center icon", hover ? "opacity-100" : "opacity-0")}>
                <Trash2 size={35} color="red" />
            </div>
            <img src={src} />
        </div>
    )
}