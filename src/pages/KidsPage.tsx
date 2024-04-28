import kids from "../assets/kids.png";

const KidsPage = () => {
    return (
        <div className="w-full h-[600px] bg-black text-white border-b-4 border-gray-900 flex items-center">
            <div className="max-w-[1200px] h-full mx-auto flex lg:flex-row md:flex-col sm:flex-col flex-col items-center justify-between">
                <div className="w-[50%] h-full flex justify-center items-center">
                    <img src={kids} alt="" />
                </div>
                <div className="w-[50%] h-full flex flex-col justify-center">
                    <p className="text-5xl font-[900] pb-7">
                        Create profiles for kids
                    </p>
                    <p className="text-2xl">
                        Send kids on adventures with their favorite characters
                        in a space made just for them—free with your membership.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default KidsPage;
