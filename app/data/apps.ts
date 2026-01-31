export interface AppData {
    name: string;
    description: string;
    link: string;
    isDisabled?: boolean;
}

export const apps: AppData[] = [
    {
        name: "GitLab MR Review Quizz",
        description: "Chrome Web extension that launches a quiz when someone clicks on approve",
        link: "#",
        isDisabled: true,
    },
    {
        name: "One Tera",
        description: "A website with 1 button that downloads 1TB",
        link: "https://one-tera.neonakis.com/",
    },
    {
        name: "FormPolice",
        description: "PWA that checks that you're doing pushups and squats right",
        link: "https://form-police.neonakis.com/",
    },
    {
        name: "Mister Good Kebab",
        description: "App that shows all the kebabs in an area with a price range",
        link: "https://kebab.pierrelouisbertrand.com",
    },
    {
        name: "CTM",
        description: "App that shows you how much your poo costs to your employer",
        link: "https://ctm.olivierabdelnour.dev",
    },
    {
        name: "Aiclicker",
        description: "Clicker game for developers",
        link: "https://aiclicker.olivierabdelnour.dev",
    },
    {
        name: "Developers Escape",
        description: "Escape game for developers",
        link: "https://escapegale.olivierabdelnour.dev",
    },
    {
        name: "HN Digest",
        description: "A website that digests all dev news",
        link: "https://veille.pierrelouisbertrand.com",
    },
];
