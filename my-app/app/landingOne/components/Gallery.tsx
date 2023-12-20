export default function Components(){
    const numbers = Array.from({ length: 8 }, (_, i) => i + 1);
    return(
        <div className="bg-white pb-12">
            <div className='h-32 bg-gradient-to-b from-black from-0% to-90% to-white flex justify-center pb-12'>
            </div>
            <div className="flex justify-center pt-12">
                <div className="flex flex-wrap place-content-center w-4/5">
                    {numbers.map((numPath) => (
                    <img
                        key={numPath}
                        src= {`assets/images/gallery/${numPath}.jpg`}
                        className="scale-90 w-1/3 shadow-lg hover:scale-105 duration-300 rounded-md"
                        alt="" // Add alt text for each image
                    />
                    ))}
                </div>
            </div>
        </div>
    )
}