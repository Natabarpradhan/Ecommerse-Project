/*


Polymorphism ==> Customization of Class

OverLoading and OverRiding ==> Polymorphism


*/


class class1{

    //Three Functions with same Name and diffent inputs parameters


    public my_func(arg1:number,arg2:number):void;

    public my_func(arg1:string,arg2:string):void;

    public my_func(arg1:boolean,arg2:boolean):void;


    public my_func(arg1:any,arg2:any):void{

        console.log("Arguement1 ===> ", arg1);
        console.log("Arguement2 ==> ",arg2);
    }

}


//We can Also create an object in different way

new class1().my_func("Without Object", "Class Execution");
new class1().my_func(30,50);
new class1().my_func(true,false);


/*

Arguement1 ===>  Without Object
Arguement2 ==>  Class Execution
Arguement1 ===>  30
Arguement2 ==>  50
Arguement1 ===>  true
Arguement2 ==>  false

*/


/*
var obj:class1=new class1();
obj.my_func(10,20);   //Two Numbers


var obj1:class1=new class1();
obj1.my_func("Ashok","IT"); //Two Strings

var obj3:class1=new class1();

obj3.my_func(true,false); //Two Booleans





Arguement1 ===>  10
Arguement2 ==>  20
Arguement1 ===>  Ashok
Arguement2 ==>  IT
Arguement1 ===>  true
Arguement2 ==>  false

*/


