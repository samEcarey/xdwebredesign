/*--------------------------------------------------------------
 * JS: btstrp-datepicker
 *--------------------------------------------------------------*/

/*-----------------------------------
 * btstrp-datepicker: 
 *---------------------------------*/
$(function() {

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }
    cb(moment(), moment());

    $('#reportrange').daterangepicker({
        ranges: {
            'Today': [moment(), moment()],
            'Tomorrow': [moment().add(1, 'days'), moment().add(1, 'days')],
            'Next Week': [moment().add(0, 'days'), moment().add(6, 'days')],
            'Next 4 Weeks': [moment(), moment().add(27, 'days')],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Next Month': [moment().add(1, 'month').startOf('month'), moment().add(1, 'month').endOf('month')],
            'Next 3 Months': [moment(), moment().add(3, 'months')]
        }
    }, cb);

});