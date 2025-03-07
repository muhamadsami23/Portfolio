export default function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="py-8 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">&copy; {currentYear} John Doe. All rights reserved.</p>
            </div>
  
            <div>
              <p className="text-gray-500 text-sm">
                Designed and built with <span className="text-teal-400">❤</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  