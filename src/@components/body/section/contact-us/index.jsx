import './index.scss'
import fotoContractur from '/images/aboutParagon.jpeg'

const ContactUsSection = () => {
    return (
        <section className='container-contact-us marg-all'>
            <div className='img-contact'>
                <img src={fotoContractur} />
            </div>
            <div className='text-contact'>
                <a href='https://api.whatsapp.com/send?phone=6289601961928'>Contact Us</a>
            </div>
        </section>
    )
}

export default ContactUsSection;