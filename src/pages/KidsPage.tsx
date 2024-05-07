import kids from "../assets/kids.png";

const KidsPage = () => {
    return (
        <div className="w-full h-[600px] bg-black text-white border-b-4 border-gray-900 flex items-center px-5">
            <div className="max-w-[1200px] h-full mx-auto flex lg:flex-row md:flex-col sm:flex-col flex-col items-center justify-between">
                <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full h-full flex justify-center items-center">
                    <img src={kids} alt="" />
                </div>
                <div className="lg:w-[50%] md:w-full sm:w-full w-full h-full flex flex-col justify-center">
                    <p className="lg:text-5xl md:text-4xl sm:text-3xl text-4xl font-[900] pb-7 lg:text-left md:text-center sm:text-center text-center">
                        Create profiles for kids
                    </p>
                    <p className="text-2xl lg:text-left md:text-center sm:text-center text-center">
                        Send kids on adventures with their favorite characters
                        in a space made just for them—free with your membership.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default KidsPage;
