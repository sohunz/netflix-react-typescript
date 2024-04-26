import phone from "../assets/phone.jpg";
import movie from "../assets/movie-card.png";

const DownloadPage = () => {
    return (
        <div className="w-full h-[600px] bg-black text-white border-b-4 border-gray-900">
            <div className="max-w-[1200px] h-full mx-auto flex items-center justify-center">
                <div>
                    <div className="relative flex items-center justify-center">
                        <img src={phone} />
                        <div className="border-2 border-gray-500 rounded-lg overflow-hidden bg-black flex items-center gap-5 absolute bottom-0 p-3">
                            <img src={movie} className="w-[70px]" />

                            <div className="pr-14">
                                <p className="font-semibold">Stanger Things</p>
                                <p className="text-blue-600">Downloading...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-5xl font-[900] pb-5">
                        Download your shows to watch offline
                    </p>
                    <p className="text-2xl">
                        Save your favorites easily and always have something to
                        watch.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DownloadPage;
