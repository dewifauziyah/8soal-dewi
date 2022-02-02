const myObj = [
    {name : "shark :", likes: "ocean" },
    {name : "whale :", likes: "ocean"},
    {name : "turtle :", likes: "pond"},
    {name : "otter :", likes: "fish biscuit"},
    {name : "lion :", likes: "land"},
    {name : "nemo :", likes: "ocean"},
  ];

const result = myObj.filter (myUser => {
    return myUser.likes == "ocean";
})
console.log (result)