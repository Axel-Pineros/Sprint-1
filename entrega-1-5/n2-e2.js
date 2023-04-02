// Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilizant Node Child Processes.

const { exec } = require('child_process');

exec('dir %userprofile%', (error, stdout) => {
    if (error) console.log(error)
    console.log(stdout)
});