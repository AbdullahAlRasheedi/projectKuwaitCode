let check = false;

setTimeout(function(){
    $('.loader_bg').fadeToggle();
}, 1000);

function userIntery(){
    let search = document.getElementById("search").value;
    return search;
}
function remove(){
    document.getElementById("show").style.opacity = 0;
    document.getElementById("show").style.transform = "translate(0,150px)";
}

function show(){
        document.getElementById("show").style.transform = "translate(0,-150px)";
        document.getElementById("show").style.opacity = 1;
}

function send(){
    if(check == true){
        show();
        document.getElementById("blink").href=`https://www.blink.com.kw/en/Product/Products?searchText=${userIntery()}`;
        document.getElementById("amazon").href=`https://www.amazon.com/s?k=${userIntery()}`;
        document.getElementById("quadra").href=`https://quadrastores.com/index.php/home/products/0/0/0/${userIntery()}`;
        document.getElementById("newEgg").href=`https://www.newegg.com/global/kw-en/p/pl?d=${userIntery()}`;
        }
    else{
        remove();
    }
}

function SerchLength(){
    if(userIntery() == 0){
        remove();
        check = false;
    }
    else{
        send();
        check = true;
    }
}