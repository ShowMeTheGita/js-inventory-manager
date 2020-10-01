$(document).ready(function () {

    document.getElementById('button-add').addEventListener('click', addData)

})

const addData = (ev) =>{
    
    ev.preventDefault();

    let name = document.getElementById('name').value;
    let quantity = document.getElementById('quantity').value;


    let newTr = document.createElement("tr");
    let nameTd = document.createElement("td");
    let quantityTd = document.createElement("td");

    let deleteTd = document.createElement("td");
    deleteTd.style.textAlign = "center"
    let imgForDeleteTd = document.createElement("img");
    imgForDeleteTd.src = "https://upload.wikimedia.org/wikipedia/commons/4/4d/Grey_delete_icon_%28Wikiproject_icons%29.svg";
    imgForDeleteTd.style.width = "25px";
    imgForDeleteTd.style.height ="25px";
    imgForDeleteTd.alt = "delete-icon";
    imgForDeleteTd.style.cursor = "pointer";
    deleteTd.appendChild(imgForDeleteTd);

    nameTd.innerHTML = name;
    quantityTd.innerHTML = quantity;

    newTr.appendChild(nameTd);
    newTr.appendChild(quantityTd);
    newTr.appendChild(deleteTd);
    document.getElementById('products').appendChild(newTr);

}



function filterTable() {

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("products");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}