import tv from "../assets/tv.png";

const DevicePage = () => {
    return (
        <div className="bg-black w-full h-[600px] border-t-4 border-b-4 border-gray-900 flex">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                <div className="w-[50%] h-full text-white flex flex-col justify-center">
                    <p className="text-5xl font-[900] pb-5">Enjoy on your TV</p>
                    <p className="text-2xl">
                        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple
                        TV, Blu-ray players, and more.
                    </p>
                </div>
                <div className=" w-[50%] h-full flex justify-center">
                    <div className="relative w-full h-full overflow-hidden flex justify-center">
                        <div className=" w-full h-full flex items-center justify-center">
                            <img src={tv} />
                        </div>
                        <div className="absolute inset-0 left-[80px] top-[-15px] flex items-center justify-center w-[435px]">
                            <video
                                className="object-cover"
                                // controls
                                autoPlay
                                playsInline
                                muted
                            >
                                <source
                                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevicePage;
