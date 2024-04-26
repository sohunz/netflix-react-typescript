// import { useState } from "react";
// import { GoPlus } from "react-icons/go";
// import { RiCloseFill } from "react-icons/ri";

// interface PropsType {
//     question: string;
//     answer: string;
// }

// const Accordion = ({ question, answer }: PropsType) => {
//     const [showAccordion, setAccordion] = useState(false);

//     return (
//         <div className="bg-black mb-2">
//             <div className="bg-[#2D2D2D] text-white border border-gray-500 ">
//                 <p
//                     className="flex flex-row items-center justify-between text-2xl px-6 font-semibold cursor-pointer py-5"
//                     onClick={() => setAccordion(!showAccordion)}
//                 >
//                     {question}
//                     <span className=" cursor-pointer">
//                         {showAccordion ? (
//                             <RiCloseFill size={40} />
//                         ) : (
//                             <GoPlus size={40} />
//                         )}
//                     </span>
//                 </p>
//                 <div className={showAccordion ? "blcok" : "hidden"}>
//                     <p className="text-2xl px-6 text-gray-300 py-10">
//                         {answer}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Accordion;

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
        <div className="bg-black mb-2">
            <div className="bg-[#2D2D2D] text-white">
                <p
                    className="flex flex-row items-center justify-between text-2xl px-6 font-semibold cursor-pointer py-5"
                    onClick={() => setAccordion(!showAccordion)}
                >
                    {question}
                    <span className=" cursor-pointer">
                        {showAccordion ? (
                            <RiCloseFill size={40} />
                        ) : (
                            <GoPlus size={40} />
                        )}
                    </span>
                </p>
                <div
                    className={`overflow-hidden transition-all duration-500 ${
                        showAccordion ? "max-h-96" : "max-h-0 overflow-hidden"
                    }`}
                >
                    <p className="text-2xl px-6 text-gray-300 pb-10">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
