import FirebaseConfig from "../firebase/FirebaseConfig";
import firebase from "firebase";
import RemoteConfig = firebase.remoteConfig.RemoteConfig;

export default class AboutReneeService {
    private remoteConfig: RemoteConfig;

    constructor(remoteConfig: RemoteConfig) {
        this.remoteConfig = remoteConfig;
    }

    async fetchAboutRenee() {
        await this.remoteConfig.fetchAndActivate();
        return this.remoteConfig.getString('about_renee');
    }
}
