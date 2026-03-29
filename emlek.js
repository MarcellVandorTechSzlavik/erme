// emlek.js
if (typeof databases === 'undefined') {
    var databases = {};
}

// Csak a 'emlek' kulcsot adjuk hozzá
databases['emlek'] = [
        { 
            name: "Emlék érmék", 
            id: "eml", 
            years: [
                {y: "2002 Kossuth 100Ft", m: "1 000 000", img: "emlek/kossuth.jpg",a:'külső:Ni bevonatos acél, mag:CuZn bevonatos acél',n:'Magyar Köztársaság'},
                {y: "2003 Deák Ferenc 20Ft", m: "985.000", img: "emlek/deak.jpg",a:'75%Cu, 4% Ni, 21% Zn',n:'Magyar Köztársaság'},
		{y: "2004 EU csatlakozás 50Ft", m: "985.000", img:'emlek/unios-50.jpg',a:'75%Cu, 25% Ni',n:'Magyar Köztársaság'},
		{y: "2005 József Attila 10Ft", m: "12.000 (csak bliszterben)", img:'emlek/jozsefattila.jpg',a:'Cu 75%, Ni 25%',n:'Magyarország'},
		{y: "2005 Gyermekmentő 50Ft", m: "1.985.000", img:'emlek/gyermekmento-50.jpg',a:'75%Cu, 25% Ni',n:'Magyar Köztársaság'},
		{y: "2006 Vöröskereszt 50Ft", m: "2.000.000", img:'emlek/voroskereszt-50.jpg',a:'75%Cu, 25% Ni',n:'Magyar Köztársaság'},
		{y: "2006 1956-os forradalom 50Ft", m: "2.000.000", img:'emlek/56os-50.jpg',a:'75%Cu, 25% Ni',n:'Magyar Köztársaság'},
		{y: "2007 Római szerződés 50Ft", m: "1.990.000", img:'emlek/romai-50.jpg',a:'75%Cu, 25% Ni',n:'Magyar Köztársaság'},
		{y: "2015 Nemzeti emlékhelyek 50Ft", m: "1.997.000", img:'emlek/nemzetiemlek-50.jpg',a:'75%Cu, 25% Ni',n:'Magyarország'},
		{y: "2016 70 éves a Forint 50Ft", m: "1.997.000", img:'emlek/70eves-50.jpg',a:'75%Cu, 25% Ni',n:'Magyarország'},
		{y: "2017 FINA VB 50Ft", m: "1.997.000", img:'emlek/fina-50.jpg',a:'75%Cu, 25% Ni',n:'Magyarország'},
		{y: "2018 Jégkorong VB 50Ft", m: "1.997.000", img:'emlek/jegkorong-50.jpg',a:'75%Cu, 25% Ni',n:'Magyarország'},
		{y: "2018 Családok éve 50Ft", m: "2.000.000", img:'emlek/csaladok-50.jpg',a:'75%Cu, 25% Ni',n:'Magyarország'},
		{y: "2018 Bírkózó VB 50Ft", m: "2.000.000", img:'emlek/birkozas-50.jpg',a:'75%Cu, 25% Ni',n:'Magyarország'},
		{y: "2019 FIE Vívó VB 50Ft", m: "2.000.000", img:'emlek/vivo-50.jpg',a:'75%Cu, 25% Ni',n:'Magyarország'},
		{y: "2020 Tűzóltóság 50Ft", m: "2.000.000", img:'emlek/tuzolto-50.jpg',a:'75%Cu, 25% Ni',n:'Magyarország'},
                {y: "2020 Tisztelet a hősöknek 10Ft", m: "1.997.500", img: 'emlek/tisztelet-10.jpg',a:'Cu 75%, Ni 25%',n:'Magyarország'},
		{y: "2020 Tisztelet a hősöknek 20Ft", m: "1.997.500", img: 'emlek/tisztelet-20.jpg',a:'75%Cu, 4% Ni, 21% Zn',n:'Magyarország'},
		{y: "2021 F betű 5Ft", m: "2.000.000", img: 'emlek/forint-5-f.jpg',a:'75% Cu, 4% Ni, 21% Zn',n:'Magyarország'},
		{y: "2021 O betű 5Ft", m: "2.000.000", img: 'emlek/forint-5-o.jpg',a:'75% Cu, 4% Ni, 21% Zn',n:'Magyarország'},
		{y: "2021 R betű 5Ft", m: "2.000.000", img: 'emlek/forint-5-r.jpg',a:'75% Cu, 4% Ni, 21% Zn',n:'Magyarország'},
		{y: "2021 I betű 5Ft", m: "2.000.000", img: 'emlek/forint-5-i.jpg',a:'75% Cu, 4% Ni, 21% Zn',n:'Magyarország'},
		{y: "2021 N betű 5Ft", m: "2.000.000", img: 'emlek/forint-5-n.jpg',a:'75% Cu, 4% Ni, 21% Zn',n:'Magyarország'},
		{y: "2021 T betű 5Ft", m: "2.000.000", img: 'emlek/forint-5-t.jpg',a:'75% Cu, 4% Ni, 21% Zn',n:'Magyarország'},
		{y: "2021 Eucharisztikus 50Ft", m: "2.000.000", img:'emlek/eucharisztikus-50.jpg',a:'75%Cu, 25% Ni',n:'Magyarország'},
		{y: "2022 Pénzmúzeum 100Ft", m: "2.000.000", img:'emlek/penzmuzeum.jpg',a:'külső:Ni 15%, réz 65%, cink 20%, mag:Ni 4%, réz 75%, cink 21%',n:'Magyarország'},
		{y: "2023 Petőfi Sándor 200Ft", m: "2.000.000", img:'emlek/petofi.jpg',a:'gyűrű: CuNiZn 75/4/21m, mag: CuNi 75/25',n:'Magyarország'},
		{y: "2023 75 éves a Mentőszolgálat 50Ft", m: "1.000.000", img:'emlek/mentoszolgalat-50.jpg',a:'75%Cu, 25% Ni',n:'Magyarország'},
		{y: "2023 175 éves a Magyar Honvédség 100Ft", m: "1.000.000", img:'emlek/magyarhonvedseg.jpg',a:'külső:Ni 15%, réz 65%, cink 20%, mag:Ni 4%, réz 75%, cink 21%',n:'Magyarország'},
		{y: "2024 100 éves az MNB 100Ft", m: "2.000.000", img:'emlek/mnb.jpg',a:'külső:Ni bevonatos acél, mag:CuZn bevonatos acél',n:'Magyarország'},
		{y: "2024 Batthyány Lajos 200Ft", m: "1.000.000", img:'emlek/batthany.jpg',a:'gyűrű: CuNiZn 75/4/21m, mag: CuNi 75/25',n:'Magyarország'},
		{y: "2025 Nagy László 100Ft", m: "1.000.000", img:'emlek/nagylaszlo.jpg',a:'külső:Ni 15%, réz 65%, cink 20%, mag:Ni 4%, réz 75%, cink 21%',n:'Magyarország'},
		{y: "2025 Magyar Tudományos Akadémia 200Ft", m: "ismeretlen", img:'emlek/mta.jpg',a:'gyűrű: CuNiZn 75/4/21m, mag: CuNi 75/25',n:'Magyarország'},
	    {y: "2026 II. Rákóczi Ferenc 50Ft", m: "1.000.000", img:'emlek/rakoczi.jpg',a:'75%Cu, 25% Ni',n:'Magyarország'}


            ] 
        }
    ];
