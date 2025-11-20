import React from 'react'

const page = () => {
  return (
   <div className="text-center py-20 bg-guine-lime/20">
  <h1 className="text-5xl font-black text-guine-dark mb-8">¡Contáctanos!</h1>
  <p className="text-3xl text-guine-gold">📍 2300 NW 28th St, Miami, FL 33142</p>
  <p className="text-4xl mt-6">📞 (305) 633-7888</p>
  <a
    href="https://wa.me/13056337888"
    className="inline-block mt-10 bg-guine-lime hover:bg-guine-gold text-guine-dark font-bold text-2xl px-10 py-6 rounded-2xl shadow-2xl"
  >
    Escríbenos por WhatsApp 💬
  </a>
</div>
  )
}

export default page