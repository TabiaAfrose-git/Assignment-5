const allSeat = document.getElementsByClassName("seat");
let totalSeat = 40;

// get all seat
let count = 0;
for(const s of allSeat){
    s.addEventListener("click", function(event){
        const seatName = event.target.parentNode.childNodes[0].innerText;
        const seatType = "Economoy";
        const price = 550;

        const selectedSeatContainer = document.getElementById("selected-seat-container");
        event.target.setAttribute("disabled",false);

        const firstSeatCounter = getConvertedValue("seat-count");
        if((firstSeatCounter+1) > 4){
            alert("Limit exceeded..!!");
            document.getElementById("seat-left").innerText = totalSeat--;
            return;
        }
        event.target.parentNode.style.backgroundColor = "green";
        event.target.parentNode.style.color = "white";


        // calculate how many seat available
        document.getElementById("seat-left").innerText = totalSeat--;

        // count seat
        const seatCount = parseInt(document.getElementById("seat-count").innerText);
        document.getElementById("seat-count").innerText = seatCount+1;

        // add item  by Js(div -> p1 -> p2 -> p3 and append in)
        const div = document.createElement("div");
        div.classList.add("seat-selector")
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p1.innerText = seatName;
        p2.innerText = seatType;
        p3.innerText = price;
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedSeatContainer.appendChild(div);
        updateTotalPrice(price);
        updateGrandPrice();
        check();
    });
};

// calculate Total price.
function updateTotalPrice(value){
    const totalPrice = parseInt(document.getElementById("Total-price").innerText);
    const sum = totalPrice + parseInt(value);
    console.log(sum);
    document.getElementById("Total-price").innerText = sum;

}
// check, calculate discount, and set GrandPrice.
function updateGrandPrice(status){
    const totalPrice = parseInt(document.getElementById("Total-price").innerText);
    if(status == undefined){

        document.getElementById("grand-total").innerText = totalPrice;
    }
    else{
        const couponCode  = document.getElementById("coupon-code").value;
        if(couponCode == "NEW15"){
            const discount = totalPrice * .15;
            document.getElementById("grand-total").innerText = totalPrice - discount;
        }
        else if(couponCode == "Couple 20"){
            const discount = totalPrice * .2;
            document.getElementById("grand-total").innerText = totalPrice - discount;
        }
        else{
            alert("please inter valid coupon code");
        }
        document.getElementById("coupon-code").value = " ";

    }
}
// converter innerText(string) to int.
function getConvertedValue(id){
    const price = document.getElementById(id).innerText;
    const coverPrice = parseInt(price);
    return coverPrice;

}

