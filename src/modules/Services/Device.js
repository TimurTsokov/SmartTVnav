
class Device {

    static getObject() {
        const userAgent = navigator.userAgent,
            match = userAgent.match(/Web0S/),
            isPhilips = userAgent.match(/Philips/),
            oipfConf = document.getElementById('oipfConfiguration'),
            Macid = document.getElementById('Macid');
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
                if (typeof window.tizen === 'object') {
                    // try {
                    // try {
                    //     if (webapis.productinfo.getModelCode().indexOf(17) != -1 || webapis.productinfo.getModelCode().indexOf(18) != -1) {
                    //         ShowVoucherCountService.getDeviceCount();
                    //     }
                    //     LastViewedChannelServiceSamsung.getDeviceChannel();
                    // } catch (e){}
                    return 'DST_SAMSUNG';
                }
                if (typeof window.webos === 'object' || match != null) {
                    return 'DST_LG';
                }
                if (typeof window.gSTB === 'object') {
                    return 'DST_INFOMIR';
                }
                if (typeof window.sekator_stb === 'object') {
                    return 'DST_INEXT';
                }
                if (typeof Macid.getMACID !== 'undefined') {
                    return 'DST_VESTEL';
                }
                if (isPhilips != null) {
                    return 'DST_PHILIPS';
                }
                if (oipfConf.localSystem !== undefined) {
                    return 'DST_FOXXUM';
                }
                return 'DST_BROWSER';
            } catch (e) {
                return false;
            }
        }

        function init() {
            switch (device.sub_type) {
                case 'DST_LG':
                    // if (typeof window.webos === 'object' || match != null) {
                    //     try {
                    //         webOS.service.request('luna://com.webos.service.tv.systemproperty', {
                    //             method: 'getSystemInfo',
                    //             parameters: {
                    //                 'keys': ['modelName', 'sdkVersion', 'firmwareVersion']
                    //             },
                    //             onSuccess: function (result) {
                    //                 device.model = result.modelName + '(' + result.sdkVersion + ')';
                    //                 sdkVersion = result.sdkVersion;
                    //                 try {
                    //                     webOS.service.request('luna://com.webos.service.sm', {
                    //                         method: 'deviceid/getIDs',
                    //                         parameters: {
                    //                             'idType': ['LGUDID']
                    //                         },
                    //                         onSuccess: function (result) {
                    //                             device.uuid = result.idList[0].idValue;
                    //                         },
                    //                         onFailure: function () {
                    //                             if (localStorage.getItem('uuid')) {
                    //                                 device.uuid = localStorage.getItem('uuid');
                    //                             } else {
                    //                                 // device.uuid = DeviceUIDGeneratorService.generateUID() + '-WebOS-' + sdkVersion.slice(0, 1);
                    //                                 // localStorage.setItem('uuid', device.uuid);
                    //                             }
                    //                         }
                    //                     });
                    //                 } catch (e) {
                    //                     console.log(e)
                    //                 }
                    //            }
                    //         });
                    //     } catch (e) {
                    //     }
                    //     try {
                    //         webOS.service.request('luna://com.webos.settingsservice', {
                    //             method: 'getSystemSettings',
                    //             parameters: {
                    //                 'keys': ['localeInfo']
                    //             },
                    //             onSuccess: function (result) {
                    //                 onDeviceLang = (result.settings.localeInfo.locales.TV).slice(0, 2);
                    //             }
                    //         });
                    //
                    //     } catch (e) {
                    //     }
                    //}
                case 'DST_SAMSUNG':
                    try {
                        // device.uuid = webapis.productinfo.getDuid();
                        // device.mac = webapis.network.getMac();
                        // device.model = webapis.productinfo.getRealModel() + '(' + webapis.productinfo.getModelCode() + ')';
                        // // device.firmware = webapis.productinfo.getFirmware();
                        //
                        // //Get display resolution
                        // tizen.systeminfo.getPropertyValue('DISPLAY', function (data) {
                        //
                        //     device.screen_info = {};
                        //
                        //     device.screen_info.width = data.resolutionWidth;
                        //     device.screen_info.height = data.resolutionHeight;
                        //     device.ready = true;
                        // });
                        //
                        // //Get device Language
                        // tizen.systeminfo.getPropertyValue('LOCALE', function (data) {
                        //     if (data.language) {
                        //         onDeviceLang = data.language.slice(0, 2);
                        //     }
                        // });

                    } catch (e) {
                    }
                    break;
                case 'DST_FOXXUM':
                    try {
                        device.uuid = oipfConf.localSystem.deviceID;
                    } catch (e) {
                        console.log(e);
                    }
                    //device.model;
                    break;
                case 'DST_VESTEL':
                    try {
                        device.mac = Macid.getMACID();
                    } catch (e) {
                        console.log(e);
                    }
                    //device.model;
                    break;
                case 'DST_PHILIPS':
                    if (localStorage.getItem('uuid')) {
                        device.uuid = localStorage.getItem('uuid');
                    } else {
                        //device.uuid = DeviceUIDGeneratorService.generateUID();
                        localStorage.setItem('uuid', device.uuid);
                    }
                    device.supported_drm.widevine_modular = false; ///////
                    break;
                case 'DST_ZEASN':
                    if (localStorage.getItem('uuid')) {
                        device.uuid = localStorage.getItem('uuid');
                    } else {
                        //device.uuid = DeviceUIDGeneratorService.generateUID();
                        localStorage.setItem('uuid', device.uuid);
                    }
                    device.model = userAgent;
                    break;
                case 'DST_BROWSER':
                    device.mac = '34:FC:EF:D9:C4:B2';
                    break;
            }
        }
        init();

        return device;
    }
}

export default Device;