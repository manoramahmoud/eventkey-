const insert = document.getElementById("insert");

window.addEventListener('keydown', (e)=>{
    insert.innerHTML = `<div class="key">
    ${e.key===' ' ?'space':e.key}
    <small>event.key</small>
</div>
<div class="key">
    ${e.keyCode}
    <small>event.keyCode</small>
</div>
<div class="key">
    ${e.code}
    <small>event.code</small>
</div>`
console.log(e)
   
})

let names = {
    fname: "Dillion",
    lname: "Megida"
}
console.log(names.__proto__.hasOwnProperty("jhhj"))
console.log(names.fname);
console.log(names.hasOwnProperty("mname"));