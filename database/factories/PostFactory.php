<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Post;
use Faker\Factory;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\DB;

$factory->define(Post::class, function (Faker $faker) {
    $faker = Factory::create('ru_RU');
    return [
        'category_id' => rand(1,2),
        'author_id' => rand(1,2),
        'title' => $faker->sentence,
        'image' => $faker->imageUrl(),
        'tag_id' => 1,
        'content' => $faker->paragraph(rand(20, 30))
    ];
});
