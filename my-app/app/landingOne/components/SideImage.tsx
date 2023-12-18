interface SideImgPrompt{
    srcPath: string;
}

export default function Components(prompt: SideImgPrompt){
    return(
        <div>
            <img src={prompt.srcPath} className="rounded-md"/>
        </div>
    )
}