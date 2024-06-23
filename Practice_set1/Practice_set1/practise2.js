const random_thoughts={
    "Bishal":"Roll_no1",
    "1":2,
    "Ram":undefined,
    "SHyam":Symbol("$")
}
const books={
    "DSA":"Abhimanyu Sir",
    "DBMS":"Ram Sir",
    "Software Engineer":"Sagar Sir"
}
// random_thoughts=2 //can't change the const objects
books['C']=undefined;//adding into object
random_thoughts['1']=1;
console.log(random_thoughts)
console.log(random_thoughts["1"])
console.log(typeof random_thoughts)
console.log(books)
console.log(typeof books)
console.log(books["DBMS"])
console.log(books.DBMS)
