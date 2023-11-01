const { Client } = require('pg');

// Configura las credenciales y la URL de conexión de tu base de datos de Supabase
const client = new Client({
    user: 'postgres',
    host: 'db.mxkixfjeniosxqwmajic.supabase.co',
    database: 'postgres',
    password: 'ornitorrinco18',
    port: '5432',
    // ... otras opciones
});
// Función para insertar ejemplos de productos con datos aleatorios en la tabla "productos1"
async function insertarProductos() {
    try {
        await client.connect();

        const productos = [
            { nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', precio: 19.99, categoria: 'Categoría 1', disponible: true },
            { nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', precio: 29.99, categoria: 'Categoría 2', disponible: true },
            { nombre: 'Producto 3', descripcion: 'Descripción del Producto 3', precio: 39.99, categoria: 'Categoría 1', disponible: false },
            { nombre: 'Producto 4', descripcion: 'Descripción del Producto 4', precio: 49.99, categoria: 'Categoría 3', disponible: true },
            { nombre: 'Producto 5', descripcion: 'Descripción del Producto 5', precio: 59.99, categoria: 'Categoría 2', disponible: false }
        ];

        for (const producto of productos) {
            const query = 'INSERT INTO productos1 (nombre, descripcion, precio, categoria, disponible) VALUES ($1, $2, $3, $4, $5)';
            const values = [producto.nombre, producto.descripcion, producto.precio, producto.categoria, producto.disponible];

            await client.query(query, values);
            console.log(`Producto '${producto.nombre}' insertado correctamente en la tabla productos1.`);
        }

        console.log('Inserción de productos en la tabla productos1 completada.');
    } catch (error) {
        console.error('Error al insertar productos en la tabla productos1:', error);
    } finally {
        await client.end();
    }
}

insertarProductos();