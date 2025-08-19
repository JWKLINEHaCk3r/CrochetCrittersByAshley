import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Star, Award, Users } from 'lucide-react'

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-100 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Meet Ashley</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The creative heart behind every handmade crochet critter, bringing joy one stitch at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Ashley's Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">My Journey</h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Hi there! I'm Ashley, and I'm so excited you're here! My love affair with crochet began 
                    during my college years when I was looking for a creative outlet to balance my studies. 
                    What started as a stress-relief hobby quickly became my greatest passion.
                  </p>
                  <p>
                    After making my first little amigurumi bunny (which was admittedly quite lopsided!), 
                    I was completely hooked. There's something magical about taking a simple strand of yarn 
                    and transforming it into something that brings smiles and comfort to people.
                  </p>
                  <p>
                    Each critter I create has its own personality and story. I believe that handmade items 
                    carry a special kind of love that you just can't find in mass-produced toys. When you 
                    bring home one of my critters, you're not just getting a stuffed animal – you're 
                    getting a friend made with care, intention, and lots of love.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/ashley-portrait.svg"
                      alt="Ashley in her crafting studio"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2">
                      <Heart className="text-red-500" size={24} />
                      <span className="font-semibold text-gray-800">Made with Love</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Makes Us Special</h2>
            <p className="text-xl text-gray-600">The values that guide every stitch</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Handmade with Love</h3>
              <p className="text-gray-600">
                Every critter is carefully crafted by hand with attention to detail and a whole lot of love.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                I use only the finest, softest yarns that are safe for all ages and built to last for years.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personal Touch</h3>
              <p className="text-gray-600">
                Each order is personally handled by me, ensuring your critter gets the individual care it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">How It's Made</h2>
              <p className="text-xl text-gray-600">A peek into my creative process</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Design</h3>
                <p className="text-gray-600 text-sm">
                  I sketch out each critter's unique personality and features.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Select Yarn</h3>
                <p className="text-gray-600 text-sm">
                  I choose the perfect colors and textures for each critter.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Crochet</h3>
                <p className="text-gray-600 text-sm">
                  Each piece is carefully crocheted by hand, stitch by stitch.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Finishing</h3>
                <p className="text-gray-600 text-sm">
                  Final touches and quality checks ensure perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 critter-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Meet Your New Friend?</h2>
          <p className="text-xl text-white/90 mb-8">
            Browse our collection of lovingly handmade crochet critters
          </p>
          <Link href="/products" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Shop Critters
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
