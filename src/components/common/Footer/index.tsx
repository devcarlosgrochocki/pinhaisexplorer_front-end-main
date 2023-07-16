import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Footer = function () {
  return (
    <footer className={styles.sectionBackgroundFooter}>
      <Container className={`${styles.robotoFont} d-flex flex-column`}>
        <section className="d-flex flex-column flex-md-row justify-content-between py-4 flex-wrap gap-1">
          <img src="logos/logo_projeto.svg" alt="Logo do Projeto" />
          <div className="d-flex flex-column align-items-center gap-3">
            <strong>Nossas redes sociais</strong>
            <div className="d-flex gap-3">
              <a
                href="http://www.facebook.com/prefeituradepinhais"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.noDecoration}
              >
                <img
                  src="footer/social_media/facebook_icon.svg"
                  alt="Ícone do Facebook"
                />
              </a>
              <a
                href="http://www.youtube.com/@PrefeituradePinhais"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.noDecoration}
              >
                <img
                  src="footer/social_media/youtube_icon.svg"
                  alt="Ícone do Youtube"
                />
              </a>
              <a
                href="http://www.instagram.com/prefeituradepinhais"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.noDecoration}
              >
                <img
                  src="footer/social_media/instagram_icon.svg"
                  alt="Ícone do Instagram"
                />
              </a>
            </div>
          </div>
        </section>
        <section className="d-flex flex-column align-items-center flex-md-row align-items-md-start align-items-start justify-content-between flex-wrap gap-2">
          <div className="d-flex flex-column align-items-center align-items-md-start">
            <strong>Endereço:</strong>
            <address className="text-center text-md-start">
              RODOVIA JOAO LEOPOLDO JACOMEL, <br /> Nº 12162, CENTRO
              <br />
              Pinhais/PR
              <br />
              CEP: 83323410
            </address>
            <a
              href="https://maps.google.com/?q=JOAO%20LEOPOLDO%20JACOMEL%2012162%20CENTRO%20Pinhais%20%2083323410"
              className={`${styles.noDecoration} ${styles.redOnHover} d-flex gap-2`}
            >
              <img src="footer/google_pin.svg" alt="Google pin" />
              <span>Abrir no mapa</span>
            </a>
          </div>
          <div className="d-flex flex-column align-items-center align-items-md-start">
            <strong>Horário de atendimento:</strong>
            <p className="text-center text-md-start">
              Segunda a Sexta: 8h às 12h ~ 13h às 17h
            </p>
          </div>
          <div className="d-flex flex-column align-items-center align-items-md-start">
            <strong className="Contato">Contato:</strong>
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <a className={styles.noDecoration} href="tel:+5541987075000">
                (41) 3912-5000
                <br />
              </a>
              <a
                className={styles.noDecoration}
                href="mailto:atendimento@pinhais.pr.gov.br"
              >
                atendimento@pinhais.pr.gov.br
              </a>
            </div>
          </div>
        </section>
        <hr />
        <div className="d-flex flex-column gap-4 justify-content-between flex-md-row align-items-center flex-wrap">
          <img
            className="bg-white p-2 rounded"
            src="sponsorships/norton_icon.svg"
            alt="norton_icon"
          />
          <div className="d-flex flex-column gap-1 align-items-center ">
            <div className="d-flex justify-content-between gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=br.com.ipm.mobile.Atende.Net&hl=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.noDecoration} bg-white d-flex gap-2 p-2 rounded`}
              >
                <img
                  src="/available_on/google_play_icon.svg"
                  alt="Download para Android"
                />
                <span>Google Play</span>
              </a>
              <a
                href="https://itunes.apple.com/ca/app/atende-net/id1330201742?mt=8"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.noDecoration} bg-white d-flex gap-2 p-2 rounded`}
              >
                <img
                  src="/available_on/app_store_icon.svg"
                  alt="Download para IOS"
                />
                <span>App Store</span>
              </a>
            </div>
          </div>
          <a
            href="https://pinhais.atende.net/cidadao/acesso-informacao"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-center ${styles.noDecoration}`}
          >
            <strong>
              Acesso à<br />
              Informação
            </strong>
          </a>
        </div>
        <div className="d-flex justify-content-center justify-content-md-between py-3 flex-wrap">
          <span className="text-center">
            Termos de uso | Política de privacidade
          </span>
          <span className="text-center">
            © Todos os direitos reservados. Prefeitura de Pinhais
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;