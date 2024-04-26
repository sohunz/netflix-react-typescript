import tv from "../assets/tv.png";

const DevicePage = () => {
    return (
        <div className="bg-black w-full border-2">
            <div className="w-full flex items-center justify-between">
                <div className="text-white">
                    <p>Enjoy on your TV</p>
                    <p>
                        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple
                        TV, Blu-ray players, and more.
                    </p>
                </div>
                <div>
                    <div className="relative overflow-hidden">
                        <img src={tv} alt="" className="z-0" />
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <video className="object-cover" controls>
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
