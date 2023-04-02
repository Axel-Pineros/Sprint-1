// Crea una funció que comprimeixi el fitxer del nivell 1.

(function compressFile() {
    const zlib = require('zlib');
    const gzip = zlib.createGzip();
    const fs = require('fs');
    const inp = fs.createReadStream('fitxer.txt');
    const out = fs.createWriteStream('fitxer.txt.gz');
    inp.pipe(gzip).pipe(out);
})();
