import Intro from '@/app/landingOne/components/Intro'
import AmeIntro from '@/app/landingOne/components/AmeIntro'
import KangelIntro from '@/app/landingOne/components/KangelIntro'
import Gallery from '@/app/landingOne/components/Gallery'
export default function landingOne(){

    return(
            <div>
                <Intro />
                <AmeIntro />
                <div className='w-full bg-[#f94bad] h-1'></div>
                <KangelIntro />
                <div className='w-full bg-[#f94bad] h-1 mb-12'></div>
                <Gallery />
                
            </div>
    )
}