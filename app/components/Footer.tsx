export default function Footer() {
  return (
    <footer className="mt-16 py-10 bg-[#f7ede6] text-gray-900 font-serif">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* About Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">About Me</h2>
          <p className="text-md text-gray-700 mt-2 leading-relaxed">
            Hey, I'm <span className="font-semibold text-gray-900">Ritul Jain</span>, a software developer passionate about  
            <span className="italic text-gray-800"> the "cloud", automating the tedious, and working on systems at scale</span>.  
            Lately, I've been dabbling with AI on AWS and exploring its potential.
          </p>
        </div>

        {/* Personal Blogs & Hobbies Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Beyond Code</h2>
          <p className="text-md text-gray-700 mt-2 leading-relaxed">
            I write about life at  
            <a href="https://blog.rituljain.com" target="_blank" className="text-gray-800 hover:text-gray-900 hover:underline"> <b>blog.rituljain.com </b></a>  
            and express creativity through painting at  
            <a href="https://art.rituljain.com" target="_blank" className="text-gray-800 hover:text-gray-900 hover:underline"> <b>art.rituljain.com</b></a>.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex justify-between items-center text-sm text-gray-700">
          <div className="flex gap-4">
            <a
              href="https://github.com/rituljain"
              target="_blank"
              className="hover:text-gray-900 transition font-medium"
            >
              GitHub
            </a>
            <a
              href="mailto:ritul@example.com"
              className="hover:text-gray-900 transition font-medium"
            >
              Contact
            </a>
          </div>
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} The Creative Developer. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
