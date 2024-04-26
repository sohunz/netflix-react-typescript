import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { RiCloseFill } from "react-icons/ri";

interface PropsType {
    question: string;
    answer: string;
}

const Accordion = ({ question, answer }: PropsType) => {
    const [showAccordion, setAccordion] = useState(false);

    return (
        <div className="bg-black">
            <div className="bg-[#2D2D2D] text-white py-5 border border-gray-500">
                <p className="flex flex-row items-center justify-between px-10">
                    {question}
                    <span
                        className=" cursor-pointer"
                        onClick={() => setAccordion(!showAccordion)}
                    >
                        {showAccordion ? <RiCloseFill /> : <GoPlus />}
                    </span>
                </p>
                <div className={showAccordion ? "blcok" : "hidden"}>
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
