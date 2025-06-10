<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function create(){
        return Inertia::render('Login');
    }

    public function store(Request $request){
        $data = $request->validate([
            'cin' => ['required'],
            'password' => ['required']
        ]);

        if(Auth::attempt($data)){
            // user its employer
            $employer = Auth::user()->withRelationshipAutoloading();
            if($employer->fonction !== 'directeur' and $employer->fonction !== 'comptable'){
                Auth::logout();
                return back()->with(['error' => 'Seuls le Directeur ou le Comptable peuvent se connecter!']);
            }
            return to_route('dashboard')->with(['success' => 'Connexion réussie!']);
        }else{
            return back()->with(['error' => 'CIN ou mot de passe incorrect!']);
        }
    }

    public function destroy(){
        Auth::logout();
        return to_route('login');
    }

}