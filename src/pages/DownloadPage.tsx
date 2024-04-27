import phone from "../assets/phone.jpg";
import movie from "../assets/movie-card.png";
import { MdDownload } from "react-icons/md";

const DownloadPage = () => {
    return (
        <div className="w-full h-[600px] bg-black text-white border-b-4 border-gray-900">
            <div className="max-w-[1200px] h-full mx-auto flex items-center justify-center ">
                <div className="w-[50%] h-full ">
                    <div className="w-full h-full flex justify-center">
                        <div className="relative w-full h-full flex justify-center items-center">
                            <img src={phone} />
                            <div className="border-2 border-gray-500 rounded-lg overflow-hidden bg-black flex items-center gap-5 absolute bottom-[100px] p-3">
                                <img src={movie} className="w-[70px] border" />

                                <div className="w-[240px] flex items-center justify-between">
                                    <div>
                                        <p className="font-semibold">
                                            Stanger Things
                                        </p>
                                        <p className="text-blue-600">
                                            Downloading...
                                        </p>
                                    </div>
                                    <MdDownload size={30} color="#2563EB" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] h-full flex flex-col justify-center">
                    <p className="text-5xl font-[900] pb-5 leading-normal">
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
