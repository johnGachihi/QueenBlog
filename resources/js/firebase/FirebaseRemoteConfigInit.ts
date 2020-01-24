import firebase from "firebase";
import RemoteConfig = firebase.remoteConfig.RemoteConfig;

export default class FirebaseRemoteConfigInit {
    private remoteConfig: RemoteConfig;

    static initAndGet(firebase): RemoteConfig {
        const remoteConfig = firebase.remoteConfig();
        remoteConfig.settings = {
            // minimumFetchIntervalMillis: 3600000,
            minimumFetchIntervalMillis: 0,
        };
        this.setDefaults(remoteConfig);

        return remoteConfig;
    }

    private static setDefaults(remoteConfig: RemoteConfig) {
        remoteConfig.defaultConfig = ({
            'about_renee': 'This is about me'
        })
    }

}
