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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-main-panel" id="default-load-main-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-living-room-panel" id="default-load-living-room-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 2, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-dinner-panel" id="default-load-dinner-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 3, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-bathroom-panel" id="default-load-bathroom-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 4, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-bedroom2-panel" id="default-load-bedroom2-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 5, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-controls" id="default-load-controls"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 6, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 7, 4)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-clock-clock"] = new baseclock("default-clock-clock", "", "default", {'static_css': {'time_style': 'color: #fff;', 'widget_style': 'background-color: rgba(255,255,255,0.2);', 'date_style': 'color: #fff;'}, 'widget_type': 'baseclock', 'title_is_friendly_name': 1, 'fields': {'date': '', 'time': ''}, 'namespace': 'default', 'icons': [], 'static_icons': [], 'entity': 'clock.clock', 'css': {}})
    
        widgets["default-light-wgd"] = new baselight("default-light-wgd", "", "default", {'icon_on': 'mdi-white-balance-incandescent', 'icon_off': 'mdi-white-balance-incandescent', 'css': {'icon_style_inactive': 'top: 45px !important;color: antiquewhite;', 'icon_style_active': 'top: 45px !important;color: #ffff00;'}, 'namespace': 'default', 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'icons': {'icon_on': 'mdi-white-balance-incandescent', 'icon_off': 'mdi-white-balance-incandescent'}, 'static_css': {'level_style': 'color: #888;', 'unit_style': 'color: #888;', 'level_up_style': 'color: #888;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: rgba(255,255,255,0.2);', 'level_down_style': 'color: #888;', 'title_style': 'font-weight: 400;color: #fff;', 'title2_style': 'font-weight: 400;color: #fff;'}, 'widget_type': 'baselight', 'fields': {'title2': '', 'icon_style': '', 'level': '', 'icon': '', 'title': '网关灯', 'state_text': '', 'units': '%'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.gateway_light_7811dcb063a5'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.gateway_light_7811dcb063a5'}, 'entity': 'light.gateway_light_7811dcb063a5'})
    
        widgets["default-light-bgs"] = new baseswitch("default-light-bgs", "", "default", {'icon_on': 'mdi-white-balance-incandescent', 'icon_off': 'mdi-white-balance-incandescent', 'css': {'icon_style_inactive': 'color: antiquewhite;', 'icon_style_active': 'color: #ffaa00;'}, 'state_inactive': 'off', 'static_css': {'widget_style': 'background-color: rgba(255,255,255,0.2);', 'title2_style': 'font-weight: 400;color: #fff;', 'title_style': 'font-weight: 400;color: #fff;', 'state_text_style': 'color: #fff;'}, 'enable': 1, 'namespace': 'default', 'static_icons': [], 'icons': {'icon_on': 'mdi-white-balance-incandescent', 'icon_off': 'mdi-white-balance-incandescent'}, 'state_active': 'on', 'widget_type': 'baseswitch', 'fields': {'title2': '', 'title': '办公室灯', 'state_text': '', 'icon_style': '', 'icon': ''}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.wall_switch_158d00016d99cc'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.wall_switch_158d00016d99cc'}, 'entity': 'switch.wall_switch_158d00016d99cc'})
    
        widgets["default-load-main-panel"] = new basejavascript("default-load-main-panel", "", "default", {'static_css': {'widget_style': 'background-color: rgba(255,255,255,0.2);', 'title2_style': 'font-weight: 400;color: #fff;', 'title_style': 'font-weight: 400;color: #fff;'}, 'widget_type': 'basejavascript', 'fields': {'title2': '', 'title': '总控开关', 'icon_style': '', 'icon': ''}, 'namespace': 'default', 'icon_inactive': 'fa-home', 'dashboard': 'MainPanel', 'static_icons': [], 'icons': {'icon_inactive': 'fa-home', 'icon_active': 'fa-spinner fa-spin'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}})
    
        widgets["default-load-living-room-panel"] = new basejavascript("default-load-living-room-panel", "", "default", {'static_css': {'widget_style': 'background-color: rgba(255,255,255,0.2);', 'title2_style': 'font-weight: 400;color: #fff;', 'title_style': 'font-weight: 400;color: #fff;'}, 'widget_type': 'basejavascript', 'fields': {'title2': '', 'title': '播放控制', 'icon_style': '', 'icon': ''}, 'namespace': 'default', 'icon_inactive': 'fa-play', 'dashboard': 'LivingRoomPanel', 'static_icons': [], 'icons': {'icon_inactive': 'fa-play', 'icon_active': 'fa-spinner fa-spin'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}})
    
        widgets["default-load-dinner-panel"] = new basejavascript("default-load-dinner-panel", "", "default", {'static_css': {'widget_style': 'background-color: rgba(255,255,255,0.2);', 'title2_style': 'font-weight: 400;color: #fff;', 'title_style': 'font-weight: 400;color: #fff;'}, 'widget_type': 'basejavascript', 'fields': {'title2': '', 'title': '投影机', 'icon_style': '', 'icon': ''}, 'namespace': 'default', 'icon_inactive': 'mdi-projector', 'dashboard': 'Dinner', 'static_icons': [], 'icons': {'icon_inactive': 'mdi-projector', 'icon_active': 'fa-spinner fa-spin'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}})
    
        widgets["default-load-bathroom-panel"] = new basejavascript("default-load-bathroom-panel", "", "default", {'static_css': {'widget_style': 'background-color: rgba(255,255,255,0.2);', 'title2_style': 'font-weight: 400;color: #fff;', 'title_style': 'font-weight: 400;color: #fff;'}, 'widget_type': 'basejavascript', 'fields': {'title2': '', 'title': '电脑', 'icon_style': '', 'icon': ''}, 'namespace': 'default', 'icon_inactive': 'fa-laptop', 'dashboard': 'Bathroom', 'static_icons': [], 'icons': {'icon_inactive': 'fa-laptop', 'icon_active': 'fa-spinner fa-spin'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}})
    
        widgets["default-load-bedroom2-panel"] = new basejavascript("default-load-bedroom2-panel", "", "default", {'static_css': {'widget_style': 'background-color: rgba(255,255,255,0.2);', 'title2_style': 'font-weight: 400;color: #fff;', 'title_style': 'font-weight: 400;color: #fff;'}, 'widget_type': 'basejavascript', 'fields': {'title2': '', 'title': '灯光', 'icon_style': '', 'icon': ''}, 'namespace': 'default', 'icon_inactive': 'mdi-lightbulb-outline', 'dashboard': 'Bedroom2', 'static_icons': [], 'icons': {'icon_inactive': 'mdi-lightbulb-outline', 'icon_active': 'fa-spinner fa-spin'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}})
    
        widgets["default-load-controls"] = new basejavascript("default-load-controls", "", "default", {'static_css': {'widget_style': 'background-color: rgba(255,255,255,0.2);', 'title2_style': 'font-weight: 400;color: #fff;', 'title_style': 'font-weight: 400;color: #fff;'}, 'widget_type': 'basejavascript', 'fields': {'title2': '', 'title': '主题设置', 'icon_style': '', 'icon': ''}, 'namespace': 'default', 'icon_inactive': 'fa-dashboard', 'dashboard': 'Controls', 'static_icons': [], 'icons': {'icon_inactive': 'fa-dashboard', 'icon_active': 'fa-spinner fa-spin'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}})
    
        widgets["default-reload"] = new basejavascript("default-reload", "", "default", {'static_css': {'widget_style': 'background-color: rgba(255,255,255,0.2);', 'title2_style': 'font-weight: 400;color: #fff;', 'title_style': 'font-weight: 400;color: #fff;'}, 'widget_type': 'basejavascript', 'fields': {'title2': '', 'title': '重新加载', 'icon_style': '', 'icon': ''}, 'namespace': 'default', 'command': 'location.reload(true)', 'static_icons': [], 'icons': {'icon_inactive': 'fa-refresh', 'icon_active': 'fa-spinner fa-spin'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}})
    

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