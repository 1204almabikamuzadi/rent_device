<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content=" width=device-width, initial-scale=1">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
crossorigin="anonymous">
<! — csrf token →
<meta name="csrf-token" content="{{ csrf_token() }}">
<title>Rent_Device</title>
<! — styles →
<link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app"></div>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
