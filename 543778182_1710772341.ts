/*


OverRiding ==> Already some functionality will be there at parent level, but i want to customize this


Car Class ==> Engine, Dash Board, Seats, Mats, AC 

Maruti Class ==> Need to use the same Engine for Car Class 

super key word is used to access parent class functionality in child class 
*/

class class1{
    public dbFunc():string{
        return "MYSQL Database is Conneted";
    }
}

class class2 extends class1{
     public dbFunc(): string {
            return "MONGO DB is Connected";
    }
}

class class3 extends class1{
     public dbFunc(): string {
            return super.dbFunc(); // Accessing class1 Functionality in Class3
    }
}

console.log(new class1().dbFunc()) // This will Point to MY SQL

console.log(new class2().dbFunc()) //This will point to MONGO DB

console.log(new class3().dbFunc());// This will Point to MY SQL ==> We used Super Keyword

/*
Output
MYSQL Database is Conneted
MONGO DB is Connected
MYSQL Database is Conneted

*/

