'use client';
import {BiSearch} from 'react-icons/bi'
const Search =() => {
    return(
        <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="flex flex-row items-center justify-between ">
                <div className="text-sm text-white font-semibold px-6">
                    Home
                </div>
                <div className="hidden sm:block text-white text-sm font-semibold px-6 border-x-[1px] flex-1 text-center ">
                    MyFeed
                </div>
                <div className="hidden sm:block text-white text-sm font-semibold px-6 border-x-[1px] flex-1 text-center ">
                    PantipPick
                </div>
                <div className="hidden sm:block text-white text-sm font-semibold px-6 border-x-[1px] flex-1 text-center ">
                    PantipHitz
                </div>
                
                <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3 ">
                    <div className="hidden sm:block text-white">Explore</div>
                    <div className="p-2 bg-purple-500 rounded-full text-white">
                            <BiSearch size={18} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Search