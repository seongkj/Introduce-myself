const names = document.getElementById('name');

names.addEventListener("mouseover",function() {
    names.innerHTML = '성경주';
    names.style.color = 'pink'
});

const aTags = document.querySelectorAll(".aTags");
for(var i = 0; i < aTags.length; i ++) {

    aTags[i].onclick = function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute("href"));
        window.scrollTo ({
            'behavior': 'smooth',
            'top': target.offsetTop  
        })
    }
    
}