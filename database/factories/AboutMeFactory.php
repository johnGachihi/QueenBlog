<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\AboutMe;
use Faker\Generator as Faker;

$factory->define(AboutMe::class, function (Faker $faker) {
    $about_me = '';
    for ($i = 1; $i <= 20; $i++) {
        $about_me .= "<p>".$faker->paragraph(6)."</p>";
    }

    return [
        'about_me' => $about_me,
        'about_me_image' => 'henry-unsplash.jpg',
        'about_me_side' => $faker->paragraph,
        'about_me_side_image' => 'henry-unsplash.jpg',
        'about_me_side_name' => $faker->name,
        'about_me_title' => $faker->words(6, true)
    ];
});
