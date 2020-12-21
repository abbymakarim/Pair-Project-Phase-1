function ConvertDate (value) {
    let output = ''
    let date = value.toString().split(' ')
    for (let i = 0 ; i < date.length - 4 ; i ++){
        output += date[i] + ' '
    }
    return output
}

module.exports = ConvertDate;