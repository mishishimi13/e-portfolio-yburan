import { Link } from "react-router-dom";

export default function Experience() {
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
              <Link to="/experience" className="font-lilita text-2xl md:text-3xl text-portfolio-purple-bright">
                EXPERIENCE
              </Link>
              <Link to="/contact" className="font-lilita text-2xl md:text-3xl text-portfolio-cream hover:text-portfolio-purple-bright transition-colors">
                CONTACT
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <section className="px-4 md:px-16 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-lilita text-4xl md:text-6xl text-portfolio-cream drop-shadow-lg mb-8">
            EXPERIENCE
          </h1>
          <div className="bg-portfolio-purple-mid border border-portfolio-purple-bright rounded-lg p-12">
            <p className="font-lilita text-2xl text-portfolio-cream mb-6">
              This page is currently being developed.
            </p>
            <p className="font-lilita text-xl text-portfolio-cream opacity-80">
              Please continue prompting to help fill in the experience section content.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
