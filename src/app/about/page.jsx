import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default function AboutPage() {
  return (
    <div>
        <Navbar/>
      {/* Full-width light yellow background wrapper */}
      <div className="w-screen bg-[#e6f3c2] relative left-1/2 right-1/2 -mx-[50vw]">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-3">CNIC Crime Verifier</h1>
            <p className="text-lg text-gray-700 mb-6">
              Empowering verified safety through CNIC-based criminal record lookup.
            </p>
            <a
              href="/verifycrime"
              className="inline-block px-6 py-3 bg-[#17301c]  text-white rounded  transition"
            >
              Start Verification
            </a>
          </section>

          {/* Two-Column Info Sections */}
          <section className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-2xl font-semibold mb-2">Why We Exist</h2>
              <p className="text-gray-600">
                To help individuals and organizations quickly and accurately verify criminal records using CNIC.
              </p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
              <ol className="list-decimal list-inside text-gray-600 space-y-1">
                <li>Enter CNIC</li>
                <li>Match against official records</li>
                <li>Receive instant, trusted results</li>
              </ol>
            </div>
          </section>

          {/* Promise Section */}
          <section className="mb-12 p-4 bg-white rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Our Promise</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-600">
              <li>Fast & accurate</li>
              <li>Secure & fully confidential</li>
              <li>Compliant with all relevant regulations</li>
            </ul>
          </section>

          {/* About Us Section */}
          <section className="text-center mb-12 p-4 bg-white rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-600">
              A team of verification and security professionals devoted to public safety and transparency.
            </p>
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
