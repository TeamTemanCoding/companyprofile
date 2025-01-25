'use client'
import Image from "next/image"
export default function Nav(){
    return(
        <div className="hidden bg-black/5 backdrop-blur-md flex flex-row w-screen fixed z-50 space justify-between items-center">
            <Image width={50} height={50} src="/logoTC.png" alt="" className=" ml-3"></Image>
            <div className=" flex flex-row text-white border-2 p-2 font-bold px-7 border-purple-950 rounded-full border-solid gap-4">
                <button onClick={() => {}}>Home</button>
                <button onClick={() => {}}>About</button>
                <button onClick={() => {}}>Services</button>
                <button onClick={() => {}}>Contact</button>
            </div>
            <div>
                <button className=" bg-purple-700 w-32 h-10  rounded-full text-white mr-3">Order</button>
            </div>
        </div>
    )
}