import SideImage from '@/app/landingOne/components/SideImage'
import AmeBio from '@/app/landingOne/components/AmeBio'

export default function Components(){
    return(
        <div className='relative max-sm:h-screen flex justify-center item-center group scale-50 hover:scale-90 duration-1000'>
            <div className='absolute place-self-center group-hover:opacity-0 duration-1000'>
                <img src='assets/images/Icon_A.gif' />
            </div>
            <div className='absolute md:w-1/2 place-self-center opacity-0 group-hover:opacity-100 p-4 z-10 max-sm:group-hover:-translate-y-full md:group-hover:-translate-x-1/2 duration-1000'>
                <SideImage srcPath='assets/images/ame.jpg'/>
            </div>
            <div className='p-4 md:w-1/2 opacity-0 group-hover:opacity-100 max-sm:group-hover:translate-y-1/3 md:group-hover:translate-x-1/2 duration-1000'>
                <AmeBio />
            </div>
        </div>
    )
}