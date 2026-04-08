import { useState, useEffect } from "react";
import { Phone, MapPin, Clock, Star, ChevronDown, Menu, X, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "menu", "gallery", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { name: "Artisan Breads", price: "₹120 - ₹280", description: "Freshly baked daily with premium ingredients" },
    { name: "French Pastries", price: "₹80 - ₹150", description: "Classic croissants, pain au chocolat, and more" },
    { name: "Custom Cakes", price: "₹800 - ₹3500", description: "Personalized cakes for every celebration" },
    { name: "Gourmet Cookies", price: "₹60 - ₹200", description: "Handcrafted cookies in delightful flavors" },
    { name: "Specialty Coffee", price: "₹120 - ₹250", description: "Expertly brewed coffee and beverages" },
    { name: "Savory Treats", price: "₹90 - ₹180", description: "Quiches, tarts, and savory delights" }
  ];

  const testimonials = [
    { name: "Priya Sharma", rating: 5, text: "The best bakery in HSR! Their croissants are absolutely divine. Fresh, flaky, and perfectly buttery every single time." },
    { name: "Rajesh Kumar", rating: 5, text: "Ordered a custom birthday cake and it exceeded all expectations. Beautiful design and tasted amazing. Highly recommend!" },
    { name: "Anjali Menon", rating: 5, text: "My go-to spot for morning coffee and pastries. The ambiance is lovely and the staff is always so welcoming." },
    { name: "Vikram Rao", rating: 5, text: "Their artisan bread is exceptional. You can taste the quality in every bite. Worth every rupee!" }
  ];

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80", alt: "Artisan Bread" },
    { url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80", alt: "Fresh Croissants" },
    { url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80", alt: "Custom Cake" },
    { url: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80", alt: "Assorted Pastries" },
    { url: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=800&q=80", alt: "Bakery Interior" },
    { url: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=800&q=80", alt: "Coffee & Treats" }
  ];

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-amber-900">Bonheur Bakehouse</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["home", "about", "menu", "gallery", "testimonials", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors capitalize ${
                    activeSection === item ? "text-amber-700" : "text-gray-700 hover:text-amber-600"
                  }`}
                >
                  {item}
                </button>
              ))}
              <a href="tel:+919113892539">
                <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {["home", "about", "menu", "gallery", "testimonials", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
              <a href="tel:+919113892539" className="block">
                <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-amber-700 text-white px-4 py-2 text-sm sm:text-base">
              <Star className="w-4 h-4 mr-1 fill-white" />
              4.9★ Rating • 231+ Reviews
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Handcrafted Delights,
              <br />
              <span className="text-amber-700">Baked Fresh Daily</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Experience the finest artisan breads, pastries, and custom cakes in HSR Layout. Where passion meets perfection in every bite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+919113892539">
                <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                  <Phone className="w-5 h-5 mr-2" />
                  Order Now
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("menu")}
                className="border-2 border-amber-700 text-amber-700 hover:bg-amber-50 text-lg px-8 py-6"
              >
                View Menu
                <ChevronDown className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Story</h3>
            <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Bonheur Bakehouse, we believe that happiness begins with the perfect bite. Located in the heart of HSR Layout, Bengaluru, we've been serving our community with artisan baked goods crafted with love and the finest ingredients.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our master bakers combine traditional French techniques with local flavors to create exceptional breads, pastries, and custom cakes that bring joy to every occasion. Each product is handcrafted daily, ensuring you always get the freshest, most delicious treats.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're starting your day with a buttery croissant, celebrating a milestone with a custom cake, or simply treating yourself to something sweet, we're here to make every moment special.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 sm:py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Menu</h3>
            <div className="w-24 h-1 bg-amber-700 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Freshly baked with premium ingredients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-amber-200">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h4>
                  <p className="text-2xl font-bold text-amber-700 mb-3">{item.price}</p>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Gallery</h3>
            <div className="w-24 h-1 bg-amber-700 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">A glimpse of our delicious creations</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold p-4">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h3>
            <div className="w-24 h-1 bg-amber-700 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Trusted by 231+ happy customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Visit Us</h3>
            <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="border-amber-200">
                <CardContent className="p-6 flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Location</h4>
                    <p className="text-gray-600 mb-3">HSR Layout, Bengaluru, Karnataka 560102</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Bonheur+Bakehouse+HSR+Layout+Bengaluru"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-700 hover:text-amber-800 font-medium inline-flex items-center"
                    >
                      Get Directions →
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardContent className="p-6 flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Phone</h4>
                    <a
                      href="tel:+919113892539"
                      className="text-gray-600 hover:text-amber-700 transition-colors text-lg"
                    >
                      +91 91138 92539
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardContent className="p-6 flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Hours</h4>
                    <p className="text-gray-600">Open Daily</p>
                    <p className="text-gray-600">7:00 AM - 10:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-amber-700 rounded-lg p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Ready to taste happiness?</h4>
              <p className="text-amber-100 mb-6">Call us now to place your order or visit us at our HSR Layout location. We're here to make your day special!</p>
              <a href="tel:+919113892539">
                <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50 w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Call +91 91138 92539
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 text-amber-400">Bonheur Bakehouse</h4>
              <p className="text-gray-400 mb-4">Handcrafted delights, baked fresh daily with love and the finest ingredients.</p>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span className="text-amber-400 font-semibold">4.9 Rating</span>
                <span className="text-gray-400">• 231+ Reviews</span>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                {["home", "about", "menu", "gallery", "testimonials", "contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className="text-gray-400 hover:text-amber-400 transition-colors capitalize"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">HSR Layout, Bengaluru, Karnataka 560102</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <a href="tel:+919113892539" className="text-gray-400 hover:text-amber-400 transition-colors">
                    +91 91138 92539
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-gray-400">Open Daily: 7:00 AM - 10:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Bonheur Bakehouse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
