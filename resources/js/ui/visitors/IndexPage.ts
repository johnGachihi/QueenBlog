import FirebaseConfig from "../../firebase/FirebaseConfig";
import AboutReneeService from "../../network/AboutReneeService";
import RemoteConfig = firebase.remoteConfig.RemoteConfig;

export default class IndexPage {
    private aboutReneePar: HTMLParagraphElement;
    private aboutReneeService: AboutReneeService;

    constructor(remoteConfig: RemoteConfig) {
        this.init(remoteConfig);
    }

    private init(remoteConfig: RemoteConfig) {
        this.initElements();
        this.setupAboutReneeService(remoteConfig);
        this.setupAboutReneePar()
    }

    private initElements() {
        this.aboutReneePar =
            document.getElementById('about-renee') as HTMLParagraphElement;
    }

    private setupAboutReneeService(remoteConfig: RemoteConfig) {
        this.aboutReneeService = new AboutReneeService(remoteConfig);
    }

    private setupAboutReneePar() {
        this.aboutReneeService.fetchAboutRenee()
            .then(res => {
                this.aboutReneePar.innerText = res;
            })
            .catch(console.log);
    }

}
