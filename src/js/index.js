import $ from 'jquery';

import '../scss/style.scss';


//<editor-fold desc="Modal">
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("shsow-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
//</editor-fold>

$(document).ready(function (e) {

    console.log("dwidnwdwdwdwd");

    $('#imageUploadForm').on('submit',(function(e) {
        e.preventDefault();
        const formData = new FormData(this);

        $.ajax({
            type:'POST',
            url: $(this).attr('action'),
            data:formData,
            crossDomain: true,
            cache:false,
            contentType: false,
            processData: false,
            success:function(data){
                console.log("success");
                console.log(data);
            },
            error: function(data){
                console.log("error");
                console.log(data);
            }
        });
    }));

    // $("#ImageBrowse").on("change", function() {
    //     $("#imageUploadForm").submit();
    // });
});
