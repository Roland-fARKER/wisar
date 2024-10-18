# WISAR - E-commerce para Emprendedores

**WISAR** es una plataforma de comercio electrónico diseñada para emprendedores, utilizando tecnologías modernas para crear una solución escalable, eficiente y fácil de mantener.

## Tecnologías Utilizadas
- **Angular**: Framework frontend.
- **PrimeNG**: Librería de componentes UI.
- **Firebase**: Plataforma Backend-as-a-Service.
- **Screaming Architecture**: Enfoque arquitectónico centrado en el dominio del negocio.

---

## Instalación y Configuración

### 1. Crear el Proyecto en Angular

1. Instalar Angular CLI:
    ```bash
    npm install -g @angular/cli
    ```

2. Crear un nuevo proyecto:
    ```bash
    ng new ecommerce-app
    ```

3. Instalar PrimeNG y dependencias:
    ```bash
    npm install primeng primeicons @angular/cdk
    ```

### 2. Configurar Firebase

1. Instalar Firebase CLI:
    ```bash
    npm install -g firebase-tools
    ```

2. Iniciar sesión e inicializar Firebase:
    ```bash
    firebase login
    firebase init
    ```

    Selecciona:
    - **Firestore**: Base de datos.
    - **Authentication**: Gestión de usuarios.

3. Instalar AngularFire:
    ```bash
    npm install firebase @angular/fire
    ```

---

## Detalle sobre las Tecnologias

- **Angular**: Ofrece una arquitectura escalable y una experiencia de usuario eficiente mediante aplicaciones SPA.
- **PrimeNG**: Proporciona componentes de interfaz listos para usar, optimizados para rendimiento y accesibilidad.
- **Firebase**: Backend flexible con servicios integrados para autenticación, base de datos y hosting.
- **Screaming Architecture**: Organiza el código en torno a conceptos de negocio, mejorando la mantenibilidad y escalabilidad.

---

## Arquitectura: Screaming Architecture

El proyecto sigue la filosofía de **Screaming Architecture**, destacando la intención y el propósito del sistema desde su estructura:

- **Claridad del dominio**: El código refleja el dominio de e-commerce.
- **Alta mantenibilidad**: Permite hacer cambios fácilmente en módulos específicos.
- **Escalabilidad**: Agregar nuevas funcionalidades sin comprometer el sistema.
- **Desacoplamiento de tecnología**: Mantiene la lógica de negocio independiente de la infraestructura tecnológica.
