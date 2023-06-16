import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

// import Social1 from "../../../images/social1.jpg"
// import Social2 from "../../../images/social2.jpg"
// import Social3 from "../../../images/social3.jpg"
// import Social4 from "../../../images/social4.jpg"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
		<footer>
			<div className="py-10 md:pt-16 shadow bg-secondary text-white">
				<div className="container grid lg:grid-cols-4 md:grid-cols-2 px-4 gap-8">
					<div>
						<h4 className="text-white font-bold text-2xl pb-8">
							Who we are
						</h4>
						<p className="text-white mb-6">
						ElevateStay is bringing quality services to housing accommodation space.
						</p>
						<p className="text-white mb-6">
							We provide the best service when it comes to renting luxury apparment. You get assured quality, low fees and best location.
                       </p>
						<ul className="text-white font-bold">
							<li>
							<Link to="/about-us" className="mb-2">About Us</Link>
							</li>
							<li><Link to="/blog" className="mb-2">Blog</Link></li>

						</ul>
					</div>
					<div>
						<h4 className="text-white font-bold text-2xl pb-8">
							Services
						</h4>
						<ul className="text-white">
							<li className="mb-2">House rental services</li>
							<li className="mb-2">Buy Land</li>
							<li className="mb-2">Speak to Consultants</li>
							<li className="mb-2">Rent event centers</li>
							<li className="mb-2">Long term home lease</li>
						</ul>
						</div>
					<div>
						<h4 className="text-white font-bold text-2xl pb-8">
							Join Us
						</h4>
						<ul className="text-white">
							<li className="mb-2">Become a verified agent</li>
							<li className="mb-2">Get referrals</li>
							<li className="mb-2">Careers</li>
						</ul>
					</div>
					
					<div>
						<h4 className="text-white font-bold text-2xl pb-8">
							Find Us
						</h4>
						<ul className="text-white">
							<li className="mb-2">Help Center</li>
							<li className="mb-2">Call: +234 904370276</li>
							<li className="mb-2">Email: Contact@elevateStay.com</li>
						</ul>
						<div className="flex gap-3 text-white pb-6">
							<span className="social-icons">
								<FaFacebookF />
							</span>
							<span className="social-icons">
								<FaInstagram />
							</span>
							<span className="social-icons">
								<FaYoutube />
							</span>
						</div>
						
					</div>
				</div>
						<div className="py-10 items-center flex justify-end container px-10">
							<form className="flex">
								<input
									type="email"
									name="subcribe"
									id="subcribe"
									placeholder="Email"
									className="w-100 py-2 px-[2rem] outline-0 rounded-l-lg"
								/>
								<button className="bg-pur md:px-10 h-btn text-white p-2 rounded-md">
									Subscribe
								</button>
							</form>
						</div>
			
			<div className="flex flex-col text-center border-t border-[#E4CCE5] md:text-right gap-2 md:flex-row justify-between pt-3 container px-5 text-white font-semibold">
				<span>©2023 ElevateStay. All Rights Reserved.</span>
				<span>Privacy Policy | Terms & Conditions</span>
			</div>
			</div>
		</footer>
  );
};

export default Footer;
