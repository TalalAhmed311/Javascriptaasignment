//                  Chapter 21-25

// task 1

// var firstName=prompt("Enter your first name.");
// var lastName=prompt("Enter your last name");
// var fullName=firstName+" "+lastName;
// alert(fullName);

// task 2

// var mobile=prompt("Enter your favourite phone model");
// document.write("My favourite phone is: "+mobile+"<br>");
// document.write("Length of String: "+mobile.length);

// task 3

// var country="Pakistani";
// for (let i = 0; i < country.length; i++) {

//     if(country.charAt(i)=="n"){
//         console.log("String: "+country);
//         console.log("Index of 'n': "+i);
//     }

// }

//  task 4

// var text="Hello World";
// var index;
// for (let i = 0; i < text.length; i++) {
//     if(text.charAt(i)=="l"){
//         index=i;
//     }
// }
// document.write("String: "+text+"<br>");
// document.write("Last Index of 'l' is "+index);



// task 5

// var str="Pakistani";
// document.write("String: "+str);
// document.write("Character at index 3: "+str.charAt(3));


// task 6

// var firstName=prompt("Enter your first name.");
// var lastName=prompt("Enter your last name");
// var fullName=firstName.concat(lastName);
// alert(fullName);

// task 7

// var city="Hyderabad";
// console.log("City: "+city);
// city=city.replace("Hyder","Islam");
// console.log("After Replacement: "+city);


// task 8

// var message = "Ali and Sami are best friends.They play cricket and football together.";  
// var str=message.split(" ");
// message="";
// for (let i = 0; i < str.length; i++) {
    
//     if(str[i]=="and"){
//         str[i]="&";
//     }  
//     message=message.concat(str[i]+" ");
// }

// document.write(message);


// task 9

// var str="472";
// var num=parseInt(str);
// document.write("Value: "+str+"<br>");
// document.write("Type: "+typeof str+"<br>");
// document.write("Value: "+num+"<br>");
// document.write("Type:"+ typeof num);

// task 10

// var input=prompt("Enter text");
// document.write("User Input: "+input+"<br>");
// document.write("Upper Case: "+input.toUpperCase());

// task 11

// var input=prompt("Enter text");
// document.write("User Input: "+input+"<br>");
// var firstletter=input.charAt(0).toUpperCase();;
// input=input.replace(input.charAt(0),firstletter);
// document.write("Title Case: "+input);


// task 12

// var num = 35.36 ; 
// var str=num.toString();
// str=str.slice(0,2)+str.slice(3,5);
// document.write("Number: "+num+"<br>");
// document.write("Result: "+str);


// task 13

// var userName=prompt("Enter UserName");
// var flag=true;
// for (let i = 0; i <userName.length;i++) {

//     var symbol=userName.charAt(i);
//     if(symbol.charCodeAt(0)==33 || symbol.charCodeAt(0)==44 || symbol.charCodeAt(0)==46 || symbol.charCodeAt(0)==64   ){
//         flag=false;
//         alert("Please Enter a valid User Name");
        
//     }
    
// }
// if(flag){
//     alert("User Name is Correct...");
// }


// task 14

// var sweets= ["cake", "apple pie", "cookie", "chips", "patties"]; 
// var p=prompt("Welcome to Bakery.What do you want to Order sir/ma'am");
// p=p.toLowerCase();
// var flag=true;
// for (let i = 0; i < sweets.length; i++) {

//         if(sweets[i]==p){
//             document.write(p+" is available at index "+i+" in our bakery.");
//             flag=false;
//             break;
//         }
// }
// if(flag){
//     document.write("We are sorry."+p+" is not available in our bakery");
// }


// task 15

// var password=prompt("Enter the Password.");
// var flag=true;
// var str="";
// if(password.length<6){
//     flag=false;
//     str="Length must be greater than 6.";
// }
// let start=password.charAt(0).charCodeAt(0);
// if(start>=48 && start<=57 ){
//     flag=false;
//     str=str+" Must start with an alphabet.";

// }
// var b1,b2;
// b1=b2=false;

// for (let i = 0; i < password.length; i++) {

//     var s=password.charAt(i).charCodeAt(0);
//     if((s>=65 && s<=90) || (s>=97 && s<=122)){
//         b1=true;
  
//     }else if(s>=48 && s<=57){
        
//         b2=true;

//     }else{
//         flag=false;
//         str=str+"char must a-z 0-9 A-Z"
//         break;
//     }
        
// }

// if(flag){

//     if(b1 && b2){

//         alert("Password is correct");

//     }else{
//         alert("Must have numbers");
//     }
// }else{
//     alert(str);
// }


// task 16

// var university="University of Karachi";
// var arr=university.split("",university.length);

// for (let i = 0; i < university.length; i++) {

//     console.log(arr[i]);    

// }

// task 17

// var str=prompt("Enter a string");
// console.log("User input: "+str);
// console.log("Last char: "+str.charAt(str.length-1));


//  task 18

// var str="the quick brown fox jumps over the lazy dog";
// var res=str.split(" ");
// var count=0;
// for (let i = 0; i < res.length; i++) {

//         if(res[i]=="the"){
//             count++;
//         }

// }

// console.log("There are "+count+" occurence of the word the");


//              Chapter26-30

//  task 1

// var num=prompt("Enter a number");
// console.log("number: "+num);
// console.log("Round of: "+Math.round(num));
// console.log("floor value: "+Math.floor(num));
// console.log("ceil value: "+Math.ceil(num));


// task 2

// var num=prompt("Enter a number");
// console.log("number: "+num);
// console.log("Round of: "+Math.round(num));
// console.log("floor value: "+Math.floor(num));
// console.log("ceil value: "+Math.ceil(num));


//  task 3

// var num=prompt("Enter a value");
// console.log("The absolute value of "+num+" is "+Math.abs(num));


// task 4

// var throw1=Math.random();
// console.log("Random dice value: "+Math.ceil(throw1*6));


//  task 5

// var toss=Math.random()*2;
// toss=Math.ceil(toss);
// console.log("value is: "+toss);
// if(toss==1){
//     console.log("Random coin value is Tail.")
// }else{
    
//     console.log("Random coin value is Head.")
// }

// task 6

// var rn=Math.random()*100;
// console.log("Random number between 1 and 100: "+Math.ceil(rn));

// task 7

// var weight=prompt("Enter your wight");
// weight=parseFloat(weight);
// console.log("The weight of User is "+weight+" Kilograms");

// task 8 

// var n=7;
// var input=prompt("Enter a number.");
// if(input==n){
//     alert("Congratulations You win.");
// }else{
//     alert("Press F5 for try again.");
// }


//                      Chapter 31-34

// task 1

// var date=new Date();
// console.log(date);

// task 2

// var month=new Date().getMonth();
// var months=["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
// console.log("Current Month: "+months[month]);

// task 3

// var day=new Date().getDay();
// var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// console.log("Today is "+days[day]);

// task 4

// var day=new Date().getDay();
// if(day==0 || day==6){
//     console.log("Its Fun day");
// }else{
//     console.log("Its not Fun day");
// }


//  task 5

// var date=new Date().getDate();
// if(date<16){
//     console.log("First fifteen days of the month.");
// }else{
//     console.log("Last days of the month.");
// }


// task 6

// var date=new Date();
// var time1970=date.getTime();
// console.log("Current Date: "+date);
// console.log("Miliseconds since january 1,1970: "+time1970);
// console.log("Minutes since January 1,1970: "+(time1970)/1000*60*60);


// task 7

// var hours=new Date().getHours();
// if(hours<=12){
//     alert("It's AM");
// }else{
//     alert("It's PM");
// }


// task 8

// var date=new Date("Dec 31,2020");
// console.log("Later Date: "+date);


// task 9

// var d1=new Date("April 24,2020");
// var days1=d1.getTime();
// var today=new Date();
// var days2=today.getTime();
// var diff=days2-days1;
// console.log(passedDays+" days passed since 1st ramadan 2020");  
// var passedDays=Math.round(diff/(1000*60*60*24));


// task 10

// var d1=new Date("January 1,2020");
// var t1=d1.getTime()/(1000*60);
// var d2=new Date("June 18,2020");
// var t2=d2.getTime()/(1000*60);
// var diff=t2-t1;
// console.log(d2);
// console.log(diff+" seconds passed since beginning of 2020");


// task 11

// var date=new Date();
// console.log("Current date: "+date);
// var h=date.getHours();
// date.setHours(h-1);
// console.log("1 hour ago it was: "+date);


// task 12

// var date=new Date();
// var date1=new Date();
// date1.setFullYear(1920,6,19);
// alert(date+"\n"+date1);


// task 13

// var age=prompt("Enter your age");
// var date=new Date();
// var year=date.getFullYear()-age;
// console.log("Your age: "+age);
// console.log("Yur birth year: "+year);

// task 14

// var customerName=prompt("Enter your Name");
// var month=prompt("Enter the month");

// var noUnits=prompt("Enter no of units.");
// var chagersPerUnit=16;

// // NetAmount
// var netAmount=noUnits*chagersPerUnit;
// // Late Payment
// var latePay=50*(netAmount/1000);
// var grossAmount=netAmount+latePay;

// document.write("<h2>K-Electric Bill</h2><br>");
// document.write("Customer Name: "+customerName+"<br>");
// document.write("Month: "+month+"<br>");
// document.write("No of Units: "+noUnits+"<br><br>");

// document.write("Net Amount Payable (with in due date): "+netAmount+"<br>");
// document.write("Late Payment Surcharge: "+latePay+"<br>");
// document.write("Gross Amount Payable (after due date): "+grossAmount);



//                  Chapter35-38

// task 1 

// function dateTime(){
//     var date=new Date();
//     console.log(date);
// }
// dateTime();

// task 2

// var fname=prompt("Enter your first name");
// var lname=prompt("Enter your last name");
// function greet(fname,lname){
//     alert("Hello, "+fname+" "+lname);
// }
// greet(fname,lname);

// task 3

// var n1=prompt("Enter 1st number");
// var n2=prompt("Enter 2nd number");

// function add(v1,v2){
//     return parseInt(v1)+parseInt(v2);
// } 
// alert("Sum: "+add(n1,n2));


// task 4

// var n1=prompt("Enter n1: ");
// var n2=prompt("Enter n2: ");
// var oper=prompt("Enter Operator");

// function calc(num1,num2,operator){
    
//     num1=parseInt(num1);
//     num2=parseInt(num2);

//     switch(operator){

//         case "+":
//             return num1+num2;
//         case "-":
//             return num1-num2;
//         case "*":
//             return num1*num2;
//         case "/":
//             return num1/num2;
//         case "%":
//             return num1%num2;
//         default:
//             return 0;    
//     }

// }

// alert(calc(n1,n2,oper));

// task 5

// function sqaure(num){
//     alert(num*num);
// }

// task 6


// function fact(num){
//     if(num>1){
//         return num*fact(num-1);
//     }
//     return num;
// }
// alert(fact(4));



// task 7

// function count(start,end){
//     alert(end-start+1);
// }
// count(10,100);


// task 8

// var per=prompt("Enter Perpendicular");
// var base=prompt("Enter Base");

// function calculateSquare(num){
//     return num*num;
// }

// function calculateHypotaneous(per,base){

//     per=calculateSquare(per);
//     base=calculateSquare(base);
//     var hyp=per+base;
//     hyp=calculateSquare(hyp);
//     alert("Hypotaneous of Right angle triangle: "+hyp);

// }
// calculateHypotaneous(per,base);


// task 9

// function rectangle(height,width){
//     alert("Rectangle: "+height*width);
// }
// rectangle(2,4);
// var a=4,b=3;
// rectangle(a,b);


// task 10

// var str=prompt("Enter a String ");

// function palindorme(value){

//     var i=0;
//     var j=str.length-1;

//     var flag="Yes string is a Palindrome";
    
//     while(i<str.length){
        
//         if(value[i]!=value[j]){
//             flag="No,String is not a Palindrome";
//         }
//         i++;
//         j--;
//     }

//     alert(flag);
// }
// palindorme(str);


// task 11

// var str="my name is talal and this is javascript excercise";

// function Upper(value=""){

//     var arr=value.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//             arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1,arr[i].length);
            
//     }

//     return arr.join();
// }
// console.log("Example String: "+str);
// console.log("Expected Output: "+Upper(str));



// task 12

// var str="Web Development Tutorial";

// var arr=str.split(" ");
// var max=0;
// for (let i = 1; i < arr.length-1; i++) {

    
//         if(arr[i].length>arr[max].length){
//             max=i;
//         }
    
// }
// console.log("Example String: "+str);
// console.log("Expected Output: "+arr[max]);



// task 13

// var str=prompt("Enter a String: ");
// var ch=prompt("Enter a character: ");
// function letterCount(input="",char){

//     var count=0;
//     for (let i = 0; i < input.length; i++) {
 
//        if(str.charAt(i)==ch){
//         count++;
//         }


//     }
//     return count;
// }

// console.log(ch+" Occurs "+letterCount(str,ch)+" times in String .'"+str+"'");


// task 14

// function calcCircumference(radius=0){

//     return 2*radius*3.14;

// }

// function calcArea(radius=0) {
//     return 3.14*(radius*radius);
// }

// console.log("Circumference of Circle: "+calcCircumference(3));
// console.log("Area of Circle: "+calcArea(3));
