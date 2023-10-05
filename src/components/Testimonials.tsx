// import Container from './ui/Container'
import Carousel from "./ui/Carousel";
import SectionTitle from "./ui/SectionTitle";
import Image from "next/image";

const Testimonials = () => {
  return (
    <>
      <section className="relative z-[2] my-20">
        <SectionTitle>Testimonials</SectionTitle>
        <div className="w-full flex overflow-hidden">
          <div className="min-h-[500px] bg-gray-200 w-3/5 rounded-r border shadow border-solid border-shadowColor relative z-[2]">
            <div className="flex justify-between flex-col align-middle pl-20 pr-36 pt-24 pb-9 h-full relative z-[4]">
              <div className="flex flex-col gap-7">
                <h3 className="text-4xl text-primary">
                  Our Customers Love Sorayia!
                </h3>
                <h4 className="text-2xl">
                  Testimonials from Satisfied Customers
                </h4>
                <p className="text-xl-400">
                  Discover enthusiastic feedback from our satisfied customers.
                  With Sorayia, they have transformed their customer
                  relationships and reached new levels of engagement.
                </p>
              </div>
              <div className="flex w-full justify-start gap-8">
                <span className="text-xl text-primary">
                  Other 100 satisfied costumers
                </span>
                <ul className="inline-flex mr-4">
                  <li>
                    <svg
                      width={28}
                      height={28}
                      fill="#1d3e81"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width={28}
                      height={28}
                      fill="#1d3e81"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width={28}
                      height={28}
                      fill="#1d3e81"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width={28}
                      height={28}
                      fill="#1d3e81"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width={28}
                      height={28}
                      fill="#1d3e81"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z" />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <Image
              className="absolute top-[-40%] left-[-10%] z-[3]"
              src="/background-blue-2.webp"
              width={379}
              height={761}
              alt=""
            />
          </div>
          <div className="relative w-2/5 z-[2] h-full">
            <Carousel />
          </div>
        </div>
        <Image
          className="absolute top-[-50%] left-0 z-[1] pointer-events-none"
          src="/background-blue-2.webp"
          width={379}
          height={761}
          alt=""
        />
      </section>
    </>
  );
};

export default Testimonials;
