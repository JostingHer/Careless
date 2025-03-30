export const languages = {
    en: "English",
    es: "Español",
};

export const defaultLang = "es";
export const showDefaultLang = true;

export const ui = {
    en: {
        title: 'Welcome to <span class="text-gradient">Astro</span>',
        descriptions:
            'To get started, open the directory <code>src/pages</code> in your project.<br /> <strong>Code Challenge:</strong> Tweak the "Welcome to Astro" message above.',
        subcriptions: "Welcome to Astro",
    },
    es: {
        title: 'Bienvenido a <span class="text-gradient">Astro</span>',
        descriptions:
            'To get started, open the directory <code>src/pages</code> in your project.<br /> <strong>Code Challenge:</strong> Tweak the "Welcome to Astro" message above.',
        subcriptions: "Bienvenido a Astro",
    },
} as const;
