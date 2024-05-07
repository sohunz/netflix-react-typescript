const WatchPage = () => {
    return (
        <div className="bg-black text-white h-[500px] border-b-4 border-gray-900 px-5">
            <div className="max-w-[1200px] h-full mx-auto flex lg:flex-row md:flex-col items-center justify-center">
                <div className="lg:w-[50%] md:w-full h-full flex flex-col justify-center">
                    <p className="lg:text-5xl md:text-4xl sm:text-3xl text-4xl font-[900] pb-7 lg:text-left md:text-center sm:text-center text-center">
                        Watch everywhere
                    </p>
                    <p className="lg:text-left md:text-center sm:text-center text-center text-2xl">
                        Stream unlimited movies and TV shows on your phone,
                        tablet, laptop, and TV.
                    </p>
                </div>
                <div className="lg:w-[50%] md:w-full lg:h-full md:h-0"></div>
            </div>
        </div>
    );
};

export default WatchPage;
