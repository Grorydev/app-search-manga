import axios from "axios";
import { useState, useEffect } from "react";

const ListItems = () => {
  const [manga, setManga] = useState([]);

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

  // Ordenar los mangas alfabéticamente por el título
  const mangaOrdenado = [...manga].sort((a, b) =>
    a.titulo.localeCompare(b.titulo)
  );

  return (
    <div>
      {mangaOrdenado.map((item) => (
        <div key={item.id}>
          <h2>{item.titulo}</h2>
        </div>
      ))}
    </div>
  );
};

export default ListItems;
