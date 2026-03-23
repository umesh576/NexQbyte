// components/about/PartnerBrands.jsx
import Image from "next/image";
import Link from "next/link";

const PartnerBrands = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "/partners/microsoft.svg",
      type: "Technology Partner",
    },
    {
      name: "Google",
      logo: "/partners/google.svg",
      type: "Certification Partner",
    },
    { name: "AWS", logo: "/partners/aws.svg", type: "Cloud Partner" },
    {
      name: "NIC Asia",
      logo: "/partners/nic-asia.svg",
      type: "Corporate Client",
    },
    {
      name: "Tech Mahindra",
      logo: "/partners/tech-mahindra.svg",
      type: "Placement Partner",
    },
    {
      name: "Nepal Rastra Bank",
      logo: "/partners/nrb.svg",
      type: "Government Partner",
    },
    {
      name: "Himalayan Bank",
      logo: "/partners/himalayan-bank.svg",
      type: "Financial Partner",
    },
    { name: "NTC", logo: "/partners/ntc.svg", type: "Infrastructure Partner" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="bg-linear-to-r from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Start Your Journey with NexQbyte?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re looking to upgrade business solutions,
            we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/connection"
              className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Browse Services
            </Link>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-16 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            About NexQbyte Solution - Your Digital Innovation Partner
          </h2>
          <p className="text-gray-600 mb-4">
            NexQbyte Solution is a premier technology company based in Nepal,
            dedicated to delivering cutting-edge digital solutions for
            businesses worldwide. Founded in 2024, we have rapidly grown to
            become one of the most trusted names in custom software development,
            mobile applications, and AI-powered digital transformation.
          </p>
          <p className="text-gray-600 mb-4">
            Our comprehensive service portfolio includes custom website and web
            application development, native iOS and Android mobile apps, UI/UX
            design, AI and machine learning solutions, digital marketing, and
            cloud infrastructure services. We serve clients across e-commerce,
            healthcare, finance, education, and startup sectors.
          </p>
          <p className="text-gray-600">
            What sets Astra apart is our agile development methodology, expert
            team of 15+ developers and designers, and a strong focus on
            delivering scalable, secure, and user-centric solutions. We maintain
            a 95% client satisfaction rate and have successfully delivered 180+
            projects for businesses across 8 countries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerBrands;
