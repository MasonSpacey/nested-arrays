let appElement = document.querySelector("#app")

let dataArray = [
    ["apple", "banana", "coconut", "durian"], // <=====
    ["wheat", "rye", "sourdough"],
    ["carrot", "tomato", "peach", "mango"]
]
console.log(dataArray[0]) //this selects just the first element in dataArray, which is an array
                          //in order to access a single element in the nested array ===> console.log(dataArray[0][1])


for (let outerIndex = 0; outerIndex < dataArray.length; outerIndex+= 1) {
    const currentArray = dataArray[outerIndex];
    let newList = document.createElement("ol")
    appElement.append(newList)
    for (let innerIndex = 0; innerIndex < currentArray.length; innerIndex++) {
        const currentElement = currentArray[innerIndex];
        // console.log(currentElement) ------ every element within dataArray
        let newItem = document.createElement("li")
        newItem.innerText = currentElement
        newList.append(newItem)
    }   
}