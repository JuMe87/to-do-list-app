//jQuery
//This function will be activated with click on "Add" button
function newItem(){
    
    //1. Adding a new item to the list when clicking on "Add" button:
    let li = $('<li></li>');    //list is defined as li
    let inputValue = $('#input').val();     //variable inputValue is defined by the val function on the #input class
    li.append(inputValue);     //the inputValue is added to the li (List of items)

    
    if (inputValue === ''){     //when the inputValue is empty,
        alert("Please add a list item");  //the alert will be displayed as a pop-up
    } else {
        $('#list').append(li);     //otherwise the li item will be added to the #list
    }
    
    //2. Crossing out an item from the list of items:
    function crossOut() {
        li.toggleClass('strike'); //changes li class to "strike" which in css will add the text decoration "line-through"
    }
    li.on('click',crossOut);
    
    //3(i). Adding the delete button X to list items: 
    let deleteButton = $('<button>X</button>');
    deleteButton.addClass("crossOutButton");
    li.append(deleteButton);
    
    //3(ii). Delete items from list when clicking on deleteButton
    function deleteListItem(){
        li.addClass('delete')
    }

    deleteButton.on('click', deleteListItem); //on click on the deleteButton the function deleteListItem is activated

    // 4. Reordering the items via mouse click: 
    $('#list').sortable();
}

