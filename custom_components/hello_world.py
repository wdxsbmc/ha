# 引入记录日志的库
import logging
import voluptuous as vol
import homeassistant.helpers.config_validation as cv
from datetime import timedelta
# track_time_interval是监听时间变化事件的一个函数
from homeassistant.helpers.event import track_time_interval
 
DOMAIN = "hello_world"
ENTITYID = DOMAIN + ".hello_world"


# 预定义配置文件中的key值
CONF_NAME_TOBE_DISPLAYED = "name_tobe_displayed"
CONF_SLOGON = "slogon"

# 预定义缺省的配置值
DEFAULT_SLOGON = "积木构建智慧空间！"

CONF_STEP = "step"
DEFAULT_STEP = 3

# 定义时间间隔为3秒钟
TIME_BETWEEN_UPDATES = timedelta(seconds=3)
 
# 在python中，__name__代表模块名字
_LOGGER = logging.getLogger(__name__)

# 配置文件的样式
CONFIG_SCHEMA = vol.Schema(
    {
        DOMAIN: vol.Schema(
            {
                # “name_tobe_displayed”在配置文件中是必须存在的（Required），否则报错，它的类型是字符串
                vol.Required(CONF_NAME_TOBE_DISPLAYED): cv.string,
                # “slogon”在配置文件中可以没有（Optional），如果没有缺省值为“积木构建智慧空间！”，它的类型是字符串
                vol.Optional(CONF_SLOGON, default=DEFAULT_SLOGON): cv.string,
                vol.Optional(CONF_STEP,default=DEFAULT_STEP): cv.positive_int,
            }),
    },
    extra=vol.ALLOW_EXTRA)


 
def setup(hass, config):

    """配置文件加载后，setup被系统调用."""
    # config[DOMAIN]代表这个域下的配置信息
    conf = config[DOMAIN]
    # 获得具体配置项信息
    friendly_name = conf.get(CONF_NAME_TOBE_DISPLAYED)
    slogon = conf.get(CONF_SLOGON)
    step = conf.get(CONF_STEP)

    _LOGGER.info("Get the configuration %s=%s; %s=%s",
                 CONF_NAME_TOBE_DISPLAYED, friendly_name,
                 CONF_SLOGON, slogon)

    # 根据配置内容设置属性值
    attr = {"icon": "mdi:yin-yang",
            "friendly_name": friendly_name,
            "slogon": slogon,
            "unit_of_measurement": "steps"
            }
    hass.states.set(ENTITYID, '太棒了', attributes=attr)

 
    def change_state(call):
        """change_state函数切换改变实体的状态."""
        # 记录info级别的日志
        _LOGGER.info("hachina's change_state service is called.")
 
        # 切换改变状态值
        if hass.states.get(ENTITYID).state == '太棒了':
            hass.states.set(ENTITYID, '真好', attributes=attr)
        else:
            hass.states.set(ENTITYID, '太棒了', attributes=attr)
 
    # 注册服务hachina.change_state
    hass.services.register(DOMAIN, 'change_state', change_state)
 


    # 构建类GrowingState
    GrowingState(hass, step, attr)

    return True


class GrowingState(object):
    """定义一个类，此类中存储了状态与属性值，并定时更新状态."""
 
    def __init__(self, hass, step, attr):
        """GrwoingState类的初始化函数，参数为hass、step和attr."""
        # 定义类中的一些数据
        self._hass = hass
        self._step = step
        self._attr = attr
        self._state = 0
 
        # 在类初始化的时候，设置初始状态
        self._hass.states.set(ENTITYID, self._state, attributes=self._attr)
 
        # 每隔一段时间，更新一下实体的状态
        track_time_interval(self._hass, self.update, TIME_BETWEEN_UPDATES)
 
    def update(self, now):
        """在GrowingState类中定义函数update,更新状态."""
        _LOGGER.info("GrowingState is updating…")
 
        # 状态值每次增加step
        self._state = self._state + self._step
 
        # 设置新的状态值
        self._hass.states.set(ENTITYID, self._state, attributes=self._attr)
