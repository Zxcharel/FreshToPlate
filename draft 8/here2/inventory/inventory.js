
// localStorage.setItem("inventory", "");

function removeItem(item) {
    var inventory = JSON.parse(localStorage.getItem("inventory")) || [];
    console.log(inventory)
    
    // Find and remove the item from the inventory
    // const index = inventory.indexOf(item);
    // if (index !== -1) {
    //     inventory.splice(index, 1);
        
    //     // Update the inventory in local storage
    //     localStorage.setItem("inventory", JSON.stringify(inventory));
        
    //     // Update the displayed inventory
    //     displayInventory();
    // }

    thingsArr = inventory.split("**")
    console.log(thingsArr)
    console.log(item.parentElement.innerText)
    checkStr = ""
    for (ch of item.parentElement.innerText) {
        if (ch != ":") {
            checkStr += ch
        }
        else {
            break
        }
    }

    for ( let i = thingsArr.length-1; i>-1; i--) {
        console.log(i)
        if (thingsArr[i].includes(checkStr)) {
            thingsArr.splice(i, 1)
        }
    }


    inventory = thingsArr.join("**")
    // Update the inventory in local storage
    localStorage.setItem("inventory", JSON.stringify(inventory));
        
    // Update the displayed inventory
    displayInventory();

}

// Function to create a list item with a delete button
function createListItem(item, amt) {

    var test = `${item}@@${amt}`

    console.log(amt, typeof(amt))

    var inventory = localStorage.getItem("inventory") || [];

    newStr = ""

        for (ch of inventory) {
            if (ch != `"` && ch != `\\`) {
                newStr += ch
            }
        }

    inventory = newStr

    if (inventory.length == 0) {
        inventory += test
    }
    else (
        inventory += "**" + test
    )

    console.log(test)
    console.log(JSON.stringify(inventory))
    localStorage.setItem("inventory", JSON.stringify(inventory));

    document.getElementById("input").value = ""
    document.getElementById("amt").value = ""

}

// Function to display the inventory
function displayInventory() {
    const inventoryList = document.getElementById("inventoryList");
    const inventory = JSON.parse(localStorage.getItem("inventory")) || [];

    inventoryList.innerHTML = "";

    console.log(inventory)
    thingsArr = inventory.split("**")
    inventoryObj = {}

    for (item of thingsArr) {
        // const li = createListItem(item);
        // inventoryList.appendChild(li);
        newStr = ""

        for (ch of item) {
            if (ch != `"` && ch != `\\`) {
                newStr += ch
            }
        }

        itemArr = newStr.split("@@")

        if (!isNaN(itemArr[1])) {
            if (itemArr[0] in inventoryObj) {
                inventoryObj[itemArr[0]] += Number(itemArr[1]);
            }
            else {
                inventoryObj[itemArr[0]] = Number(itemArr[1])
            }
        }
    }

    for (ingredient of Object.keys(inventoryObj)) {

        console.log(ingredient)

        if (inventoryObj[ingredient] > 0) {
            const li = document.createElement("li");
            li.textContent = `${ingredient}: ${inventoryObj[ingredient]}`
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.setAttribute("onclick", "removeItem(this)")
            li.appendChild(deleteButton);
            inventoryList.appendChild(li)
        }
    };

}

function inventoryItems() {
    const inventory = JSON.parse(localStorage.getItem("inventory")) || [];
    thingsArr = inventory.split("**")
    inventoryArr = []

    for (item of thingsArr) {
        // const li = createListItem(item);
        // inventoryList.appendChild(li);
        newStr = ""

        for (ch of item) {
            if (ch != `"` && ch != `\\`) {
                newStr += ch
            }
        }

        itemArr = newStr.split("@@")

        if (!isNaN(itemArr[1])) {
            if (!inventoryArr.includes(itemArr[0])) {
                inventoryArr.push(itemArr[0])
            }
        }
    }

    return(inventoryArr.toString())
}

