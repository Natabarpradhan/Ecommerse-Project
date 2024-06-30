class class1{

   constructor(public arg1:string,
               public arg2:string,
              public arg3:string){}

}

let obj1:class1=new class1("Angular","Spring Boot","Mysql");

console.log(obj1.arg1,obj1.arg2,obj1.arg3);

let obj2:class1=new class1("React","Dotnet Web Api","SQL Server");

console.log(obj2.arg1,obj2.arg2,obj2.arg3);

let obj3:class1=new class1("VueJS","Php","NO SQL");

console.log(obj3.arg1,obj3.arg2,obj3.arg3);


/*

Output

Angular Spring Boot Mysql
React Dotnet Web Api SQL Server
VueJS Php NO SQL

*/

