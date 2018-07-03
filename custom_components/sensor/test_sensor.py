# 引入一个产生随机数的库
from random import randint
import logging

# 在homeassistant.const中定义了一些常量，我们在程序中会用到
from homeassistant.const import (
    ATTR_ATTRIBUTION, ATTR_FRIENDLY_NAME, TEMP_CELSIUS)
from homeassistant.helpers.entity import Entity

_LOGGER = logging.getLogger(__name__)

# 定义实体的OBJECT_ID与一些属性值
OBJECT_ID = "test_sensor_temperature"
ICON = "mdi:yin-yang"
ATTRIBUTION = "随机显示的温度"
FRIENDLY_NAME = "温度"


def setup_platform(hass, config, add_devices, discovery_info=None):
    """配置文件在sensor域下出现test_sensor平台时，会自动调用sensor目录下test_sensor.py中的setup_platform函数."""
    _LOGGER.info("setup platform sensor.test_sensor...")

    # 定义一个设备组，在其中装入了一个我们定义的设备HAChinaTemperatureSensor
    dev = []
    sensor = HAChinaTemperatureSensor()
    dev.append(sensor)

    # 将设备加载入系统中
    add_devices(dev, True)


class HAChinaTemperatureSensor(Entity):
    """定义一个温度传感器的类，继承自HomeAssistant的Entity类."""

    def __init__(self):
        """初始化，状态值为空."""
        self._state = None

    @property
    def name(self):
        """返回实体的名字。通过python装饰器@property，使访问更自然（方法变成属性调用，可以直接使用xxx.name）."""
        return OBJECT_ID

    @property
    def registry_name(self):
        """返回实体的friendly_name属性."""
        return FRIENDLY_NAME

    @property
    def state(self):
        """返回当前的状态."""
        return self._state

    @property
    def icon(self):
        """返回icon属性."""
        return ICON

    @property
    def unit_of_measurement(self):
        """返回unit_of_measuremeng属性."""
        return TEMP_CELSIUS

    @property
    def device_state_attributes(self):
        """设置其它一些属性值."""
        if self._state is not None:
            return {
                ATTR_ATTRIBUTION: ATTRIBUTION,
            }

    def update(self):
        """更新函数，在sensor组件下系统会定时自动调用（时间间隔在配置文件中可以调整，缺省为30秒）."""
        _LOGGER.info("Update the test_sensor  state...")
        self._state = randint(-100, 100)
