export default function Form() {
  return (
    <div className="-translate-y-46">
      <div className="bg-white rounded-sm shadow-2xl border border-gray-200">
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Riserva il Tuo Posto Gratuito
          </h2>
          <p className="text-red-600 font-semibold italic mb-4">
            I posti sono limitati, quindi iscriviti con largo anticipo.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Saranno serviti rinfreschi e snack gratuiti.
          </p>

          <div className="space-y-4 mb-6 text-sm">
            <div>
              <p className="font-semibold text-foreground mb-0">QUANDO:</p>
              <p className="text-foreground">21 ottobre 2025 alle 19:00</p>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-0">DOVE:</p>
              <p className="text-foreground font-semibold mb-0">
                Via Del Perlar, 31 - 37135 Verona (VR)
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Chiesa di Scientology di Verona
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-0">PARCHEGGIO:</p>
              <p className="text-foreground">
                Parcheggi gratuiti disponibili all’interno della proprietà e
                anche all’esterno.
              </p>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Nome: <span className="text-red-600">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Cognome: <span className="text-red-600">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Email: <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Numero di Telefono:
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" id="privacy" className="mt-1" required />
              <label
                htmlFor="privacy"
                className="text-xs text-foreground leading-tight cursor-pointer"
              >
                Accetto l'{" "}
                <a href="#" className="text-primary hover:underline">
                  Infomativa sulla Privacy
                </a>{" "}
                di questo sito.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-base py-3 px-4 rounded-md transition-colors"
            >
              Sto prenotando il mio posto!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
