<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index(Request $request){
       $query = User::query();

        if ($search = $request->input('search')) {
            $query->where(function($q) use($search) {
                $q->where('nom', 'like', "%{$search}%")
                  ->orWhere('cin', 'like', "%{$search}%");
            });
        }

        $sortField     = $request->input('sort', 'nom');        // default sort field
        $sortDirection = $request->input('direction', 'asc');   // default direction

        if (in_array($sortField, ['nom','cin','telephone']) &&
            in_array($sortDirection, ['asc','desc'])) {
            $query->orderBy($sortField, $sortDirection);
        }

        $clients = $query->paginate(10)
                         ->appends($request->only(['search', 'sort','direction']));

        return Inertia::render('Clients/Index', [
            'clients'  => $clients,
            'filters'  => [
                'search'    => $search,
                'sort'      => $sortField,
                'direction' => $sortDirection,
            ],
        ]);
    }


    public function create()
    {
        return Inertia::render('Clients/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nom'       => 'required|string|max:255',
            'cin'       => 'required|string|unique:users,cin',
            'telephone' => 'nullable|string|max:20',
            'adresse'   => 'nullable|string|max:500',
            'dettes'    => 'nullable|numeric|min:0',
        ]);

        User::create($data);

        return redirect()
            ->route('clients.index')
            ->with('success', 'Client created successfully.');
    }


    public function show(User $client)
    {
        return Inertia::render('Clients/Show', [
            'client' => $client,
        ]);
    }

    // Edit form
    public function edit(User $client)
    {
        return Inertia::render('Clients/Edit', [
            'client' => $client,
        ]);
    }

    // Update action
    public function update(Request $request, User $client)
    {
        $data = $request->validate([
            'nom'       => 'required|string|max:255',
            'cin'       => 'required|string|unique:users,cin,' . $client->id,
            'telephone' => 'nullable|string|max:20',
            'adresse'   => 'nullable|string|max:500',
            'dettes'    => 'nullable|numeric|min:0',
        ]);

        $client->update($data);

        return redirect()
            ->route('clients.index')
            ->with('success', 'Client updated successfully.');
    }

    // Destroy action
    public function destroy(User $client)
    {
        $client->delete();

        return redirect()
            ->route('clients.index')
            ->with('success', 'Client deleted successfully.');
    }

}
