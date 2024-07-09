import React from 'react';

const About = () => {
    return (
        <section className={'pageSection'}>
            <header className={'pageSection__header'}> crypto-vault</header>
            <main className={'pageSection__main'}>

                <p className={'pageSection__text'}>
                    Aplikacja Crypto Vault pozwala sprawdzanie kursów kryptowalut, na podstawie danych udostepnianych
                    przez CoinGecko.
                    Pozwala na virtualny obrót kryptowalutami, możesz sprawdzić sie jako trader albo Hoodler, strategia
                    jaką obierzesz zależy od Ciebie.
                </p>
                <p className={'pageSection__text'}>
                    Załóż konto już dziś, a dostaniesz depozyt o wartości 100 000 capsli :)
                    Dzięki tej walucie będziesz mógł się sprawdzić w świecie kryptowalut.

                </p>

            </main>
            <footer className={'pageSection__footer'}> &copy; Copyright Raf Bob</footer>
        </section>
    );
};

export default About;