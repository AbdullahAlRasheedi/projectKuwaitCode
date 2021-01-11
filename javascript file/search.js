let check = false;
//this for loading logo
setTimeout(function(){
    $('.loader_bg').fadeToggle();
}, 1000);

function openSlideMenu(){
    document.getElementById("menu").style.width = "250px";
    document.getElementById("content").style.marginLeft = "250px";
    document.getElementById("menu").style.opacity = 1;
}
function closeSlideMenu(){
    document.getElementById("menu").style.width = "0" ,opacity = 0;
    document.getElementById("content").style.marginLeft = "0";
    document.getElementById("menu").style.opacity = 0;
}

//this function for take user input
function userIntery(){
    let search = document.getElementById("search").value;
    return search;
}

//this for hide stores
function remove(){
    
    document.getElementById("show").style.transform = "translate(0,150px)";
    document.getElementById("show").style.opacity = 0;
    document.getElementById("save").style.display = "none"
   
}

//this for appear stores
function show(){
        document.getElementById("show").style.transform = "translate(0,-150px)";
        document.getElementById("show").style.opacity = 1;
        document.getElementById("save").style.display = "block"
        
}

//link for store
function send(){
    if(check == true){
        show();
        document.getElementById("0").href=`https://www.blink.com.kw/en/Product/Products?searchText=${userIntery()}`;
        document.getElementById("1").href=`https://www.amazon.com/s?k=${userIntery()}`;
        document.getElementById("2").href=`https://quadrastores.com/index.php/home/products/0/0/0/${userIntery()}`;
        document.getElementById("3").href=`https://www.newegg.com/global/kw-en/p/pl?d=${userIntery()}`;
        document.getElementById("4").href=`https://www.best.com.kw/webapp/wcs/stores/servlet/SearchDisplay?categoryId=&storeId=10001&catalogId=10101&langId=-1&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView=&beginIndex=0&pageSize=12&searchTerm=${userIntery()}`;
        document.getElementById("5").href=`https://www.eureka.com.kw/?instant_records%5Bquery%5D=${userIntery()}`;
        document.getElementById("6").href=`https://www.xcite.com/#q=${userIntery()}`;
        
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


let store = [
    {name:"blink"},
    {name:"amazon"},
    {name:"quadra"},
]
let save = []

function getStore(){
    for (let i = 0; i < store.length; i++) {
        let s = document.getElementById(`${i}`)
        console.log(store.name[i])
        
    }
}

function filter(array , user){
    for (let i = 0; i < array.length+1; i++) {
        if(user != array[i]){
            return user;
        }
        else {
            return undefined;
        }
            
        
    }
}
console.log(save)
function saveWord(){
    let user = userIntery();
    if(check == true){
        let saved = filter(save,user)
        save.push(saved)
        
    }
    
    document.getElementById("save").innerText = 'save'

}
