import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer py-5'>
      <Container>
        <Row className='d-flex justify-content-between'>
          <Col lg='5'>
            <h3 className='fw-bold'>Cobar.</h3>
            <p className='desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Animi dolorum debitis excepturi, at repellendus quidem saepe eligendi 
            voluptatem! Incidunt, deserunt!</p>
            <div className='no mb-1 mt-4'>
              <Link className='text-decoration-none'>
              <i className='fa-brands fa-whatsapp'></i>
              <p className='m-0'>085591411753</p>
              </Link>
            </div>
            <div className='email'>
              <Link className='text-decoration-none'>
                <i className='fa-regular fa-envelope'></i>
                <p className='m-0'>julianrealdi@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className='d-flex flex-column col-lg-2 col mt-lg-0 mt-5'>
            <h5 className='fw-bold'>Menu</h5>
            <Link to="">Home</Link>
            <Link to="Kelas">Kelas</Link>
            <Link to="Testimonial">Testimonial</Link>
            <Link to="faq">FAQ</Link>
            <Link to="SyaratKeten">Syarat & Ketentuan</Link>
          </Col>
          <Col lg='4' className='mt-lg-0 mt-5'>
            <h5 className='fw-bold mb-3'>Subscribe Untuk Info Menarik</h5>
            <div className='subscribe'>
              <input type='text' placeholder='subscribe...'></input>
              <button className='btn btn-danger rounded-end rounded-0'>Subscribe</button>
            </div>
            <div className='social mt-3'>
              <i className='fa-brands fa-facebook'></i>
              <i className='fa-brands fa-twitter'></i>
              <i className='fa-brands fa-linkedin'></i>
              <i className='fa-brands fa-instagram'></i>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className='text-center px-md-0 px-3'>&copy; Copyright {new Date().getFullYear()} By <span className='fw-bold'>RealCorp</span>, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer