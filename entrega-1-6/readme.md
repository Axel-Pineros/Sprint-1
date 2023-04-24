# Testing amb Jest

## Passos previs

1. Instal·la [node.js](https://nodejs.org/es/download). Tria la versió apropiada (Windows, Mac o Linux).
2. Executa ```npm i``` en la terminal per instal·lar les dependències del *package.json.*

## Comprovació tradicional

Per experimentar amb els tests, ves a la carpeta *entrega-1-6*, introduieix ```npm test``` en la terminal i s'executaran simultàniament tots els tests del repositori.

## Alternativa (recomanada) :+1:

Per simplificar el procés de testeig, no haver de dependre de la terminal i tenir més control individual de les diferents unitats, segueix aquest passos:

1. Instal·la al teu IDE l'extensió [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner). No requereix cap configuració addicional.
2. Si la instal·lació s'ha realitzat correctament, veuràs que han aparegut les opcions **Run|Debug** sobre les funcions ```describe()``` i ```test()```.
3. Clica en qualsevol ```test()``` per executar-lo individualment. Un ```describe()``` executarà tots els ```test()``` i ```describe()``` que contingui.