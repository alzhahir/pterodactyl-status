<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <!-- Styles -->
    @livewireStyles
</head>
    <body class="bg-white dark:bg-zinc-900 flex flex-col grow h-screen">
        <div class="flex flex-row justify-between w-full bg-gray-200 text-gray-800 dark:bg-zinc-800 dark:text-gray-200 items-center shadow-md">
            <a href="/" class="font-bold text-2xl p-5">{{ config('app.name', 'Laravel') }}</a>
            <a href="login" class="bg-gradient-to-tr from-violet-800 to-sky-900 hover:scale-110 hover:from-violet-400 hover:to-sky-500 transition-all active:scale-100 text-white p-3 mr-4 rounded-2xl font-bold">LOGIN</a>
        </div>
        <main class="p-5 text-gray-800 dark:text-gray-200 h-full">
            {{$slot}}
        </main>
        <footer class="p-5 text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-zinc-800 mt-auto">
            <div class="flex flex-row">
                <span class="">&copy; {{date('Y')}} Megat Al Zhahir Daniel. All rights reserved.</span>
                <span class="ml-auto">Made with ❤️ by <a href="https://github.com/alzhahir" target="blank_" rel="noopener noreferrer" class="hover:text-sky-400">@alzhahir</a>.</span>
            </div>
        </footer>
    </body>
</html>