
import Image from "next/image"

interface ICardCompany {
    image : string,
    name : string,
    location : string 
}

export const CardCompany : React.FC<ICardCompany> = ({image, name, location}: ICardCompany) => {
    return (
    <div>
    <div className="w-full px-10 max-w-sm bg-white border border-slate-600 rounded-lg shadow">
    <div className="flex justify-end px-4 pt-4">
    </div>
    <div className="flex flex-col items-center pb-10">
        <Image className="w-24 h-24 mb-4 rounded-full shadow-lg" src={`${image}`} alt="Bonnie image" width={100} height={100}/>
        <h5 className="mb-1 text-xl font-medium text-slate-900 px-6">{name}</h5>
        <span className="text-sm text-slate-600 px-6">{location}</span>
        <div className="flex mt-4 md:mt-6">
        </div>
    </div>
</div>
    </div>


  )
}
