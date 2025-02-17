import "@/app/globals.css";
import Footer from "@/app/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>The Creative Developer</title>
      </head>
      <body className="bg-gray-50 font-serif text-gray-900">
        {/* Page Wrapper */}
        <div className="max-w-3xl mx-auto p-8 min-h-screen flex flex-col">
          
          {/* Blog Header */}
          <header className="mb-12 text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-800">
              The
              <span className="text-blue-900"> C</span>
              <span className="text-blue-800">r</span>
              <span className="text-blue-700">e</span>
              <span className="text-blue-600">a</span>
              <span className="text-blue-500">t</span>
              <span className="text-blue-400">i</span>
              <span className="text-blue-400">v</span>
              <span className="text-blue-300">e </span>
              Developer
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Thoughts on code, design, and building better software by <b>Ritul Jain</b>.
            </p>
          </header>

          {/* Main Content */}
          <main className="flex-grow">{children}</main>
        </div>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
