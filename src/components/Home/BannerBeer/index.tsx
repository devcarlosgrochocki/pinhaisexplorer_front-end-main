import React from 'react';
import styles from "./styles.module.scss";
import { Button, Container } from 'reactstrap';
import Link from 'next/link';

function Banner() {
    return (
        <section className={styles.containerBanner}>
            <Container className={`${styles.banner} d-flex flex-column justify-content-between align-items-center gap-4 p-5`} 
                    data-aos="fade-right"
                    data-aos-duration="1200">
                <img src="favicon/beer-mug-full.png" alt="Ícone de Cerveja" className={styles.beerIcon} />

                <div className={`${styles.details} d-flex flex-column align-items-center gap-2`}>
                    <h1>Rota da Cerveja</h1>
                    <p className='fw-bold'>Descubra os melhores sabores e experiências na nossa rota exclusiva de cervejas artesanais!</p>
                    <Link href="/beerRoute">
                        <Button className={styles.btn}>Acessar Rota</Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}

export default Banner;
