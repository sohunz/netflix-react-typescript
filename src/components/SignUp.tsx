import { MdOutlineArrowForwardIos } from "react-icons/md";

const SignUp = () => {
    return (
        <div className="flex mt-5 gap-2">
            <input
                type="text"
                placeholder="Email or phone number"
                className="bg-[#1B1513] outline-none border border-gray-700 pl-3 rounded-md py-3"
            />
            <button className="bg-red-600 text-white flex items-center">
                <span> Get Started</span> <MdOutlineArrowForwardIos />
            </button>
        </div>
    );
};

export default SignUp;
