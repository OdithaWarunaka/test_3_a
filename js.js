const popupButton = document.getElementById('profile');
const popupContainer = document.getElementById('account');
const closePopupButton = document.getElementById('xbtn');
const editButton = document.getElementById('edit');
const editButtonOk = document.getElementById('editOk');
const itemsInAccount = document.getElementById('itemsInAccount')
const editTabInAccount = document.getElementById('editTabInAccount')
const eIeProfileBtn = document.getElementById('eiePro')
const eIeNameBtn = document.getElementById('eieName')
const eIePasswordBtn = document.getElementById('eiePass')
const itemsInEditBtnOfProInEditTab = document.getElementById('cToEbtnInPro')
const itemsInEditBtnOfNameInEditTab = document.getElementById('cToEbtnInName')
const itemsInEditBtnOfPassInEditTab = document.getElementById('cToEbtnInPass')

popupButton.addEventListener('click', () => {
    popupContainer.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popupContainer.style.display = 'none';
});

editButton.addEventListener('click', () => {
    itemsInAccount.style.display = 'none';
    editTabInAccount.style.display = 'block';
});
editButtonOk.addEventListener('click', () => {
    editTabInAccount.style.display = 'none'
    itemsInAccount.style.display = 'block'
})



function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Format the time as desired (12-hour or 24-hour format)
    var formattedTime = hours + ":" + addLeadingZero(minutes) + ":" + addLeadingZero(seconds);

    document.getElementById("time-container").textContent = formattedTime;
}

function addLeadingZero(number) {
    return number < 10 ? "0" + number : number;
}
setInterval(updateTime, 1000);

const search = () => {
    const searchbox = document.getElementById("search_item").value.toUpperCase();
    const store_itms = document.getElementById("products")
    const product = document.querySelectorAll(".items")
    const pname = document.getElementsByTagName("h1")

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h1')[0];
        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}

window.onload = function paswordNameChanger() {
    const passwordLabel = document.getElementById('1stPass');
    const originalText = passwordLabel.textContent.trim();
    const stars = '*'.repeat(originalText.length);

    const passwordLabel2 = document.getElementById('2ndPass');
    const originalText2 = passwordLabel2.textContent.trim();
    const stars2 = '*'.repeat(originalText2.length);
    passwordLabel.textContent = stars;
    passwordLabel2.textContent = stars2;
};

// Update the time every second
