import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    // Redirigir a la página de búsqueda con el valor del input como parámetro de consulta
    navigate(`/search?query=${encodeURIComponent(searchValue)}`);
  };

  return (
    <div className=" text-slate-100 opacity-85 h-screen w-full">
      <header className="flex flex-col p-2 text-center h-full justify-center">
        <div
          className="flex h-full items-center justify-center"
          style={{
            background: "url('/assets/images/fondo_principal.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="space-y-7 flex flex-col">
            <h4 className="text-4xl uppercase">Mundo Manga</h4>
            <p className="text-sm font-extralight">
              Busca una nueva aventura que leer.
            </p>
            <input
              type="text"
              placeholder="Escribe el titulo del manga"
              className="px-3 py-1 w-[350px] sm:w-[500px] border-2 rounded-full mtext-slate-800 text-slate-700 focus:outline-none focus:border-transparent"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <button
              className="w-40 self-center rounded  px-4 py-1   transition ease-in-out delay-75 hover:scale-110  duration-300 uppercase font-semibold border-2  border-solid bg-orange-900/90 text-slate-200  hover:bg-orange-800/60 hover:text-slate-100  border-orange-800/60 "
              onClick={handleSearch}
            >
              Buscar
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
