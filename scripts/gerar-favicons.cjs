// O SVG é a fonte única dos ícones. Use NODE_PATH para o Sharp disponível.
const sharp = require('sharp')
const variantes = [
  ['public/favicon-32.png', 32],
  ['public/favicon-96.png', 96],
  ['public/apple-touch-icon.png', 180],
  ['public/icon-192.png', 192],
  ['public/icon-512.png', 512],
  ['src/app/icon.png', 96],
]

Promise.all(variantes.map(([arquivo, tamanho]) => sharp('public/favicon.svg').resize(tamanho, tamanho).png().toFile(arquivo)))
  .then(() => console.log('Favicons atualizados a partir do monograma em SVG.'))
  .catch(error => { console.error(error); process.exitCode = 1 })
