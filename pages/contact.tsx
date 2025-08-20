import React from 'react'
import { Mail, Phone, Instagram } from 'lucide-react'

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-600">
              Have questions about our crochet critters? We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Mail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a 
                      href="mailto:akline1812@gmail.com" 
                      className="text-primary-600 hover:text-primary-800 transition-colors"
                    >
                      akline1812@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <a 
                      href="tel:+13866238779" 
                      className="text-primary-600 hover:text-primary-800 transition-colors"
                    >
                      (386) 623-8779
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Instagram className="text-pink-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Social Media</h3>
                    <div className="space-y-1">
                      <a 
                        href="https://instagram.com/CrochetCrittersByAshley" 
                        className="text-primary-600 hover:text-primary-800 transition-colors block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram: @CrochetCrittersByAshley
                      </a>
                      <a 
                        href="https://facebook.com/CrochetCrittersByAshley" 
                        className="text-primary-600 hover:text-primary-800 transition-colors block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook: CrochetCrittersByAshley
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-xl">
                <h3 className="font-semibold text-primary-800 mb-2">Business Hours</h3>
                <p className="text-primary-700">
                  Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                  Saturday: 10:00 AM - 4:00 PM EST<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Send us a Message</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-vertical"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How long does it take to make a custom critter?</h3>
                <p className="text-gray-600">
                  Custom orders typically take 2-3 weeks to complete, depending on the complexity and current order volume.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Do you ship internationally?</h3>
                <p className="text-gray-600">
                  Currently, we ship within the United States only. International shipping may be available in the future.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Are the materials child-safe?</h3>
                <p className="text-gray-600">
                  Yes! All our yarns and materials are non-toxic and safe for children. However, small parts may pose a choking hazard for children under 3.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Can I request a specific color or design?</h3>
                <p className="text-gray-600">
                  Absolutely! We love creating custom pieces. Contact us to discuss your ideas and we'll work together to bring them to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
