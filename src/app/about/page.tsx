import { Meteors } from "@/components/ui/meteors";
export default function page() {
    return (
        <main className="min-h-screen bg-black/[0.96] text-white mt-20 overflow-x-hidden">
            <Meteors number={50}/>
          <section className="py-16 px-4 max-w-screen-lg mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold mb-4">Who We Are</h2>
              <p className="text-lg text-gray-400">
                We are a passionate team dedicated to providing high-quality education to individuals across the globe. 
                Our platform aims to make learning accessible, engaging, and effective for everyone.
              </p>
            </div>
    
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold mb-4">Our Mission</h2>
              <p className="text-lg text-gray-400">
                Our mission is to empower individuals through education by offering a wide variety of courses designed 
                to help them develop new skills and enhance their professional growth. We strive to make learning 
                accessible, affordable, and convenient.
              </p>
            </div>
    
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold mb-4">What We Offer</h2>
              <p className="text-lg text-gray-400">
                We offer courses in various fields such as technology, business, design, and marketing. Each course 
                is crafted by experts in the field, ensuring that the content is up-to-date and relevant to industry trends.
              </p>
            </div>
    
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold mb-4">Why Choose Us</h2>
              <p className="text-lg text-gray-400">
                Our platform is designed to support learners at every stage of their educational journey. With flexible 
                learning options, expert-led content, and a supportive community, we are committed to helping you achieve 
                your goals at your own pace.
              </p>
            </div>
          </section>
        </main>
      );
}
