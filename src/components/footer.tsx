export default function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="py-8 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-sm"></p>
            </div>
  
            <div>
              <p className="text-gray-500 text-sm">
                              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  