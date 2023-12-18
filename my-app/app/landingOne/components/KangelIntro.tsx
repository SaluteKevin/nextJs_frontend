import SideImage from '@/app/landingOne/components/SideImage'
import KangelBio from '@/app/landingOne/components/KangelBio'
export default function Components(){
    return(
        <div className='relative group flex item-center justify-center scale-50 hover:scale-90 duration-1000'>
                <div className='p-4 w-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1/2 duration-1000'>
                <KangelBio />
                </div>
                <div className='absolute p-4 w-1/2 z-10 group-hover:translate-x-1/2 duration-1000'>
                <SideImage srcPath='assets/images/kangel.jpg'/>
                </div>
        </div>
    )
}