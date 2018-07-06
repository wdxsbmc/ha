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
    
        widgets["default-clock-clock"] = new baseclock("default-clock-clock", "", "metro", {'namespace': 'default', 'entity': 'clock.clock', 'widget_type': 'baseclock', 'static_icons': [], 'css': {}, 'title_is_friendly_name': 1, 'static_css': {'time_style': 'color: #ffffff;', 'date_style': 'color: #ffffff;', 'widget_style': 'background-color: rgba(233, 30, 99, 0.85);'}, 'icons': [], 'fields': {'time': '', 'date': ''}})
    
        widgets["default-default"] = new basejavascript("default-default", "", "metro", {'skin': 'default', 'namespace': 'default', 'dashboard': 'Controls', 'static_icons': [], 'static_css': {'title2_style': 'color: #ffffff;', 'widget_style': 'background-color: rgba(255, 255, 255, 0.05);', 'title_style': 'color: #ffffff;'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'css': {'icon_inactive_style': 'color: #eeeeee;', 'icon_active_style': 'color: #eeeeee;'}, 'fields': {'icon_style': '', 'icon': '', 'title2': 'Default', 'title': '样式'}})
    
        widgets["default-blue"] = new basejavascript("default-blue", "", "metro", {'skin': 'blue', 'namespace': 'default', 'dashboard': 'Controls', 'static_icons': [], 'static_css': {'title2_style': 'color: #ffffff;', 'widget_style': 'background-color: rgba(255, 255, 255, 0.05);', 'title_style': 'color: #ffffff;'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'css': {'icon_inactive_style': 'color: #eeeeee;', 'icon_active_style': 'color: #eeeeee;'}, 'fields': {'icon_style': '', 'icon': '', 'title2': 'blue', 'title': '样式'}})
    
        widgets["default-house"] = new basejavascript("default-house", "", "metro", {'skin': 'house', 'namespace': 'default', 'dashboard': 'Controls', 'static_icons': [], 'static_css': {'title2_style': 'color: #ffffff;', 'widget_style': 'background-color: rgba(255, 255, 255, 0.05);', 'title_style': 'color: #ffffff;'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'css': {'icon_inactive_style': 'color: #eeeeee;', 'icon_active_style': 'color: #eeeeee;'}, 'fields': {'icon_style': '', 'icon': '', 'title2': 'house', 'title': '样式'}})
    
        widgets["default-snow"] = new basejavascript("default-snow", "", "metro", {'skin': 'snow', 'namespace': 'default', 'dashboard': 'Controls', 'static_icons': [], 'static_css': {'title2_style': 'color: #ffffff;', 'widget_style': 'background-color: rgba(255, 255, 255, 0.05);', 'title_style': 'color: #ffffff;'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'css': {'icon_inactive_style': 'color: #eeeeee;', 'icon_active_style': 'color: #eeeeee;'}, 'fields': {'icon_style': '', 'icon': '', 'title2': 'snow', 'title': '样式'}})
    
        widgets["default-forest"] = new basejavascript("default-forest", "", "metro", {'skin': 'forest', 'namespace': 'default', 'dashboard': 'Controls', 'static_icons': [], 'static_css': {'title2_style': 'color: #ffffff;', 'widget_style': 'background-color: rgba(255, 255, 255, 0.05);', 'title_style': 'color: #ffffff;'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'css': {'icon_inactive_style': 'color: #eeeeee;', 'icon_active_style': 'color: #eeeeee;'}, 'fields': {'icon_style': '', 'icon': '', 'title2': 'forest', 'title': '样式'}})
    
        widgets["default-metro"] = new basejavascript("default-metro", "", "metro", {'skin': 'metro', 'namespace': 'default', 'dashboard': 'Controls', 'static_icons': [], 'static_css': {'title2_style': 'color: #ffffff;', 'widget_style': 'background-color: rgba(255, 255, 255, 0.05);', 'title_style': 'color: #ffffff;'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'css': {'icon_inactive_style': 'color: #eeeeee;', 'icon_active_style': 'color: #eeeeee;'}, 'fields': {'icon_style': '', 'icon': '', 'title2': 'Metro', 'title': '样式'}})
    
        widgets["default-load-main-panel"] = new basejavascript("default-load-main-panel", "", "metro", {'namespace': 'default', 'dashboard': 'MainPanel', 'icon_inactive': 'fa-home', 'static_icons': [], 'static_css': {'title2_style': 'color: #ffffff;', 'widget_style': 'background-color: rgba(255, 255, 255, 0.05);', 'title_style': 'color: #ffffff;'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-home'}, 'css': {'icon_inactive_style': 'color: #eeeeee;', 'icon_active_style': 'color: #eeeeee;'}, 'fields': {'icon_style': '', 'icon': '', 'title2': '', 'title': '总控开关'}})
    
        widgets["default-load-living-room-panel"] = new basejavascript("default-load-living-room-panel", "", "metro", {'namespace': 'default', 'dashboard': 'LivingRoomPanel', 'icon_inactive': 'fa-play', 'static_icons': [], 'static_css': {'title2_style': 'color: #ffffff;', 'widget_style': 'background-color: rgba(255, 255, 255, 0.05);', 'title_style': 'color: #ffffff;'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-play'}, 'css': {'icon_inactive_style': 'color: #eeeeee;', 'icon_active_style': 'color: #eeeeee;'}, 'fields': {'icon_style': '', 'icon': '', 'title2': '', 'title': '播放控制'}})
    
        widgets["default-load-dinner-panel"] = new basejavascript("default-load-dinner-panel", "", "metro", {'namespace': 'default', 'dashboard': 'Dinner', 'icon_inactive': 'mdi-projector', 'static_icons': [], 'static_css': {'title2_style': 'color: #ffffff;', 'widget_style': 'background-color: rgba(255, 255, 255, 0.05);', 'title_style': 'color: #ffffff;'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-projector'}, 'css': {'icon_inactive_style': 'color: #eeeeee;', 'icon_active_style': 'color: #eeeeee;'}, 'fields': {'icon_style': '', 'icon': '', 'title2': '', 'title': '投影机'}})
    
        widgets["default-load-bathroom-panel"] = new basejavascript("default-load-bathroom-panel", "", "metro", {'namespace': 'default', 'dashboard': 'Bathroom', 'icon_inactive': 'fa-laptop', 'static_icons': [], 'static_css': {'title2_style': 'color: #ffffff;', 'widget_style': 'background-color: rgba(255, 255, 255, 0.05);', 'title_style': 'color: #ffffff;'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-laptop'}, 'css': {'icon_inactive_style': 'color: #eeeeee;', 'icon_active_style': 'color: #eeeeee;'}, 'fields': {'icon_style': '', 'icon': '', 'title2': '', 'title': '电脑'}})
    
        widgets["default-load-bedroom2-panel"] = new basejavascript("default-load-bedroom2-panel", "", "metro", {'namespace': 'default', 'dashboard': 'Bedroom2', 'icon_inactive': 'mdi-lightbulb-outline', 'static_icons': [], 'static_css': {'title2_style': 'color: #ffffff;', 'widget_style': 'background-color: rgba(255, 255, 255, 0.05);', 'title_style': 'color: #ffffff;'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-lightbulb-outline'}, 'css': {'icon_inactive_style': 'color: #eeeeee;', 'icon_active_style': 'color: #eeeeee;'}, 'fields': {'icon_style': '', 'icon': '', 'title2': '', 'title': '灯光'}})
    
        widgets["default-load-controls"] = new basejavascript("default-load-controls", "", "metro", {'namespace': 'default', 'dashboard': 'Controls', 'icon_inactive': 'fa-dashboard', 'static_icons': [], 'static_css': {'title2_style': 'color: #ffffff;', 'widget_style': 'background-color: rgba(255, 255, 255, 0.05);', 'title_style': 'color: #ffffff;'}, 'widget_type': 'basejavascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-dashboard'}, 'css': {'icon_inactive_style': 'color: #eeeeee;', 'icon_active_style': 'color: #eeeeee;'}, 'fields': {'icon_style': '', 'icon': '', 'title2': '', 'title': '主题设置'}})
    
        widgets["default-reload"] = new basejavascript("default-reload", "", "metro", {'namespace': 'default', 'css': {'icon_inactive_style': 'color: #ffffff;', 'icon_active_style': 'color: #ffffff;'}, 'static_icons': [], 'static_css': {'title2_style': 'color: #ffffff;', 'widget_style': 'background-color: rgba(255, 255, 255, 0.05);', 'title_style': 'color: #ffffff;'}, 'widget_type': 'basejavascript', 'fields': {'icon_style': '', 'icon': '', 'title2': '', 'title': '重新加载'}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-refresh'}, 'command': 'location.reload(true)'})
    

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