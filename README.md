crypto-vault

Crypto Vault to aplikacja do zarządzania portfelem kryptowalut, która pozwala na przeglądanie aktualnych cen, w stopniu bardzo uproszczonym sprawdzenie się w tradingu, zarządzania posiadanymi kryptowalutami oraz wykonywanie transakcji.

Aplikacja Crypto Vault ma charakter wyłącznie edukacyjny i informacyjny. Nie ma na celu zachęcania do inwestowania w kryptowaluty. Przed rozpoczęciem jakiejkolwiek działalności związanej z handlem kryptowalutami zalecamy zdobycie odpowiedniej wiedzy i konsultację z profesjonalistami. Handel kryptowalutami wiąże się z dużym ryzykiem finansowym.

# Kluczowe Technologie

- **React**: Biblioteka Javascriptowa do budowy interfejsów.
- **Vite**: Szybkie narzedzie i serwer deweloperski dla nowoczesnych projektów webowych..
- **React Router**: Standardowa Biblioteka do routingu w Reactowych Aplikacjach
- **MUI**: Popularny Reactowy UI Framework
- **Git**:System Kontroli wersji do śledzenia zmian w kodzie.

## Wymagania

- Node.js w wersji 12.x lub wyższej
- npm lub yarn

## Instalacja

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/sabaudianin/crypto-vault
   ```
2. Przejdź do katalogu projektu:
   ```bash
   cd crypto-vault
   ```
3. Zainstaluj zależności:
   ```bash
   npm install
   ```
   lub jeśli używasz yarn:
   ```bash
   yarn install
   ```

## Uruchamianie

Aplikacja korzysta z Vite jako narzędzia do budowania i uruchamiania.

1. Uruchom serwer JSON:
   ```bash
   json-server --watch db.json --port 3001
   ```
2. Uruchom aplikację w trybie deweloperskim:
   ```bash
   npm run dev
   ```
   lub jeśli używasz yarn:
   ```bash
   yarn dev
   ```
3. Otwórz przeglądarkę i przejdź do `http://localhost:5173`, aby zobaczyć działającą aplikację.

## Funkcje

- **Przeglądanie aktualnych kursów**: Zobacz aktualne kursy wybranych kryptowalut,Kursy kryptowalut pobierane są z CoinGecko z kilkuminutowym opóźnieniem.
- **Przeglądanie salda**: Zobacz swoje aktualne saldo w podstawowej walucie.
- **Zarządzanie kryptowalutami**: Przeglądaj posiadane kryptowaluty wraz z ilością i datą zakupu.
- **Wykonywanie transakcji**: Kupuj i sprzedawaj kryptowaluty, korzystając z aktualnych kursów.

Projekt jest licencjonowany na licencji MIT,szczegóły znajdują się w pliku License.md .
