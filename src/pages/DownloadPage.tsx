import phone from "../assets/phone.jpg";
import movie from "../assets/movie-card.png";
import { MdDownload } from "react-icons/md";

const DownloadPage = () => {
    return (
        <div className="w-full py-24 bg-black text-white border-b-4 border-gray-900">
            <div className="max-w-[1200px] h-full mx-auto lg:flex-row md:flex-col sm:flex-col flex-col items-center justify-center ">
                <div className="lg:w-[50%] md:w-full h-full ">
                    <div className="w-full h-full flex justify-center">
                        <div className="relative w-full h-full flex justify-center items-center">
                            <img src={phone} />
                            <div className="border-2 border-gray-500 rounded-lg overflow-hidden bg-black flex items-center gap-5 absolute bottom-[50px] p-3">
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
                <div className="lg:w-[50%] md:w-full h-full flex flex-col justify-center">
                    <p className="text-5xl font-[900] pb-5 leading-normal lg:text-left md:text-center sm:text-center text-center">
                        Download your shows to watch offline
                    </p>
                    <p className="text-2xl lg:text-left md:text-center sm:text-center text-center">
                        Save your favorites easily and always have something to
                        watch.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DownloadPage;
