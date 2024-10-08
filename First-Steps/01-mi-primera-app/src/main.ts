import './topics/02-object-interface'
import './topics/03-functions'
import './topics/05-basic-destructuring'
class App {
  // Método que inicializa la aplicación
  init(): void {
    this.render();
  }

  // Método que crea y renderiza el div con "Hola Mundo"
  render(): void {
    const div = document.createElement('div');
    div.textContent = 'Hola Mundoaa';
    document.body.appendChild(div);
  }
}

// Instanciamos la clase App y llamamos al método init
const app = new App();
app.init();
