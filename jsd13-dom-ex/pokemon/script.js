const progressX = document.getElementById('progressX');
const btnPokemon = document.getElementById('btn-pokemon');

btnPokemon.addEventListener("click", async() => {
    const findPokemon = await fetch ("https://pokeapi.co/api/v2/pokemon/67"); // รอเพื่อดึงข้อมูลมายัง
    const data = await findPokemon.json(); // รอข้อมูลว่าแปลงเป็น json ยัง
    console.log(data);
    progressX.innerHTML = `${data.name} <img src="${data.sprites.front_default}">`;
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = data.sprites.front_default;
    div.append(img);
    progressX.append(div); // ทุกครั้งที่สร้าง จะสร้างขึ้นมาใหม่เพื่อรอวนอีกครั้ง
});