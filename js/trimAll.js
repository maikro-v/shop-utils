function trimAll(text) {
    if (typeof text === 'string') {
        return text.split(/[\t\r\f\n\s]*/g).join('')
    } else {
        console.error(`${typeof text} 类型错误，只支持字符串`)
    }
}