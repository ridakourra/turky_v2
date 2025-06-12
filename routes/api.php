<?php

use App\Models\Produit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['web', 'auth'])->get('/products/{nom?}', function (Request $request, $nom = null) {
    $query = Produit::select('id', 'nom');

    // if ($nom) {
    //     $query->where('nom', 'LIKE', "%{$nom}%");
    // }

    // $products = $query->limit(10)->get();

    $products = $query->get();

    return response()->json($products);
});