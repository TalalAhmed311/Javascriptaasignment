// Chapter 1 Alert

// alert("Hello EveryOne");
// alert("Error!Please enter a valid password")
// alert("Welcometo JS land....\nHappy Coding!")


// Chapter 2 Variable for strings

// var username;
// var myName="Talal Ahmed";
// var message="Hello World";
// alert(message);


// var stdname="Talal";
// var age=20;
// var course="Web and Hybrid Mobile Application Developement";
// alert(stdname);
// alert(age);
// alert(course);

// var product="PIZZA \n PIZZ \n PIZ \n PI \n P";
// alert(product);

// var email=prompt("Enter Your Email","xyz");
// alert("My email address is "+email+"@gmail.com");

// var text="A smarter way to learn JavaScript";
// alert("I am trying to learn from the"+text);

// document.write("Yeah! I can write html content through javascript.");

// alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”")

// Chapter 3

// var age=20;
// alert("I am "+age+" years old");

// var site_visit=19;
// alert("You have visited the site "+site_visit+" times");

// var birthYear=2000;

// document.writeln("My birth year is"+birthYear+"<br>");
// document.writeln("Data Type of my declared variable is "+typeof birthYear);

// var visiter_name=prompt("Visiter name");
// var product_title=prompt("Product name");
// var quantity=prompt("Quantity of Product");
// document.write(visiter_name+" ordered "+quantity+" "+product_title+" from Bookish Spike");

//  Chapter 4

// var name,age,course;
// var v1,v2,v3,v4,v5;
// var 1v,?s,prompt,my name,alert;

// var heading=document.createElement("h1");
// var htext=document.createTextNode("Rules for Naming JS Variable");
// heading.appendChild(htext);
// document.body.appendChild(heading);
// document.write("Variable names can only contain,$ and _.For example $myvar, _var1 <br>");
// document.write("Variable must begin with a letter,$ or _.For example $name, _name, name <br>");
// document.write("Variable names are case sensitive <br>");
// document.write("Variable names should not be JS Keywords")


                                //  Chapter 5 //


// var n1=10,n2=20;
// var add=n1+n2;
// document.write("Sum of "+n1+" and "+n2+" is "+add);

// var mul=n1*n2;
// document.write("Multiplication of "+n1+" and "+n2+" is "+mul);

// var sub=n2-n1;
// document.write("Subtraction of "+n1+" and "+n2+" is "+add);

// var divide=n2/n1;
// document.write("Division of "+n1+" and "+n2+" is "+divide);

// var mod=n2%n1;
// document.write("Modulus of "+n1+" and "+n2+" is "+mod);


// var myVar;
// document.write("Value after declaration "+myVar+"<br>");

// myVar=5;
// document.write("Initial value: "+myVar+"<br>");
// myVar++;
// document.write("Value after increment "+myVar+"<br>");
// myVar+=7;
// document.write("Value after addition "+myVar+"<br>");
// myVar--;
// document.write("Value after decrement "+myVar+"<br>");
// myVar%=3;
// document.write("the reminder is "+myVar+"<br>");

// var ticket_price=600;
// document.write("Total cost to buy 5 tickets is "+(ticket_price*5)+"PKR")

// for(var i=1;i<=10;i++){
//     document.write("3 * "+i+"="+(3*i)+"<br>");
// }

// var celsius=100;
// document.write(celsius+"C is ");
// document.write(((celsius*9)/5)+32+"C <br>");

// var farenhite=100;
// document.write(farenhite+"F is ");
// document.write(((farenhite-32)*5)/9);

// var price1=200;
// var price2=300;
// var q1=2,q2=3;
// var delivery=100;
// var total=(price1*q1)+(price2*q2)+delivery;
// document.write("Price of item 1 is "+price1+"<br>");
// document.write("Quantity of item 1 is "+q1+"<br>");
// document.write("Price of item 2 is "+price2+"<br>");
// document.write("Quantity of item 2 is "+q2+"<br>");
// document.write("Delivery Charges: "+delivery+"<br><br>");
// document.write("Total cost of your Order is "+total);

// var totalmarks=1100;
// var obtain=900;
// var percentile=(obtain/totalmarks)*100;
// document.write("Total Marks:"+totalmarks+"<br>");
// document.write("Marks obtained:"+obtain+"<br>");
// document.write("Percentage: "+percentile+"<br>");

// var currency=(10*163.48)+(25*43.54);
// document.write("Total Currency in PKR "+currency);

// var n=10;
// document.write("After Addition:"+(n+5)+"<br>After Multiplcation: "+(n*10)+
// "<br>After Division: "+(n/2));

// var current_year=2020;
// var bithYear=2000;
// document.write("Current Year:"+current_year+"<br>");
// document.write("BirthYear: "+bithYear+"<br>");
// document.write("Your age: "+(current_year-bithYear));

// var radius=20;
// document.write("Radius of Circle: "+radius+"<br>");
// document.write("The circumference is: "+(2*3.142*radius)+"<br>");
// document.write("The area is: "+(2*3.142*3.142*radius));


// var snack="Lays";
// var cage=20;
// var maxage=60;
// var per_day=1;

// document.write("Favourite Snack: "+snack+"<br>");
// document.write("Current Age: "+cage+"<br>");
// document.write("Estimated Maximum Age: "+maxage+"<br>");
// document.write("Amount of snacks per day: "+per_day+"<br>");


// var result=(maxage-cage)*365*per_day;
// document.write("You need "+result+" "+snack);


                                // Chapter 6-9 //

                                //  task 1//

// var a=prompt("Enter the value");
// document.write("Result:<br>");
// document.write("The value of a: "+a+"<br>");
// document.write(".........................<br>");

// document.write("The value of ++a is: "+ ++a+"<br>");
// document.write("Now the value of a is: "+a+"<br><br>");

// document.write("The value of a++ is: "+ a++ +"<br>");
// document.write("Now the value of a is: "+a+"<br><br>");

// document.write("The value of --a is: "+ --a+"<br>");
// document.write("Now the value of a is: "+a+"<br><br>");

// document.write("The value of a-- is: "+ a-- +"<br>");
// document.write("Now the value of a is: "+a+"<br><br>");

                                    // task 2 //


// var a=2,b=1;
// document.write("--a: "+ --a+"<br>");
// document.write("--a - --b :"+ (--a - --b)+"<br>");
// document.write("--a - --b + ++b: "+(--a - --b + ++b)+"<br>");
// var result= --a - --b + ++b + b--;
// document.write("Result: "+result);

                                // task 3 //

// var username=prompt("Enter User Name: ");
// alert("Hello! "+username);


                                // task 4 //


// var num=prompt("Enter the number",5);
// for(var i=1;i<=10;i++){
    
//     document.write(num+"*"+i+"= "+(num*i)+"<br>");
// }

                // task 6 // 

// var s1=prompt("Enter Subject 1");
// var s2=prompt("Enter subject 2");
// var s3=prompt("Enter Subject 3");

// var m1=100,m2=100,m3=100;
// var total=m1+m2+m3;
// var obt1=prompt("Obtain marks of Subject 1");
// var obt2=prompt("Obtain marks of subject 2");
// var obt3=prompt("Obtain marks of Subject 3");

// document.write("Subject     Total     Obtained     Percentage<br>");
// document.write(s1+"    \t\t"+m1+"     \t"+obt1+"     \t"+(obt1/total)*100+"<br>");
// document.write(s2+"    "+m2+"     "+obt2+"     "+(obt2/total)*100+"<br>");
// document.write(s3+"    "+m3+"     "+obt3+"     "+(obt3/total)*100+"<br>");
// document.write("\t"+total+"     "+(obt1+obt2+obt3)+"     "+((obt1+obt2+obt3)/total)*100+"<br>");


                                    // Chapter 9-11 //

//  task 1

// var city=prompt("Enter city name");

// if(city.toLowerCase()=="karachi"){
//     alert("Welcome to the city of lights");

// }else{
//     alert("Welcome to "+city);
// }


//  task 2

// var gender =prompt("Enter the Gender");
// gender=gender.toLowerCase();
// if(gender=="male"){
//     alert("Good Morning Sir!");
// }else if(gender=="female"){
//     alert("Good Morning Ma'am");
// }


// task 3

// var traffic=prompt("Enter the Color");
// traffic=traffic.toLowerCase();
// if(traffic=="red"){
//     alert("Must Stop");
// }else if(traffic=="yellow"){
//     alert("Ready to move.");
// }else if(traffic=="green"){
//     alert("Move Now");
// }


// task 4
// var fuel=prompt("Enter the fuel");
// if(fuel<0.25){
//     alert("Please Refill the fuel in your car");
// }else{
//     alert("You can go...");
// }


// task 6

// var total=300;
// var obt1=prompt("Obtain marks of Subject 1");
// var obt2=prompt("Obtain marks of subject 2");
// var obt3=prompt("Obtain marks of Subject 3");
// var percentile=((obt1+obt2+obt3)/total)*100;
// document.write("<h1>Marksheet<h1><br><br>");
// document.write("Total Marks:"+total+"<br>");
// document.write("Marks obtained: "+(obt1+obt2+obt3)+"<br>");
// document.write("Percentage: "+percentile+"<br>");

// if(percentile>=80){

//     document.write("Grade: A-one <br>");
//     document.write("Remarks: Excellent <br>");

// }else if(percentile>=70){

//     document.write("Grade: A <br>");
//     document.write("Remarks: Good <br>");

// }else if(percentile>=60){

//     document.write("Grade: B <br>");
//     document.write("Remarks: You need to improve <br>");

// }else if(percentile<60){

//     document.write("Grade: Fail <br>");
//     document.write("Remarks: Sorry <br>");

// }


//  task 7 Guess Game

// var n=6;
// var input=prompt("Enter the Number");
// if(input==n){
//     alert("Bingo! Correct answer");
// }else if(1==(n-input)){
//     alert("Close enough to the correct answer");
// }else{
//     alert("Please try again");
// }


//  task 8 

// var n=prompt("Enter the number");
// if(n%3==0){
//     alert("Number is divisible by 3");
// }else{
    
//     alert("Number is not divisible by 3");
// }

// task 9 even or odd

// var n=prompt("Enter the number");
// if(n%2==0){
//     alert(n+" is a even number");
// }else{
    
//     alert(n+" is a odd number");
// }


//  task 10

// var temperature=prompt("Enter the Temperature");
// if(temperature>40){
//     alert("It is too hot outside");
// }else if(temperature>30){
//     alert("The weather today is normal.");
// }else if(temperature>20){
//     alert("Today's weather is cool");
// }else if(temperature>10){
//     alert("OMG! Today's weather is so cool");
// }

//  task 11

// var n1=prompt("Enter n1");
// var n2=prompt("Enter n2");
// var operator=prompt("Enter Operator","+");
// if(operator=="+"){
//     alert(n1+n2);
// }else if(operator=="-"){
//     alert(n1-n2);
// }else if(operator=="/"){
//     alert(n1/n2);
// }else if(operator=="*"){
//     alert(n1*n2);
// }else if(operator=="%"){
//     alert(n1%n2);
// }



                                //  Chapter 12-13 //

// task 1
// var char=prompt("Enter any character");
// var code=char.charCodeAt(0);
// if(code>=65 && code<=90){
//     document.write("Input is uppercase letter");
// }else if(code>=97 && code<=122){ 
//     document.write("Input is lowercase letter");
// }else if(code>=48 && code<=57){
//     document.write("Input is a number");
// }else{
//     document.write("input is a symbol");
// }



//  task 2

// var n1=prompt("Enter n1");
// var n2=prompt("Enter n2");

// if(n1==n2){
//     alert("Both are equal");
// }else if(n1>n2){
//     alert(n1+" is greater than "+n2);
// }else{
    
//     alert(n2+" is greater than "+n1);
// }


//  task 3

// var input=prompt("Enter the number");
// if(input>0){
//     alert("Number is positive");
// }else if(input<0){
//     alert("Number is negative");
// }else{
//     alert("Number is 0");
// }

//  task 4

// function myfun(){

//     var char=prompt("Enter the character ");
// char=char.toLowerCase();
// if(char=='a' || char=='e' || char=="i" || char=="o" || char=="u"){
//     return true;
// }else{
//     return false;
// }

// }


// task 5

// var password="ahmed123";
// var p=prompt("Enter the password","null");
// if(p==password){
//     alert("Correct!");
// }else if(p=="null"){
//     alert("Please enter the password");
// }else{
//     alert("Incorrect password.");
// }


//  task 6

// var greeting;
// var hour = 13;
//  if (hour < 18){ 
//     greeting = "Good day";
// }else{
//       greeting = "Good evening"; 
// } 


// task 7

// var input=prompt("Enter the time");
// if(input>=0000 && input<1200){
//     alert("Good Morning");
// }else if(input>=1200 && input<1700){
//     alert("Good Afternoon!");
// }else if(input>=1700 && input<2100){
//     alert("Good Evening!");
// }else if(input>=2100 && input<=2359){
//     alert("Good night!");
// }


                    // Chapter 14-16 //
                    
// var arr=[];
// var std=new Array();
// var arr1=["talal","ahmed"];
// var arr2=[1,2,3,4,5];
// var arr3=[true,false,true];
// var arr4=[1,true,"ahmed","talal"];

// var education=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
// document.write("<h2>Qualification</h2>");
// for(var i=0;i<education.length;i++){
//     document.write((i+1)+")"+education[i]+"<br>");
// }

// var stdnames=["talal","salal","ali"];
// var scores=[420,300,350];
// var total=500;
// for(var i=0;i<stdnames.length;i++){
//     document.write("Socre of"+stdnames[i]+" is "+scores[i]+".Percentage: "+(scores[i]/total)*100+"%<br>");
// }

// task 9

// var colors=["red","blue","green"];
// for(var i=0;i<colors.length;i++){
//     console.log(colors[i]);
// }

// var color=prompt("Add color at beginning.");
// colors.unshift(color);
// for(var i=0;i<colors.length;i++){
//     console.log(colors[i]);
// }

// color=prompt("Add color at end");
// colors.push(color);
// for(var i=0;i<colors.length;i++){
//     console.log(colors[i]);
// }


// colors.unshift("aqau","brown");
// for(var i=0;i<colors.length;i++){
//     console.log(colors[i]);
// }

// colors.shift();
// for(var i=0;i<colors.length;i++){
//     console.log(colors[i]);
// }

// colors.pop();
// for(var i=0;i<colors.length;i++){
//     console.log(colors[i]);
// }

// var index=prompt("Enter the index");
// color=prompt("Enter the color");
// colors.splice(index,0,color);
// for(var i=0;i<colors.length;i++){
//     console.log(colors[i]);
// }

// index=prompt("Enter starting delete index");
// var no=prompt("Enter no of elements");
// colors.splice(index,no);
// for(var i=0;i<colors.length;i++){
//     console.log(colors[i]);
// }


//  task 10 
// Sorting algorithm

// var num=[320,230,480,350];
// document.write("Scores of Students: ");
// for(var i=0;i<num.length;i++){
//     document.write(num[i]+", ");
// }

// for(var i=0;i<num.length-1;i++){
//     var minloc=i;
//     for(var j=i+1;j<num.length;j++){
//         if(num[j]<num[minloc]){
//             minloc=j;
//         }
//     }

//     var temp=num[i];
//     num[i]=num[minloc];
//     num[minloc]=temp;

// }
// document.write("<br> Ordered Scores of Students: ");
// for(var i=0;i<num.length;i++){
//     document.write(num[i]+", ");
// }


// task 11

// var cities=["Karachi","Quetta","Peshawar","Islamabad","Lahore"];
// var selectedCities=cities.slice(1,2);
// document.write("Cities List:<br>");
// for (let i = 0; i < cities.length; i++) {
//     document.write(cities[i]+",");
    
// }

// document.write("<br>Selected Cities:<br>");
// for (let i = 0; i < cities.length; i++) {
//     document.write(selectedCities[i]+",");
    
// }


// task 12 

// var arr=["This","is","my","cat"];
// document.write("<h2>Array</h2><br>");
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i]+",");
// }

// document.write("<h2>String</h2><br>");
// document.write(arr.join());


// task 13

// var arr=[];
// arr.unshift("talal");
// arr.unshift("Ahmed");
// arr.unshift("salal");
// arr.unshift("Ali");
// var len=arr.length;
// for(var i=1;i<=len;i++){
//     console.log(arr.pop());
// }


//  task 14

// var arr=[];
// arr.push("talal");
// arr.push("salal");
// arr.push("Ahmed");
// arr.push("Saleem");
// var len=arr.length;
// for (let i = 0; i < len; i++) {
    
//     console.log(arr.pop());

// }
 

//  task 15

// var arr=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];

// document.write("<select>");
// for(let i=0;i<6;i++){
//     document.write("<option>"+arr[i]+"</option>");
// }
// document.write("</select>");


//       Chapter 16-20


// task 1

// var arr=[
//     [],
//     [],
// ];



// task 2

// var matrix=[

//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1],
    
// ];


// task 3

// for (let i = 1; i <=10; i++) {
    
//     console.log(i+"\n");
// }

// task 4

// var num=prompt("Enter a number to show its multiplication table.");
// var len=prompt("Enter length of multiplication table");
// for (let i = 1; i <=len;i++) {

//     console.log(num+"x"+i+"="+(i*num));

// }


// task 5

// var fruits = ["apple","banana", "mango", "orange", "strawberry"];
// for(var i=0;i<fruits.length;i++){
//     console.log("Element at index "+i+" is "+fruits[i]);
// }


//  task 6

// var i=1;
// document.write("Counting:<br> ");    
// while(i<=10){
//     document.write(i+",");
//     i++;
// }
// i--;
// document.write("<br><br>Reverse counting:<br> ");    
// while(i>=1){
//     document.write(i+",");
//     i--;
// }

// document.write("<br><br>Even:<br> ");
// i=0;
// while(i<=20){
//     document.write(i+",");
//     i+=2;
// }
// i=1;
// document.write("<br><br>Odd:<br> ");
// while(i<=20){
//     document.write(i+",");
//     i+=2;
// }

// document.write("<br><br>Series:<br> ");
// i=2;
// while(i<=20){
//     document.write(i+"k,");
//     i+=2;
// }


// task 7

// var products = ["cake", "apple pie", "cookie", "chips", "patties"]; 
// var p=prompt("Welcome to Bakery.What do you want to Order sir/ma'am");
// var flag=true;
// for (let i = 0; i < products.length; i++) {

//     if(p==products[i]){
//         document.write(products[i]+" is avialable at index "+i+" in our Bakery.");
//         flag=false;
//     }

// }

// if(flag){
//     document.write("We are sorry. "+p+" is not available in our Bakery.");
// }


//  task 8

// var values = [24, 53, 78, 91, 12];
// var len=values.length;  
// for (let i = 0; i < 1; i++) {

//     for (let j = 0; j <len-(i+1) ; j++) {

//         if(values[j]>values[j+1]){
//             var temp=values[j];
//             values[j]=values[j+1];
//             values[j+1]=temp;
//         }
//     }

// }
// console.log("Array items: ");
// for(var i=0;i<len;i++){
//     console.log(values[i]);
// }
// console.log("The Largest number is "+values[len-1]);


//  task 9

// var data= [24, 53, 78, 91, 12];
// var minloc=0;  
// for (let j = 1; j < data.length; j++) {
    
//     if(data[j]<data[minloc]){
//         minloc=j;
//     }
// }
// console.log("Array items: ");
// for(var i=0;i<data.length;i++){
//     console.log(data[i]);
// }
// console.log("The Smallest number is "+data[minloc]);



//  task 10

// for (let i = 5; i <=100; i+=5) {

//     console.log(i);
// }
