const Footer = () => {
    return (
        <div className="w-full h-[400px] text-white bg-black">
            <div className="max-w-[1200px] mx-auto flex justify-between pt-16">
                <ul className="flex flex-col gap-2 underline text-gray-300">
                    <li>Questions? Contact us.</li>
                    <li>FAQ</li>
                    <li>Investor Relations</li>
                    <li>Privacy</li>
                    <li>Speed Test</li>
                    <li>Netflix Cambodia</li>
                </ul>
                <ul className="flex flex-col gap-2 underline text-gray-300">
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                    <li>Legal Notices</li>
                </ul>
                <ul className="flex flex-col gap-2 underline text-gray-300">
                    <li>Account</li>
                    <li>Ways to Watch</li>
                    <li>Corporate Information</li>
                    <li>Only on Netflix</li>
                </ul>
                <ul className="flex flex-col gap-2 underline text-gray-300">
                    <li>Media Center</li>
                    <li>Terms of Use</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
