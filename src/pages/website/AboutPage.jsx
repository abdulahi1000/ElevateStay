import React from 'react'
import WebsiteLayout from '../../layouts/WebsiteLayout'
import { Link } from 'react-router-dom'
import About1 from '../../assets/images/about1.jpg'
import About2 from '../../assets/images/about1.jpg'
import About3 from '../../assets/images/about3.png'

function AboutPage() {
  return (
    <WebsiteLayout>
    <section className="py-10">
				<div className="lg:grid lg:grid-cols-2">
					<div className="items-center lg:ml-[6.5rem]  text-black px-4 md:px-10 xl:px-16 py-0 md:py-4">
						<div className="">
						<h2 className="text-2xl md:text-[60px] md:leading-[4.5rem] items-center self-center pt-[2rem] font-bold">
							All you need to <br /> know about our <br /> website
						</h2>
						</div>
						<p className="py-7 font-400 text-lg text-justify md:text-left">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur, labore autem aspernatur saepe adipisci deleniti, laborum commodi illum qui alias odit quibusdam aperiam eligendi dolorem, necessitatibus at iusto sed?
						</p>
						<div className="flex flex-wrap gap-2 md:mt-7">
							<button className="md:py-4 md:px-14 py-2 px-10 bg-secondary text-white rounded-lg">
								Get Started
							</button>
						
						</div>
					</div>
					<div className="relative hidden lg:block pl-3">
						{/* <div className="bg-about-bg absolute top-24 rounded-bl-3xl filte h-500 bg-cover  bg-center">
							<img
								src={About1}
								alt="apartment"
								className="w-1/2 invisible"
							/>
						</div> */}
							<div class="parent">
  								<img className="image1 rounded-bl-3xl w-[580px] filte h-485 bg-cover  bg-center" src={About1} />
  								{/* <img className="image2 pt-4" src={AboutBg} /> */}
							</div>
					</div>
				</div>
			</section>



			<section className="pt-8 py-10 md:mb-[4.5rem] lg:pt-52 container px-3 md:px-8">
				<div className="lg:grid grid-cols-2">
					<div className="z-20 mb-5 lg:mb-0">
						<img
							src={About1}
							alt="apartment"
							className="w-[580px] lg:h-485 object-cover filte rounded-t-4xl"
						/>
					</div>
					<div className="md:pl-3 lg:pl-14">
						<h4 className="text-2xl md:text-3xl pt-2 lg:text-4xl text-secondary font-bold">
							Apartment Renting
						</h4>
						<p className="py-2 text-justify lg:text-left">
							Every day, Hosts on Airbnb open their homes and
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eos at maiores quidem blanditiis explicabo vel consequatur? Quas ipsa inventore ex veniam, pariatur nam, ut quae at suscipit, tenetur obcaecati.
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magnam necessitatibus nam sit perferendis. Omnis vero optio at suscipit deserunt assumenda unde dolore sunt! Maxime vitae repudiandae ducimus. Ea, repellat?
						</p>
						<div className="flex flex-wrap gap-2 md:mt-4 lg:mt-7">
							<button className="md:py-4 md:px-14 py-2 px-10 bg-secondary text-white rounded-lg">
								Rent Now
							</button>
							
						</div>
					</div>
				</div>
			</section>
			
			<section className="pt-14 mt-[1rem] lg:mt-0 lg:pt-32 px-3 md:px-10 xl:px-20 adjust-bg bg-pinkg relative lg:bottom-14">
				<div className="grid lg:grid-cols-2 gap-6 lg:gap-0">
					<div className="md:pr-8 xl:pr-14 lg:ml-[6.5rem]">
						<h4 className="text-2xl pt-2 md:text-3xl lg:text-4xl text-secondary font-bold">
							Consult with experts
						</h4>
						<p className="py-7 text-justify lg:text-left">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe tempora modi explicabo accusamus aut molestias dolores commodi reiciendis. Aspernatur itaque, sunt velit esse natus possimus mollitia repudiandae tenetur dignissimos nemo.
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint vero optio maiores porro eius reiciendis quibusdam quod magnam? Est voluptatibus a esse voluptate vero perspiciatis. Qui consectetur sint ad ab?
						</p>
						<div className="flex flex-wrap gap-2 md:4 lg:mt-7 mb-10 lg:mb-0">
						<button className="md:py-4 md:px-14 py-2 px-10 bg-secondary text-white rounded-lg">
								Consult Now
							</button>
						</div>
					</div>
					<div className="order-first lg:order-last mb-[2rem]">
						<img
							src={About3}
							alt="apartment"
							className="w-[580px] md:h-80 lg:h-485 object-cover filte rounded-t-4xl"
						/>
					</div>
				</div>
			</section>
			
    </WebsiteLayout>
  )
}

export default AboutPage