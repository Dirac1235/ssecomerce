import Image from "next/image";
import Link from "next/link";

function AboutUs() {
  return (
    <div className="container mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-pink-950 mb-6">
            SSECOMMERCE
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            We are a team of passionate educators and industry experts committed to providing high-quality tech education. Our instructors bring real-world insights and expertise to ensure you stay ahead of the curve.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center text-pink-950 hover:text-pink-800 font-semibold transition-colors"
            >
              Learn more about us
              <span className="ml-2">&#8594;</span>
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 mt-8 lg:mt-0">
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/ss.jpg"
              alt="About Us"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs