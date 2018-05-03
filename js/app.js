var peliculas = [
    {
        titulo:'La mala noticia',
        director:'fulanito1',
        protagonistas:['fulanita1','fulanita1','fulanita2'],
        genero:'romance',
        'horario funciones':['12:00','13:00','14:00']
    },
    {
        titulo:'La buena noticia',
        director:'fulanito2',
        protagonistas:['fulanita1','fulanita1','fulanita2'],
        genero:'terror',
        'horario funciones':['12:00','13:00','14:00']
    },
    {
        titulo:'Todo lo que hay en medio',
        director:'fulanito3',
        protagonistas:['fulanita1','fulanita1','fulanita2'],
        genero:'ficcion',
        'horario funciones':['12:00','13:00','14:00']
    },
    {
        titulo:'Una cancion de rap muy mala',
        director:'fulanito4',
        protagonistas:['fulanita1','fulanita1','fulanita2'],
        genero:'romance',
        'horario funciones':['12:00','13:00','14:00']
    }
];
var filtrarGenero = function(gen){
    // hint: al final, debería regresar un arreglo con las peliculas filtradas por género o un texto de error
};
var verCartelera = function(pelis){
    // hint: Por cada película ingresada a través del argumento 'pelis' debo mostrar toda la información disponible
    return true;
};
// Ninja Points
// filtrar por horarios
var obtenerHorarios = function(){
    return true;
};
// Interfaz :) 


// Zona de ejecuciones :)
alert('Bienvenida a GoToCinema');

var accion = confirm('Desea realizar alguna acción con nuestros servicios');

do{
    if(accion === true){
        var opcion = parseInt(prompt('ingresa una opcion \n\n 1. Ver cartelera \n\n 2. Filtrar por género'))
        switch(opcion){
            case 1: 
                // hint: ejecución de verCartelera
                break;
            case 2: 
                // hint: Obtener el genero deseado por la usuaria.
                // hint: ejecución de filtrarGenero con el género deseado por la usuaria.
                // hint: Debería poder reutilizar la función verCartelera para mostrar las pelis filtradas. 
                break;
            default:
                alert('no se ingreso una opción valida.')
                break;
        }
    }else{
        alert('vuelve pronto');
    }
    accion = confirm('Deseas continuar utilizando GoToCinema?');
}while(accion === true)
