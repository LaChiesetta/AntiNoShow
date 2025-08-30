export default function CreateReservationPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow p-8">
        <h1 className="text-2xl font-bold mb-6">Crea nuova prenotazione</h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dati Utente */}
          <div>
            <label className="block text-sm font-medium mb-1">Nome</label>
            <input
              type="text"
              className="w-full rounded-lg border-gray-300 focus:ring focus:ring-blue-200"
              placeholder="Mario"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Cognome</label>
            <input
              type="text"
              className="w-full rounded-lg border-gray-300 focus:ring focus:ring-blue-200"
              placeholder="Rossi"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Telefono</label>
            <input
              type="tel"
              className="w-full rounded-lg border-gray-300 focus:ring focus:ring-blue-200"
              placeholder="333 1234567"
            />
          </div>

          {/* Dettagli Prenotazione */}
          <div>
            <label className="block text-sm font-medium mb-1">Data</label>
            <input
              type="date"
              className="w-full rounded-lg border-gray-300 focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Ora</label>
            <input
              type="time"
              className="w-full rounded-lg border-gray-300 focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Numero persone</label>
            <input
              type="number"
              min="1"
              className="w-full rounded-lg border-gray-300 focus:ring focus:ring-blue-200"
              placeholder="4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tipo</label>
            <select className="w-full rounded-lg border-gray-300 focus:ring focus:ring-blue-200">
              <option value="">Seleziona...</option>
              <option value="pranzo">Pranzo</option>
              <option value="cena">Cena</option>
              <option value="evento">Evento</option>
            </select>
          </div>

          <div className="md:col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Salva prenotazione
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
