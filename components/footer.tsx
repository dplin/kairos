const footerEn = require('../includes/footer/footer-en.html').default

export default function Footer() {

  return ( 
    <>
      <footer dangerouslySetInnerHTML={{__html: footerEn }}></footer>
    </>
  );
};