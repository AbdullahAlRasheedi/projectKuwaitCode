let check = false;

//this for loading logo
setTimeout(function(){
    $('.loader_bg').fadeToggle();
}, 1000);

//this function for take user input
function userIntery(){
    let search = document.getElementById("search").value;
    return search;
}

//this for hide stores
function remove(){
    document.getElementById("show").style.opacity = 0;
    document.getElementById("show").style.transform = "translate(0,150px)";
}

//this for appear stores
function show(){
        document.getElementById("show").style.transform = "translate(0,-150px)";
        document.getElementById("show").style.opacity = 1;
}

//link for store
function send(){
    if(check == true){
        show();
        document.getElementById("blink").href=`https://www.blink.com.kw/en/Product/Products?searchText=${userIntery()}`;
        document.getElementById("amazon").href=`https://www.amazon.com/s?k=${userIntery()}`;
        document.getElementById("quadra").href=`https://quadrastores.com/index.php/home/products/0/0/0/${userIntery()}`;
        document.getElementById("newEgg").href=`https://www.newegg.com/global/kw-en/p/pl?d=${userIntery()}`;
        document.getElementById("bestAlYousifi").href=`https://www.best.com.kw/webapp/wcs/stores/servlet/SearchDisplay?categoryId=&storeId=10001&catalogId=10101&langId=-1&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView=&beginIndex=0&pageSize=12&searchTerm=${userIntery()}`;
        document.getElementById("eureka").href=`https://www.eureka.com.kw/?instant_records%5Bquery%5D=${userIntery()}`;
        document.getElementById("xCite").href=`https://www.xcite.com/#q=${userIntery()}`;
        
    }
    else{
        remove();
    }
}

//this for filter user input
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

