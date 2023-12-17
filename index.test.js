// index.test.js

const app = require('./index');

describe('Pruebas de la aplicación de consola', () => {
  test('Debe mostrar "¡Hola Mundo!" en la consola', () => {
    // Redirigir la salida de la consola a una variable para realizar la comprobación
    const consoleSpy = jest.spyOn(console, 'log');
    app.mostrarHolaMundo();
    expect(consoleSpy).toHaveBeenCalledWith('¡Hola Mundo!');
    consoleSpy.mockRestore(); // Restaurar la función original de console.log
  });
});

