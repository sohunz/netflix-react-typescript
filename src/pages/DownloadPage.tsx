import phone from "../assets/phone.jpg";
import movie from "../assets/movie-card.png";

const DownloadPage = () => {
    return (
        <div className="bg-black text-white flex items-center justify-between">
            <div>
                <div className="relative">
                    <img src={phone} alt="" />
                    <div className="border bg-black flex items-center absolute bottom-0">
                        <img src={movie} alt="" />
                        <div>
                            <p>Stanger Things</p>
                            <p>Downloading...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p>Download your shows to watch offline</p>
                <p>
                    Save your favorites easily and always have something to
                    watch.
                </p>
            </div>
        </div>
    );
};

export default DownloadPage;
