$(document).ready(function () {

    document.getElementById('button-add').addEventListener('click', addData);

})

//outside variable declared to increment tr ids on each click
var counter = 0;

const addData = (ev) =>{
    
    ev.preventDefault();

    //get the name and quantity inputs, parse quantity to int
    let name = document.getElementById('name').value;
    let quantity = document.getElementById('quantity').value;
    let quantityInteger = parseInt(quantity, 10);

    //turns true if errors occur inside the switch statement
    let error = false;

    //checks correctness of input syntax
    switch (true) {
        
        case isNaN(quantityInteger) === true : alert("Quantity must be a valid number.");
        error = true;
        break;

        case quantityInteger < 0 : alert("Quantity must be bigger than 0.");
        error = true;
        break;

    }


    let productsTable = document.getElementById("products");
    let targetTds = productsTable.querySelectorAll("td");

    //check if the input data already exists
    for (var i = 0; i < targetTds.length; i++) {

        var tdData = targetTds[i].innerHTML;

        if (error === false && tdData === name) {
            console.log("entered");
            console.log(tdData);
        }

    }



        let newTr = document.createElement("tr");
        newTr.id = counter;

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

        counter++;

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