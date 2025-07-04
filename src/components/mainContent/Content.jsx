export default function Content() {
  return (
    <>
      <div className="bg-blue-100 flow-root min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Solusi Digital Terbaik untuk Bisnis Anda
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Kami menyediakan layanan pengembangan web dan aplikasi mobile
                yang inovatif untuk membantu bisnis Anda berkembang di era
                digital. Dengan tim ahli yang berpengalaman, kami siap
                menghadirkan solusi teknologi terdepan.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <p className="text-gray-600">Pengembangan Web Responsif</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <p className="text-gray-600">Aplikasi Mobile iOS & Android</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <p className="text-gray-600">UI/UX Design yang Menarik</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Mulai Konsultasi
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Lihat Portfolio
                </button>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  {/* Placeholder for actual image */}
                  <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg
                        className="w-16 h-16 mx-auto mb-4 opacity-80"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <p className="text-lg font-medium opacity-90">
                        Your Image Here
                      </p>
                      <p className="text-sm opacity-70">
                        Replace with actual image
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-400 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">150+</div>
              <div className="text-gray-600 mt-1">Project Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600 mt-1">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5+</div>
              <div className="text-gray-600 mt-1">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
