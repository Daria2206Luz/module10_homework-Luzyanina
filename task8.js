let myMap = new Map();
myMap.set("гемоглобин", "клинический анализ крови");
myMap.set("холестерин", "биохимический анализ крови");
myMap.set("цитология", "мазок");

for (let name of myMap.keys()){
console.log("Ключ - " + name + "," + " Значение - " + myMap.get(name));
}