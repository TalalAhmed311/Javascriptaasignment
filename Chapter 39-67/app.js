                                // Chapter 38-42
                           
        
// task 1

// function power(base,exp){

//     var result=1;
//     for (let i = 0; i <exp; i++) {
        
//         result*=base;

//     }
//     return result;
// }

// console.log(power(3,2));


// task 2
// var year=prompt("Enter the year");
// if(year%4==0){
//     alert("Yes,It is the leap year")
// }else{
    
//     alert("Yes,It is not the leap year")
// }


// task 3

// function calS(a,b,c){

//     return (parseInt(a)+parseInt(b)+parseInt(c))/2;
// }

// function calArea(a,b,c){

//     var s=calS(a,b,c);
    
//     return s*((s-parseInt(a))*(s-parseInt(b))*(s-parseInt(c)));
    
// }

// var v1=prompt("Enter 1st side of triangle.");
// var v2=prompt("Enter 2nd side of triangle.");
// var v3=prompt("Enter 3rd side of triangle.");

// console.log("Area of triangle is: "+calArea(v1,v2,v3));



// task 4


// function avg(marks){

//     return marks/3;
// }

// function percentage(marks){
 
//     return (marks/300)*100; 
// }

// function mainFunction(){

//     var m1=prompt("Enter marks1");
//     var m2=prompt("Enter marks2");
//     var m3=prompt("Enter marks3");
//     var total=parseInt(m1)+parseInt(m2)+parseInt(m3);
//     console.log("Average of Marks: "+avg(total));
//     console.log("Percentage: "+percentage(total));

// }

// mainFunction();


//  task 5
// function indexOf(str,char){

//     for (let i = 0; i < str.length; i++) {
//         if(str[i]==char){
//             return i;
//         }    
//     }

//     return -1;
// }

// var s="Eastablishment";
// console.log(indexOf(s,"a"));


// task 6

// var str="Eastablishment";


// function deleteVowels(string){

//     var s=string.toLowerCase();
//     var newstr="";

//     for (let i = 0; i < string.length; i++) {

//         if(s[i]!="a" && s[i]!="e" && s[i]!="i"
//         && s[i]!="o" && s[i]!="u"){


//             newstr+=s[i];
//         }

//     }
//     return newstr;
// }
// str=deleteVowels(str);
// console.log(str);


// task 7

// var str="Pleases read this application and give me gratuity";
// function countPairVowels(){

//     let vowels=["a","e","i","o","u"];
//     let occur=0;
//     let array=[];
//     for (let k = 0; k < str.length-1; k++) {
        
//         for (let i = 0; i < vowels.length; i++) {

//             for(let j=0;j<vowels.length;j++){

//                 var s=vowels[i]+vowels[j];

//                 if(s==str.slice(k,k+2)){
//                     array[occur]=s;
//                     occur++;
//                 }
//             }

//         }

//     }

//     for(let i=0;i<array.length;i++){
//         console.log(array[i]);
//     }
// }

// countPairVowels();

//  tsak 8

// var km=prompt("Enter Distance in KiloMeter");

// function inMeters(distance){

//     return parseFloat(distance)*1000;
// }

// function inFeets(distance){

//     return inMeters(distance)*3.2;    

// }

// function inInch(distance){
//     return inFeets(distance)*12;
// }

// function inCentimeter(distance){
//     return inInch(distance)*2.54;
// }

// console.log("Meters: "+inMeters(km));
// console.log("In Foot: "+inFeets(km));
// console.log("In Inch: "+inInch(km));
// console.log("In centimeter: "+inCentimeter(km));


//  task 9

// var salary=prompt("Enter salary of Employee: ");
// var hours=prompt("Enter extra hours you worked.");

// function calOvertime(sal,hour){

//     var extra=12*parseInt(hour);
//     return extra+parseInt(sal);    
// }

// console.log("Total Salary: "+calOvertime(salary,hours));


//  task 10

// function cashier(){
//     var amount=parseInt(prompt("Enter the Withdrawl Amount."));
// var h,f,t;
// h=f=t=0;
// if(amount<100){
   
//     if(amount>=50){

//         f=1;
//         t=(amount-50)/10;

//     }else{
//        t=amount/10;
//     }

// }else{

//     h=Math.floor(amount/100);
//     var s=amount-(h*100);
//     if(s>=50){
//         f=1;
//         t=(s-50)/10;

//     }else{
//         t=s/10;
//     }    

// }

// console.log("You will have hundred "+h+" notes "+f+" fifty notes and "+Math.floor(t)+" ten notes");

// }
// cashier();


//                      Chapter43-48

// task 3



// function remove(id){

//     var row=id.parentNode.parentNode.rowIndex;
//     document.getElementById('student').deleteRow(row);


//}


// task 4

// function changepic(id){

//     if(id==0){

//         document.getElementById("img1").src="images/rumi1 (2).jpg";
//     }else{
//         document.getElementById("img1").src="images/rumi1 (1).jpg";
//     }

// }

// task 5


// var interval;
// var count=0;
// var iflag=true;
// var dflag=true;

// function Increase(){
    
//     if(iflag){

//         interval=setInterval(Tincrease,1000);
//         document.getElementById('increase').className+="disabled";
//         document.getElementById("increase").className+="btn rounded-pill btn-primary";
//         iflag=false;

//     }

// }

// function Decrease(){
//     if(dflag){
//         clearInterval(interval);
//          interval=setInterval(Tdecrease,1000);
//         document.getElementById('increase').className+="disabled";
//         document.getElementById("increase").className+="btn rounded-pill btn-primary";
//         dflag=false;
  
//     }
// }

// function Tincrease(){
    
//     count++;
//     document.getElementById("count").innerHTML=count;
    
// }

// function Stop(){

//     clearInterval(interval);
//     iflag=true;
//     dflag=true;

// }

// function Tdecrease(){
   
//     if(count<=0){
//         Stop();
//     }else{
//         count--
//         document.getElementById("count").innerHTML=count;
//     }
// }



//  Chapter 49-52


// task-1

// function sub(){

//     var fname=document.getElementById('fname').value;
//     var lname=document.getElementById('lname').value;
//     var email=document.getElementById('email').value;
//     var phone=document.getElementById('phone').value;

    
//     document.writeln("First Name:"+fname+"<br>");
//     document.writeln("Last Name: "+lname+"<br>");
//     document.writeln("Email: "+email+"<br>");
//     document.writeln("Phone: "+phone+"<br>");
    
    
// }

// task-2

// function expand(){

//     var text="SCIENTISTS HAVE LEARNED TO SUPPLEMENT THE SENSE OF SIGHT IN NUMEROUS WAYS."
//      +"In front of the tiny pupil of the eye they put, on Mount Palomar, a great monocle 200"
//      +"inches in diameter, and with it see 2000 times farther into the depths of space. Or they "
//      +"look through a small pair of lenses arranged as a microscope into a drop of water or blood,"
//      +"and magnify by as much as 2000 diameters the living creatures there, many of which are"
//      +"among man’s most dangerous enemies. Or, if we want to see distant happenings on earth,"
//      +"they use some of the previously wasted electromagnetic waves to carry television images"
//      +"which they re-create as light by whipping tiny crystals on a screen with electrons in"
//      +"a vacuum. Or they can bring happenings of long ago and far away as colored motion pictures,"
//      +"by arranging silver atoms and color-absorbing molecules to force light waves into the patterns"
//      +"of original reality. Or if we want to see into the center of a steel casting or the chest"
//      +"of an injured child, they send the information on a beam of penetrating short-wave X "
//      +"rays, and then convert it back into images we can see on a screen or photograph."
//      +"THUS ALMOST EVERY TYPE OF ELECTROMAGNETIC RADIATION YET DISCOVERED HAS BEEN USED"
//      +"TO EXTEND OUR SENSE OF SIGHT IN SOME WAY.";

//     document.getElementById('para').innerHTML=text;
// }


//  task-3


// var elements=[];
// var data=[];
// var count=0;


// var table=document.getElementById('studentTable');

// function add(){

//     var name=document.getElementById('name');
//     var roll=document.getElementById('roll');
//     var grade=document.getElementById('class');

  
//     var btnEdit=document.createElement('button');
//     btnEdit.innerHTML="Edit";
//     btnEdit.setAttribute('class','btn btn-primary rounded-pill');
//     btnEdit.setAttribute('onclick','edit(this)');


//     var btndelete=document.createElement('button');
//     btndelete.innerHTML="Delete"
//     btndelete.setAttribute('class','btn btn-primary rounded-pill');
//     btndelete.setAttribute("onclick","remove(this)")
    

    
   
//     var tr=document.createElement('tr');
//     var td1=document.createElement('td');
//     var td2=document.createElement('td');
//     var td3=document.createElement('td');
//     var td4=document.createElement('td');
//     var td5=document.createElement('td');
    

//     td1.appendChild(document.createTextNode(roll.value));
//     td2.appendChild(document.createTextNode(name.value));
//     td3.appendChild(document.createTextNode(grade.value));
//     td4.appendChild(btndelete);
//     td5.appendChild(btnEdit);
    
//     tr.setAttribute("id",count);

//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     tr.appendChild(td4);
//     tr.appendChild(td5);

//     table.appendChild(tr);
 

//     name.value="";
//     roll.value="";
//     grade.value="";

//     count++;

// }

// function remove(row){
 
//     table.deleteRow(row.parentNode.parentNode.rowIndex);    
//     count--;

// }

// function edit(row){


//     var parent=row.parentNode.parentNode;

    
//     var inp1=document.createElement('input');
//     var inp2=document.createElement('input');
//     var inp3=document.createElement('input');
//     inp1.type="text";
//     inp2.type="text";
//     inp3.type="text";
    
    
    
//     var save=document.createElement('button');
//     save.innerHTML="Save Changes";
//     save.setAttribute('class','btn btn-primary rounded-pill');
//     save.setAttribute('onclick','saveChanges(this)');
    

//     var td1=document.createElement('td');
//     var td2=document.createElement('td');
//     var td3=document.createElement('td');
//     var td4=document.createElement('td');
  
//     td1.appendChild(inp1);
//     td2.appendChild(inp2);
//     td3.appendChild(inp3);
//     td4.appendChild(save);


//     parent.replaceChild(td1,parent.childNodes[0]);
//     parent.replaceChild(td2,parent.childNodes[1]);
//     parent.replaceChild(td3,parent.childNodes[2]);
//     parent.replaceChild(td4,parent.childNodes[4]);
    

// }


// function saveChanges(id){

//     var parent=id.parentNode.parentNode;
   
//     var td1=document.createElement('td');
//     var td2=document.createElement('td');
//     var td3=document.createElement('td');
//     var td4=document.createElement('td');
    
//     var v1=parent.childNodes[0].childNodes[0].value;
//     var v2=parent.childNodes[1].childNodes[0].value;
//     var v3=parent.childNodes[2].childNodes[0].value;

//     var btnEdit=document.createElement('button');
//     btnEdit.innerHTML="Edit";
//     btnEdit.setAttribute('class','btn btn-primary rounded-pill');
//     btnEdit.setAttribute('onclick','edit(this)');

//     td1.appendChild(document.createTextNode(v1));
//     td2.appendChild(document.createTextNode(v2));
//     td3.appendChild(document.createTextNode(v3));
//     td4.appendChild(btnEdit);

    
//     parent.replaceChild(td1,parent.childNodes[0]);
//     parent.replaceChild(td2,parent.childNodes[1]);
//     parent.replaceChild(td3,parent.childNodes[2]);
//     parent.replaceChild(td4,parent.childNodes[4]);
// }


// Chapter 52-57



// var arr=[
//     'images/1.jpg',
//     'images/2.jpg',
//     'images/3.jpg',
//     'images/4.png',
//     'images/5.jpg',
//     'images/6.jpg',
//     'images/7.png',
//     'images/8.jpg',
//     'images/9.jpg',
//     'images/10.jpg',
//     'images/11.jpg',
//     'images/12.jpg',
//     'images/13.jpg',
//     'images/14.png',
//     'images/15.jpg'];
    
// var places=[
//     'Salar de Uyuni, Bolivia',
//     'Cinque Terre, Rio Maggiore, Italy',
//     'Blue Lagoon, Iceland',
//     'Maldives',
//     'Glass Beach, California, USA',
//     'Santorini, Greece',
//     'Neuschwanstein Castle, Germany',
//     'Aogashima Volcano, Japan',
//     'Venice, Italy',
//     'Havasu Falls, Grand Canyon, Arizona, USA',
//     'Swiss Alps, Switzerland',
//     'Iceland',
//     'Positano, Almalfi Coast, Italy',
//     'Rio de Janeiro, Brazil',
//     'Aansu lake, Pakistan'
// ];

// var infoOfPlaces=[

//     'The world’s largest salt flat, it creates a mirror effect after the rain.',
//     'The “5 Lands” of colored homes perched on a cliff by the sea.',
//     'Natural thermal hot springs',
//     'This archipelago is the ultimate tropical island paradise.',
//     'A beach buried in colorful sea glass.',
//     'Iconic blue and white buildings on a cliff by the sea.',
//     'The gorgeous former castle of the king.',
//     'A small village living in a volcanic island.',
//     'The city of colorful winding corridors and canals, and good food.',
//     'In Grand Canyon National Park is this majestic waterfall.',
//     'The epic and majestic mountain range.',
//     'A vast winter and a perfect place to watch the aurora.',
//     'Storybook town on a cliff by the sea.',
//     'The iconic statue overlooking the city.',
//     "The name 'Ansoo' comes from its tear-like shape (the Urdu word Ansoo means teardrop)."+
//     "The lake also resembles a human eye with a central ice island resembling the iris"+ 
//     "and a ridge resembling an eyebrow, which becomes even more prominent when ice"+
//     "melts on the 'eyebrow' during the summer."
//     ];
    
//     for (let i = 0; i < arr.length; i++) {
//         var img=document.createElement('img');
//         img.setAttribute('class','imgsize rounded');
//         img.setAttribute('onclick','openModal(this)');
//         img.setAttribute('id',i);
//         img.src=arr[i];
//         main.appendChild(img);
//     }
    
//     var modal=document.getElementById('modal');
//     var btnClose=document.getElementsByClassName('btnclose')[0];
//     var modalPic=document.getElementsByClassName('modal-body')[0];
   
//     var head=document.getElementById('heading');
//     var detail=document.getElementById('info');


//     btnClose.addEventListener('click',closeModal);
//     modal.addEventListener('click',closeModal);
    
//     function openModal(event){
    

//         // for removing old image

//         modalPic.removeChild(modalPic.firstChild)
//         // create an img 
    
//         var i=document.createElement('img');
//         i.setAttribute('class','modalImg');
//         i.src=event.src;
    

//         // for placing text

//         var id=parseInt(event.getAttribute('id'));
//         head.innerHTML=places[id];
//         detail.innerHTML=infoOfPlaces[id];

//         // display the modal
//         modal.classList.remove('modal-close');
//         modal.classList.add('modal-open');
        
//         // add the picture
    
//         modalPic.appendChild(i);
       
//     }
    
//     function closeModal() {
    
//         modal.classList.add('modal-close')
//     }


    


// Chapter 58-67

// task 1

// var elements=document.getElementById('main-content');
// console.log(elements.childNodes);

// var renderElements=document.getElementsByClassName('render');
// console.log(renderElements);

// document.getElementById('first-name').value="Talal";
// document.getElementById('last-name').value="Ahmed";
// document.getElementById('email').value="talalahmedqurashi123@gmail.com";


// task 2

// var elem=document.getElementById('form-content').nodeType;
// console.log(elem);

// var main=document.getElementById('main-content');
// console.log(main.firstChild);
// console.log(main.lastChild);

// var lastName=document.getElementById('lastName');
// console.log(lastName.nextSibling);
// console.log(lastName.previousSibling);

// var email=document.getElementById('email');
// console.log(email.nodeType);
// console.log(email.parentNode);  
