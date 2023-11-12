import React from 'react';

const AboutUs = () => {
  return (
    <section className=" py-16 my-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className='px-4'>
            <h2 className="text-4xl font-semibold mb-12">About Prestige Auto BD</h2>
            <p className="text-lg mb-6 ">
              At Prestige Auto BD, we have been proudly serving our customers with high-quality vehicles and exceptional service since 1992.
            </p>
            <p className="text-lg mb-6">
              Our commitment to excellence and a passion for all things automotive have made us a trusted name in the industry.
            </p>
            <p className="text-lg mb-6">
              We offer a wide range of cars, from luxury vehicles to practical and reliable options, all meticulously maintained and competitively priced.
            </p>
            <p className="text-lg">
              Visit us today and experience the Prestige Auto BD difference for yourself.
            </p>
          </div>
          <div>
            <img
              src="/images/aboutUs.jpg"
              alt="Prestige Auto BD Showroom"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
