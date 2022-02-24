var mode = false;
//var flag = 1 ;
var arr_text = ["","","","","","","","","",""];
var arr_img = [" "," "," "," "," "," "," "," "," "];

function reset(flag1){
    if(flag1==1 || flag1==0){
    for(let i=1;i<10;i++)
    {
        document.getElementById('b'+i).innerHTML ="";
    }
    }
    if(flag1==0){
    for(let i=1;i<=9;i++){
    arr_text[i] = "";
    arr_img[i] = " ";
    }
    }
    var element = document.getElementById("heading");
    element.classList.toggle("greened");

}

function fill_tic_tac_toe(id, index){ 

    console.log(typeof document.getElementById(id).innerHTML);
    
    if(mode == false){
        //console.log("hello");
        if(document.getElementById(id).innerHTML == ""){
            //console.log("hello");
            document.getElementById(id).innerHTML ="X";
            arr_text[index] = "X";
            //flag=2;   
        }
        else if(document.getElementById(id).innerHTML =="X"){
            document.getElementById(id).innerHTML ="0";
            arr_text[index] = "0";
            //flag=3;
        }
        else if(document.getElementById(id).innerHTML =="0"){
            document.getElementById(id).innerHTML ="";
            arr_text[index] = "";
            //flag=1;
        }
    }
    else if(mode == true){

        //console.log(document.getElementById(id).children[0]);
        if(!(document.getElementById(id).children[0])){
            document.getElementById(id).innerHTML ="<img src='/images/src_img1.png' width=100 height=100>";
            arr_img[index] = "0";
            //flag=2;
        }
        else if(document.getElementById(id).children[0].getAttribute("src")=='/images/src_img1.png'){ 
            document.getElementById(id).innerHTML ="<img src='/images/src_img2.png' width=100 height=100>";
            arr_img[index] = "1";
            //flag=3;
        }
        else if(document.getElementById(id).children[0].getAttribute("src")=='/images/src_img2.png'){
            document.getElementById(id).innerHTML ="";
            arr_img[index] = "";
            //flag=1;
        }       
    }
    var element = document.getElementById("heading");
    element.classList.toggle("greened");  

}

 function onChangeMode(){
    reset(1);
    mode = !mode;
    if(mode==false){//text
    document.getElementById("button2").style.backgroundColor = "#33adff";
    for(let i=1;i<=9;i++){
        document.getElementById('b'+i).innerHTML = arr_text[i];

    }
    }
    else{//image
    document.getElementById("button2").style.backgroundColor = "#006bb3";
    for(let i=1;i<=9;i++){
        if(arr_img[i]=="0"){
        document.getElementById('b'+i).innerHTML = "<img src='/images/src_img1.png' width=100 height=100>";
        }
        else if(arr_img[i]=="1"){
         document.getElementById('b'+i).innerHTML = "<img src='/images/src_img2.png' width=100 height=100>";
        }
        else{
            document.getElementById('b'+i).innerHTML = " ";
        }
    }
    }   
}


 function logout(){
    window.location.href = '/login.html';
 }

