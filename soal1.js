const myObj = [
    {name : "shark :", likes: "ocean" },
    {name : "turtle :", likes: "pond"},
    {name : "otter :", likes: "fish biscuit"},
    {name : "lion :", likes: "land"},
    {name : "nemo :", likes: "ocean"},
  ];

  const usersByLikes = myObj.map(item => {
    const container = {};

    container[item.name] = item.likes;
    container.totalSpecies = item.name.length * 10;

    return container;
})

console.log(usersByLikes); 