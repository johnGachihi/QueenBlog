import Service from "./Service";
import FoldImage from "../ui/renee/fold-image-edit/FoldImage";
import RequestOptions from "./RequestOptions";

export default class FoldImageService extends Service<FoldImage>{
    constructor(requestOptions: RequestOptions) {
        super(requestOptions, '/fold_image');
    }
}
