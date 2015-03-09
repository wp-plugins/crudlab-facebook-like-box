
jQuery(document).ready(function ($) {
    var current_url = window.location;
    var loc = window.location.href,
            index = loc.indexOf('#');

    if (index > 0) {
        current_url = loc.substring(0, index);
    }
    var magic_url = current_url + '&wplikebox_magic_data=1';
    console.log(magic_url);
    $('#magicsuggest').magicSuggest({
        data: magic_url ,
        ajaxConfig: {
            xhrFields: {
                withCredentials: true,
            }
        }
    });
    $( document ).tooltip({
        content: function() {
        var element = $( this );
            if ( element.is( "[help]" ) ) {
                return '<table class="_4-ss _5k9x"><thead><tr><th>Layout</th><th>Default Sizes</th></tr></thead><tbody class="_5m37" id="u_0_1n"><tr class="row_0"><td><p><code>standard</code></p></td><td><p>Minimum width: 225 pixels.<br> Default width: 450 pixels.<br> Height: 35 pixels (without photos) or 80 pixels (with photos).</p></td></tr><tr class="row_1 _5m29"><td><p><code>box_count</code></p></td><td><p>Minimum width: 55 pixels.<br> Default width: 55 pixels.<br> Height: 65 pixels.</p></td></tr><tr class="row_2"><td><p><code>button_count</code></p></td><td><p>Minimum width: 90 pixels.<br> Default width: 90 pixels.<br> Height: 20 pixels.</p></td></tr><tr class="row_3 _5m29"><td><p><code>button</code></p></td><td><p>Minimum width: 47 pixels.<br> Default width: 47 pixels.<br> Height: 20 pixels.</p></td></tr></tbody></table>';
            }
        }
        
    });
});


jQuery(document).ready(function ($) {
    
    $('#magicsuggest').magicSuggest({
        // [...] // configuration options
    });
    wpfblikebox_func();
});
jQuery(function () {
    
});
function wpfblbox_switchonoff(val) {
    var path = jQuery(val).attr("src");
    var file = path.split('/').pop();
    var file2 = path.split(file);
    console.log(file2[0]);
    var on = '';
    var off = '';
    if (file == 'on.png') {
        on = true;
    } else {
        off = true;
    }
    if (off)
    {
        jQuery.post('', {'wpfblbox_switchonoff': 1}, function (e) {
            if (e == 'error') {
                error('error');
            } else {
                jQuery('#wpfblbox_circ').css("background", "#0f0");
                jQuery(val).attr("src", file2[0] + 'on.png');
            }
        });
    }
    if (on) {
        jQuery.post('', {'wpfblbox_switchonoff': 0}, function (e) {
            if (e == 'error') {
                error('error');
            } else {
                jQuery('#wpfblbox_circ').css("background", "#f00");
                jQuery(val).attr("src", file2[0] + 'off.png');
            }
        });
    }
    //alert(val);
}



window.fbAsyncInit = function () {
    FB.init({
        appId: '1577857539092932',
        xfbml: true,
        version: 'v2.1'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    var language = 'en_US';
    if(language == '' || language == null){language = 'en_US';}
    js.src = "//connect.facebook.net/"+language+"/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
function isNumeric(value) {
    var bool = isNaN(+value);
    bool = bool || (value.indexOf('.') != -1);
    bool = bool || (value.indexOf(",") != -1);
    return !bool;
};
function wpfblikebox_func() {

    var width = jQuery('#width').val();
    console.log('width = '+width);
    var height = jQuery('#height').val();
//    if (width < 1) {
//        width = 500;
//    }

    var color = jQuery('#color').val();
    var faces = jQuery('#faces').is(':checked');
    var headers = jQuery('#headers').is(':checked');
    var border = jQuery('#border').is(':checked');
    var showposts = jQuery('#showposts').is(':checked');
    if(faces){faces = true;}else{faces=false;}
    if(headers){headers = true;}else{headers=false;}
    if(border){border = true;}else{border=false;}
    if(showposts){showposts = true;}else{showposts=false;}
    var url = jQuery('#url_text').val();
    console.log(url);
    if(url == '' || url == null){
        url = 'https://www.facebook.com/FacebookDevelopers';
    }
    
    var token = url.indexOf('http://');
    if(token == -1){token = url.indexOf('https://');}
    if(token == -1){url = 'http://'+url;}
   var data = '<div class="fb-like-box" data-height="'+height+'" data-width="'+width+'" data-href="'+url+'" data-colorscheme="'+color+'" data-show-faces="'+faces+'" data-header="'+headers+'" data-stream="'+showposts+'" data-show-border="'+border+'"></div>';
    jQuery('#u_0_18').html(data);console.log(token);
    
    FB.XFBML.parse();
    return false;
}

//------------------------------------------------------------------------------


 