const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado a pendiente la tarea'
}

const argv = require('yargs')
    .command('listar', 'Imprimer en consola la tabla de multiplicar', {})
    .command('crear', 'Crear una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado a completado de una terea', { descripcion, completado })
    .command('borrar', 'Borra una tarea por hacer de la base de datos', { descripcion, completado })
    .help()
    .argv;


module.exports = {
    argv
}