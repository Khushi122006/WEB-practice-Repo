const person1=  {
    userName:"user_1226",
    email:"user1226@gmail.com",
    age:22,
    subscriptions:{
        netflix : "GOLD",
        prime: "basic",
    },
    show: function showDetails(){
        console.log("this is user :"+ this.userName +"age is"+ this.age)
        return this.age
    }    
}

console.log(person1.show())
const userInfo = person2.show()
console.log("this is person info:" ,userInfo)
person1.address="Kanpur"
console.log(person1["email"])

delete(email)

console.log(person1)


