<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Post;
use Faker\Factory;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\DB;

$factory->define(Post::class, function (Faker $faker) {
    $faker = Factory::create('ru_RU');
    return [
        'category_id' => rand(1,5),
        'author_id' => rand(1,2),
        'title' => $faker->realText(rand(20,30)),
        'image' => $faker->imageUrl(),
        'tag_id' => 1,
        'content' => $faker->realText(rand(1000, 2000))
    ];
});
