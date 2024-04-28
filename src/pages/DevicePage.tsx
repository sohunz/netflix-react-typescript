import tv from "../assets/tv.png";

const DevicePage = () => {
    return (
        <div className="bg-black w-full h-[600px] border-t-4 border-b-4 border-gray-900 flex overflow-hidden">
            <div className="max-w-[1200px] mx-auto flex lg:flex-row md:flex-col sm:flex-col flex-col items-center justify-between px-5">
                <div className="lg:w-[50%] md:w-full sm:w-full w-full h-full text-white flex flex-col justify-center lg:text-left md:text-center sm:text-center text-center ">
                    <p className="lg:text-5xl md:text-4xl sm:text-3xl text-4xl font-[900] pb-5">
                        Enjoy on your TV
                    </p>
                    <p className="text-2xl">
                        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple
                        TV, Blu-ray players, and more.
                    </p>
                </div>
                <div className=" lg:w-[50%] md:w-[60%] sm:w-[80%] w-[80%] h-full flex justify-center">
                    <div className="relative w-full h-full overflow-hidden flex justify-center">
                        <div className=" w-full h-full flex items-center justify-center">
                            <img src={tv} />
                        </div>
                        <div className="absolute inset-0 lg:left-[80px] md:left-[75px] sm:left-[75px] left-[45px] top-[-15px] flex items-center justify-center lg:w-[435px] md:w-[350px] sm:w-[200px] w-[215px]">
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
