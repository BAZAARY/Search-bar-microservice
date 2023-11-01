const { createClient } = require('@supabase/supabase-js');

// Configura tu cliente de Supabase
const supabase = createClient('https://mxkixfjeniosxqwmajic.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14a2l4Zmplbmlvc3hxd21hamljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3ODc4OTgsImV4cCI6MjAxNDM2Mzg5OH0.rqk6TQ0ZfcR9SaQrJnadSraBdL3zvE8WyWEN_ms0tG4');
const resolvers = {
  Query: {
    products: async () => {
      const { data, error } = await supabase
        .from('productos1')
        .select('id, nombre, descripcion, precio, categoria, disponible'); // Añade los campos necesarios aquí

      if (error) {
        throw new Error('No se pueden obtener los productos');
      }

      return data;
    },
  },
};

module.exports = resolvers;