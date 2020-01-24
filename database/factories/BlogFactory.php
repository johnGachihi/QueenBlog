<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Blog;
use Faker\Generator as Faker;

$factory->define(Blog::class, function (Faker $faker) {
    $images = ['henry-unsplash.jpg', 'kalen-unsplash.jpg', 'mark-unsplash.jpg',
        'luca-unsplash.jpg', 'riccardo-unsplash.jpg', 'frank-unsplash.jpg',
        'philippe-unsplash.jpg'];

    $tags = ['faith', 'love', 'hope', 'joy', 'tomorrow'];
    $status = ['draft', 'published'];
    return [
        'content' => $faker->paragraphs(20, true),

//        TODO: Check if adding the below affects tests
        'title' => $faker->unique()->sentence,
        'main_image_filename' => $images[rand(0, count($images) - 1)],
        'tag' => $tags[rand(0, count($tags) - 1)],
        'status' => $status[rand(0, count($status) - 1)],
        'views' => $faker->numberBetween(0, 1000),
        'likes' => $faker->numberBetween(0, 1000)

    ];
});
