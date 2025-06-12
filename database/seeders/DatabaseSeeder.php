<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Entreprise
        DB::table('entreprises')->insert([
            'nom' => 'Société Dépo',
            'responsable' => 'Mohamed El Amrani',
            'email' => 'contact@depo.ma',
            'telephone' => '0612345678',
            'adresse' => 'Zone Industrielle, Casablanca',
            'ice' => '001234567890003',
            'rc' => 'RC123456',
            'patente' => 'P456789',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Users
        DB::table('users')->insert([
            [
                'nom' => 'Ali Ben Salah',
                'cin' => 'D0000',
                'telephone' => '0601122334',
                'adresse' => 'Hay Riyad, Rabat',
                'dettes' => 1200.00,
            ],
            [
                'nom' => 'Youssef Khairi',
                'cin' => 'C0000',
                'telephone' => '06167823344',
                'adresse' => 'Marrakech',
                'dettes' => 0,
            ],
            [
                'nom' => 'Khalid Comptable',
                'cin' => 'L0000',
                'telephone' => '0611223344',
                'adresse' => 'Derb Sultan, Casablanca',
                'dettes' => 0,
            ]
        ]);

        // Employers (auth user here)
        DB::table('employers')->insert([
            [
                'cin' => 'D0000',
                'password' => Hash::make('D0000'),
                'actif' => true,
                'date_embauche' => '2023-03-01',
                'fonction' => 'directeur',
                'user_id' => 1,
            ],
            [
                'cin' => 'C0000',
                'password' => Hash::make('C0000'),
                'actif' => true,
                'date_embauche' => '2024-03-15',
                'fonction' => 'comptable',
                'user_id' => 2,
            ],
            [
                'cin' => 'L0000',
                'password' => Hash::make('L0000'),
                'actif' => true,
                'date_embauche' => '2024-01-15',
                'fonction' => 'livreur',
                'user_id' => 3,
            ]
        ]);

        // Fournisseurs
        DB::table('fournisseurs')->insert([
            [
                'nom' => 'BTP Matériaux SARL',
                'ice_ou_cin' => 'CIN901288',
                'adresse' => 'Agadir, Zone industrielle',
                'note' => 'Fournisseur principal de ciment',
            ]
        ]);

        // Vehicules
        DB::table('vehicules')->insert([
            [
                'nom' => 'Camion 10T',
                'matricule' => '45678-A-5',
                'marque' => 'Mercedes',
                'modele' => 'Actros',
                'type' => 'camion',
                'capacite' => '10T',
                'annee' => 2021,
                'kilometrage' => 54000,
                'carburant_type' => 'diesel',
                'numero_chassis' => 'CHS12345X',
                'numero_moteur' => 'ENG45678Y',
                'date_assurance' => '2025-01-01',
                'statut' => 'actif',
                'livreur_id' => 2,
            ]
        ]);

        // Produits
        DB::table('produits')->insert([
            [
                'nom' => 'Ciment 50kg',
                'photo' => 'ciment50.jpg',
                'unite' => 'sac',
                'prix_achat' => 75.00
            ],
            [
                'nom' => 'Fer à béton 12mm',
                'photo' => 'fer12mm.jpg',
                'unite' => 'barre',
                'prix_achat' => 95.00
            ]
        ]);

        // Stocks
        DB::table('stocks')->insert([
            [
                'produit_id' => 1,
                'type' => 'externe',
                'prix_unitaire' => 78.00,
                'fournisseur_id' => 1,
                'quantite' => 250,
            ],
            [
                'produit_id' => 2,
                'type' => 'interne',
                'prix_unitaire' => 97.00,
                'fournisseur_id' => null,
                'quantite' => 100,
            ]
        ]);

        // Salaires
        DB::table('salaires')->insert([
            [
                'employer_id' => 1,
                'type' => 'mensuel',
                'prix' => 6000,
                'produit_id' => null
            ],
            [
                'employer_id' => 2,
                'type' => 'journalier',
                'prix' => 300,
                'produit_id' => null
            ]
        ]);

        // Absences
        DB::table('absences')->insert([
            [
                'employer_id' => 2,
                'justifie' => false,
                'raison' => 'Sans explication',
                'date' => '2025-06-01',
            ]
        ]);

        // RapportsSalaires
        DB::table('rapports_salaires')->insert([
            [
                'salaire_id' => 1,
                'employer_id' => 1,
                'montant' => 6000,
                'date_operation' => '2025-06-01',
                'remarques' => 'Paiement complet de mai',
            ]
        ]);
    }
}
