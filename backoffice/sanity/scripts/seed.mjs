import {faker} from '@faker-js/faker' // Para generar datos aleatorios
import {createClient} from '@sanity/client'

const client = createClient({
    projectId: 'pwcsr382', // Tu ID de proyecto en Sanity
    dataset: 'production', // O el nombre de tu dataset
    token: 'skTz2vnD0qHnac0ootIT9NxVqdt0ly4OBiRPGqR8RlTIhnixGphDKgxQ8O9CNUHEQF7EuW2xU2dP26861F6Te6wfJBkHVN09YRnJCvzZBOHTZoX080Zu0nQYiewsgkPhnskWwePxXr6FqPTQxCDop1EvYw0B0PXc75nXRvxA3DjCWBXSac7W',
    apiVersion: '2022-03-07', // La versión del API de Sanity
    useCdn: false, // Para usar el API sin CDN, puedes ponerlo en true si prefieres usar el CDN
})
// Crear un autor de prueba
const createAuthor = async (name) => {
    const author = await client.create({
        _type: 'author',
        name,
        bio: faker.lorem.paragraph(),
    })
    return author._id // Devuelve el ID del autor
}

// Crear una categoría de prueba
const createCategory = async (title) => {
    const category = await client.create({
        _type: 'category',
        title,
    })
    return category._id // Devuelve el ID de la categoría
}

// Crear una sección de prueba (para el blog u otras secciones del sitio)
const createSection = async () => {
    const section = await client.create({
        _type: 'section',
        title: faker.lorem.words(3),
        content: faker.lorem.paragraphs(2),

        cta: faker.lorem.words(2),
    })
    return section._id // Devuelve el ID de la sección
}

// Crear datos de color (para el tema)
const createThemeColors = async () => {
    const colors = await client.create({
        _type: 'themeColors',
        primaryColor: faker.internet.color(),
        secondaryColor: faker.internet.color(),
        backgroundColor: faker.internet.color(),
        textColor: faker.internet.color(),
    })
    return colors._id // Devuelve el ID del tema
}

// Crear un post de prueba (multilingüe)
const createPost = async (authorId, categoryId, sectionIds, themeId) => {
    const post = await client.create({
        _type: 'post',
        title: {
            en: faker.lorem.words(5), // Título en inglés
            es: faker.lorem.words(5), // Título en español
            fr: faker.lorem.words(5), // Título en francés
        },
        slug: {
            current: faker.lorem.words(2).toLowerCase().replace(' ', '-'),
        },
        author: {_ref: authorId},
        category: {_ref: categoryId},
        content: {
            en: faker.lorem.paragraphs(3), // Contenido en inglés
            es: faker.lorem.paragraphs(3), // Contenido en español
            fr: faker.lorem.paragraphs(3), // Contenido en francés
        },
        sections: sectionIds.map((sectionId) => ({_ref: sectionId})),
        theme: {_ref: themeId},
        languages: ['en', 'es', 'fr'], // Idiomas soportados para el post
    })
    return post
}

// Función para generar datos de prueba
const createTestData = async () => {
    try {
        // Crear autores
        const authors = ['Josting', 'Sandra', 'Aaron', 'Ruben', 'Laura', 'David', 'Emma', 'Carlos', 'Jose', 'Miguel']
        const authorIds = []
        for (const author of authors) {
            const authorId = await createAuthor(author)
            authorIds.push(authorId)
        }

        // Crear categorías
        const categories = [
            'Tendencias',
            'Ofertas',
            'Novedades',
            'Productos destacados',
            'Moda casual',
            'Estilo deportivo',
            'Accesorios',
            'Colección de invierno',
            'Colección de verano',
            'Novedades en tecnología',
            'Inspiración',
            'Estilos urbanos',
            'Moda en colores vibrantes',
            'Lookbook de temporada',
            'Guías de compra',
        ]
        const categoryIds = []
        for (const category of categories) {
            const categoryId = await createCategory(category)
            categoryIds.push(categoryId)
        }

        // Crear secciones
        const sectionIds = []
        for (let i = 0; i < 10; i++) {
            const sectionId = await createSection()
            sectionIds.push(sectionId)
        }

        // Crear tema de colores
        const themeId = await createThemeColors()

        // Crear posts (50 posts)
        for (let i = 0; i < 50; i++) {
            const authorId = authorIds[Math.floor(Math.random() * authorIds.length)]
            const categoryId = categoryIds[Math.floor(Math.random() * categoryIds.length)]
            const randomSections = sectionIds.slice(0, Math.floor(Math.random() * sectionIds.length) + 1)

            await createPost(authorId, categoryId, randomSections, themeId)
        }

        console.log('Datos de prueba creados con éxito')
    } catch (error) {
        console.error('Error creando los datos de prueba:', error)
    }
}

// Ejecutar la función para crear datos de prueba
createTestData()
