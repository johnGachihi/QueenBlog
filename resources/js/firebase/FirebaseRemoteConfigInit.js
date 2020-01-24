"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FirebaseRemoteConfigInit = /** @class */ (function () {
    function FirebaseRemoteConfigInit() {
    }
    FirebaseRemoteConfigInit.initAndGet = function (firebase) {
        var remoteConfig = firebase.remoteConfig();
        remoteConfig.settings = {
            // minimumFetchIntervalMillis: 3600000,
            minimumFetchIntervalMillis: 0,
        };
        this.setDefaults(remoteConfig);
        return remoteConfig;
    };
    FirebaseRemoteConfigInit.setDefaults = function (remoteConfig) {
        remoteConfig.defaultConfig = ({
            'about_renee': 'This is about me'
        });
    };
    return FirebaseRemoteConfigInit;
}());
exports.default = FirebaseRemoteConfigInit;
//# sourceMappingURL=FirebaseRemoteConfigInit.js.map