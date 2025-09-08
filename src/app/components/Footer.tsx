
import Link from 'next/link';
import {FaFacebook, FaInstagram} from "react-icons/fa";

const Footer =()=> {
    return(
        <section className="bg-blue-600/10 text-white backdrop-blur-md">
            <div className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Solve Your Plumbing Problems?</h2>
                <p className="text-blue-100 max-w-xl mx-auto mb-8">
                    Don&apos;t wait for a small leak to become a big problem. Contact our expert team today for a free, no-obligation quote.
                </p>
                <Link
                    href="/contacts"
                    className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105 shadow-lg"
                >
                    Contact Us Now
                </Link>

                <div className=" pt-9">
                    <p className="pb-2">Follow us on</p>
                    <div className="flex justify-center">
                        <Link href={"#"} className="justify-center items-center mr-10 hover:text-blue-500 scale-105 shadow-lg">
                            <FaFacebook size={30}/>
                        </Link>
                        <Link href={"#"} className="justify-center items-center hover:text-orange-900 scale-105 shadow-lg">
                            <FaInstagram size={30}/>
                        </Link>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Footer;