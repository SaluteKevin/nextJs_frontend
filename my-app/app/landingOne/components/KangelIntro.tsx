import SideImage from '@/app/landingOne/components/SideImage'
import KangelBio from '@/app/landingOne/components/KangelBio'
export default function Components(){
    return(
        <div className='relative max-sm:h-screen group flex item-center justify-center scale-50 hover:scale-90 duration-1000'>
                <div className='absolute place-self-center group-hover:opacity-0 duration-1000'>
                    <img src='assets/images/Icon_K.gif' />
                </div>
                <div className='absolute md:w-1/2 place-self-center opacity-0 group-hover:opacity-100 p-4 z-10 max-sm:group-hover:translate-y-1/4 md:group-hover:-translate-x-1/2 duration-1000'>
                    <KangelBio />
                </div>
                <div className='p-4 md:w-1/2 opacity-0 group-hover:opacity-100 max-sm:translate-y-1/2 max-sm:group-hover:-translate-y-0 md:group-hover:translate-x-1/2 duration-1000'>
                    <SideImage srcPath='assets/images/kangel.jpg'/>
                </div>
        </div>
    )
}