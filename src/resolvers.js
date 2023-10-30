const fetch = require('node-fetch');

async function getProductIDsByQuery(query) {
  const inventoryURL = 'https://catalogmicroservicegraphql.onrender.com/graphql';

  try {
    const inventoryResponse = await fetch(inventoryURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query GetProductIDs($productName: String!) {
            search(query: $productName) {
              id
            }
          }
        `,
        variables: {
          productName: query
        }
      })
    });

    if (!inventoryResponse.ok) {
      throw new Error('Error al llamar al servicio de inventario');
    }

    const data = await inventoryResponse.json();

    if (data.errors) {
      throw new Error('Error en la respuesta del servicio de inventario');
    }

    return data.data.search.map(product => product.id);
  } catch (error) {
    throw new Error('Error al comunicarse con el servicio de inventario: ' + error.message);
  }
}

const resolvers = {
  Query: {
    search: async (_, { query }) => {
      try {
        const productIDs = await getProductIDsByQuery(query);
        return productIDs;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  }
};

module.exports = resolvers;
