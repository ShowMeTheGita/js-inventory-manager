$(document).ready(function () {
    fetchProducts();
})

function fetchProducts() {
    fetch("http://localhost:8080/api/products")
        .then(response => response.json())
        .then(function (data) {
            data.forEach(element => {
                $("<tr><td>" + element.name + "</td>" + "<td>" + element.quantity + "</td>" + "<td style='text-align: center'><img id=" + "'" + element.id + "'" + " onclick='deleteProduct(this.id)' src='https://upload.wikimedia.org/wikipedia/commons/4/4d/Grey_delete_icon_%28Wikiproject_icons%29.svg' alt='delete-icon' width='25px' style='cursor: pointer' /></td></tr>").appendTo('#products');
            });
        });
}

function submitProduct() {

    var formData = $("#productform").serializeArray();
    var toSend = {
        name:formData[0].value,
        quantity:formData[1].value
    }

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/api/addProduct",
        data: JSON.stringify(toSend),
        success: location.reload(),
        dataType: "json",
        contentType: "application/json",
        error: (function(xhr, textStatus, errorThrown) {
            alert('Error! Status = ' + xhr.status);
        })
    })
}

function deleteProduct(itemId) {
   console.log(itemId);

    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/api/product/delete/" + itemId,
        data: itemId,
        success: location.reload(),
        dataType: "text",
        contentType: "application/json",
        error: (function(xhr, textStatus, errorThrown) {
            alert('Error! Status = ' + xhr.status);
        })
    })


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