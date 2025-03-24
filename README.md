# 🖥️ **Proyecto Web - BeCareless** 🌟
  
## 🎯 **Descripción General**

**BeCareless** es una plataforma web moderna y escalable, construida sobre la **arquitectura hexagonal**. Su objetivo es proporcionar una **tienda online** de fácil gestión, con integración con **Sanity CMS** para la administración de contenido del blog y **PrestaShop** para la gestión de productos y pagos. Esta plataforma también incluye una interfaz de administración (Backoffice) y una interfaz web accesible y optimizada.

**BeCareless** busca transmitir una actitud relajada y despreocupada, ofreciendo una experiencia de compra en línea donde los usuarios pueden disfrutar de un estilo moderno y sin esfuerzo. El nombre refleja esa sensación de estar bien sin complicarse, como si todo estuviera al alcance de la mano sin esfuerzo, perfecto para aquellos que buscan estar a la moda de una manera relajada.

Figma Blog Design: https://www.figma.com/design/MnolKVp9QeGhx5MasknQbO/TFG-DAW-ONLINE_SHOP?node-id=0-1&p=f&t=i7QFBa4p0zFTgQcl-0

---

## 🔄 **Arquitectura Hexagonal**

La **arquitectura hexagonal** (también conocida como arquitectura limpia o de puertos y adaptadores) permite una separación clara entre la lógica de negocio y las interfaces externas. Este enfoque facilita la escalabilidad, la mantenibilidad y la prueba  de los componentes del sistema.

### Componentes Principales:

- 🏢 **Dominio (Domain)**: Contiene la lógica de negocio pura, independiente de tecnologías externas. Aquí se definen las reglas y casos de uso del sistema.
  
- 🌐 **Web (Aplicación)**: La capa que interactúa con los usuarios finales. Utiliza tecnologías modernas como **Astro**, **React** y **TypeScript**.

- ⚙️ **Backoffice (Infraestructura)**: La capa encargada de las integraciones con **Sanity** para la gestión de contenido y **PrestaShop** para la gestión de productos y pagos.

---

## 🌍 **Web - Frontend**

### Tecnologías Utilizadas

- **Astro**: Framework de frontend para crear aplicaciones rápidas y optimizadas.
- **React**: Librería de JavaScript para crear interfaces de usuario interactivas.
- **TypeScript**: Proporciona tipado estático para evitar errores comunes de programación.
- **SCSS**: Preprocesador de CSS para escribir estilos más eficientes y organizados.
- **Prettier & ESLint**: Herramientas de formateo y linting para mantener el código limpio y consistente.
- **Sanity CMS**: Sistema de gestión de contenido flexible y fácil de usar.
- **PrestaShop**: Plataforma de comercio electrónico para la gestión de productos, pagos y pedidos.

---

## 🏠 **Backoffice - Sanity & PrestaShop**

El **Backoffice** permite gestionar el contenido y los productos del sistema. Actualmente se está trabajando en la integración de dos sistemas clave:

1. **Sanity CMS**: Sistema flexible para crear, editar y gestionar contenido dinámico, como productos, artículos de blog, etc.
2. **PrestaShop**: Plataforma de eCommerce para gestionar inventarios, productos y pagos.

### Tareas por Implementar:
- **Integración con PrestaShop**: Sincronización de productos, inventarios y pagos.
- **Gestión de usuarios y roles**: Panel de administración para manejar accesos y permisos.
- **Análisis y reportes**: Implementación de métricas y análisis de ventas y tráfico.

---

## 🏢 **Company - Domain**

La carpeta **`company/`** es el núcleo del proyecto. Aquí reside la lógica de negocio que no depende de ninguna otra capa. Todo lo relacionado con el dominio del sistema (como las entidades de productos, pedidos, usuarios, etc.) se encuentra aquí.

### Estructura de la carpeta `company/`: Por decidir

---

## 🛠️ **Instalación y Configuración**

### 1. **Clonación del Repositorio**

Clona este repositorio a tu máquina local:

```bash
git clone https://github.com/JostingHer/GenZSociety
cd genz-society
```

---

El nombre "BeCareless" transmite una imagen fresca, relajada y moderna, lo que hace que la tienda online tenga un toque distintivo y atractivo para aquellos que buscan productos de calidad sin complicarse demasiado.
