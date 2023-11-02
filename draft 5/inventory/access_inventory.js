//create new file if user new account, basically a copy of the ingredients.json page?
//access based on user

const fs = require('fs')


function readInventory(userId) {
    fs.readFileSync(`${userId}.json`, function(err, data) {
        console.log(data)
        return data.toString()
    })
}

function updateInventory(userId) {

}

function createInventory(userId) {
    
    var defaultData = fs.readFileSync("inventory/ingredients.json", function(err, data) {
        return data.toString()
    })

    fs.writeFileSync(`${userId}.json`, defaultData, function(err) {
        console.log("Data written successfully!");
        console.log("Let's read newly written data");
    })

}

createInventory(12345)
readInventory(12345)

