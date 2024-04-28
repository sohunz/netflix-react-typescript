import { MdOutlineArrowForwardIos } from "react-icons/md";

const SignUp = () => {
    return (
        <div className="lg:w-[60%] md:w-[70%] sm:w-full w-full flex mt-5 gap-2">
            <input
                type="text"
                placeholder="Email or phone number"
                className="bg-[#1B1513] outline-2 border border-gray-700 pl-3 rounded-md py-4 lg:w-[70%] md:w-[60%] sm:w-[50%] w-[50%]"
            />
            <button className="bg-[#E50914] text-white flex gap-3 items-center justify-center px-5 rounded-md lg:w-[30%] md:w-[40%] sm:w-[50%] w-[50%]">
                <span className="text-xl font-semibold"> Get Started</span>{" "}
                <MdOutlineArrowForwardIos size={20} />
            </button>
        </div>
    );
};

export default SignUp;
