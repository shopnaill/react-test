<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class PostController extends Controller
{
    //
    public function formSubmit(Request $request)
    {
    	return response()->json([$request->all()]);
    }

    public function getUsers()
    {
        $users = User::get();
        
    	return response()->json([$users]);
    }
 
}
