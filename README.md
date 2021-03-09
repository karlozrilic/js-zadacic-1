Na zadanom setu podataka:

```js
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
]
```

Odradi sljedeće:
1. Potrebno je kreirati zaseban array koji će sadržavati samo imena developera:
```js
(8) ["Alen Egredžija", "Alen Juren", "Dino Turopoli", "Helena Stjepanović", "Ivan Vinski", "Karlo Zrilić", "Mihaela Dijanešić", "Mitar Cvjetković"]
  0: "Alen Egredžija"
  1: "Alen Juren"
  2: "Dino Turopoli"
  3: "Helena Stjepanović"
  4: "Ivan Vinski"
  5: "Karlo Zrilić"
  6: "Mihaela Dijanešić"
  7: "Mitar Cvjetković"
  length: 8
  __proto__: Array(0)
```
2. Potrebno je kreirati objekt koji će sadržavati dva property-a ("**frontend**" i "**backend**"), čije će vrijednosti biti filtrirani podatci iz glavnog array-a
```js
{frontend: Array(4), backend: Array(4)}
  backend: Array(4)
    0: {user_name: "Alen Juren", position: "backend", slug: "alen-juren"}
    1: {user_name: "Dino Turopoli", position: "backend", slug: "dino-turopoli"}
    2: {user_name: "Helena Stjepanović", position: "backend", slug: "helena-stjepanovic"}
    3: {user_name: "Ivan Vinski", position: "backend", slug: "ivan-vinski"}
    length: 4
    __proto__: Array(0)
  frontend: Array(4)
    0: {user_name: "Alen Egredžija", position: "frontend", slug: "alen-egredzija"}
    1: {user_name: "Karlo Zrilić", position: "frontend", slug: "karlo-zrilic"}
    2: {user_name: "Mihaela Dijanešić", position: "frontend", slug: "mihaela-dijanesic"}
    3: {user_name: "Mitar Cvjetković", position: "frontend", slug: "mitar-cvjetković"}
    length: 4
    __proto__: Array(0)
  __proto__: Object
```
3. Potrebno je kreirati objekt **"slugsObj"** iz glavnog array-a, gdje su key-evi **slugovi** developera, a vrijednost developer objekt:
```js
{alen-egredzija: {…}, alen-juren: {…}, dino-turopoli: {…}, helena-stjepanovic: {…}, ivan-vinski: {…}, …}
  alen-egredzija: {user_name: "Alen Egredžija", position: "frontend", slug: "alen-egredzija"}
  alen-juren: {user_name: "Alen Juren", position: "backend", slug: "alen-juren"}
  dino-turopoli:
    position: "backend"
    slug: "dino-turopoli"
    user_name: "Dino Turopoli"
    __proto__: Object
  helena-stjepanovic: {user_name: "Helena Stjepanović", position: "backend", slug: "helena-stjepanovic"}
  ivan-vinski: {user_name: "Ivan Vinski", position: "backend", slug: "ivan-vinski"}
  karlo-zrilic: {user_name: "Karlo Zrilić", position: "frontend", slug: "karlo-zrilic"}
  mihaela-dijanesic: {user_name: "Mihaela Dijanešić", position: "frontend", slug: "mihaela-dijanesic"}
  mitar-cvjetković: {user_name: "Mitar Cvjetković", position: "frontend", slug: "mitar-cvjetković"}
  __proto__: Object
```
4. Pomoću kreiranog objekta iz trećeg zadatka je potrebno kreirati array koji će sadržavati **samo slug vrijednosti** i **re-kreirati originalni oblik podataka** (array objekata).
```js
(8) ["alen-egredzija", "alen-juren", "dino-turopoli", "helena-stjepanovic", "ivan-vinski", "karlo-zrilic", "mihaela-dijanesic", "mitar-cvjetković"]
  0: "alen-egredzija"
  1: "alen-juren"
  2: "dino-turopoli"
  3: "helena-stjepanovic"
  4: "ivan-vinski"
  5: "karlo-zrilic"
  6: "mihaela-dijanesic"
  7: "mitar-cvjetković"
  length: 8
  __proto__: Array(0)
```
```js
(8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  0: {user_name: "Alen Egredžija", position: "frontend", slug: "alen-egredzija"}
  1: {user_name: "Alen Juren", position: "backend", slug: "alen-juren"}
  2: {user_name: "Dino Turopoli", position: "backend", slug: "dino-turopoli"}
  3: {user_name: "Helena Stjepanović", position: "backend", slug: "helena-stjepanovic"}
  4: {user_name: "Ivan Vinski", position: "backend", slug: "ivan-vinski"}
  5: {user_name: "Karlo Zrilić", position: "frontend", slug: "karlo-zrilic"}
  6: {user_name: "Mihaela Dijanešić", position: "frontend", slug: "mihaela-dijanesic"}
  7: {user_name: "Mitar Cvjetković", position: "frontend", slug: "mitar-cvjetković"}
  length: 8
  __proto__: Array(0)
```

- Zadatke riješiti:
    - **pomoću array prototype metoda**<br>
    (https://developer.mozilla.org/tr/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Array/prototype#iteration_methods)
    - **object built in funkcija**<br>
    (https://developer.mozilla.org/tr/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Array/prototype#iteration_methods)
    - **Ne koristiti klasične petlje** (for, while) u kombinaciji sa "push" metodom
- Poželjno je koristiti ES6 sintaksu (**fat arrow, spread & rest operatori**)