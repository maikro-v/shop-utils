const template = require('art-template');
const path = require('path')

var html = template(path.join(__dirname, './template/index.art'), {
    entry: '/src/.plusjs/main.js'
})

console.log(html)

// const { createServer } = require('vite')

// ; (async () => {
//     const server = await createServer({
//         // 任何合法的用户配置选项，加上 `mode` 和 `configFile`
//         // configFile: false // 指明要使用的配置文件。如果没有设置，Vite 将尝试从项目根目录自动解析。设置为 false 可以禁用自动解析功能
//     })
//     await server.listen()

//     server.printUrls()
//     server.bindCLIShortcuts({ print: true })
// })()
