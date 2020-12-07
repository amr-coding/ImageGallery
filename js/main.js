$(document).ready(function() {
    //define vars
    let mainImg = $(".main");
    let nextBtn = $("#forward");
    let backBtn = $("#backward")
    let count = 1;

    //events    
    nextBtn.bind("click", function(e) {
        e.preventDefault();
        if (count <= 5) {
            count++
            mainImg.attr("src", "images/gallery0" + count + ".jpg")
        } else {
            count = 0;
            count++;
            mainImg.attr("src", "images/gallery0" + count + ".jpg")
        }

    });
    backBtn.bind("click", function(e) {
        e.preventDefault();
        if (count > 1) {

            count--;
            mainImg.attr("src", "images/gallery0" + count + ".jpg")
            console.log(count)
        } else {

        }
    });


    //functions
});