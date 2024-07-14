@extends('layouts.app')


@section('content')
<div id="vue-app">

    <student-create-component
    scope="{{$scope}}"
    :id="{{$id ?? 0}}">


    </student-create-component>

</div>
@endSection