<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\hotel;
class HotelController extends Controller
{
    function list(){
        $list=hotel::all();
        return $list;
    }
}
