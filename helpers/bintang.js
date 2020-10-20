function bintang(num){
    let emoji = '★☆'
    let res = ''
    for (let i = 1; i <= 5; i++) {
        if (i <= num) {
            res += emoji[0]
        } else {
            res += emoji[1]
        }      
    }
    return `${res} (+${num})`
}

module.exports = bintang