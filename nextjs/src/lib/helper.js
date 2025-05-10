const telephone = () => {
    return '+62 882-8931-7870'
}

const whatsapp = (message = null) => {
    return `https://api.whatsapp.com/send/?phone=${telephone().replace(/[^\d]/g, '')}&text=${message ? encodeURIComponent(message) : 'Saya+ingin+daftar+' + process.env.APP_URL_FRONTEND}`
}
const helper = { telephone, whatsapp }
export default helper