
function copyToClipboard(txt) {
    let that = this
    let txa = document.createElement('textarea')
    txa.value = txt
    document.body.appendChild(txa)
    txa.select()
    let res = document.execCommand('copy')
    document.body.removeChild(txa)
    alert('复制成功')
}