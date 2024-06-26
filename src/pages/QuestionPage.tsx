import Accordion from "../components/Accordion";
import SignUp from "../components/SignUp";

const QuestionPage = () => {
    return (
        <div className="pt-20 bg-black text-white pb-10 border-b-4 border-gray-900 px-5">
            <div className="max-w-[1200px] mx-auto">
                <p className="lg:text-5xl md:text-4xl sm:text-3xl text-4xl font-[900] text-center mb-12">
                    Frequently Asked Questions
                </p>
                <Accordion
                    question="What is Netflix?"
                    answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                You can watch as much as you want, whenever you want without a single commercial  all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
                />
                <Accordion
                    question="How much does Netflix cost?"
                    answer="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts."
                />
                <Accordion
                    question="Where can i watch?"
                    answer="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
                />
                <Accordion
                    question="How do i cancel?"
                    answer="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees start or stop your account anytime."
                />
                <Accordion
                    question="What can i watch on Netflix?"
                    answer="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
                />
                <Accordion
                    question="Is Netflix good for kids"
                    answer="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
                />
            </div>
            <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-between py-10">
                <p className="text-xl pt-10 lg:text-left md:text-center sm:text-center text-center">
                    Ready to watch? Enter your email or mobile number to create
                    or restart your membership.
                </p>
                <SignUp />
            </div>
        </div>
    );
};

export default QuestionPage;
