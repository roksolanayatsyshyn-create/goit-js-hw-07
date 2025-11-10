// ref
const categories = document.querySelectorAll("#categories .item");
 

console.log("Number of categories:", categories.length);
// callback
categories.forEach(category=>{
  const title=category.querySelector("h2").textContent;
  const countElements=category.querySelectorAll("ul li").length

console.log("Category:", title);
console.log("Elements:", countElements);

}
)

  




