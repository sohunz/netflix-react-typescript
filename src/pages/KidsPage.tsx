import kids from "../assets/kids.png";

const KidsPage = () => {
    return (
        <div className="bg-black text-white flex flex-row items-center justify-between">
            <div>
                <img src={kids} alt="" />
            </div>
            <div>
                <p>Create profiles for kids</p>
                <p>
                    Send kids on adventures with their favorite characters in a
                    space made just for them—free with your membership.
                </p>
            </div>
        </div>
    );
};

export default KidsPage;
