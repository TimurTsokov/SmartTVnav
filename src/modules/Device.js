import './custom/webOS'
class Device {
    constructor() {
    }


    static getObject() {
        const userAgent = navigator.userAgent,
            match = userAgent.match(/Web0S/);
       /// const webOS = window.webOS ;
        let device = {
                type: "DT_SmartTV",
                sub_type: getDeviceSubType(),
                application: {type: 'AT_SWEET_TV_Player'},
                supported_drm: {
                    widevine_modular: true
                }
            },
            sdkVersion = null,
            onDeviceLang = 'uk';

        function getDeviceSubType() {

            try {
                if (typeof window.webos === 'object' || match != null) {
                    return 'DST_LG';
                }
                return 'DST_BROWSER';
            } catch (e) {
                return false;
            }
        }

        function init() {
            switch (device.sub_type) {
                case 'DST_LG':
                    if (typeof window.webos === 'object' || match != null) {
                        try {
                            webOS.service.request('luna://com.webos.service.tv.systemproperty', {
                                method: 'getSystemInfo',
                                parameters: {
                                    'keys': ['modelName', 'sdkVersion', 'firmwareVersion']
                                },
                                onSuccess: function (result) {
                                    device.model = result.modelName + '(' + result.sdkVersion + ')';
                                    sdkVersion = result.sdkVersion;
                                    // device.firmware = result.firmwareVersion;
                                    try {
                                        webOS.service.request('luna://com.webos.service.sm', {
                                            method: 'deviceid/getIDs',
                                            parameters: {
                                                'idType': ['LGUDID']
                                            },
                                            onSuccess: function (result) {
                                                device.uuid = result.idList[0].idValue;
                                            },
                                            onFailure: function () {
                                                if (localStorage.getItem('uuid')) {
                                                    device.uuid = localStorage.getItem('uuid');
                                                } else {
                                                    device.uuid = DeviceUIDGeneratorService.generateUID() + '-WebOS-' + sdkVersion.slice(0, 1);
                                                    localStorage.setItem('uuid', device.uuid);
                                                }
                                            }
                                        });
                                    } catch (e) {
                                        console.log(e)
                                    }
                                }
                            });
                        } catch (e) {
                        }
                        try {
                            webOS.service.request('luna://com.webos.settingsservice', {
                                method: 'getSystemSettings',
                                parameters: {
                                    'keys': ['localeInfo']
                                },
                                onSuccess: function (result) {
                                    onDeviceLang = (result.settings.localeInfo.locales.TV).slice(0, 2);
                                }
                            });

                        } catch (e) {
                        }
                    }
                case 'DST_LG':
                    console.log('1111');
                    break;
            }
        }
        init();
        console.log('webOS', webOS);
        return device;

    }
}

export default Device;