const deev = document.getElementById("divdiv");
const m1 = deev.children;

console.log(m1)
m1[0], m1[2] = m1[2], m1[0];
console.log(m1)
deev.children = m1