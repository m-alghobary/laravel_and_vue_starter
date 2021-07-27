<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Laravel</title>

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body class="antialiase">
    <div id="app">
    </div>

    <script src="{{ asset('js/main.js') }}"></script>
</body>

</html>
