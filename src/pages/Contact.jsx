import React from 'react';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return (
        <section className={'pageSection'}>
            <header className={'pageSection__header'}>
                Contact
            </header>
            <main className={'pageSection__main'}>
                <p className={'pageSection__title'}>
                    <EmailIcon sx={{transform: 'translateY(30%)'}}/> rafbobbob@gmail.com
                </p>
                <p className={'pageSection__title--red'}>
                    Załóż konto i odbierz powitalny bonus już dziś ! <br/>
                    Szczegóły w zakładce About.
                </p>
            </main>
            <footer className={'pageSection__footer'}> &copy; Copyright Raf Bob</footer>
        </section>
    );
};

export default Contact;