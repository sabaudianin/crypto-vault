import React from 'react';


const Home = () => {


    return (
        <section className={'pageSection'}>
            <header className={'pageSection__header'}> crypto-vault</header>
            <main className={'pageSection__main'}>
                <p className={'pageSection__title'}> Ostrzeżenie !</p>
                <p className={'pageSection__text'}>
                    Aplikacja Crypto Vault ma charakter wyłącznie edukacyjny i informacyjny. Nie ma na celu zachęcania
                    do
                    inwestowania w kryptowaluty. Przed rozpoczęciem jakiejkolwiek działalności związanej z handlem
                    kryptowalutami zalecamy zdobycie odpowiedniej wiedzy i konsultację z profesjonalistami. Handel
                    kryptowalutami wiąże się z dużym ryzykiem finansowym
                </p>

                <p className={'pageSection__title--red'}> Załóż konto i odbierz powitalny bonus już dziś ! <br/>
                    Szczegóły w zakładce About.</p>
            </main>
            <footer className={'pageSection__footer'} > &copy; Copyright Raf Bob </footer>
        </section>

    );
};

export default Home;