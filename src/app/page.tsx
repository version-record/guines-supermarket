import Footer from '@/components/Footer';  // Crea este después

export default function Home() {
  return (
    <main className="min-h-screen bg-guine-lime/10">
      <header className="bg-guine-dark text-white p-8 text-center">
        <h1 className="text-5xl font-bold">🛒 Güines Supermarket</h1>
        <p className="text-2xl mt-4 text-guine-gold">Ofertas del día en Miami</p>
      </header>
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold text-guine-dark">¡Bienvenido!</h2>
        <p>Funciona offline con PWA. Prueba recargando sin internet.</p>
      </section>
      <Footer />
    </main>
  );
}