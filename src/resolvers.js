const fetch = require('node-fetch');

async function callInventoryService(query) {
  try {
    const inventoryResponse = await fetch('https://catalogmicroservicegraphql.onrender.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query getProductNameAndPrice($productName: String!) {
            getProductNameAndPriceWithId(productId: $productName) {
              id
              name
              price
            }
          }
        `,
        variables: {
          productName: query // 'query' contiene el nombre del producto a buscar
        }
      })
    });

    if (inventoryResponse.ok) {
      const data = await inventoryResponse.json();
      return data.data.getProductNameAndPriceWithId; // Retorna la información obtenida del inventario
    } else {
      throw new Error('Error al llamar al servicio de inventario');
    }
  } catch (error) {
    throw new Error('Error al comunicarse con el servicio de inventario');
  }
}

const resolvers = {
  Query: {
    search: async (_, { query }) => {
      try {
        const products = await callInventoryService(query);
        return products;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  }
};

module.exports = resolvers;
