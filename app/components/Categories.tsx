import Image from "next/image"

const Categories = () => {
    return(
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4  flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-600 hover:opacuty-300">
                <Image
                    src="/icn_category.png"
                    alt="Category - Beach"
                    width={20}
                    height={20}
                /> 

                <span className='text-xs'>Beach</span>
            </div>

            <div className="pb-4  flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-600 hover:opacuty-300">
                <Image
                    src="/icn_villa.png"
                    alt="Category - Villa"
                    width={20}
                    height={20}
                /> 

                <span className='text-xs'>Villas</span>
            </div>

            <div className="pb-4  flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-600 hover:opacuty-300">
                <Image
                    src="/icn_cabaña.png"
                    alt="Category - Cabins"
                    width={20}
                    height={20}
                /> 

                <span className='text-xs'>Cabins</span>
            </div>

            <div className="pb-4  flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-600 hover:opacuty-300">
                <Image
                    src="/icn_casa.png"
                    alt="Category - Tiny homes"
                    width={20}
                    height={20}
                /> 

                <span className='text-xs'>Tiny homes</span>
            </div>
        </div>
    )
}

export default Categories