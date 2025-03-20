const breadCrum = [
    { "id": 3, "parentId": 12, "title": "Headphones" },
    { "id": 19, "parentId": 28, "title": "True wireless" },
    { "id": 28, "parentId": 3, "title": "Wired" },
    { "id": 12, "parentId": null , "title": "Audio" },
    { "id": null, "parentId": 19, "title": "Bluetooth" }
  ];
    
  let arr = [];
  let map = new Map();
  
  // Create a map for quick access to the item by its id
  breadCrum.forEach((item) => {
    map.set(item.id, item.title);
  });
  
  // Find the breadcrumb trail starting from the root (parentId: null)
  let currentItem = breadCrum.find((item) => item.parentId === null);
  
  while (currentItem.id !== null) {
    arr.push(currentItem.title); // Add the current item's title
    currentItem = breadCrum.find((item) => item.parentId === currentItem.id); // Move to the next item
  }
  
  arr.push(currentItem.title)
  
  console.log(arr); 

  // Audio >> Headphones >> Wired >> True wireless >> Bluetooth

  // Output: ["Audio", "Headphones", "Wired", "True wireless", "Bluetooth"]
  