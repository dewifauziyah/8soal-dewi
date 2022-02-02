const names = "dewi"
const map = Array.prototype.map

const newName = map.call(names, eachLetter => {
    return `${eachLetter}i`
})

console.log(newName [2])