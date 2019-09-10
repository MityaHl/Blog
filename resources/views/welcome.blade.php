<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="http://allfont.ru/allfont.css?fonts=capture-it" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet">
        <!-- Styles -->

    </head>
    <body>
        <div id="root">
        </div>
        <script src="{{asset('js/app.js')}}" ></script>
    </body>
</html>
