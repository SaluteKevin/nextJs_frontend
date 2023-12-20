import BackgroundVideo from '@/app/landingOne/components/BackgroundVideo'

export default function Components(){
    return(
        <div className="relative flex bg-scroll items-center justify-center h-screen overflow-hidden">
            <div className="relative z-30 p-5 w-1/2 md:text-2xl text-white bg-black bg-opacity-50 rounded-xl">
            “<span className='font-bold text-[#2bd9ff]'>P-Chan</span>, I'll follow all your orders perfectly and I promise you I'll become the best streamer. 'Coz if not, I...I think I'll just break and fall apart.”
            <br></br>— <span className='italic text-red-500'>Ame</span>
            </div>
            <BackgroundVideo srcPath='/assets/videos/bg_video.mp4' />
        </div>
    )
}