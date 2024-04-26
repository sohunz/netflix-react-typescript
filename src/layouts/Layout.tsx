import Footer from "../components/Footer";
import DevicePage from "../pages/DevicePage";
import DownloadPage from "../pages/DownloadPage";
import HeroPage from "../pages/HeroPage";
import KidsPage from "../pages/KidsPage";
import QuestionPage from "../pages/QuestionPage";
import WatchPage from "../pages/WatchPage";

const Layout = () => {
    return (
        <div>
            <HeroPage />
            <DevicePage />
            <DownloadPage />
            <WatchPage />
            <KidsPage />
            <QuestionPage />
            <Footer />
        </div>
    );
};

export default Layout;
