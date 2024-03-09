let menuVisible = false;

//FUNCION QUE OCULTA Y MUESTRA EL MENU
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //SE OCULTA EL MENU UNA VEZ QUE SE SELECCIONE UNA OPCIÓN
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//FUNCION DESCARGAR CURRICULUM
function descargarPdf(){
    var link = document.getElementById('pdfLink');
    link.target = '_blank'
    link.click();
}

//FUNCION QUE APLICA A LAS ANIMACIONES DE LAS SKILLS
function efectoSkills(){
    var skills = document.getElementById("skills");
    var distancia = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia >= 300){
        let skill = document.getElementsByClassName("progreso");
        skill[0].classList.add("python");
        skill[1].classList.add("htmlcss");
        skill[2].classList.add("javascript");
        skill[3].classList.add("sql");
        skill[4].classList.add("office");
        skill[5].classList.add("git");
        skill[6].classList.add("scrum");
        skill[7].classList.add("aspnet");

        skill[8].classList.add("aprendizaje");
        skill[9].classList.add("trabajoequipo");
        skill[10].classList.add("autonomia");
        skill[11].classList.add("analisis");
        skill[12].classList.add("adaptacion");
        skill[13].classList.add("creatividad");
        skill[14].classList.add("dedicacion");
        skill[15].classList.add("resiliencia");
        skill[16].classList.add("responsabilidad");
        skill[17].classList.add("disciplina");

    }
}
//DETECTAR SCROLLING PARA APLICAR LA ANIMACION DE LA BARRA DE SKILLS
window.onscroll = function(){
    efectoSkills();
}

//REDIRIGIR LINK A MIS PROYECTOS 
function linkJuegoSecreto(){
    document.getElementById('juegosecreto').addEventListener('click', function(){
    var url = 'https://estebansalas94.github.io/JUEGO-DEL-NUMERO-SECRETO/';
    window.open(url,'_blank')
    }) 
}
function linkBarberiaAlura(){
    document.getElementById('barberiaAlura').addEventListener('click', function(){
    var url = 'https://estebansalas94.github.io/BARBERIA-ALURA/';
    window.open(url,'_blank')
    }) 
}
function linkLoginPrimavera(){
    document.getElementById('loginPrimavera').addEventListener('click', function(){
    var url = 'https://estebansalas94.github.io/LOGIN-ANIMADO/';
    window.open(url,'_blank')
    }) 
}
function linkCarteleraJuegos(){
    document.getElementById('carteleraJuegos').addEventListener('click', function(){
    var url = 'https://estebansalas94.github.io/CARTAS-ANIMADAS-CON-CSS3/';
    window.open(url,'_blank')
    }) 
}
function linkPython(){
    document.getElementById('python').addEventListener('click', function(){
    var url = 'https://github.com/estebansalas94/PROYECTOS-PYTHON';
    window.open(url,'_blank')
    }) 
}

function linkTareas(){
    document.getElementById('tareas').addEventListener('click', function(){
    var url = 'https://github.com/estebansalas94/GESTOR-DE-TAREAS-/blob/main/app.py';
    window.open(url,'_blank')
    }) 
}


