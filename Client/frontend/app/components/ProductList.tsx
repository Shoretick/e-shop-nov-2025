// TEMPORAL... HARDCODEADO 
import {ProductsType }from "../types"
import Categories from "./Categories";
import ProductCard from "./ProductCard";


const products : ProductsType = 
[
  {
    id: 1,
    name: "Auricular Inalámbrico Pro",
    shortDescription: "Auriculares Bluetooth con cancelación de ruido activa.",
    description: "Auriculares over-ear con sonido de alta fidelidad, batería de larga duración (30h) y modo de transparencia. Ideales para viajes y trabajo.",
    price: 150,
    sizes: ["Talla Única"],
    colors: ["black", "silver", "green"],
    images: { black: "https://http2.mlstatic.com/D_NQ_NP_2X_978696-MLA92476293532_092025-F.webp", silver: "https://http2.mlstatic.com/D_NQ_NP_2X_751979-MLA92886777213_092025-F.webp", navy: "https://http2.mlstatic.com/D_NQ_NP_2X_712847-MLA92476373564_092025-F.webp" }
  },
  {
    id: 2,
    name: "Laptop Ultra Slim 14\"",
    shortDescription: "Portátil de alto rendimiento, ideal para profesionales.",
    description: "Laptop ultradelgada con procesador Core i5, 16GB de RAM y SSD de 512GB. Pantalla Full HD y chasis de aluminio ligero.",
    price: 899,
    sizes: ["14 pulgadas"],
    colors: ["gray", "white"],
    images: { gray: "/img/laptop_gray.png", white: "/img/laptop_white.png" }
  },
  {
    id: 3,
    name: "Mouse Gamer Ergonómico",
    shortDescription: "Mouse con DPI ajustable y luces RGB personalizables.",
    description: "Diseño ergonómico para largas sesiones de juego. Sensor de 16000 DPI, 7 botones programables y cable trenzado de alta durabilidad.",
    price: 45,
    sizes: ["Talla Única"],
    colors: ["black", "white"],
    images: { black: "/img/mouse_black.png", white: "/img/mouse_white.png" }
  },
  {
    id: 4,
    name: "Cable USB-C a USB-C (2 Metros)",
    shortDescription: "Cable de carga rápida y transferencia de datos de alta velocidad.",
    description: "Cable trenzado de nylon de 2 metros de longitud. Soporta carga PD de 100W y transferencia de datos de 10Gbps.",
    price: 15,
    sizes: ["2m"],
    colors: ["black", "red", "blue"],
    images: { black: "/img/cableC_black.png", red: "/img/cableC_red.png", blue: "/img/cableC_blue.png" }
  },
  {
    id: 5,
    name: "Batería Externa 20000mAh",
    shortDescription: "Power Bank de gran capacidad con doble salida USB.",
    description: "Cargador portátil con capacidad de 20000mAh. Permite cargar un smartphone hasta 4 veces. Incluye puertos USB-A y USB-C.",
    price: 60,
    sizes: ["Talla Única"],
    colors: ["black", "gray"],
    images: { black: "/img/bateria_black.png", gray: "/img/bateria_gray.png" }
  },
  {
    id: 6,
    name: "Teclado Mecánico Retroiluminado",
    shortDescription: "Teclado compacto 60% con switches táctiles.",
    description: "Teclado mecánico con 61 teclas, ideal para ahorrar espacio. Switches marrones, retroiluminación RGB y conexión USB-C desmontable.",
    price: 75,
    sizes: ["60%"],
    colors: ["black", "white"],
    images: { black: "/img/teclado_black.png", white: "/img/teclado_white.png" }
  },
  {
    id: 7,
    name: "Smartwatch Deportivo Lite",
    shortDescription: "Reloj inteligente con monitor de ritmo cardíaco y GPS.",
    description: "Smartwatch resistente al agua con más de 10 modos deportivos. Batería de 7 días y notificaciones de aplicaciones.",
    price: 99,
    sizes: ["40mm"],
    colors: ["black", "pink", "green"],
    images: { black: "/img/watch_black.png", pink: "/img/watch_pink.png", green: "/img/watch_green.png" }
  },
  {
    id: 8,
    name: "Webcam Full HD 1080p",
    shortDescription: "Cámara web para videollamadas y streaming.",
    description: "Webcam con resolución 1080p a 30fps, micrófono integrado con reducción de ruido y clip universal para monitor.",
    price: 35,
    sizes: ["Talla Única"],
    colors: ["black"],
    images: { black: "/img/webcam_black.png" }
  },
  {
    id: 9,
    name: "Adaptador HDMI a USB-C",
    shortDescription: "Permite conectar tu laptop a cualquier monitor HDMI.",
    description: "Adaptador compacto que soporta resolución 4K a 60Hz. Carcasa de aluminio resistente para máxima durabilidad.",
    price: 25,
    sizes: ["Talla Única"],
    colors: ["gray"],
    images: { gray: "/img/adaptador_gray.png" }
  },
  {
    id: 10,
    name: "Pendrive USB 3.0 (128GB)",
    shortDescription: "Memoria flash de alta velocidad para transferir archivos.",
    description: "Unidad flash con interfaz USB 3.0, ofrece velocidades de lectura de hasta 150MB/s. Diseño deslizable y llavero incorporado.",
    price: 20,
    sizes: ["128GB"],
    colors: ["silver"],
    images: { silver: "/img/pendrive_silver.png" }
  },
  {
    id: 11,
    name: "Router Wi-Fi Mesh Dual Band",
    shortDescription: "Sistema de red mallada para cobertura total en el hogar.",
    description: "Router con tecnología Wi-Fi 6, ideal para hogares grandes. Elimina zonas muertas y soporta hasta 100 dispositivos conectados.",
    price: 199,
    sizes: ["Pack 2 unidades"],
    colors: ["white"],
    images: { white: "/img/router_white.png" }
  },
  {
    id: 12,
    name: "Soporte Ajustable para Laptop",
    shortDescription: "Soporte ergonómico de aluminio para mejorar la postura.",
    description: "Soporte plegable de aluminio para laptops de hasta 17 pulgadas. Altura y ángulo totalmente ajustables.",
    price: 30,
    sizes: ["Talla Única"],
    colors: ["silver", "black"],
    images: { silver: "/img/soporte_silver.png", black: "/img/soporte_black.png" }
  },
  {
    id: 13,
    name: "Disco SSD Externo Portátil (1TB)",
    shortDescription: "Almacenamiento ultrarrápido y compacto para copias de seguridad.",
    description: "Unidad de estado sólido externa de 1TB. Velocidades de lectura/escritura de 500MB/s. Resistente a golpes.",
    price: 110,
    sizes: ["1TB"],
    colors: ["black", "blue"],
    images: { black: "/img/ssd_black.png", blue: "/img/ssd_blue.png" }
  },
  {
    id: 14,
    name: "Micrófono Condensador USB",
    shortDescription: "Micrófono profesional para podcasting y streaming.",
    description: "Micrófono con patrón polar cardioide, ideal para capturar voz. Plug and play con USB, incluye trípode y filtro anti-pop.",
    price: 85,
    sizes: ["Talla Única"],
    colors: ["black"],
    images: { black: "/img/microfono_black.png" }
  },
  {
    id: 15,
    name: "Cargador Rápido de Pared (65W)",
    shortDescription: "Cargador GaN de alta potencia para laptops y móviles.",
    description: "Cargador compacto de 65W con tecnología GaN. Incluye puertos USB-C y USB-A. Compatible con Power Delivery (PD).",
    price: 40,
    sizes: ["Talla Única"],
    colors: ["white", "black"],
    images: { white: "/img/cargador_white.png", black: "/img/cargador_black.png" }
  },
  {
    id: 16,
    name: "Funda Protectora para Notebook",
    shortDescription: "Funda acolchada y resistente al agua para portátiles.",
    description: "Funda de neopreno con forro interior de felpa suave. Máxima protección contra golpes y arañazos. Bolsillo exterior para accesorios.",
    price: 22,
    sizes: ["13\"", "15\""],
    colors: ["gray", "blue", "pink"],
    images: { gray: "/img/funda_gray.png", blue: "/img/funda_blue.png", pink: "/img/funda_pink.png" }
  },
  {
    id: 17,
    name: "Hub USB-C 5 en 1",
    shortDescription: "Expande tu conectividad con 5 puertos esenciales.",
    description: "Adaptador con puertos HDMI (4K), 2x USB 3.0, Lector de tarjetas SD/MicroSD. Carcasa de aluminio.",
    price: 38,
    sizes: ["Talla Única"],
    colors: ["gray"],
    images: { gray: "/img/hub_gray.png" }
  },
  {
    id: 18,
    name: "Cable Lightning Certificado (1m)",
    shortDescription: "Cable de carga y sincronización para dispositivos iOS.",
    description: "Cable MFi certificado por Apple de 1 metro de longitud. Conexiones reforzadas para evitar roturas.",
    price: 18,
    sizes: ["1m"],
    colors: ["white"],
    images: { white: "/img/cableL_white.png" }
  },
  {
    id: 19,
    name: "Auricular In-Ear Sport",
    shortDescription: "Audífonos deportivos con ajuste seguro y resistentes al sudor.",
    description: "Auriculares inalámbricos TWS (True Wireless Stereo) con ganchos de sujeción. Resistencia IPX7 al agua y 8 horas de batería.",
    price: 55,
    sizes: ["Talla Única"],
    colors: ["black", "yellow"],
    images: { black: "/img/inEar_black.png", yellow: "/img/inEar_yellow.png" }
  },
  {
    id: 20,
    name: "Limpiador de Pantallas y Gadgets",
    shortDescription: "Kit de limpieza especializado para equipos electrónicos.",
    description: "Incluye spray limpiador sin alcohol y paño de microfibra de alta densidad. Ideal para pantallas de laptops, móviles y gafas.",
    price: 12,
    sizes: ["150ml"],
    colors: ["Talla Única"],
    images: { TallaÚnica: "/img/limpiador.png" }
  }
];

const ProductList = () =>{
    return(
        <div className="w-full">
            <Categories/>
            <div className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 2xl:grid-cols-4 gap-12">
                {products.map((product)=>( 
                 
                  <ProductCard key={product.id} product={product}/>
                 
                ))}
            </div>

        </div>
    )


}


export default ProductList;