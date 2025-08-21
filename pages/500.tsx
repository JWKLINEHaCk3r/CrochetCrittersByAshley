import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Custom500() {
  return (
    <>
      <Head>
        <title>Server Error - Crochet Critters</title>
        <meta name="description" content="Something went wrong on our end." />
      </Head>
      
      <Header />
      
      <main className="min-h-screen bg-pink-50 flex items-center justify-center py-12">
        <div className="max-w-md mx-auto text-center px-4">
          <h1 className="text-6xl font-bold text-pink-600 mb-4">500</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Server Error</h2>
          <p className="text-gray-600 mb-8">
            Oops! Something went wrong on our end. Please try refreshing the page or go back home.
          </p>
          <Link href="/" className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors">
            Go Home
          </Link>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
