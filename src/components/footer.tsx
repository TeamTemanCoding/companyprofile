import Image from "next/image"
export default function Footer(){
    return(
        <div className="flex flex-row gap-4 text-white items-center my-32">
            <div className="">
                <Image width={200} height={200} src="/logoTC.png" alt=""></Image>
            </div>
            <div>
                <span className=" font-bold text-2xl">Contact</span>
                <div className=" flex flex-col gap-4 underline underline-offset-[14px] mt-[40px]">
                    <div className="flex gap-4 flex-row">
                        <Image width={30} height={20} src="/section/Email.png" alt=""></Image>
                        <span>Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=teamtemancoding@gmail.com&&" className="transition-all duration-200 ease-in hover:text-purple-600 hover:scale-105 hover:decoration-white">teamtemancoding@gmail.com</a></span>
                    </div>
                    <div className="flex gap-4 flex-row mt-7">
                        <Image width={30} height={20} src="/section/WhatsApp.png" alt=""></Image>
                        <span>WhatsApp :<a href="https://wa.me/+6275683643764" className="transition-all duration-200 ease-in hover:text-purple-600 hover:scale-105 hover:decoration-white">+62 756 8364 3764</a></span>
                    </div>
                </div>
            </div>
            <div className="ml-[35px]">
                <span className=" font-bold text-2xl">Services</span>
                <div className="flex flex-col mt-5 gap-1">
                    <span className="transition-all duration-200 ease-in hover:text-purple-600 hover:scale-105">Custom website creation services</span>
                    <span className="transition-all duration-200 ease-in hover:text-purple-600 hover:scale-105">E-Commerce web creation services</span>
                    <span className="transition-all duration-200 ease-in hover:text-purple-600 hover:scale-105">UI/UX Design</span>
                    <span className="transition-all duration-200 ease-in hover:text-purple-600 hover:scale-105">Landing page creation services</span>
                    <span className="transition-all duration-200 ease-in hover:text-purple-600 hover:scale-105">Mobile-Friendly Website Creation</span>
                </div>
            </div>
            <div className=" ml-[35px]">
                <span className=" font-bold text-2xl">Our Location</span>
                <a href="https://www.google.com/maps"><Image width={210} height={210} src="/section/GMaps.png" alt="" className="mt-5 transition-all duration-200 ease-in hover:scale-105"></Image></a>
            </div>
        </div>
    )
}