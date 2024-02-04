import PropTypes from "prop-types";

const SearchBar = ({
  filtroNombre,
  handleFiltroNombreChange,
  handleBuscarClick,
}) => {
  return (
    <div className="p-3 mb-2 gap-5 max-[600px]: items-center flex justify-center text-white bg-slate-900">
      <label htmlFor="filtroNombre" className="hidden sm:inline">
        Filtrar por nombre:{" "}
      </label>
      <input
        className="text-black px-2"
        type="text"
        id="filtroNombre"
        placeholder="Escribe..."
        value={filtroNombre}
        onChange={handleFiltroNombreChange}
      />
      <button
        onClick={handleBuscarClick}
        className="bg-orange-900/90 text-slate-200 px-3 rounded uppercase hover:bg-orange-800/60 hover:text-slate-100 border-2 border-orange-800/60 border-solid transition ease-in-out delay-75 hover:scale-110  duration-300"
      >
        Buscar
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  filtroNombre: PropTypes.string.isRequired,
  handleFiltroNombreChange: PropTypes.func.isRequired,
  handleBuscarClick: PropTypes.func.isRequired,
};

export default SearchBar;
