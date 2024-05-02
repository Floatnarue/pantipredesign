
'use client' ;

import Image from "next/image";
import { FC } from "react";




interface ListingCardProps {
    data : any ;
}


const ListingCard : FC<ListingCardProps> = ({data}) => {
    return (
        <div className="col-span-1 cursor-pointer group">
            <div className="flex flex-col gap-2 w-full ">
                <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                    <Image fill alt="Listing" src = {data.imageSrc} className="object-cover h-full w-full group-hover:scale-110 transition"/>
                    
                </div>
                <div className="font-semibold text-lg">
                    {data.topic}
                </div>
                <div className="font-light text-neutral-300">
                    Post by : {data.who}
                </div>
                <div className="flex flex-row items-center gap-1">
                    <div className="font-semibold">
                        {data.when}
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
} 





export default ListingCard ;