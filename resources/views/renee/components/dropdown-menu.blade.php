<a href="#" role="button" id="dropdownMenuLink" class="ml-3" data-toggle="dropdown" aria-haspopup="true"
   aria-expanded="false">
    <i class="material-icons" style="color: #2b2a2a">more_vert</i>
</a>
<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item @if(Route::is('blogs')) active @endif"
       href="{{ url('/only/juli/blogs') }}">
        Your blogs
    </a>
    <a class="dropdown-item @if(Route::is('write')) active @endif"
       href="{{ url('/only/juli/write') }}">
        New Blog
    </a>
    <a class="dropdown-item @if(Route::is('instagram-auth')) active @endif"
       href="{{ url('/only/juli/instagram-auth') }}">
        Instagram Login
    </a>
    <a class="dropdown-item @if(Route::is('fold-images')) active @endif"
       href="{{ route('fold-images') }}">
        Home Page Images
    </a>
    <a class="dropdown-item" href="#" id="logout">Logout</a>
</div>
