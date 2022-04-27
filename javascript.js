let seleccion = prompt('Seleccione un articulo para comprar \n \n 1- Celular \n 2- Tablet \n 3- Smart Watch \n')

    switch (seleccion.toLowerCase()) {
        case '1': {
            class Producto {
                constructor(articulo, precio, iva) {

                    this.articulo = articulo;
                    this.precio = precio;
                    this.iva = iva;

                }

                total() {
                    alert('El valor del ' + this.articulo + ' es de: ' + this.precio + " pesos." + "\nIva de 21%: " + (this.precio * this.iva) + " pesos. " + "\nTotal: " + (this.precio + (this.precio * this.iva)) + " pesos.") ;
                }
            }

            const articulo = new Producto('Celular', 30000, 0.21);

            articulo.total();

            console.log(articulo);
        }

        break;

        case '2':

        {

            class Producto {
                constructor(articulo, precio, iva) {

                    this.articulo = articulo;
                    this.precio = precio;
                    this.iva = iva;

                }

                total() {
                    alert('El valor del ' + this.articulo + ' es de: ' + this.precio + " pesos." + "\nIva de 21%: " + (this.precio * this.iva) + " pesos. " + "\nTotal: " + (this.precio + (this.precio * this.iva)) + " pesos.") ;
                }
            }

            const articulo = new Producto('Tablet', 33000, 0.21);

            articulo.total();

            console.log(articulo);
        }
        break;

        case '3':

        {
            class Producto {
                constructor(articulo, precio, iva) {

                    this.articulo = articulo;
                    this.precio = precio;
                    this.iva = iva;

                }

                total() {
                    alert('El valor del ' + this.articulo + ' es de: ' + this.precio + " pesos." + "\nIva de 21%: " + (this.precio * this.iva) + " pesos. " + "\nTotal: " + (this.precio + (this.precio * this.iva)) + " pesos.") ;
                }
            }

            const articulo = new Producto('Smart watch', 6500, 0.21);

            articulo.total();

            console.log(articulo);
        }
        break;

        default:
            alert("lo ingresado no es valido");
            break;
            
            

            
    }
    


