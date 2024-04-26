import tv from "../assets/tv.png";

const DevicePage = () => {
    return (
        <div className="bg-black w-full h-[600px] border-t-4 border-b-4 border-gray-900 flex">
            <div className="max-w-[1200px] mx-auto flex gap-14 items-center justify-between">
                <div className="text-white">
                    <p className="text-5xl font-[900] pb-5">Enjoy on your TV</p>
                    <p className="text-2xl">
                        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple
                        TV, Blu-ray players, and more.
                    </p>
                </div>
                <div>
                    <div className="relative overflow-hidden">
                        <div>
                            <img src={tv} alt="" />
                        </div>
                        <div className="absolute inset-0 left-[70px] top-0 flex items-center justify-center w-80">
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
