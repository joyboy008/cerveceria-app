import { useEffect, useState } from 'react';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';

interface Brewery {
    id: string;
    name: string;
    brewery_type: string;
    city: string;
    state: string;
}

export default function Breweries() {
    const [breweries, setBreweries] = useState<Brewery[]>([]);
    const { state } = useAuth();

    useEffect(() => {
        api.get('/breweries')
            .then((res) => setBreweries(res.data))
            .catch((err) => console.error('Error al obtener cervecerías', err));
    }, []);

    return (
        <div className="p-4" >
            <div>
                <h1>Bienvenido {state.user ?? 'Invitado'}</h1>
                <p>Token: {state.token ? '✅ Autenticado' : '❌ No autenticado'}</p>
            </div>
            <h1 className="text-xl font-bold mb-4" > Cervecerías </h1>
            {
                breweries.map((brew) => (
                    <div key={brew.id} className="mb-2 p-2 border rounded" >
                        <h2 className="font-semibold" > {brew.name} </h2>
                        < p > {brew.brewery_type} - {brew.city}, {brew.state} </p>
                    </div>
                ))
            }
        </div>
    )
}