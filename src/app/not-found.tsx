'use client';
import Link from 'next/link';
import Wrapper from '@/layouts/wrapper';
import HeaderOne from '@/layouts/headers/header-one';
import FooterOne from '@/layouts/footers/footer-one';

export default function NotFound() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="tp-error-area pt-120 pb-120">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-8">
                    <div className="tp-error-content text-center">
                      <h1 className="tp-error-title" style={{ fontSize: '120px', marginBottom: '20px' }}>404</h1>
                      <h4 className="tp-error-subtitle" style={{ marginBottom: '30px' }}>Página no encontrada</h4>
                      <p style={{ marginBottom: '40px' }}>
                        Lo sentimos, la página que estás buscando no existe.
                      </p>
                      <Link href="/" className="tp-btn-border">
                        <span className="tp-btn-border-wrap">
                          <span className="text-1">Volver al inicio</span>
                          <span className="text-2">Volver al inicio</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
