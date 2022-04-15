let producto = prompt('Ingrese el producto que desea comprar. LAPTOP ó DESKTOP')

const iva = 19 / 100;

    const laptop = [
        nombreProducto = 'Laptop',
        precio = 500,
        ivaProducto = iva,
        descuento = 0.10

    ]

    const desktop = [
        nombreProducto = 'Desktop',
        precio = 300,
        ivaProducto = iva,
        descuento = 0.05
    ] 


function compra() {

    let compraProducto = producto;

    switch (producto.toLowerCase()) {
        case 'laptop':
                
            alert('vas a comprar un ' + laptop[0]);
                
                let detalleLaptop = prompt ('desea ver el detalle de su compra? SÍ o NO? ');

                detalleCompra = detalleLaptop.toLowerCase();

                if ( detalleLaptop == 'si') {

                    function detalleValor() {

                        let valor = (laptop[1] * laptop[2]) + laptop[1]  ;

                        alert('Vas a comprar un ' + laptop[0] + ' por un valor de ' + laptop[1] + ' + ' + ((laptop[2] * 100 ) + ' % de IVA') + ' por un total de ' + valor + ' incluido IVA');
                        
                    }
                    
                    detalleValor();

                } else {

                    console.log('Puedes ir a realizar el pago');
                    alert('Puedes ir a realizar el pago');

                }
                
            break;
        case 'desktop':
            alert('vas a comprar un ' + desktop[0]);
                
                let detalleDesktop = prompt ('desea ver el detalle de su compra? SÍ o NO? ');

                detalleCompra = detalleDesktop.toLowerCase();

                if ( detalleDesktop == 'si') {

                    function detalleValor() {

                        let valor = (desktop[1] * desktop[2]) + desktop[1]  ;

                        alert('Vas a comprar un ' + desktop[0] + ' por un valor de ' + desktop[1] + ' + ' + ((desktop[2] * 100 ) + ' % de IVA') + ' por un total de ' + valor + ' incluido IVA');
                        
                    }
                    
                    detalleValor();

                } else {

                    console.log('Puedes ir a realizar el pago');
                    alert('Puedes ir a realizar el pago');

                }        break;
    
        default:
            alert('Solo vendemos laptops o desktops. por favor ingresa una opción. ');

            break;
        }

    return compraProducto
    
}

compra();