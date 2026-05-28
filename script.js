// 🔥 BURAYA EKLEYECEKSİN
const takipciler = [
    {
        kullanici: "yusuf",
        profil: "https://i.pravatar.cc/100?img=1"
    },
    {
        kullanici: "ahmet",
        profil: "https://i.pravatar.cc/100?img=2"
    }
];

// GÖSTER
const liste = document.getElementById("liste");

takipciler.forEach(kisi => {
    liste.innerHTML += `
        <div class="kisi">
            <img src="${kisi.profil}" class="pp">
            <div>@${kisi.kullanici}</div>
        </div>
    `;
});
