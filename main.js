const developers = [
    {
        user_name: 'Alen Egredžija',
        position: 'frontend',
        slug: 'alen-egredzija',
    },
    {
        user_name: 'Alen Juren',
        position: 'backend',
        slug: 'alen-juren',
    },
    {
        user_name: 'Dino Turopoli',
        position: 'backend',
        slug: 'dino-turopoli',
    },
    {
        user_name: 'Helena Stjepanović',
        position: 'backend',
        slug: 'helena-stjepanovic',
    },
    {
        user_name: 'Ivan Vinski',
        position: 'backend',
        slug: 'ivan-vinski',
    },
    {
        user_name: 'Karlo Zrilić',
        position: 'frontend',
        slug: 'karlo-zrilic',
    },
    {
        user_name: 'Mihaela Dijanešić',
        position: 'frontend',
        slug: 'mihaela-dijanesic',
    },
    {
        user_name: 'Mitar Cvjetković',
        position: 'frontend',
        slug: 'mitar-cvjetković',
    },
];

/* 1. zadatak */
const imena = developers.reduce((acc, current) => {
    return [...acc, current.user_name];
}, []);
console.log(imena);

/* 2. zadatak */
const frontend = developers.filter(developer => developer.position == "frontend");
const backend = developers.filter(developer => developer.position == "backend");
const obj = {frontend, backend};
console.log(obj);

/* 2. zadatak dinamička verzija */
const separatedDevelopers = developers.reduce((acc, current) => {
    return {
        ...acc,
        [current.position]: [
            ...acc[current.position] || [],
            ...[current]
        ]
    }
}, {})

/* 3. zadatak */
const slugsObj = developers.reduce((acc, current) => {
    return {
        ...acc,
        [current.slug]: current
    };
}, {});
console.log(slugsObj);

/* 4. zadatak */
const kljucevi = Object.keys(slugsObj);
const podatci = Object.values(slugsObj);
console.log(kljucevi);
console.log(podatci);