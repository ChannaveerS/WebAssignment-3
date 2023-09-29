
// Keeping it globle to access in diff functio
var counter = 0; 
var table = document.getElementById('myTable');
var rowCount = table.rows.length;
var SplitElement = null;

function addStudentData() {
  
  counter++;

  table = document.getElementById('myTable');
  rowCount = table.rows.length;
  // Inserting Rows cell
  var AddnewTableRow = table.insertRow(rowCount);
  var checkboxTableCell = AddnewTableRow.insertCell(0);
  var studentTableCell = AddnewTableRow.insertCell(1);
  var advisorTableCell = AddnewTableRow.insertCell(2);
  var statusTableCell = AddnewTableRow.insertCell(3);
  var semesterTableCell = AddnewTableRow.insertCell(4);
  var typeTableCell = AddnewTableRow.insertCell(5);
  var budgetTableCell = AddnewTableRow.insertCell(6);
  var percentageTableCell = AddnewTableRow.insertCell(7);
  var deleteCell = AddnewTableRow.insertCell(8);
  var editCell = AddnewTableRow.insertCell(9);

  
  studentTableCell.innerHTML = 'Student ' + (counter);
  advisorTableCell.innerHTML = 'Teacher ' + (counter);
  statusTableCell.innerHTML = 'Approved';
  semesterTableCell.innerHTML = 'Fall';
  typeTableCell.innerHTML = 'TA';
  budgetTableCell.innerHTML = '12345';
  percentageTableCell.innerHTML = '100%';

// Checkbox trigger
  checkboxTableCell.innerHTML = '<input type="checkbox" onclick="showHideDetails(this)"/><br /><br /><img src="down.png" width="25px" onclick="expandRow(this)"/>';

    // Delete button
    deleteCell.innerHTML = '<button onclick="deleteRow(this )">Delete</button>';
    deleteCell.style.display = 'none';

    editCell.innerHTML = '<button onclick="oneditRow(this)">Edit</button>';
    editCell.style.display = 'none';


    // Show the delete column header
    document.getElementById('deleteHeader').style.display = 'table-header';

  	// Additional details row
    var detailsRow = table.insertRow(rowCount + 1);
    detailsRow.className = 'dropDownTextArea';
    var detailCell = detailsRow.insertCell(0);
    detailCell.colSpan = 9;
    detailCell.innerHTML = 'Advisor :<br <br> Award Details <br <br> Summer1-2014 <br <br> Budget Number : <br <br> Tution Number: <br <br> Comments : <br <br> <br <br> Award Status:'; // Add your advisor details here

    alert("Student "+ (counter) + " has been added ");
    updateSubmitButtonState(); // Update button state after row deletion

 }

function deleteRow(button) {
  
  var row = button.parentNode.parentNode;
			var rowIndex = row.rowIndex;
			row.parentNode.removeChild(row);
      
			alert("Student "+ SplitElement + " has been deleted.");

      var deleteHeader = document.getElementById('deleteHeader');
      deleteHeader.style.display = deleteHeader.style.display === 'none' ? 'table-cell' : 'none';
    
      var editHeader = document.getElementById('editHeader');
      editHeader.style.display = editHeader.style.display === 'none' ? 'table-cell' : 'none';
      
}


function oneditRow(button){

  var userInput = prompt("Please enter your name:");

}

function showHideDetails(checkbox) {
  var row = checkbox.parentNode.parentNode;
  var deleteCell = row.cells[8]; // Delete column cell
  var editCell = row.cells[9]; // Delete column cell
  if (checkbox.checked) {
    deleteCell.style.display = 'table-cell';
    editCell.style.display = 'table-cell';
    
  } else {
    deleteCell.style.display = 'none';
    editCell.style.display = 'none';
  }

    var deleteHeader = document.getElementById('deleteHeader');
  deleteHeader.style.display = deleteHeader.style.display === 'none' ? 'table-cell' : 'none';

  var editHeader = document.getElementById('editHeader');
  editHeader.style.display = editHeader.style.display === 'none' ? 'table-cell' : 'none';

  var rowIndex = row.rowIndex;

  var row = table.rows[rowIndex]; // Replace 0 with the desired row index
  var studentTableCell = row.cells[1]; // Assuming "STUDENT" cell is at index 1
  var studentContent = studentTableCell.innerHTML;

    SplitElement = studentContent.split(" ")[1];

    row.classList.toggle('checkedRow', checkbox.checked);

    updateSubmitButtonState(); // Update button state after checkbox click

}

function updateSubmitButtonState() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var submitButton = document.getElementById('button');

  // Check if at least one checkbox is checked
  var atLeastOneChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

  // Enable or disable the submit button based on the condition
  submitButton.disabled = !atLeastOneChecked;
}
function expandRow(img) {
 
  var row = img.parentNode.parentNode;
  var detailsRow = row.nextSibling;
  if (detailsRow && detailsRow.className === 'dropDownTextArea') {
      detailsRow.style.display = detailsRow.style.display === 'none' ? 'table-row' : 'none';
  }
}

function submitAwards() {
  alert('awards!');
}

