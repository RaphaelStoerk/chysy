<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class IndexController extends Controller
{
    public function index(){
        if (Auth::check()) {
            return redirect('dashboard');
        }else{
            return redirect('auth');
        }
    }
}
