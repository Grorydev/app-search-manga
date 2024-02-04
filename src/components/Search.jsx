import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";
import ContainerCard from "./ContainerCard";
import SearchBar from "./SearchBar";

const Search = () => {
  const location = useLocation();
  const [manga, setManga] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState("");
  const [mangasFiltrados, setMangasFiltrados] = useState([]);
  const [filtroPresionado, setFiltroPresionado] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/Grorydev/apis-experiment/main/mangas.json"
        );
        // Aseguramos que response.data.items sea un array antes de establecerlo en el estado.
        setManga(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Manejar el error de alguna manera, por ejemplo, mostrando un mensaje de error al usuario.
      }
    };

    fetchData();
  }, []); // El arreglo vacío asegura que este efecto se ejecute solo una vez al montar el componente.

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("query") || "";
    setFiltroNombre(query);
    setFiltroPresionado(true);

    // Realizar la búsqueda al recibir el valor del query
    if (query.trim() !== "") {
      const mangas = manga.filter((item) =>
        item.titulo.toLowerCase().includes(query.toLowerCase())
      );
      setMangasFiltrados(mangas);
      // Limpiar el input después de obtener resultados
      setFiltroNombre("");
    } else {
      setMangasFiltrados([]);
    }
  }, [location.search, manga]);

  const handleFiltroNombreChange = (event) => {
    setFiltroNombre(event.target.value);
  };

  const handleBuscarClick = () => {
    // Realizar la búsqueda al hacer clic en el botón
    if (filtroNombre.trim() !== "") {
      const mangas = manga.filter((item) =>
        item.titulo.toLowerCase().includes(filtroNombre.toLowerCase())
      );
      setMangasFiltrados(mangas);
      setFiltroPresionado(true);
      setFiltroNombre("");
    } else {
      setMangasFiltrados([]);
      setFiltroPresionado(true);
    }
  };

  return (
    <div>
      <SearchBar
        filtroNombre={filtroNombre}
        handleFiltroNombreChange={handleFiltroNombreChange}
        handleBuscarClick={handleBuscarClick}
      />
      {filtroPresionado && mangasFiltrados.length > 0 ? (
        <ContainerCard>
          {mangasFiltrados.map((item) => (
            <Card
              key={item.id}
              nameManga={item.titulo}
              imgManga={item.img}
              rank={item.rank}
              numCap={item.cantidad_capitulos}
            />
          ))}
        </ContainerCard>
      ) : null}
      {filtroPresionado && mangasFiltrados.length === 0 && (
        <p>No hay mangas que coincidan con el filtro.</p>
      )}
    </div>
  );
};

export default Search;
