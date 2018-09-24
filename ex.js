Array.prototype.toBase64 = function () {
    return this
        .map(m => {
            return m.toString(2).padStart(8, 0)
        })
        .split(3)
        .map(m => {
            var kv = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
            m = m.join('')
            switch (m.length) {
                case 8: return kv[parseInt(m.substr(0, 6), 2)] + kv[parseInt(m.substr(6, 6).padEnd(6, 0), 2)] + '=='
                case 16: return kv[parseInt(m.substr(0, 6), 2)] + kv[parseInt(m.substr(6, 6), 2)] + kv[parseInt(m.substr(12, 6).padEnd(6, 0), 2)] + '='
                case 24: return kv[parseInt(m.substr(0, 6), 2)] + kv[parseInt(m.substr(6, 6), 2)] + kv[parseInt(m.substr(12, 6), 2)] + kv[parseInt(m.substr(18, 6), 2)]
            }
        })
        .join('')
}

Array.prototype.split = function (n) {
    var arr = this
    var result = []
    var temp = []
    for (var i = 0; i < arr.length; i++) {
        temp.push(arr[i])
        if (temp.length == n) {
            result.push(temp)
            temp = []
        }
    }
    if (temp.length != 0)
        result.push(temp)
    return result
}

String.prototype.toBytesFromBase64 = function () {
    var kv = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    var vk = []
    for (var i = 0; i < kv.length; i++) {
        vk[kv[i]] = i
    }
    var str = this.replace(/=/g, '')
    var decArr = []
    for (var i = 0; i < str.length; i++) {
        decArr.push(vk[str[i]])
    }
    var temp = decArr
        .map(m => {
            return m.toString(2).padStart(6, 0)
        })
        .split(4)
        .map(m => {
            m = m.join('')
            switch (m.length) {
                case 24: return [parseInt(m.substr(0, 8), 2), parseInt(m.substr(8, 8), 2), parseInt(m.substr(16, 8), 2)]
                case 18: return [parseInt(m.substr(0, 8), 2), parseInt(m.substr(8, 8), 2)]
                case 12: return [parseInt(m.substr(0, 8), 2)]
            }
            return m
        })
    var result = []
    temp.forEach(m => {
        m.forEach(k => {
            result.push(k)
        })
    })
    return result
}