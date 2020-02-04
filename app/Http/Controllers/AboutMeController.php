<?php

namespace App\Http\Controllers;

use App\AboutMe;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

/* TODO: Have separate routes and controller methods for each part of the AboutMe */

class AboutMeController extends Controller
{
    const ABOUT_ME_IMAGES_FOLDER = 'about_me_images_folder';
    const ABOUT_ME_IMAGE = 'about_me_image';
    const ABOUT_ME_SIDE_IMAGE = 'about_me_side_image';

    public function update(Request $request)
    {
        $this->validateUpdateRequest($request);
        $this->persist($request);
        return response()->json(['status' => 'ok']);
    }

    private function validateUpdateRequest(Request $request)
    {
        $request->validate([
            'about_me' => 'nullable|string',
            'about_me_image_file' => 'nullable|image',
            'about_me_side' => 'nullable|string',
            'about_me_side_image_file' => 'nullable|image',
            'about_me_side_name' => 'nullable|string',
            'about_me_title' => 'nullable|string'
        ]);
    }

    // TODO: see todo comment on class
    private function persist(Request $request)
    {
        if (AboutMe::count() > 0) {
            $about_me = AboutMe::all()->first();
            Log::error($request->input('about_me_side_name'));
        } else {
            $about_me = new AboutMe();
        }

        if ($request->has('about_me')) {
            $about_me->about_me = $request->about_me;
        }

        if ($request->has('about_me_image_file')) {
            $this->clearPreviousImage(self::ABOUT_ME_IMAGES_FOLDER.'/'.$about_me->about_me_image);
            $image = $request->file('about_me_image_file');
            $filename = $this->storeImage($image, self::ABOUT_ME_IMAGE);
            $about_me->about_me_image = $filename;
        }

        if ($request->has('about_me_title')) {
            $about_me->about_me_title = $request->about_me_title;
        }

        if ($request->has('about_me_side')) {
            $about_me->about_me_side = $request->about_me_side;
        }

        if ($request->has('about_me_side_image_file')) {
            $this->clearPreviousImage(self::ABOUT_ME_IMAGES_FOLDER.'/'.$about_me->about_me_side_image);
            $image = $request->file('about_me_side_image_file');
            $filename = $this->storeImage($image, self::ABOUT_ME_SIDE_IMAGE);
            $about_me->about_me_side_image = $filename;
        }

        if ($request->has('about_me_side_name')) {
            $about_me->about_me_side_name = $request->about_me_side_name;
        }

        $about_me->save();
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

    private function getFileNameWithExtension(UploadedFile $file, string $name): string
    {
        return ($name . '.' . $file->extension());
    }
}
