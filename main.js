let fructis = ["olama","bananm","shaftoli","gilos"]
console.log(fructis)

alert(`Mevalar savatda: ${fructis.length} ta`)

let q = confirm("Siz savatdan mevalarni olishni hohlaysizmi")

if (q == true){
fructis.pop()
alert(`Mevalar savadta ${fructis.length} ta`)
console.log(fructis)
}
else{
alert(`Mevalar savatda ${fructis.length} ta`)
console.log(fructis)
}