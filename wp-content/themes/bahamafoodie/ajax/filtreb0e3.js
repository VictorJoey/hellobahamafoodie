


$(function() {

    var filters = $('#filter');
    var filtersReset = $('.filters-reset');
    var filtersInput = filters.find('input');
    
    filtersReset.click(function() {

        var oldUrl = location.href.split('?')[0];
        var oldUrlClean = oldUrl.toString().replace( /\/page\/\d+\//g, "/" );

        var newUrl = new URL(oldUrlClean);
        var searchParams = new URLSearchParams();

        newUrl.search = searchParams.toString();   

        history.replaceState(null, null, newUrl.toString());

        filtersInput.prop("checked", false);
        filtersInput.closest('.active').removeClass('active');
        $('.filter-section').find('h6 span').html('');

        //RESET RANGE

        ajax_count_results();

        $.get( newUrl.toString(), function( response ) {

            var newContainer = $( response );

            $('#ajax-container').html( newContainer.find('#ajax-container').html() );

        } );
    });

    filters.submit(function(){


        //CANCEL SUBMIT BEHAVIOUR
        return false;
    });

    filtersInput.on('change', ajax_count_results);

    function ajax_count_results() {

        $(this).closest('label').toggleClass('active');
        var filtersContainer = $(this).closest('.filter-section');
        var countFilters = filtersContainer.find('.active').length;

        
        if(countFilters > 0) {
            filtersContainer.find('h6 span').html(' ('+countFilters+')');
            filtersReset.css("display", "block");
        }
        else {
            filtersContainer.find('h6 span').html('');
            filtersReset.css("display", "none");
        }
        
        var data = {};
        var arrayQuery = filters.serializeArray();
        $.each(arrayQuery, function(i, field) { 
            
            if(data[field.name]){
                data[field.name] = data[field.name]+','+field.value
            }
            else {
                data[field.name] = field.value
            }
        }); 
        
        $.post(siteScript.ajax_url, data, function(response) {  
            $('.filters-results').html(response);
        });  

        var oldUrl = location.href.split('?')[0];
        var oldUrlClean = oldUrl.toString().replace( /\/page\/\d+\//g, "/" );

        var newParams= '';
        var types = '';

        var arrayQuery = filters.serializeArray();


        var newUrl = new URL(oldUrlClean);
        var searchParams = new URLSearchParams();

        $.each(arrayQuery, function(i, field) { 
            
            if(searchParams.has(field.name)){
                searchParams.set(field.name, searchParams.get(field.name)+','+field.value);
            }
            else {
                if(field.name !== 'action')
                    searchParams.set(field.name, field.value);
            }
        });   

        newUrl.search = searchParams.toString();      

        history.replaceState(null, null, newUrl.toString());
        $.get( newUrl.toString(), function( response ) {

            var newContainer = $.parseHTML(response);
            $('#ajax-container').html( $(newContainer).find('#ajax-container').html() );

        } );

    }

});


