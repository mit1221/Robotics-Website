function yScroll() {
    var yPos = window.pageYOffset;
    
    var topButton = document.getElementById("backToTop");
    var navbar = document.getElementById("navbar");
    var tint = document.getElementById("tint");
    
    if (yPos >= 450) {
		topButton.style.opacity = 1;
		topButton.style.visibility = "visible";
		navbar.style.opacity = 1;
		navbar.style.visibility = "visible";
		navbar.style.top = "0px";
		tint.style.background = "white";
    } else {
        topButton.style.opacity = 0;
        topButton.style.visibility = "hidden";
        navbar.style.opacity = 0;
        navbar.style.visibility = "hidden";
        navbar.style.top = "-80px";
        tint.style.background = "#6BCFB7";
    }
}

var isTriggered = false;

function incrementNumbers() {
    var yPos = window.pageYOffset;
    var stats = document.getElementsByTagName("h4");
    var statsPos = $("#stats").offset().top;

    if (yPos = (statsPos - 450) && isTriggered == false) {
        $(".stat").addClass("stat-show");
        var i = 0;
        var j = 0;
        var k = 0;
        var l = 0;

        var interval1 = setInterval(function() {
            stats[0].innerHTML = ++ i;

            if (i == 4) {
                clearInterval(interval1);
            }
        }, 200);
        
        var interval2 = setInterval(function() {
            stats[1].innerHTML = ++ j;
        
            if (j == 26) {
                clearInterval(interval2);
            }
        }, 80);
        
        var interval3 = setInterval(function() {
            stats[2].innerHTML = ++ k;
        
            if (k == 2) {
                clearInterval(interval3);
            }
        }, 600);
        
        var interval4 = setInterval(function() {
            stats[3].innerHTML = ++ l;
        
            if (l == 18) {
                clearInterval(interval4);
            }
        }, 70);
        
        isTriggered = true;
    }
}

window.addEventListener("scroll", yScroll);
window.addEventListener("scroll", incrementNumbers);