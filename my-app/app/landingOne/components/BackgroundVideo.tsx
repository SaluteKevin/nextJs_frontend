interface VideoPropmt{
    srcPath: string;
}

export default function Components(prompt: VideoPropmt){
    return(
        <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none opacity-30">
                <source src={prompt.srcPath} type="video/mp4" />Your browser does not support the video tag.
        </video>
    )
}