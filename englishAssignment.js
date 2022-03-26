const getPrefix = (words) => {
    let prefix = '', ind = 0, loop = true
    while (loop) {
        let present, isPre = true
        for (let word of words) {
            if (word.length - 1 <= ind) { loop = false; break; }
            if (!present) present = word[ind]
            else if (present != word[ind]) {
                isPre = false
            }
        }
        if (isPre && present) prefix += present
        ind++
    }
    console.log(prefix)
}

const words_as_numbers1 = ["11232", "1123123213", "11232", "112333913", "1123122"]
const words_as_numbers2 = ["11232", "121232", "11111"]
getPrefix(words_as_numbers1)
getPrefix(words_as_numbers2)