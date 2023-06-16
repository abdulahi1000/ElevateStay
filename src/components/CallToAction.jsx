import React from 'react'
import { Link } from 'react-router-dom'

function CallToAction() {
  return (
    <section className="bg-[#F7F7F7] xl:py-0 py-10 px-4 overflow-x-hidden">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center py-4 container	">
        <div className="lg:col-span-2 text-black">
          <h2 className="font-bold text-2xl">
            Contact us today to have a good vacation
          </h2>
          <p className="pt-4 py-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia explicabo dolorum earum. Mollitia illo, asperiores hic illum sed tenetur unde id 
          </p>
          <div className="flex flex-wrap gap-2 md:mt-7 space-y-2">
            <Link to="#">
              <button className="md:py-4 md:px-14 px-10 bg-blue-500 items-center shadow text-white rounded-lg">
                Contact us
              </button>
            </Link>
            {/* <img src={footerImg1} alt="house illustration" /> */}
          </div>
        </div>
        <div className="lg:col-span-1 order-first md:order-last md:block hidden">
          <div className="Footer_parent">
            {/* <img className="Footer_image1" src={footerFrame} />
            <img
              className="Footer_image2 w-[300px] h-[250px]"
              src={footerImg2}
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction