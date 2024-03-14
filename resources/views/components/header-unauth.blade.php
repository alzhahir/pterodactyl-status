<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>Your Title Here</title>
</head>
    <body>
        <div class="flex flex-row justify-between w-full bg-gray-200 p-5">
            <span class="font-bold text-xl">PteroStatus</span>
            <a href="login" class="">Login</a>
        </div>
        <main>
            {{$slot}}
        </main>
    </body>
</html>