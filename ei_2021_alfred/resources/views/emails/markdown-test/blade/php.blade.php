@component('mail::message')
# Introduction

The body of your message.

@component('mail::button', ['url' => $url])
Click me
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
