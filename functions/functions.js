// Builder
function Person(name) {
    this.name = name
    this.walk = () => {
        return name + " andando"
    }
}
const nico = new Person("Nico")
const garc = new Person("Garc")

console.log(nico.name)
console.log(garc.walk())