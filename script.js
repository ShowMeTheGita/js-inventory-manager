$(document).ready(function () {

    document.getElementById('button-add').addEventListener('click', addData);

})

var test = 0;

const addData = (ev) =>{
    
    ev.preventDefault();

    let name = document.getElementById('name').value;
    let quantity = document.getElementById('quantity').value;
    let quantityInteger = parseInt(quantity, 10);

    let error = false;

    switch (true) {
        
        case isNaN(quantityInteger) == true : alert("Quantity must be a valid number.");
        error = true;
        break;

        case quantityInteger < 0 : alert("Quantity must be bigger than 0.");
        error = true;
        break;

    }

    if (error === false) {

        let newTr = document.createElement("tr");
        newTr.id = test;

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

        imgForDeleteTd.addEventListener('click', function () {
            let toDelete = document.getElementById(newTr.id);
            toDelete.parentNode.removeChild(toDelete);
        });

        deleteTd.appendChild(imgForDeleteTd);

        nameTd.innerHTML = name;
        quantityTd.innerHTML = quantity;

        newTr.appendChild(nameTd);
        newTr.appendChild(quantityTd);
        newTr.appendChild(deleteTd);
        document.getElementById('products').appendChild(newTr);

        test++;

    }

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