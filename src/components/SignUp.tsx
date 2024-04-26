import { MdOutlineArrowForwardIos } from "react-icons/md";

const SignUp = () => {
    return (
        <div className="flex mt-5 gap-2">
            <input
                type="text"
                placeholder="Email or phone number"
                className="bg-[#1B1513] outline-2 border border-gray-700 pl-3 rounded-md py-4 w-[350px]"
            />
            <button className="bg-[#E50914] text-white flex gap-3 items-center px-5 rounded-md">
                <span className="text-xl font-semibold"> Get Started</span>{" "}
                <MdOutlineArrowForwardIos size={20} />
            </button>
        </div>
    );
};

export default SignUp;
