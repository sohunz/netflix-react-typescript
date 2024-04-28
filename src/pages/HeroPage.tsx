import logo from "../assets/logo.png";
import banner from "../assets/hero-bg.jpg";
import SignUp from "../components/SignUp";

const HeroPage = () => {
    return (
        <div className="relative w-full h-screen">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div
                className="bg-cover bg-center w-full h-full"
                style={{ backgroundImage: `url(${banner})` }}
            ></div>

            <div className="absolute top-0 left-0 w-full text-white">
                <header className=" max-w-[1200px] mx-auto mt-5 px-5">
                    <nav className="w-full  flex items-center justify-between">
                        <div className="lg:w-[150px] md:w-[120px] sm:w-[100px] w-[100px]">
                            <img src={logo} alt="logo" />
                        </div>
                        <button className="text-white bg-[#E50914] py-1 px-4 rounded-md">
                            Sign In
                        </button>
                    </nav>
                </header>
                <main className="max-w-[1200px] mx-auto h-screen flex flex-col justify-center items-center px-5">
                    <p className="lg:text-5xl md:text-4xl sm:text-4xl text-4xl font-extrabold text-center">
                        Unlimited movies, TV shows, and more
                    </p>
                    <p className="lg:text-2xl md:text-xl sm:text-xl text-xl my-5 text-center">
                        Watch anywhere. Cancel anytime.
                    </p>
                    <p className="text-xl text-center">
                        Ready to watch? Enter your email or mobile number to
                        create or restart your membership.
                    </p>
                    <SignUp />
                </main>
            </div>
        </div>
    );
};

export default HeroPage;
