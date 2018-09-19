const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

let command = argv._[0];
switch (command) {
    case 'listar':
        listar();
        break;
    case 'crear':
        crear();
        break;
    case 'actualizar':
        actualizar();
        break;

    case 'borrar':
        borrar();
        break;
    default:
        comandoNoValido();
        break;
}

function crear() {
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
}

function listar() {
    let listado = porHacer.getListado();
    console.log('============= Por Hacer ==========='.info);
    for (const tarea of listado) {
        console.log(tarea.descripcion);
        console.log(`Estado: ${tarea.completado}`);
    }
    console.log('==================================='.info);
}

function actualizar() {
    let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

    if (actualizado) {
        console.log(`La tarea ${argv.descripcion}, quedo en estado ${argv.completado}`.info);
    } else {
        console.log(`No se encontro la tarea ${argv.descripcion}`.error);
    }
}

function borrar() {
    let borrada = porHacer.borrar(argv.descripcion);
    if (borrada) {
        console.log(`La tarea ${argv.descripcion}, fue borrada`.info);
    } else {
        console.log(`No se encontro la tarea ${argv.descripcion}`.error);
    }

}

function comandoNoValido() {
    console.log('Comando no reconocido').error;
}