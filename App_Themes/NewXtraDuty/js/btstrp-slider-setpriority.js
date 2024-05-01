$(document).ready(function() {
    $("#slider-setpriority").slider({
        animate: true,
        value:1,
        min: 1,
        max: 20,
        step: 1,
        slide: function(event, ui) {
            update(1,ui.value); //changed
        }
    });

    //Added, set initial value.
    $("#slider-amount-item").val(0);
    $("#slider-amount-label").text(0);
    
    update();
});

//changed. now with parameter
function update(slider,val) {
    //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
    var $amount = slider == 1?val:$("#slider-amount-item").val();
    var $duration = slider == 2?val:$("#duration").val();

    /* commented
    $amount = $( "#slider" ).slider( "value" );
     */

     $total = "$" + ($amount * $duration);
     $( "#slider-amount-item" ).val($amount);
     $( "#slider-amount-label" ).text($amount);
     $('#slider-setpriority a').html('<label> <svg class="lnr lnr-chevron-left"><use xlink:href="#lnr-chevron-left"></use></svg> '+$amount+' <svg class="lnr lnr-chevron-right"><use xlink:href="#lnr-chevron-right"></use></svg> </label>');
}