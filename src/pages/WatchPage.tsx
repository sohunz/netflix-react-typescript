const WatchPage = () => {
    return (
        <div className="bg-black text-white h-[500px] border-b-4 border-gray-900">
            <div className="max-w-[1200px] h-full mx-auto flex lg:flex-row md:flex-col items-center justify-center">
                <div className="w-[50%] h-full flex flex-col justify-center">
                    <p className="text-5xl font-[900] pb-7">Watch everywhere</p>
                    <p className="text-2xl">
                        Stream unlimited movies and TV shows on your phone,
                        tablet, laptop, and TV.
                    </p>
                </div>
                <div className="lg:w-[50%] border lg:h-full md:h-0"></div>
            </div>
        </div>
    );
};

export default WatchPage;
