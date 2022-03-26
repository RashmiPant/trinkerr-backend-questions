const getFileName = (files) => {
    let nameMap = {}, op = []
    for (let file of files) {
        if (nameMap[file]) {
            let count = 1, increase = true, newFile
            while (increase) {
                newFile = `${file}(${count})`
                if (nameMap[newFile]) {
                    count++
                    increase = true
                }
                else increase = false
            }
            file = newFile
        }
        op.push(file)
        nameMap[file] = true
    }
    console.log(op)
}

const inp1 = ["Valorant", "GTA5", "Fortnite", "Valorant(2019)"]
const inp2 = ["Valorant", "Valorant(1)", "Valorant", "Valorant(2019)"]
const inp3 = ["naruto", "naruto(1)", "naruto(2)", "naruto(3)", "naruto"]

// It's not mentioned how to handle this case. For now, if naruto(1) is already present in the dir, it will treat it as a complete file name
const inp4 = ["naruto", "naruto", "naruto(1)", "naruto(2)", "naruto(3)", "naruto"]

getFileName(inp1)
getFileName(inp2)
getFileName(inp3)
getFileName(inp4)  