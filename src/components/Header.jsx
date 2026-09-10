
import Navbar from "./Navbar"

function Header() {
  return (

    <header className="bg-slate-800 text-white shadow-lg py-6">

      <div className="max-w-full mx-auto flex justify-between items-center px-8">
        
        <div className="flex items-center gap-6">
          <img 
            className="w-20 h-20 object-contain rounded-lg bg-white p-1" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCcEHN46jYzzn97dteVji0FLFthm7yYM31Es89KI15mKU4KVUdzPhNXO_&s=10" 

          />
          <h1 className="text-2xl font-bold tracking-wide">
            Curso de TailWind - Instituto Federal de São Paulo
          </h1>
        </div>

        <Navbar />

      </div>
    </header>
  )
}

export default Header
