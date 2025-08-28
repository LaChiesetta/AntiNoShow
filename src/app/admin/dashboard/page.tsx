export default function ReservationsDashboardPage() {
  // Dummy data for now, until a DB/API is connected
  const reservations = [
    {
      id: 1,
      nome: "Mario",
      cognome: "Rossi",
      telefono: "3331234567",
      data: "2025-09-10",
      ora: "20:00",
      persone: 4,
      tipo: "Cena",
      stato: "Confermato",
    },
    {
      id: 2,
      nome: "Lucia",
      cognome: "Bianchi",
      telefono: "3209876543",
      data: "2025-09-12",
      ora: "13:00",
      persone: 2,
      tipo: "Pranzo",
      stato: "In attesa",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-8">
        <h1 className="text-2xl font-bold mb-6">Dashboard Prenotazioni</h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-sm font-medium">
                <th className="p-3 border-b">Nome</th>
                <th className="p-3 border-b">Cognome</th>
                <th className="p-3 border-b">Telefono</th>
                <th className="p-3 border-b">Data</th>
                <th className="p-3 border-b">Ora</th>
                <th className="p-3 border-b">Persone</th>
                <th className="p-3 border-b">Tipo</th>
                <th className="p-3 border-b">Stato</th>
                <th className="p-3 border-b">Azioni</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((res) => (
                <tr key={res.id} className="hover:bg-gray-50 text-sm">
                  <td className="p-3 border-b">{res.nome}</td>
                  <td className="p-3 border-b">{res.cognome}</td>
                  <td className="p-3 border-b">{res.telefono}</td>
                  <td className="p-3 border-b">{res.data}</td>
                  <td className="p-3 border-b">{res.ora}</td>
                  <td className="p-3 border-b">{res.persone}</td>
                  <td className="p-3 border-b">{res.tipo}</td>
                  <td className="p-3 border-b">{res.stato}</td>
                  <td className="p-3 border-b space-x-2">
                    <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                      Modifica
                    </button>
                    <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                      Elimina
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
