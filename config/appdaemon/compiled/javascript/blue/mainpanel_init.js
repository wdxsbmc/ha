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
    
        widgets["default-clock-clock"] = new baseclock("default-clock-clock", "", "blue", {'static_css': {'date_style': 'color: #fff;', 'widget_style': 'background-color: rgba(0,0,0,0.4);', 'time_style': 'color: #fff;'}, 'widget_type': 'baseclock', 'icons': [], 'css': {}, 'title_is_friendly_name': 1, 'entity': 'clock.clock', 'namespace': 'default', 'static_icons': [], 'fields': {'date': '', 'time': ''}})
    
        widgets["default-light-wgd"] = new baselight("default-light-wgd", "", "blue", {'static_css': {'state_text_style': 'color: #fff;', 'level_down_style': 'color: #888;', 'title2_style': 'color: #fff;font-weight: 400;', 'title_style': 'color: #fff;font-weight: 400;', 'level_up_style': 'color: #888;', 'widget_style': 'background-color: rgba(0,0,0,0.4);', 'unit_style': 'color: #888;', 'level_style': 'color: #888;'}, 'widget_type': 'baselight', 'entity': 'light.gateway_light_7811dcb063a5', 'namespace': 'default', 'fields': {'state_text': '', 'icon_style': '', 'title': '网关灯', 'level': '', 'title2': '', 'icon': '', 'units': '%'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.gateway_light_7811dcb063a5'}, 'icon_on': 'mdi-white-balance-incandescent', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.gateway_light_7811dcb063a5'}, 'icons': {'icon_on': 'mdi-white-balance-incandescent', 'icon_off': 'mdi-white-balance-incandescent'}, 'icon_off': 'mdi-white-balance-incandescent', 'css': {'icon_style_active': 'color: #ffff00;top: 45px !important;', 'icon_style_inactive': 'color: antiquewhite;top: 45px !important;'}, 'static_icons': {'icon_down': 'fa-minus', 'icon_up': 'fa-plus'}})
    
        widgets["default-light-bgs"] = new baseswitch("default-light-bgs", "", "blue", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'widget_type': 'baseswitch', 'entity': 'switch.wall_switch_158d00016d99cc', 'namespace': 'default', 'fields': {'state_text': '', 'icon_style': '', 'title': '办公室灯', 'icon': '', 'title2': ''}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.wall_switch_158d00016d99cc'}, 'icon_on': 'mdi-white-balance-incandescent', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.wall_switch_158d00016d99cc'}, 'icons': {'icon_on': 'mdi-white-balance-incandescent', 'icon_off': 'mdi-white-balance-incandescent'}, 'enable': 1, 'icon_off': 'mdi-white-balance-incandescent', 'css': {'icon_style_active': 'color: #ffaa00;', 'icon_style_inactive': 'color: antiquewhite;'}, 'state_inactive': 'off', 'state_active': 'on', 'static_icons': []})
    
        widgets["default-label-test"] = new basedisplay("default-label-test", "", "blue", {'static_css': {'state_text_style': '', 'title2_style': 'color: #fff;font-weight: 400;', 'container_style': '', 'title_style': 'color: #fff;font-weight: 400;', 'value_style': 'color: #fff;', 'unit_style': '', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'widget_type': 'basedisplay', 'icons': [], 'css': {}, 'namespace': 'default', 'static_icons': [], 'fields': {'state_text': '', 'title': '', 'value': 'hello test', 'title2': '', 'unit': ''}})
    
        widgets["default-load-main-panel"] = new basejavascript("default-load-main-panel", "", "blue", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'widget_type': 'basejavascript', 'icon_inactive': 'fa-home', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-home'}, 'dashboard': 'MainPanel', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'namespace': 'default', 'static_icons': [], 'fields': {'icon_style': '', 'title': '总控开关', 'icon': '', 'title2': ''}})
    
        widgets["default-load-living-room-panel"] = new basejavascript("default-load-living-room-panel", "", "blue", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'widget_type': 'basejavascript', 'icon_inactive': 'fa-play', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-play'}, 'dashboard': 'LivingRoomPanel', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'namespace': 'default', 'static_icons': [], 'fields': {'icon_style': '', 'title': '播放控制', 'icon': '', 'title2': ''}})
    
        widgets["default-load-dinner-panel"] = new basejavascript("default-load-dinner-panel", "", "blue", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'widget_type': 'basejavascript', 'icon_inactive': 'mdi-projector', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-projector'}, 'dashboard': 'Dinner', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'namespace': 'default', 'static_icons': [], 'fields': {'icon_style': '', 'title': '投影机', 'icon': '', 'title2': ''}})
    
        widgets["default-load-bathroom-panel"] = new basejavascript("default-load-bathroom-panel", "", "blue", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'widget_type': 'basejavascript', 'icon_inactive': 'fa-laptop', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-laptop'}, 'dashboard': 'Bathroom', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'namespace': 'default', 'static_icons': [], 'fields': {'icon_style': '', 'title': '电脑', 'icon': '', 'title2': ''}})
    
        widgets["default-load-bedroom2-panel"] = new basejavascript("default-load-bedroom2-panel", "", "blue", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'widget_type': 'basejavascript', 'icon_inactive': 'mdi-lightbulb-outline', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-lightbulb-outline'}, 'dashboard': 'Bedroom2', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'namespace': 'default', 'static_icons': [], 'fields': {'icon_style': '', 'title': '灯光', 'icon': '', 'title2': ''}})
    
        widgets["default-load-controls"] = new basejavascript("default-load-controls", "", "blue", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'widget_type': 'basejavascript', 'icon_inactive': 'fa-dashboard', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-dashboard'}, 'dashboard': 'Controls', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'namespace': 'default', 'static_icons': [], 'fields': {'icon_style': '', 'title': '主题设置', 'icon': '', 'title2': ''}})
    
        widgets["default-reload"] = new basejavascript("default-reload", "", "blue", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-refresh'}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'namespace': 'default', 'command': 'location.reload(true)', 'fields': {'icon_style': '', 'title': '重新加载', 'icon': '', 'title2': ''}, 'static_icons': []})
    

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