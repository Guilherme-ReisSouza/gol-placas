
function Footer() {

  return (
    <>
      <div className="d-flex justify-content-center align-items-center text-center" style={{ backgroundColor: '#ff6900', width: '100%', padding: '2rem 0rem 1rem 0', zIndex: '10' }}>
        <p style={{color: '#f5f5f5', fontWeight: 600, fontSize: '0.8rem'}}>&copy; {new Date().getFullYear()} - Gol Placas ABC | Desenvolvido por Agência Upstairs.</p>
      </div>
    </>
  );
}

export default Footer;