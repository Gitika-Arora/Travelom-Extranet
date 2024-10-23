import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { Image } from 'primereact/image';

export default function FormImage({ src, alt, onDelete }) {

    return (
        <div className={cn("relative w-full h-fit border rounded")}>
            <Image src={src} alt={alt} preview />
            <div className="flex justify-end">
                <div onClick={onDelete} className="p-1 cursor-pointer">
                    <Trash2 color="red" />
                </div>
            </div>
        </div>
    )
}