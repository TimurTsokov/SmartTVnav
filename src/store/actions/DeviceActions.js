const userAgent = navigator.userAgent,
      sdkVersion = null,
      onDeviceLang = 'uk',
      match = userAgent.match(/Web0S/),
      // isNetcast = userAgent.match(/NetCast/),
      isPhilips = userAgent.match(/Philips/),
      Macid = document.getElementById('Macid'),
      oipfConf = document.getElementById('oipfConfiguration'),

      device = {
            type: 'DT_SmartTV',
            sub_type: getDeviceSubType(),
            application: {type: 'AT_SWEET_TV_Player'},
            supported_drm : {
                widevine_modular: true
            }
      };
const getDeviceSubType = () => {
    try {
        if (typeof window.tizen === 'object') {
            // try {
            //     if (webapis.productinfo.getModelCode().indexOf(17) != -1 || webapis.productinfo.getModelCode().indexOf(18) != -1) {
            //         ShowVoucherCountService.getDeviceCount();
            //     }
            //     LastViewedChannelServiceSamsung.getDeviceChannel();
            // } catch (e){}
            return 'DST_SAMSUNG';
        }
        if (typeof window.gSTB === 'object') {
            return 'DST_INFOMIR';
        }
        if (typeof window.sekator_stb === 'object') {
            return 'DST_INEXT';
        }
        if (typeof window.webos === 'object' || match != null) {
            return 'DST_LG';
        }
        // if (typeof window.webos === 'object' || match != null || isNetcast != null) {
        //     return 'DST_LG';
        // }
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

};