$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "一键总控");
    content_width = (122 + 5) * 8 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [122, 120],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 8,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock-clock" id="default-clock-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 2, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-wgd" id="default-light-wgd"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-light-bgs" id="default-light-bgs"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label-test" id="default-label-test"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 2, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-main-panel" id="default-load-main-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 3, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-living-room-panel" id="default-load-living-room-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 4, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-dinner-panel" id="default-load-dinner-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 5, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-bathroom-panel" id="default-load-bathroom-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 6, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-bedroom2-panel" id="default-load-bedroom2-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 7, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-controls" id="default-load-controls"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 8, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 9, 4)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-clock-clock"] = new baseclock("default-clock-clock", "", "house", {'namespace': 'default', 'entity': 'clock.clock', 'widget_type': 'baseclock', 'static_icons': [], 'css': {}, 'title_is_friendly_name': 1, 'static_css': {'time_style': 'color: #fff;', 'date_style': 'color: #fff;', 'widget_style': 'color: #00aaff;background-color: rgba(100,100,100,0.7);'}, 'icons': [], 'fields': {'time': '', 'date': ''}})
    
        widgets["default-light-wgd"] = new baselight("default-light-wgd", "", "house", {'icon_on': 'mdi-white-balance-incandescent', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.gateway_light_7c49eb1cf7d1'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'css': {'icon_style_inactive': 'color: antiquewhite;', 'icon_style_active': 'color: #ffff00;'}, 'widget_type': 'baselight', 'icon_off': 'mdi-white-balance-incandescent', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.gateway_light_7c49eb1cf7d1'}, 'namespace': 'default', 'entity': 'light.gateway_light_7c49eb1cf7d1', 'static_css': {'level_up_style': 'color: #888;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'color: #00aaff;background-color: rgba(100,100,100,0.7);', 'level_down_style': 'color: #888;', 'unit_style': 'color: #888;', 'level_style': 'color: #888;', 'title_style': 'color: #fff;font-weight: 400;'}, 'fields': {'icon_style': '', 'state_text': '', 'level': '', 'title': '网关灯', 'units': '%', 'icon': '', 'title2': ''}, 'icons': {'icon_on': 'mdi-white-balance-incandescent', 'icon_off': 'mdi-white-balance-incandescent'}})
    
        widgets["default-light-bgs"] = new baseswitch("default-light-bgs", "", "house", {'icon_on': 'mdi-white-balance-incandescent', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.wall_switch_158d00016d99cc'}, 'static_icons': [], 'css': {'icon_style_inactive': 'color: antiquewhite;', 'icon_style_active': 'color: #00aaff;'}, 'widget_type': 'baseswitch', 'entity': 'switch.wall_switch_158d00016d99cc', 'state_inactive': 'off', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.wall_switch_158d00016d99cc'}, 'namespace': 'default', 'enable': 1, 'state_active': 'on', 'static_css': {'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'color: #00aaff;background-color: rgba(100,100,100,0.7);', 'title_style': 'color: #fff;font-weight: 400;'}, 'icon_off': 'mdi-white-balance-incandescent', 'fields': {'icon_style': '', 'state_text': '', 'icon': '', 'title2': '', 'title': '办公室灯'}, 'icons': {'icon_on': 'mdi-white-balance-incandescent', 'icon_off': 'mdi-white-balance-incandescent'}})
    
        widgets["default-label-test"] = new basedisplay("default-label-test", "", "house", {'namespace': 'default', 'static_icons': [], 'static_css': {'state_text_style': '', 'title2_style': 'color: #fff;font-weight: 400;', 'container_style': '', 'widget_style': 'color: #00aaff;background-color: rgba(100,100,100,0.7);', 'value_style': 'color: #fff;', 'unit_style': '', 'title_style': 'color: #fff;font-weight: 400;'}, 'widget_type': 'basedisplay', 'fields': {'title2': '', 'state_text': '', 'value': 'hello test', 'title': '', 'unit': ''}, 'css': {}, 'icons': []})
    
        widgets["default-load-main-panel"] = new basejavascript("default-load-main-panel", "", "house", {'namespace': 'default', 'dashboard': 'MainPanel', 'icon_inactive': 'fa-home', 'static_icons': [], 'static_css': {'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'color: #00aaff;background-color: rgba(100,100,100,0.7);', 'title_style': 'color: #fff;font-weight: 400;'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-home'}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'fields': {'icon_style': '', 'icon': '', 'title2': '', 'title': '总控开关'}})
    
        widgets["default-load-living-room-panel"] = new basejavascript("default-load-living-room-panel", "", "house", {'namespace': 'default', 'dashboard': 'LivingRoomPanel', 'icon_inactive': 'fa-play', 'static_icons': [], 'static_css': {'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'color: #00aaff;background-color: rgba(100,100,100,0.7);', 'title_style': 'color: #fff;font-weight: 400;'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-play'}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'fields': {'icon_style': '', 'icon': '', 'title2': '', 'title': '播放控制'}})
    
        widgets["default-load-dinner-panel"] = new basejavascript("default-load-dinner-panel", "", "house", {'namespace': 'default', 'dashboard': 'Dinner', 'icon_inactive': 'mdi-projector', 'static_icons': [], 'static_css': {'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'color: #00aaff;background-color: rgba(100,100,100,0.7);', 'title_style': 'color: #fff;font-weight: 400;'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-projector'}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'fields': {'icon_style': '', 'icon': '', 'title2': '', 'title': '投影机'}})
    
        widgets["default-load-bathroom-panel"] = new basejavascript("default-load-bathroom-panel", "", "house", {'namespace': 'default', 'dashboard': 'Bathroom', 'icon_inactive': 'fa-laptop', 'static_icons': [], 'static_css': {'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'color: #00aaff;background-color: rgba(100,100,100,0.7);', 'title_style': 'color: #fff;font-weight: 400;'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-laptop'}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'fields': {'icon_style': '', 'icon': '', 'title2': '', 'title': '电脑'}})
    
        widgets["default-load-bedroom2-panel"] = new basejavascript("default-load-bedroom2-panel", "", "house", {'namespace': 'default', 'dashboard': 'Bedroom2', 'icon_inactive': 'mdi-lightbulb-outline', 'static_icons': [], 'static_css': {'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'color: #00aaff;background-color: rgba(100,100,100,0.7);', 'title_style': 'color: #fff;font-weight: 400;'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-lightbulb-outline'}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'fields': {'icon_style': '', 'icon': '', 'title2': '', 'title': '灯光'}})
    
        widgets["default-load-controls"] = new basejavascript("default-load-controls", "", "house", {'namespace': 'default', 'dashboard': 'Controls', 'icon_inactive': 'fa-dashboard', 'static_icons': [], 'static_css': {'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'color: #00aaff;background-color: rgba(100,100,100,0.7);', 'title_style': 'color: #fff;font-weight: 400;'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-dashboard'}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'fields': {'icon_style': '', 'icon': '', 'title2': '', 'title': '主题设置'}})
    
        widgets["default-reload"] = new basejavascript("default-reload", "", "house", {'namespace': 'default', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'static_icons': [], 'static_css': {'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'color: #00aaff;background-color: rgba(100,100,100,0.7);', 'title_style': 'color: #fff;font-weight: 400;'}, 'widget_type': 'basejavascript', 'fields': {'icon_style': '', 'icon': '', 'title2': '', 'title': '重新加载'}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-refresh'}, 'command': 'location.reload(true)'})
    

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
    ha_status(stream_url, "一键总控", widgets);

});