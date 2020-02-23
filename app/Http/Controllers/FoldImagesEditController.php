<?php

namespace App\Http\Controllers;

use App\FoldImage;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class FoldImagesEditController extends Controller
{
    const FOLD_IMAGES_FOLDER = 'fold-images';
    const FOLD_IMAGES_LIMIT = 4;

    public function view() {
        return view('fold-images-edit', ['foldImages' => FoldImage::all()]);
    }

    public function save(Request $request) {
        $this->validateRequest($request);
        $this->persistFoldImage(
            $request->fold_image,
            $request->id
        );

        return response()->json(['status' => 'ok']);
    }

    private function validateRequest(Request $request) {
        $request->validate([
            'id' => 'integer|lte:' . self::FOLD_IMAGES_LIMIT,
            'fold_image' => 'image'
        ]);
    }

    private function persistFoldImage(UploadedFile $foldImageFile, $foldImageId) {
        if ($foldImage = FoldImage::find($foldImageId)) {
            $this->clearPreviousImage(self::FOLD_IMAGES_FOLDER . '/' . $foldImage->filename);
        } else
            $foldImage = new FoldImage();

        $foldImage->filename = $foldImageFile->store(self::FOLD_IMAGES_FOLDER, 'public');
        $foldImage->save();
    }

    private function clearPreviousImage(string $path)
    {
        Storage::disk('public')->delete($path);
    }

    private function storeImage(UploadedFile $file, string $nameWithoutExtension)
    {
        $fileName = $this->getFileNameWithExtension($file, $nameWithoutExtension);
        $file->storeAs(self::ABOUT_ME_IMAGES_FOLDER, $fileName, 'public');

        return $fileName;
    }
}
