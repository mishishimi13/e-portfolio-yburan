import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-portfolio-gradient-1 to-portfolio-gradient-2">
      {/* Header Navigation */}
      <header className="px-4 py-4 md:px-16">
        <nav className="max-w-6xl mx-auto bg-portfolio-purple-mid/50 border border-portfolio-purple-bright rounded-3xl px-8 py-6">
          <div className="flex justify-end">
            <div className="flex items-center gap-12">
              <Link to="/" className="font-lilita text-2xl md:text-3xl text-portfolio-cream hover:text-portfolio-purple-bright transition-colors">
                HOME
              </Link>
              <Link to="/experience" className="font-lilita text-2xl md:text-3xl text-portfolio-cream hover:text-portfolio-purple-bright transition-colors">
                EXPERIENCE
              </Link>
              <Link to="/contact" className="font-lilita text-2xl md:text-3xl text-portfolio-cream hover:text-portfolio-purple-bright transition-colors">
                CONTACT
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-4 md:px-16 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-lilita text-4xl md:text-6xl text-portfolio-cream drop-shadow-lg">
              RICA MAE M. YBURAN
            </h1>
            <p className="font-lilita text-lg md:text-2xl text-portfolio-cream leading-relaxed">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-portfolio-cream rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-portfolio-purple-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className="w-12 h-12 bg-portfolio-cream rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-portfolio-purple-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="w-12 h-12 bg-portfolio-cream rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-portfolio-purple-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Profile Photo Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-96 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto">
        <hr className="border-portfolio-purple-bright border-t-2" />
      </div>

      {/* About Me Section */}
      <section className="px-4 md:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-lilita text-4xl md:text-6xl text-portfolio-cream drop-shadow-lg mb-12">
            ABOUT ME
          </h2>
          
          <div className="bg-portfolio-purple-mid border border-portfolio-purple-bright rounded-lg p-8 md:p-12 max-w-4xl ml-auto">
            <div className="space-y-6 font-lilita text-2xl md:text-3xl text-portfolio-cream">
              <div>NAME: RICA MAE M. YBURAN</div>
              <div>AGE: 21</div>
              <div>BIRTHDAY: MARCH 27, 2004</div>
              <div>BIRTHPLACE: BACOLOD CITY</div>
              <div>NATIONALITY: FILIPINO</div>
              <div>LANGUAGE: ENGLISH, FILIPINO, HILIGAYNON</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 md:px-16 py-16 bg-gradient-to-r from-portfolio-gradient-1 via-portfolio-purple-dark to-portfolio-gradient-2">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-lilita text-4xl md:text-5xl text-portfolio-cream drop-shadow-lg mb-16">
            SKILLS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill 1: MS Office */}
            <div className="bg-portfolio-purple-mid border border-portfolio-purple-bright rounded-lg p-8 text-center">
              <div className="flex justify-center gap-4 mb-8">
                <div className="w-20 h-20 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                  P
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-20 h-20 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                    E
                  </div>
                </div>
                <div className="w-20 h-20 bg-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                  W
                </div>
              </div>
              <h3 className="font-bold text-2xl md:text-3xl text-white mb-4">
                Proficient in MS Word, Excel, and PowerPoint
              </h3>
            </div>

            {/* Skill 2: Design */}
            <div className="bg-portfolio-purple-mid border border-portfolio-purple-bright rounded-lg p-8 text-center">
              <div className="flex justify-center items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.332 8.668a3.333 3.333 0 0 0 0-4.668 3.333 3.333 0 0 0-4.668 0L8.668 6.002a3.333 3.333 0 0 0 0 4.668 3.333 3.333 0 0 0 4.668 0l1.996-2.002zm-7.997 7.997a3.333 3.333 0 0 0 0 4.668 3.333 3.333 0 0 0 4.668 0L14.002 18.33a3.333 3.333 0 0 0 0-4.668 3.333 3.333 0 0 0-4.668 0l-2.002 1.996z"/>
                    <path d="m11.667 9.668-4.668 4.668a1.667 1.667 0 0 0 2.357 2.357l4.668-4.668a1.667 1.667 0 1 0-2.357-2.357z"/>
                  </svg>
                </div>
                <div className="font-lily-script text-5xl text-portfolio-purple-bright">
                  Canva
                </div>
              </div>
              <h3 className="font-bold text-2xl md:text-3xl text-white mb-4">
                Basic Wireframing and Editing
              </h3>
            </div>

            {/* Skill 3: Programming */}
            <div className="bg-portfolio-purple-mid border border-portfolio-purple-bright rounded-lg p-8 text-center">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-portfolio-purple-bright rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-2xl md:text-3xl text-white mb-4">
                Java, HTML, CSS, Javascript, C++
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-4 md:px-16 py-16 bg-gradient-to-r from-portfolio-gradient-1 via-portfolio-purple-dark to-portfolio-gradient-2">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-lilita text-4xl md:text-5xl text-portfolio-cream drop-shadow-lg mb-16">
            EDUCATION
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Education 1 */}
            <div className="bg-portfolio-purple-mid border border-portfolio-purple-bright rounded-lg overflow-hidden">
              <div className="h-48 bg-red-600 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                  <div className="text-red-600 text-6xl font-bold">A</div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-lilita text-xl text-white mb-2">
                  Apolinario Mabini Elementary School
                </h3>
                <p className="font-lilita text-xl text-white">
                  S.Y. 2015-2016
                </p>
              </div>
            </div>

            {/* Education 2 */}
            <div className="bg-portfolio-purple-mid border border-portfolio-purple-bright rounded-lg overflow-hidden">
              <div className="h-48 bg-green-600 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                  <div className="text-green-600 text-4xl font-bold">NHS</div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-lilita text-xl text-white mb-2">
                  Negros Occidental High School
                </h3>
                <p className="font-lilita text-lg text-white">
                  Junior High (S.Y. 2019-2020)<br />
                  Senior High (S.Y. 2021-2022)
                </p>
              </div>
            </div>

            {/* Education 3 */}
            <div className="bg-portfolio-purple-mid border border-portfolio-purple-bright rounded-lg overflow-hidden">
              <div className="h-48 bg-yellow-500 flex items-center justify-center">
                <div className="text-blue-900 text-4xl font-bold">STI</div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-lilita text-xl text-white mb-2">
                  STI WEST NEGROS UNIVERSITY
                </h3>
                <p className="font-lilita text-lg text-white">
                  Bachelor of Science in Information Technology<br />
                  S.Y. 2025-2026
                </p>
              </div>
            </div>
          </div>

          {/* Training and Seminars */}
          <div className="mt-16">
            <h3 className="font-lilita text-3xl md:text-4xl text-portfolio-cream drop-shadow-lg mb-8">
              TRAINING AND SEMINARS ATTENDED
            </h3>
            <div className="space-y-4 font-lilita text-xl text-portfolio-cream">
              <div>Programmer's Guild: Building Blocks of the Web: An Introduction to HTML and CSS</div>
              <div>Programmer's Guild: Lenscape: Fundamentals of Photography</div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto">
        <hr className="border-portfolio-purple-bright border-t-2" />
      </div>

      {/* Experience Section */}
      <section className="px-4 md:px-16 py-16 bg-gradient-to-r from-purple-900 to-yellow-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-lilita text-4xl md:text-6xl text-portfolio-cream drop-shadow-lg">
            EXPERIENCE
          </h2>
          <div className="mt-16 text-center">
            <p className="font-lilita text-2xl text-portfolio-cream">
              Experience section content will be added here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
