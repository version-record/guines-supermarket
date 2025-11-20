<div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-guine-gold hover:scale-105 transition-all">
  <div className="bg-guine-lime text-guine-dark font-bold text-center py-2">
    ¡OFERTA DEL DÍA!
  </div>
  {imagen && (
    <img src={imagen} alt={titulo} className="w-full h-64 object-cover" />
  )}
  <div className="p-6 bg-guine-dark text-white">
    <h3 className="text-2xl font-bold">{titulo}</h3>
    <div className="mt-4 flex items-baseline gap-3">
      <span className="text-4xl font-black text-guine-lime">{precio}</span>
      {precioAntes && (
        <span className="text-xl line-through opacity-70">{precioAntes}</span>
      )}
    </div>
  </div>
</div>
