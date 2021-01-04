function send(){
    let search = document.getElementById("search").value;
    document.getElementById("blink").href=`https://www.blink.com.kw/en/Product/Products?searchText=${search}`;
    document.getElementById("amazon").href=`https://www.amazon.com/s?k=${search}`;
    document.getElementById("quadra").href=`https://quadrastores.com/index.php/home/products/0/0/0/${search}`;
    document.getElementById("newEgg").href=`https://www.newegg.com/global/kw-en/p/pl?d=${search}`;
}