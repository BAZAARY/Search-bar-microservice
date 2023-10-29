// Aquí simularé una función de búsqueda, pero deberías reemplazarla con la lógica real de búsqueda.
const searchFunction = async (query) => {
    // Lógica de búsqueda real, por ejemplo, buscar en una base de datos o realizar llamadas a una API externa.
    // Aquí, retornaré resultados simulados.
    const results = [
      { id: '1', title: 'Ejemplo 1' },
      { id: '2', title: 'Ejemplo 2' }
      // Agrega más resultados según tu lógica de búsqueda.
    ];
  
    // Simulación de demora
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    return results.filter(result => result.title.toLowerCase().includes(query.toLowerCase()));
  };
  
  const resolvers = {
    Query: {
      search: async (_, { query }) => {
        return await searchFunction(query);
      }
    }
  };
  
  module.exports = resolvers;
  