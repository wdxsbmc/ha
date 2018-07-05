$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "主题设置面板");
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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-default" id="default-default"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-blue" id="default-blue"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 2, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-house" id="default-house"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 3, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-snow" id="default-snow"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 4, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-forest" id="default-forest"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 5, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-metro" id="default-metro"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 6, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-main-panel" id="default-load-main-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-living-room-panel" id="default-load-living-room-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 2, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-dinner-panel" id="default-load-dinner-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 3, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-bathroom-panel" id="default-load-bathroom-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 4, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-bedroom2-panel" id="default-load-bedroom2-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 5, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-controls" id="default-load-controls"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 6, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 7, 4)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-clock-clock"] = new baseclock("default-clock-clock", "", "default", {'static_css': {'date_style': 'color: #fff;', 'widget_style': 'background-color: rgba(255,255,255,0.2);', 'time_style': 'color: #fff;'}, 'widget_type': 'baseclock', 'icons': [], 'css': {}, 'title_is_friendly_name': 1, 'entity': 'clock.clock', 'namespace': 'default', 'static_icons': [], 'fields': {'date': '', 'time': ''}})
    
        widgets["default-default"] = new basejavascript("default-default", "", "default", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(255,255,255,0.2);'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'dashboard': 'Controls', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'namespace': 'default', 'static_icons': [], 'fields': {'icon_style': '', 'title': '样式', 'icon': '', 'title2': 'Default'}, 'skin': 'default'})
    
        widgets["default-blue"] = new basejavascript("default-blue", "", "default", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(255,255,255,0.2);'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'dashboard': 'Controls', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'namespace': 'default', 'static_icons': [], 'fields': {'icon_style': '', 'title': '样式', 'icon': '', 'title2': 'blue'}, 'skin': 'blue'})
    
        widgets["default-house"] = new basejavascript("default-house", "", "default", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(255,255,255,0.2);'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'dashboard': 'Controls', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'namespace': 'default', 'static_icons': [], 'fields': {'icon_style': '', 'title': '样式', 'icon': '', 'title2': 'house'}, 'skin': 'house'})
    
        widgets["default-snow"] = new basejavascript("default-snow", "", "default", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(255,255,255,0.2);'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'dashboard': 'Controls', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'namespace': 'default', 'static_icons': [], 'fields': {'icon_style': '', 'title': '样式', 'icon': '', 'title2': 'snow'}, 'skin': 'snow'})
    
        widgets["default-forest"] = new basejavascript("default-forest", "", "default", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(255,255,255,0.2);'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'dashboard': 'Controls', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'namespace': 'default', 'static_icons': [], 'fields': {'icon_style': '', 'title': '样式', 'icon': '', 'title2': 'forest'}, 'skin': 'forest'})
    
        widgets["default-metro"] = new basejavascript("default-metro", "", "default", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(255,255,255,0.2);'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'dashboard': 'Controls', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'namespace': 'default', 'static_icons': [], 'fields': {'icon_style': '', 'title': '样式', 'icon': '', 'title2': 'Metro'}, 'skin': 'metro'})
    
        widgets["default-load-main-panel"] = new basejavascript("default-load-main-panel", "", "default", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(255,255,255,0.2);'}, 'widget_type': 'basejavascript', 'icon_inactive': 'fa-home', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-home'}, 'dashboard': 'MainPanel', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'namespace': 'default', 'static_icons': [], 'fields': {'icon_style': '', 'title': '总控开关', 'icon': '', 'title2': ''}})
    
        widgets["default-load-living-room-panel"] = new basejavascript("default-load-living-room-panel", "", "default", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(255,255,255,0.2);'}, 'widget_type': 'basejavascript', 'icon_inactive': 'fa-play', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-play'}, 'dashboard': 'LivingRoomPanel', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'namespace': 'default', 'static_icons': [], 'fields': {'icon_style': '', 'title': '播放控制', 'icon': '', 'title2': ''}})
    
        widgets["default-load-dinner-panel"] = new basejavascript("default-load-dinner-panel", "", "default", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(255,255,255,0.2);'}, 'widget_type': 'basejavascript', 'icon_inactive': 'mdi-projector', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-projector'}, 'dashboard': 'Dinner', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'namespace': 'default', 'static_icons': [], 'fields': {'icon_style': '', 'title': '投影机', 'icon': '', 'title2': ''}})
    
        widgets["default-load-bathroom-panel"] = new basejavascript("default-load-bathroom-panel", "", "default", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(255,255,255,0.2);'}, 'widget_type': 'basejavascript', 'icon_inactive': 'fa-laptop', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-laptop'}, 'dashboard': 'Bathroom', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'namespace': 'default', 'static_icons': [], 'fields': {'icon_style': '', 'title': '电脑', 'icon': '', 'title2': ''}})
    
        widgets["default-load-bedroom2-panel"] = new basejavascript("default-load-bedroom2-panel", "", "default", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(255,255,255,0.2);'}, 'widget_type': 'basejavascript', 'icon_inactive': 'mdi-lightbulb-outline', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-lightbulb-outline'}, 'dashboard': 'Bedroom2', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'namespace': 'default', 'static_icons': [], 'fields': {'icon_style': '', 'title': '灯光', 'icon': '', 'title2': ''}})
    
        widgets["default-load-controls"] = new basejavascript("default-load-controls", "", "default", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(255,255,255,0.2);'}, 'widget_type': 'basejavascript', 'icon_inactive': 'fa-dashboard', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-dashboard'}, 'dashboard': 'Controls', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'namespace': 'default', 'static_icons': [], 'fields': {'icon_style': '', 'title': '主题设置', 'icon': '', 'title2': ''}})
    
        widgets["default-reload"] = new basejavascript("default-reload", "", "default", {'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(255,255,255,0.2);'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-refresh'}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'namespace': 'default', 'command': 'location.reload(true)', 'fields': {'icon_style': '', 'title': '重新加载', 'icon': '', 'title2': ''}, 'static_icons': []})
    

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
    ha_status(stream_url, "主题设置面板", widgets);

});