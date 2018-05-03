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
    var peliculasFiltradas = [];
    for(var i = 0; i < peliculas.length; i+=1){
        // console.log(peliculas[i]);
        //Obtener el genero de cada película.
        var peliGenero = peliculas[i].genero;
        if(peliGenero === gen){
            peliculasFiltradas.push(peliculas[i]);
        }
    }
    return (peliculasFiltradas.length > 0) ? peliculasFiltradas: 'No hay peliculas de ese género en cartelera';
};
var verCartelera = function(pelis){
    // recorrer el arreglo de películas. 
    console.log(pelis);
    for(var i = 0; i < pelis.length; i+=1){
        console.log(pelis[i]);
        //pelis[i] muestra cada uno de los elementos del arreglo películas, estos elementos son objetos.
        var horariosPelicula = pelis[i]["horario funciones"].toString();
        var protagonistasPelicula = pelis[i]['protagonistas'].toString();
        var infoPelicula = pelis[i].titulo +'\n'+pelis[i].genero+'\n'+pelis[i].director+'\n'+horariosPelicula+'\n'+protagonistasPelicula;
        console.log(infoPelicula);
    }
    return pelis; 
};
var obtenerHorarios = function(){
    return true;
};

alert('Bienvenida a GoToCinema');
var accion = confirm('Desea realizar alguna acción con nuestros servicios', 'sí','no');

do{
    if(accion === true){
        var opcion = parseInt(prompt('ingresa una opcion \n\n 1. Ver cartelera \n\n 2. Filtrar por género'))
        switch(opcion){
            case 1: 
                verCartelera(peliculas);
                break;
            case 2: 
                var genero = prompt('Ingresa el nombre del género que deseas filtrar').toLowerCase();
                var pelisFiltradas = filtrarGenero(genero);
                (Array.isArray(pelisFiltradas)) ? verCartelera(pelisFiltradas) : console.log(pelisFiltradas);
                break;
            default:
                alert('no se ingreso una opción valida.')
                break;
        }
    }else{
        alert('vuelve pronto');
    }
    accion = confirm('Continuar utilizando GoToCinema');
}while(accion === true)
