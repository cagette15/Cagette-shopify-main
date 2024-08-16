import Image from 'next/image';
import { RestauSliderOffer } from './slideroffer';
export function RestauSection() {
  return (
    <>
      <div className="bg-footer py-12 md:py-20">
        <h2 className="text-center text-3xl font-extrabold text-white">OUR VALUES:</h2>
        <p className="text-center text-2xl font-bold text-white">
          Generosity &ndash; Transparency &ndash; French Tradition &ndash; Passion &ndash; Respect
          &ndash; Authenticity
        </p>
      </div>
      <div className="bg-cagette">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h3 className="pb-6 text-3xl font-extrabold text-second">
                FROM THE CAGETTE TO YOUR PLATE
              </h3>
              <p className="pb-8 text-gray-800 md:pb-0 md:pr-8">
                From the crate to your plate, happiness is at Cagette!
                <br /> <br />
                It is known that you are what you eat… At Cagette, our Chef takes care to always
                source and select the best products from the best local farmers in Thailand as well
                as international producers; to serve you with the best healthy & qualitative food.
                <br /> <br />
                Our cooking is plural and all about generosity with respect for French traditions
                while adding a touch of modernity and adapted to the Thai culture. With us you will
                be able to enjoy true «French Bistronomie » and chose through our « A la Carte »
                menu, or try some premium fresh imported fish and seafood from France and even taste
                some grilled and roasted meat from our own barbecue!
                <br /> <br />
                Overall, our team is welcoming you everyday in a friendly and casual atmosphere to
                experience the French « Savoir-Faire ».
                <br /> <br />
                Our team is 100% dedicated to your needs and always happy to serve you with passion,
                care and authenticity!{' '}
              </p>
            </div>{' '}
            <div className="relative py-6 md:py-0" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/3p4MIDof6JY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-footer py-12 md:py-20">
        <p className="text-center text-3xl font-extrabold text-white">
          WE ARE OPEN EVERYDAY FROM 11:30 AM TO 11:00PM
        </p>
      </div>
      <div className="container mx-auto py-12 md:py-20">
        <h3 className="pb-6 text-center text-3xl font-extrabold text-second">Our Daily Offers</h3>
        <p className="text-center text-xl  text-gray-800">
          Each day of the week, enjoy something new and discover a little more of our French
          traditions and favorite dishes! Bouillabaisse, Raclette, Bangkok’s best Royal Sunday
          Brunch & many other special promotions!
        </p>
        <div className="mx-auto grid grid-cols-1 py-10 text-center md:py-12">
          <RestauSliderOffer />
        </div>
      </div>{' '}
      <div className="bg-cagette">
        <div className="container mx-auto py-12 md:py-20">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/service-restaurant.png?v=1685077756"
                height={250}
                width={250}
                className="h-40 w-40"
                alt=""
              />
              <h4 className="text-2xl capitalize text-dark">Friendly Service</h4>
              <p className="px-8 py-6 text-lg text-gray-700">
                An international dedicated team, working with passion and a true French «
                Savoir-Faire ».
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/noun-restaurant-1943006.png?v=1685077662" // Add the correct URL
                height={250}
                width={250}
                className="h-32 w-32"
                alt=""
              />
              <h4 className="pt-6 text-2xl capitalize text-dark">Outdoor Area</h4>
              <p className="px-4 py-6 text-lg text-gray-700">
                In the heart of Sathorn, Cagette Canteen & Deli is offering a peaceful terrace with
                a green scenery!
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/noun-car-park-4369060.png?v=1685077649"
                height={250}
                width={250}
                className="h-32 w-32"
                alt=""
              />
              <h4 className="pt-6 text-2xl capitalize text-dark">Free Parking Lot</h4>
              <p className="px-4 py-6 text-lg text-gray-700">
                We have 15 parking lots at Cagette and valets service to assist you and watch out
                your vehicle.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/noun-food-delivery-1946838.png?v=1685077649"
                height={250}
                width={250}
                className="h-32 w-32"
                alt=""
              />
              <h4 className="pt-6 text-2xl capitalize text-dark">Fast Delivery</h4>
              <p className="px-[42px] py-6 text-lg text-gray-700">
            Order your food and get delivered within 1hr in bangkok!
From 11am to 9pm<br></br>
Delivery the next day in other provinces (order before noon)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
