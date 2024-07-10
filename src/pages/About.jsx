import React from 'react';

const About = () => {
    return (
        <section className={'pageSection'}>
            <header className={'pageSection__header'}> CryptoVault </header>
            <main className={'pageSection__main'}>
                <p className={'pageSection__text'}>
                    Aplikacja Crypto Vault pozwala sprawdzanie kursów kryptowalut, na podstawie danych udostepnianych
                    przez CoinGecko. Aplikacja jest wersja testową, zupełnie darmową także kursy pojawiaja sie z kilkuminutowym opóźnieniem.<br/>
                    &nbsp;&nbsp;Crypto Vault umożliwia virtualny obrót kryptowalutami, możesz sprawdzić sie jako trader albo Hoodler, strategia
                    jaką obierzesz zależy od Ciebie.<br/>
                    &nbsp;&nbsp;Stylistyka aplikacji inspirowana jest kultowa serią gier komputerowych FALLOUT. Możesz mieć swojego Pip Boya zawsze przy sobie.
                </p>
                <p className={'pageSection__text'}>
                    Załóż konto już dziś, a dostaniesz depozyt o wartości <b> 100 000 </b>capsli :)
                    Dzięki tej walucie będziesz mógł się sprawdzić w świecie kryptowalut.
                </p>
            </main>
            <footer className={'pageSection__footer'}> &copy; Copyright Raf Bob</footer>
        </section>
    );
};

export default About;