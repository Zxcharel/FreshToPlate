// Function to remove an item from the inventory

stuff = []
// localStorage.setItem("inventory", "");

function removeItem(item) {
    const inventory = JSON.parse(localStorage.getItem("inventory")) || [];
    
    // Find and remove the item from the inventory
    const index = inventory.indexOf(item);
    if (index !== -1) {
        inventory.splice(index, 1);
        
        // Update the inventory in local storage
        localStorage.setItem("inventory", JSON.stringify(inventory));
        
        // Update the displayed inventory
        displayInventory();
    }
}

// Function to create a list item with a delete button
function createListItem(item, amt) {

    var test = `${item}@@${amt}`

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
        else {
            
        }
    }

    for (ingredient of Object.keys(inventoryObj)) {

        const li = document.createElement("li");
        li.textContent = `${ingredient}: ${inventoryObj[ingredient]}`
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            removeItem(item);
        });

        li.appendChild(deleteButton);
        inventoryList.appendChild(li)
    };

    console.log(stuff)
    console.log(typeof(stuff))

    // for (index in stuff) {
    //     // const li = createListItem(item);
    //     // console.log(li)
    //     // inventoryList.appendChild(li);
    //     inventoryList.innerHTML += stuff[index]
    // };

}

// Call displayInventory to initially load the inventory
// displayInventory();
