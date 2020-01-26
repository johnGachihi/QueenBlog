import AboutReneeService from "../../../network/AboutReneeService";
import RemoteConfig = firebase.remoteConfig.RemoteConfig;

export default class SideBar {
    private aboutReneePar: HTMLParagraphElement;

    constructor(remoteConfig: RemoteConfig) {
        this.initElements();
        this.setupAboutReneePar(remoteConfig);
    }

    private initElements() {
        this.aboutReneePar =
            document.getElementById('about-renee') as HTMLParagraphElement;
    }

    private setupAboutReneePar(remoteConfig: RemoteConfig) {
        const aboutReneeService = new AboutReneeService(remoteConfig);
        aboutReneeService.fetchAboutRenee()
            .then(res => {
                this.aboutReneePar.innerText = res;
            })
            .catch(console.log);
    }
}
