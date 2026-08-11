// find pokemon by name (search)
// random pokemon
// add name + image แสดงชื่อและรูป pokemon 
// remove when click ปุ่ม reset
// add some style css

const progressX = document.getElementById('progressX');
const pokemonInput = document.getElementById('pokemonInput');
const findPokemonBtn = document.getElementById('findPokemon');
const randomPokemonBtn = document.getElementById('randomPokemon');
const resetPokemonBtn = document.getElementById('resetPokemon');

// find pokemon by name
findPokemonBtn.addEventListener("click", async() => {
    const query = pokemonInput.value.trim().toLowerCase(); // อ่านค่าจาก input แล้วตัดช่องว่าง
    const findPokemon = await fetch (`https://pokeapi.co/api/v2/pokemon/${query}`); // รอเพื่อดึงข้อมูลมายัง
    const data = await findPokemon.json(); // รอข้อมูลว่าแปลงเป็น json ยัง
    console.log(data);
    
    progressX.innerHTML = "";
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = data.sprites.front_default;
    div.append(data.name, img); // แสดงชื่อ + รูป
    progressX.append(div); // ทุกครั้งที่สร้าง จะสร้างขึ้นมาใหม่เพื่อรอวนอีกครั้ง
});

// random pokemon
randomPokemonBtn.addEventListener("click", async() => {
    const randomId = Math.floor(Math.random() * 1025) + 1; // สุ่มเลข 1-1025
    const findPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`); // รอเพื่อดึงข้อมูลมายัง
    const data = await findPokemon.json(); // รอข้อมูลว่าแปลงเป็น json ยัง
    console.log(data);

    progressX.innerHTML = ""; // เคลียร์ของเก่าก่อนแสดงตัวใหม่
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = data.sprites.front_default;
    div.append(data.name, img); // แสดงชื่อ + รูป
    progressX.append(div);
});

// remove when click reset
resetPokemonBtn.addEventListener("click", async() => {
    progressX.innerHTML = "";
    pokemonInput.value = "";
});