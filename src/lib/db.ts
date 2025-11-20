import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'ofertas.json');

// Crear carpeta y archivo si no existen
if (!fs.existsSync(path.dirname(filePath))) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify([], null, 2));
}

export interface Oferta {
  id: string;
  titulo: string;
  precio: string;
  precioAntes?: string;
  imagen: string;
  fecha: string;
}

export const getOfertas = (): Oferta[] => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

export const addOferta = (oferta: Oferta) => {
  const ofertas = getOfertas();
  ofertas.push(oferta);
  fs.writeFileSync(filePath, JSON.stringify(ofertas, null, 2));
};
