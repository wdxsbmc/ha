$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "我的家");
    content_width = (120 + 5) * 8 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [120, 120],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 8,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-gateway-light-7c49eb1cf7d1" id="default-light-gateway-light-7c49eb1cf7d1"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseerror-default-sun-sun" id="default-sun-sun"><h1 class="error" data-bind="text: error"></h1></div></li>', 1, 1, 1, 2)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-light-gateway-light-7c49eb1cf7d1"] = new baselight("default-light-gateway-light-7c49eb1cf7d1", "", "default", {'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'namespace': 'default', 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.gateway_light_7c49eb1cf7d1'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.gateway_light_7c49eb1cf7d1'}, 'static_icons': {'icon_down': 'fa-minus', 'icon_up': 'fa-plus'}, 'precision': 1, 'fields': {'units': '%', 'title2': '', 'icon_style': '', 'state_text': '', 'icon': '', 'title': '', 'level': ''}, 'static_css': {'level_style': 'color: #fff;', 'level_down_style': 'color: #888;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'level_up_style': 'color: #888;', 'unit_style': 'color: #fff;', 'state_text_style': 'color: #fff;'}, 'widget_type': 'baselight', 'entity': 'light.gateway_light_7c49eb1cf7d1', 'title_is_friendly_name': 1, 'use_hass_icon': 1, 'use_comma': 0})
    
        widgets["default-sun-sun"] = new baseerror("default-sun-sun", "", "default", {'static_css': {'widget_style': ''}, 'widget_type': 'baseerror', 'fields': {'error': "Unable to find widget type 'sun'"}})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
        if (myTimeoutSticky) {
            myTimeout = setTimeout(function() { navigate(myTimeoutUrl); }, myTimeoutDelay);
        }
    });

    // Set up timeout

    var myTimeout;
    var myTimeoutUrl;
    var myTimeoutDelay;
    var myTimeoutSticky = 0;

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return" && arg != "sticky")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            if ("sticky" in result)
            {
                myTimeoutSticky = (result.sticky == "1");
            }
            myTimeoutUrl = url;
            myTimeoutDelay = result.timeout * 1000;
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    ha_status(stream_url, "我的家", widgets);

});