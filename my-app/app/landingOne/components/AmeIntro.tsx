import SideImage from '@/app/landingOne/components/SideImage'
import AmeBio from '@/app/landingOne/components/AmeBio'

export default function Components(){
    return(
        <div className='relative flex justify-center item-center group scale-50 hover:scale-90 duration-1000'>
            <div className='absolute w-1/2 p-4 z-10 group-hover:-translate-x-1/2 duration-1000'>
            <SideImage srcPath='assets/images/ame.jpg'/>
            </div>
            <div className='p-4 w-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1/2 duration-1000'>
            <AmeBio />
            </div>
        </div>
    )
}