import './index.scss'

const LocationSection = () => {
    return (
        <section className="container-location marg-all">
            <div className="col-left">
                <h2>PT. ALTINDO MITRA PERKASA</h2>
                <div className='text'>
                    <div className="text-col">
                        <span>Alamat</span>
                        <p>Jl. Benda, RT.003/RW.010, Padurenan, Kec. Mustika Jaya, Kota Bks, Jawa Barat</p>
                    </div>
                    <div className="text-col">
                        <span>Telp</span>
                        <a className='telp' target="_blank " href="https://api.whatsapp.com/send?phone=6289601961928">0896-0196-1928</a>
                    </div>
                    <div className="text-col">
                        <span>Sosial Media</span>
                        <a className='sosial-media' target="_blank " href="https://www.instagram.com/altindomitraperkasa/">https://www.instagram.com/altindomitraperkasa/</a>
                    </div>
                </div>
            </div>
            <div className="col-right">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.537439106904!2d106.98914207523933!3d-6.324319293665164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699350b144ee97%3A0x4baa1e7a4c7a867d!2sPT%20ALTINDO%20MITRA%20PERKASA!5e0!3m2!1sid!2sid!4v1738119113966!5m2!1sid!2sid" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}
export default LocationSection;