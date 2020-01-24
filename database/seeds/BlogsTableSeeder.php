<?php

use Illuminate\Database\Seeder;

class BlogsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();



        $tags = ['faith', 'love', 'hope', 'joy', 'tomorrow'];
        $status = ['draft', 'published'];

        factory(App\Blog::class, 50)->create();
    }
}
