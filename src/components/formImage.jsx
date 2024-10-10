import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { Card } from 'primereact/card';

export default function Image({ className, src, footer, ...props }) {

    const [hover, setHover] = useState(false)

    return (
        <div
            className={cn("relative w-full h-fit border rounded", className)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            {...props}
        >
            <div className={cn("transition-opacity ease-in-out duration-100 absolute flex w-full h-full justify-center items-center icon", hover ? "opacity-100" : "opacity-0")}>
                <Trash2 size={35} color="red" />
            </div>
            <img src={src} />
            <div className="p-1 flex justify-end">
                <Trash2 color="red" />
            </div>

            {/*<div className="card flex justify-content-center">
                <Card footer={footer} className="md:w-25rem">
                    <img src={src} />
                </Card>
            </div>*/}
        </div>
    )
}