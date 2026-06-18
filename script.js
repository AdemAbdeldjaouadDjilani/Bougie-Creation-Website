// ============================
// ALGERIA WILAYAS & COMMUNES DATA
// ============================
const ALGERIA_DATA = {
  "01 - Adrar": ["Adrar","Tamest","Charouine","Reggane","Inzghmir","Tit","Ksar Kaddour","Tsabit","Timimoun","Ouled Said","Zaouiet Kounta","Aoulef","Timokten","Aougrout","Talmine","Deldoul","Sali","Akabli","Bordj Badji Mokhtar","In Zghmir"],
  "02 - Chlef": ["Chlef","Tenes","Benairia","El Karimia","Tadjna","Taougrite","Beni Haoua","Sobha","Harchoun","Ouled Fares","Sidi Akkacha","Boukadir","Beni Rached","Talassa","Herenfa","Oued Goussine","Djendel","El Marsa","Chettia","Ain Merane","Ouled Abbes","Sendjas","Zeboudja","Breira","Labdaa","Beni Bouattab","Ibn Badis","Touahria","Oum Drou","Fellaoucene"],
  "03 - Laghouat": ["Laghouat","Ksar El Hirane","Bennasser Ben Chohra","Sidi Makhlouf","Hassi Delaa","Hassi R'mel","Ain Mahdi","Tadjemout","Kheneg","Gueltat Sidi Saad","Ain Sidi Ali","Beidha","Brida","El Ghicha","Hadj Mechri","Sebgag","Oued Morra","Oued M'zi","El Haouaita","El Houaita","Taouila"],
  "04 - Oum El Bouaghi": ["Oum El Bouaghi","Ain Beida","Ain M'lila","Behir Chergui","El Amiria","Souk Naamane","Zorg","El Djazia","Bir Chouhada","Hanchir Toumghani","Ain Babouche","F'kirina","Ain Diss","Fidh El Anasser","Ain Kercha","Ouled Hamla","Dhalaa","Ksar Sbahi","Ain Zitoun","Ouled Zouai","Boulhaf Dyr"],
  "05 - Batna": ["Batna","Ghassira","Maafa","Merouana","Seriana","Ain Touta","Tazoult","N'gaous","Guigba","Inoughissen","Ouyoun El Assafir","Djerma","Bitam","Tilatou","Ain Djasser","Ouled Aouf","Hidoussa","Seggana","Ichmoul","Ouled Selam","Taxlent","Gosbat","Oued El Ma","Boulhilat","Lazrou","Tighorgat","Tighanimine","El Hassi","Abdelkader Azzouza","Ain Yagout","El Aouinet","Larbaa","El Madher","Menaa","El M'doukal","El Qantara","T'kout","Ain Tzit","Boumia"],
  "06 - Bejaia": ["Bejaia","Amizour","Ferraoun","Taourirt Ighil","Chelata","Akbou","Ighram","Amalou","Ighil Ali","Fenaïa Il Maten","Tizi N'Berber","Beni Maouche","Darguina","Sidi Aich","El Kseur","Melbou","Aokas","Beni Djellil","Adekar","Akfadou","Leflaye","Kherrata","Draa El Caïd","Tifra","Oued Ghir","Bouhamza","Beni K'sila","Kendira","Tala Hamza","Barbacha","Beni Ksila","Souk El Tenine","M'cisna","Tinebdar","Tichy","Oued Sebt"],
  "07 - Biskra": ["Biskra","Oumache","Branis","Chetma","Ech Chaiba","Sidi Okba","Ain Naga","El Haouch","Zeribet El Oued","Besbes","El Feidh","El Ghrous","El Kantara","Tolga","Lioua","Lichana","Ourlal","Mlili","Foughala","El Benoud","M'Chounech","Bouchagroun","El Hadjeb","Meziraa","Doucen"],
  "08 - Bechar": ["Bechar","Erg Ferradj","Lahmar","Beni Ounif","Beni Abbes","Taghit","El Ouata","Meridja","Igli","Kerzaz","Meniaa","Timoudi","Boukais","Ouled Khodeija","Abadla"],
  "09 - Blida": ["Blida","Oued El Alleug","Meftah","Bouarfa","Larbaa","Mouzaia","Soumaa","Meftah","Ben Khellil","Souhane","Ouled Selama","Bouinan","Ain Romana","Chiffa","Chrea","Hammam Melouane","El Affroun","Chebli","Bougara","Guerrouaou","Beni Tamou","Ben Choud"],
  "10 - Bouira": ["Bouira","El Asnam","Haizer","Bir Ghbalou","Hannifia","Oued El Berdi","Bordj Okhris","M'Chedallah","Saharidj","Mezdour","Ath Mansour","El Adjiba","Guerrouma","Aghbalou","Aïn Lahdjar","Bechloul","Boukram","Ain Turk","Taguedite","Ouled Rached","Ridane","Maala","Sour El Ghozlane"],
  "11 - Tamanrasset": ["Tamanrasset","Abalessa","In Ghar","In Guezzam","Foggaret Ezzaouia","Tazrouk","Tin Zaouatine","Ideles"],
  "12 - Tebessa": ["Tebessa","Cheria","Stah Guentis","El Aouinet","Laverdure","Negrine","Bir El Ater","Tlidjene","Ain Zerga","Ouenza","El Malabiod","Hammamet","Ferkane","Bir Mokkadem","Oum Ali","Safsaf El Ouesra","El Houidjbet"],
  "13 - Tlemcen": ["Tlemcen","Remchi","El Fehoul","Sebdou","Beni Mester","Ain Tallout","Ghazaouet","Souahlia","Msirda Fouaga","Ain Fezza","Ouled Riyah","Bab El Assa","Dar Yaghmouracene","Fellaoucene","Ain Ghoraba","Chetouane","Mansourah","El Khmis","Sabra","Terni Beni Hdiel","Zenata","Beni Snous","Beni Boussaid","Hammam Boughrara","Sidi Abdelli","Azails","Tienet","Honaine","Nedroma","Maghnia","Hammam Boughrara","Ben Sekrane","Ain Kebira","El Gor"],
  "14 - Tiaret": ["Tiaret","Mechraa Safa","Ain Bouchekif","Sidi Ali Mellal","Ain Zarit","Bougara","Guertoufa","Sidi Hosni","Dahmouni","Ain Kermes","Ksar Chellala","Meghila","Ain El Hadid","Ouled Djillali","Frenda","Ain Deheb","Rechaiga","Naima","Mahia","Rahouia","Tousnina","Tidda","Sougueur","Sidi Abderrahmane","Chehaida","Sbaïne","Oued Lili","Maamoura","Ain El Hadid"],
  "15 - Tizi Ouzou": ["Tizi Ouzou","Ain El Hammam","Akbil","Freha","Souamaa","Mechtras","Azazga","Iloula Oumalou","Yakouren","Larba Nath Irathen","Tizi Gheniff","Bounouh","Ain Zaouia","Mikès","Ouaguenoun","Ain El Hammam","Azeffoun","Tigzirt","Dellys","Boghni","Makouda","Draa Ben Khedda","Tizi Rached","Beni Zmenzer","Iferhounene","Agouni Gueghrane","Ouadhias","Ain Aïcha","Akerrou","Aïn El Aïcha","Tadmait","Tirmitine","Abi Youcef","Bouzeguene","Aïn El Assal","Imsouhal","Sidi Namane","Aïn Zaouia"],
  "16 - Alger": ["Alger Centre","Sidi M'hamed","El Madania","Belouizdad","Bab El Oued","Bologhine","Casbah","Oued Koriche","Bir Mourad Raïs","El Biar","Bouzareah","Birkhadem","El Harrach","Baraki","Oued Smar","Bourouba","Hussein Dey","Kouba","Bachdjerah","Dar El Beïda","Bab Ezzouar","Ben Aknoun","Dely Brahim","Hammamet","Rais Hamidou","Djasr Kasentina","El Mouradia","Hydra","Mohammadia","Bordj El Bahri","El Marsa","Ain Taya","Bordj El Kiffan","El Magharia","Beni Messous","Les Eucalyptus","Birtouta","Tessala El Merdja","Ouled Chebel","Sidi Moussa","Ain Benian","Staoueli","Zeralda","Mahelma","Rahmania","Souidania","Cheraga","Ouled Fayet","El Achour","Draria","Douera"],
  "17 - Djelfa": ["Djelfa","Moudjbara","El Guedid","Hassi Bahbah","Ain Maabed","Sed Rahal","Faidh El Botma","Birine","Selmana","Ain Chouhada","Oum Laadham","Dar Chioukh","Charef","Guernini","Sidi Baizid","Mliliha","El Idrissia","Zaccar","El Khemis","Beni Yacoub","Bouira Lahdab","Had Sahary"],
  "18 - Jijel": ["Jijel","El Aouana","Ziama Mansouriah","El Milia","Chekfa","Chahna","El Ancer","Sidi Maarouf","Selma Benziada","Djimla","Kaous","Taher","Ouled Yahia Khedrouche","Boudriaa Ben Yadjis","Beni Yadjis","El Kennar Nouchfi","Ouled Rabah","Emir Abdelkader","Texenna","Jijel","Ghebala","Bouraoui Belhadef","Dj. Rabta"],
  "19 - Setif": ["Setif","Ain El Kebira","Guenzet","Ain Azel","Ouled Addouane","Beni Aziz","Boutaleb","Ain Legradj","Ain Arnat","Ain Abessa","Djemila","Arbalou","Beni Ourtilane","Amoucha","Bir El Arch","Beidha Bordj","Ras El Oued","El Eulma","El Ouricia","Ain Oulmene","Salah Bey","Guidjel","Ain Sebt","Ain Lahdjar","Bir Haddada","Hamma","Dehamcha","Mezloug","Bir El Arch","Ouled Si Ahmed","Tizi N'Bechar","Guellal","Ouled Tebben","El Ouldja"],
  "20 - Saida": ["Saida","Doui Thabet","Ain El Hadjar","Ouled Brahim","Sidi Ahmed","Youb","Moulay Larbi","Ain Soltane","Maamoura","Ain Sekhouna"],
  "21 - Skikda": ["Skikda","Ben Azzouz","El Hadaïk","El Harrouch","Zerdezas","Oum Toub","Tamalous","Bin El Ouiden","Ramdane Djamel","Fil Fila","Sidi Mezghiche","Ain Bouziane","El Marsa","Collo","Beni Bechir","Kerkera","Ouled Attia","Ain Cherchar","Bekkouche Lakhdar","Hamadi Krouma","Ouled Zouai","Es-Senir","Azzaba","Djendel Saadi Mohamed","Aïn Zouit","Cheraia","Benizouh"],
  "22 - Sidi Bel Abbes": ["Sidi Bel Abbes","Tessala","Ain El Berd","Sidi Khaled","Sidi Lahcene","Oued Sebaa","Ben Badis","El Hachem","Boudjebha El Bordj","Mostefa Ben Brahim","Marhoum","Bedrabine El Mokrani","Ras El Ma","Mezaourou","Bir El Ham","Tabia","Tilmouni","Merine","Ain Kada","Chetouane Belaila","Ain Thrid","Sehala Thaoura","Redjem Demouche","Sidi Ali Benyoub","Sidi Ali Boussidi","Boukhanafis","Oued Taourira","Zerouala","Tenira","Badreddin El Mokrani","Ain Adden"],
  "23 - Annaba": ["Annaba","El Bouni","El Hadjar","Berrahal","Cheurfa","Seraidi","Ain El Berda","Chetaibi","Sidi Amar","Treat"],
  "24 - Guelma": ["Guelma","Nechmaya","Ain Makhlouf","Ain Ben Beida","Tamlouka","Bordj Sabat","Hammam Debagh","Helia","Ain Larbi","Medjez Sfa","Houari Boumediene","Ain Sandel","Guelaat Bou Sbaa","Djeballah Khemissi","Ain Ben Beida","Belkheir","Thalaat","Oued Fragha","Bled Aïoun","Roknia","Bendjerrah","Oued Zenati","Hammam N'bails","Bouhamdane","Ain Regada","El Fedjoudj","Dahouara"],
  "25 - Constantine": ["Constantine","Hamma Bouziane","Ain Smara","Didouche Mourad","Beni Hamidane","Ibn Ziad","Ain Abid","Ouled Rahmoune","Zighoud Youcef","El Khroub","Messaoud Boudjeriou"],
  "26 - Medea": ["Medea","Ain Boucif","El Aissaouia","Ouled Deide","Moudjbar","Sidi Zahar","Ain El Ksiba","Sidi Damed","Tiaret","Oum El Djallil","El Hamdania","Seghouane","Bouchrahil","Berrouaghia","Mihoub","Mezerana","Benchicao","Tizi Mahdi","El Omaria","Ain Ouksir","Oued Harbil","Kef Lakhdar","Bir Ben Laabed","Boughedou","Derrag","Deux Bassins","Ain Tit","Magra","Sidi Naamane"],
  "27 - Mostaganem": ["Mostaganem","Mesra","Stidia","Ain Boudinar","Hassi Mameche","Kheir Eddine","Ain Sidi Cherif","Souaflia","Sirat","Mansourah","Tazgait","Sidi Belattar","Ain Tedles","Sour","Safsaf","Bouguirat","Fornaka","Oued El Kheir","El Hassiane","Kheireddine","Abdelmalek Ramdane","Benabdelmalek Ramdane","Touahria"],
  "28 - M'Sila": ["M'Sila","Sidi Aïssa","Ain El Melh","Magra","Berhoum","Ain El Hadjel","Ain Khadra","Djebel Messaad","Ouled Derradj","Tamsa","Medjedel","Ouled Addi Guebala","Beni Ilmane","Ain El Rich","Souama","Hammam Dhalaa","Maadid","El Houamed","Sidi Ameur","Oued Chaïr","Chellal","Khoubana","Oued Sly","El Hamel"],
  "29 - Mascara": ["Mascara","Tizi","Ain Fares","Tighennif","Ain Feka","Sidi Abdeldjebar","Froha","Hacine","Maoussa","Mohammadia","Sig","Oued El Abtal","Ain Farset","Sidi Kada","Matemore","Ghomri","Nesmoth","El Ghomri","Beniane","El Keurt","Ferraguig","Gueitna","Alaimia","Zahana","El Hachem","Khalouia","Oggaz","Sidi Boussaid","Bou Hanifia","Medroussa","El Bordj"],
  "30 - Ouargla": ["Ouargla","Ain El Beida","N'Goussa","Sidi Khouiled","Hassi Messaoud","El Borma","Rhourd Nouss","Touggourt","Temacine","Megarine","El Allia","Taibet","Blidet Amor","Sidi Slimane","Zaouia El Abidia","Tebesbest"],
  "31 - Oran": ["Oran","Es Senia","Bir El Djir","Hassi Bounif","Arzew","Bethioua","Marsat El Hadjadj","Ain El Turk","El Ancor","Bousfer","Mers El Kebir","Ben Freha","El Braya","Oued Tlelat","Tafraoui","Sidi Chami","Boufatis","Messerghin","Boutlelis","Ain Kerma","El Kerma"],
  "32 - El Bayadh": ["El Bayadh","Rogassa","Sidi Slimane","Boualem","El Bnoud","Cheguig","Sidi Ameur","Ghassoul","Brezina","El Abiodh Sidi Cheikh","Ain El Orak","Arbaouat"],
  "33 - Illizi": ["Illizi","Djanet","In Amenas","Bordj Omar Driss"],
  "34 - Bordj Bou Arreridj": ["Bordj Bou Arreridj","El Hamadia","Rabta","Ridane","Mansoura","El Anseur","Bir Kasdali","Teniet En Nasr","Ras El Oued","El Main","El Achir","Djaafra","Khelil","Ben Daoud","Tefreg","Bordj Zemmoura","Taglait","Medjana","Colla","Hasnaoua","El Mhir","Aïn Tesra","Ouled Ibrahim"],
  "35 - Boumerdes": ["Boumerdes","Ouled Moussa","Larbaa Nath Irathen","Tidjelabine","Chabet El Ameur","Thenia","Timezrit","Si Mustapha","Naciria","Djinet","Isser","Zemmouri","Sidi Daoud","Boudouaou","Afir","Dellys","Taourga","Baghlia","Souk El Had","Ben Choud","Ouled Aissa","Khemis El Khechna"],
  "36 - El Tarf": ["El Tarf","Boutheldja","Ain Kerma","Lac Des Oiseaux","El Kala","Bougous","Oum Teboul","Besbes","Chihani","Ain El Assel","Bouteldja","Hammamet","Zerizer","Souarekh","Dréan","El Aioun","Chebaïta Mokhtar"],
  "37 - Tindouf": ["Tindouf","Oum El Assel"],
  "38 - Tissemsilt": ["Tissemsilt","Ammari","Sidi Slimane","Ouled Bessem","Bordj Bounaama","Theniet El Had","Layoune","Lazharia","Boucaïd","Khemisti","Ain Adda","Maâlba","Sidi Lantri","Beni Chaib"],
  "39 - El Oued": ["El Oued","Robbah","Oued El Alenda","Bayadha","Nakhla","Guemar","Kouinine","Reguiba","Hamraia","Taghzout","Debila","Hamraia","Still","Mih Ouansa","El Ogla","Douar El Ma","Sidi Aoun","Trifaoui","Magrane","Beni Guecha","Ourmes","Tendla"],
  "40 - Khenchela": ["Khenchela","Kais","Babar","El Hamma","Chechar","El Oueldja","Baghai","Ain Touila","Tamza","Djellal","Ouled Rechache","El Mahmal","Ensigha","Remila"],
  "41 - Souk Ahras": ["Souk Ahras","Sedrata","Hanancha","Mechroha","Taoura","Ouled Driss","Ouled Moumen","Sidi Fredj","Bir Bou Hocine","Ouled Yahia","Ragouba","Khemissa","M'Daourouch","Drea","Bir Bou Hocine","Ain Zana","Zaarouria","Ain Soltane","Terraguelt","Oum El Adhaim"],
  "42 - Tipaza": ["Tipaza","Menaceur","Larhat","Douaouda","Bou Ismail","Hadjout","Ahmar El Ain","Bourkika","Khemisti","Ain Tagourait","Nador","Chaïba","Sidi Rached","Sidi Ghiles","Cherchell","Damous","Meurad","Ain Baloul","Messelmoun","Gouraya"],
  "43 - Mila": ["Mila","Ferdjioua","Chelghoum Laid","Oued Athmania","Ain Tine","Sidi Merouane","Teleghma","Tassadane Haddada","Benyahia Abderrahmane","Ahmed Rachedi","Bouhatem","Oued Seguen","Grarem Gouga","El Mechira","Hamala","Ain Mellouk","Ain Beida Harriche","Rouached","Zeghaia","Terrai Bainen","Derradji Bousselah","Chigara"],
  "44 - Ain Defla": ["Ain Defla","El Abadia","Djemaa Ouled Chikh","Bathia","Bourached","Mekhatria","Oued Djemaa","Tacheta Zougagha","Ain Beniane","El Amra","Ain Soltane","Hoceinia","Rouina","Hammam Righa","Ain Lechiakh","El Hassania","El Maine","Djendel","Ain Torki","Khemis Miliana","Ain Bouyahia","Barbouche","Sidi Lakhdar"],
  "45 - Naama": ["Naama","Mecheria","Ain Sefra","Tiout","Sfissifa","Moghrar","Assela","Djeniane Bourzeg","Ain Ben Khellil","Makman Ben Amer","Kasdir"],
  "46 - Ain Temouchent": ["Ain Temouchent","El Malah","Hammam Bou Hadjar","Ain Kihal","Beni Saf","El Amria","Hassasna","Ain El Arba","Ouled Kihal","Aoubellil","Sid El Abed","Bouzedjar","Chentouf","Aghlal","Terga"],
  "47 - Ghardaia": ["Ghardaia","Daya Ben Dahoua","Berriane","El Guerrara","Metlili","Bounoura","El Atteuf","Mansoura","Zelfana","Sebseb"],
  "48 - Relizane": ["Relizane","Oued El Djemaa","Yellel","Zemmoura","Djidiouia","Sidi M'hamed Benali","Oued Rhiou","Ain El Hamam","Tachtiouine","El Hamadna","Beni Zentis","Sidi Lazreg","Ammi Moussa","Mendes","Mazouna","Sidi Khettab","Ain Tarek","El Matmar","El Guettar","Sidi Abd El Djabar","Belaassel Bouzegza","Lahlef","Ain El Djazair","Ain Rahma","Ain Tarek"],
  "49 - Timimoun": ["Timimoun","Ouled Said","Charouine","Aougrout","Talmine","Deldoul","Metarfa","Ksar Kaddour","Ouled Aïssa"],
  "50 - Bordj Badji Mokhtar": ["Bordj Badji Mokhtar","Timiaouine"],
  "51 - Ouled Djellal": ["Ouled Djellal","Sidi Khaled","El Hadjira","Ras El Miad","Doucen"],
  "52 - Beni Abbes": ["Beni Abbes","Igli","El Ouata","Kerzaz","Ksabi"],
  "53 - In Salah": ["In Salah","Foggaret Ezzaouia","In Ghar"],
  "54 - In Guezzam": ["In Guezzam","Tin Zaouatine"],
  "55 - Touggourt": ["Touggourt","Megarine","Tebesbest","El Allia","Taibet","Blidet Amor","Sidi Slimane","Zaouia El Abidia"],
  "56 - Djanet": ["Djanet","Bordj Omar Driss"],
  "57 - El M'Ghair": ["El M'Ghair","Djamaa","Reguiba","Sidi Amrane","Oum Touyour","Sidi Khellil"],
  "58 - El Meniaa": ["El Meniaa","Hassi Gara","Berezga"]
};

// ============================
// GOOGLE APPS SCRIPT URL
// ============================
// IMPORTANT: Replace this with your Google Apps Script Web App URL after setup
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

// ============================
// LETTER-BY-LETTER TITLE
// ============================
function animateTitleLetters() {
    const title = document.querySelector('.main-title');
    if (!title) return;
    const text = title.textContent.trim();
    title.textContent = '';
    const words = text.split(' ');
    const baseDelay = 300;
    let charIndex = 0;

    words.forEach((word, wi) => {
        // wrap each word in a no-break container
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';

        [...word].forEach((char) => {
            const span = document.createElement('span');
            span.className = 'char';
            span.textContent = char;
            span.style.animationDelay = (baseDelay + charIndex * 60) + 'ms';
            wordSpan.appendChild(span);
            charIndex++;
        });

        title.appendChild(wordSpan);

        // add space between words (except after last word)
        if (wi < words.length - 1) {
            const spaceSpan = document.createElement('span');
            spaceSpan.className = 'char word-space';
            spaceSpan.textContent = '\u00A0';
            spaceSpan.style.animationDelay = (baseDelay + charIndex * 60) + 'ms';
            title.appendChild(spaceSpan);
            charIndex++;
        }
    });
}

// ============================
// PAGE LOADER
// ============================
// ============================
// SCROLL TO TOP ON LOAD
// ============================
document.addEventListener("DOMContentLoaded", function () {
    // If gated, initialize only coming soon handlers and exit early
    if (document.documentElement.classList.contains('gated')) {
        initComingSoon();
        return;
    }

    window.scrollTo(0, 0);

    // Use the loader already in HTML
    const loader = document.getElementById('page-loader') || document.querySelector('.page-loader');

    // Hide loader after 2000ms
    setTimeout(() => {
        if (loader) loader.classList.add('hidden');
    }, 2000);

    animateTitleLetters();
    setupNavScroll();
    setupHamburger();
    setupScrollReveal();
    setupCartButtons();
    setupColorSelectors();
    setupContactForm();
    setupRippleEffect();
    setupStaggeredShopItems();
    setupBackToTop();
    setupNavBrand();
    setup3DCardTilt();
    init3DCandle();
    setupAmbientSound();
});

// ============================
// COLOR SELECTORS
// ============================
function setupColorSelectors() {
    document.querySelectorAll('.color-selector').forEach(selector => {
        selector.querySelectorAll('.color-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                selector.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });
    });
}

function getSelectedColor(shopItem) {
    const activeBtn = shopItem.querySelector('.color-btn.active');
    return activeBtn ? activeBtn.getAttribute('data-color') : 'White';
}

// ============================
// NAV BRAND (show on mobile)
// ============================
function setupNavBrand() {
    const brand = document.querySelector('.nav-brand');
    if (!brand) return;
    function toggle() {
        brand.style.display = window.innerWidth <= 768 ? 'block' : 'none';
    }
    toggle();
    window.addEventListener('resize', toggle);
}

// ============================
// NAV SCROLL EFFECT
// ============================
function setupNavScroll() {
    const header = document.querySelector('.animated-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
}

// ============================
// HAMBURGER MENU
// ============================
function setupHamburger() {
    const btn = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('mobile-open');
        btn.classList.toggle('open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    document.addEventListener('click', (e) => {
        if (!btn.contains(e.target) && !nav.contains(e.target)) {
            closeNav();
        }
    });
}

function closeNav() {
    const btn = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    nav.classList.remove('mobile-open');
    if (btn) btn.classList.remove('open');
    document.body.style.overflow = '';
}

// ============================
// BACK TO TOP
// ============================
function setupBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('show', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================
// SCROLL REVEAL
// ============================
function setupScrollReveal() {
    const targets = [
        '.background-section',
        '.additional-content',
        '.about-image',
        '.about-text',
        '.shop-title',
        '.contact-title',
        '.contact-content',
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.12 });

    targets.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => observer.observe(el));
    });
}

// ============================
// STAGGERED SHOP ITEMS
// ============================
function setupStaggeredShopItems() {
    const items = document.querySelectorAll('.shop-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const siblings = [...entry.target.parentElement.children];
                const idx = siblings.indexOf(entry.target);
                const delay = (idx % 4) * 100;
                entry.target.style.transitionDelay = delay + 'ms';
                entry.target.classList.add('visible');
            } else {
                entry.target.style.transitionDelay = '0ms';
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.08 });

    items.forEach(item => observer.observe(item));
}

// ============================
// RIPPLE EFFECT
// ============================
function setupRippleEffect() {
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('button');
        if (!btn || btn.classList.contains('color-btn')) return;

        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
    });
}

// ============================
// CART
// ============================
let cart = [];

function setupCartButtons() {
    document.querySelectorAll('.shop-item-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const shopItem = this.closest('.shop-item');
            const color = getSelectedColor(shopItem);
            openOrderModal(this, color);
        });
    });
}

function updateNavCartCount() {
    const countEl = document.getElementById('nav-cart-count');
    if (!countEl) return;
    const total = cart.reduce((s, i) => s + i.quantity, 0);
    countEl.textContent = total;
    countEl.classList.toggle('show', total > 0);
}

function addToCartDirect(title, price, color) {
    const key = title + '|' + color;
    const existing = cart.find(i => i.key === key);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ key, name: title, price, color, quantity: 1 });
    }
    updateNavCartCount();
}

function openCart() {
    updateCart();
}

function updateCart() {
    let cartSection = document.getElementById("cart-section");

    if (!cartSection) {
        cartSection = document.createElement("section");
        cartSection.id = "cart-section";
        document.body.appendChild(cartSection);
    }

    cartSection.innerHTML = "";
    cartSection.style.display = "flex";

    const overlay = document.createElement('div');
    overlay.style.cssText = `position:absolute;inset:0;`;
    overlay.addEventListener('click', closeCart);
    cartSection.appendChild(overlay);

    const cartContainer = document.createElement("div");
    cartContainer.id = "cart-container";
    cartContainer.style.cssText = `
        background:#fff;border-radius:20px;
        box-shadow:0 24px 64px rgba(0,0,0,0.18);
        padding:36px;width:460px;max-height:82vh;
        overflow-y:auto;position:relative;
        animation:cartIn 0.45s cubic-bezier(0.22,1,0.36,1);
    `;

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "&times;";
    closeButton.style.cssText = `
        background:transparent;border:none;font-size:28px;
        color:#666;cursor:pointer;position:absolute;
        top:14px;right:18px;line-height:1;
        transition:color 0.2s,transform 0.2s;
    `;
    closeButton.onmouseenter = () => { closeButton.style.color='#333'; closeButton.style.transform='rotate(90deg)'; };
    closeButton.onmouseleave = () => { closeButton.style.color='#666'; closeButton.style.transform='rotate(0)'; };
    closeButton.addEventListener("click", closeCart);
    cartContainer.appendChild(closeButton);

    const cartTitle = document.createElement('h2');
    cartTitle.textContent = '🕯 Your Cart';
    cartTitle.style.cssText = `font-family:'Cinzel',serif;font-size:1.4rem;color:#be8762;margin-bottom:24px;letter-spacing:0.05em;`;
    cartContainer.appendChild(cartTitle);

    if (cart.length === 0) {
        const empty = document.createElement("p");
        empty.textContent = "Your cart is empty.";
        empty.style.cssText = `text-align:center;font-size:1rem;color:#aaa;padding:30px 0;`;
        cartContainer.appendChild(empty);
    } else {
        cart.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.style.cssText = `
                margin-bottom:18px;padding-bottom:16px;
                border-bottom:1px solid #f0e9e0;
                display:flex;flex-direction:column;gap:6px;
            `;
            const colorDotStyle = `
                display:inline-block;width:12px;height:12px;border-radius:50%;
                background:${getColorHex(item.color)};border:1px solid #ddd;
                vertical-align:middle;margin-right:5px;
            `;
            itemDiv.innerHTML = `
                <h3 style="font-family:'Cinzel',serif;font-size:1rem;color:#333;">${item.name}</h3>
                <p style="color:#999;font-size:0.9rem;"><span style="${colorDotStyle}"></span>${item.color} · ${item.price.toLocaleString()} DA each</p>
                <div style="display:flex;align-items:center;gap:14px;margin-top:6px;">
                    <button onclick="adjustQuantity('${item.key}', -1)" style="background:#c49e85;color:#fff;border:none;width:32px;height:32px;border-radius:8px;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;" onmouseenter="this.style.background='#964040'" onmouseleave="this.style.background='#c49e85'">−</button>
                    <span style="font-size:1.05rem;font-weight:600;color:#333;min-width:20px;text-align:center;">${item.quantity}</span>
                    <button onclick="adjustQuantity('${item.key}', 1)" style="background:#c49e85;color:#fff;border:none;width:32px;height:32px;border-radius:8px;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;" onmouseenter="this.style.background='#964040'" onmouseleave="this.style.background='#c49e85'">+</button>
                    <span style="margin-left:auto;font-weight:700;color:#be8762;font-family:'Cinzel',serif;">${(item.price * item.quantity).toLocaleString()} DA</span>
                </div>
            `;
            cartContainer.appendChild(itemDiv);
        });

        const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
        const totalDiv = document.createElement("div");
        totalDiv.style.cssText = `margin:20px 0 10px;padding-top:16px;border-top:2px solid #f0e9e0;display:flex;justify-content:space-between;align-items:center;`;
        totalDiv.innerHTML = `
            <span style="font-family:'Cinzel',serif;font-size:1rem;color:#666;letter-spacing:0.05em;">TOTAL</span>
            <span style="font-family:'Cinzel',serif;font-size:1.3rem;color:#be8762;font-weight:600;">${total.toLocaleString()} DA</span>
        `;
        cartContainer.appendChild(totalDiv);

        const checkoutBtn = document.createElement("button");
        checkoutBtn.textContent = "Proceed to Order";
        checkoutBtn.style.cssText = `background:#be8762;color:#fff;padding:13px;font-size:0.88rem;font-family:'Raleway',sans-serif;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;border:none;border-radius:10px;width:100%;cursor:pointer;margin-top:16px;transition:background 0.3s;`;
        checkoutBtn.onmouseenter = () => { checkoutBtn.style.background = '#964040'; };
        checkoutBtn.onmouseleave = () => { checkoutBtn.style.background = '#be8762'; };
        checkoutBtn.addEventListener('click', () => {
            closeCart();
            openCheckoutModal(cart, total);
        });
        cartContainer.appendChild(checkoutBtn);
    }

    cartSection.appendChild(cartContainer);
}

function getColorHex(color) {
    const map = { 'White':'#ffffff','Beige':'#f5e6d3','Red':'#c0392b','Pink':'#f48fb1','Blue':'#5b8dd9' };
    return map[color] || '#ccc';
}

function adjustQuantity(key, delta) {
    const item = cart.find(i => i.key === key);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) cart = cart.filter(i => i.key !== key);
    updateNavCartCount();
    updateCart();
}

function closeCart() {
    const cartSection = document.getElementById("cart-section");
    if (!cartSection) return;
    const container = document.getElementById('cart-container');
    if (container) {
        container.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px) scale(0.97)';
    }
    setTimeout(() => { cartSection.style.display = "none"; }, 320);
}

// ============================
// ORDER MODAL (single product)
// ============================
function openOrderModal(button, color) {
    const title = button.getAttribute('data-title');
    const price = parseInt(button.getAttribute('data-price'));

    const overlay = document.createElement('div');
    overlay.id = 'order-modal-overlay';
    overlay.style.cssText = `
        position:fixed;inset:0;background:rgba(0,0,0,0.5);
        backdrop-filter:blur(5px);z-index:9999;
        display:flex;align-items:center;justify-content:center;
        animation:fadeIn 0.3s ease;
    `;

    const modal = document.createElement('div');
    modal.style.cssText = `
        background:#fff;border-radius:24px;
        box-shadow:0 32px 80px rgba(0,0,0,0.2);
        padding:40px;width:520px;max-width:95vw;
        max-height:90vh;overflow-y:auto;
        position:relative;
        animation:cartIn 0.4s cubic-bezier(0.22,1,0.36,1);
    `;

    modal.innerHTML = buildOrderForm(title, price, color);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeOrderModal();
    });

    // Setup wilaya → commune logic
    setupWilayaSelect();
    setupDeliveryToggle();

    // Setup form submission
    document.getElementById('order-form').addEventListener('submit', function(e) {
        e.preventDefault();
        submitOrder(this, title, price, color);
    });

    // Add to cart too
    addToCartDirect(title, price, color);
    updateNavCartCount();

    // Animate button
    button.textContent = '✓ Added!';
    button.style.background = '#7a9a6b';
    setTimeout(() => {
        button.textContent = 'Order Now';
        button.style.background = '';
    }, 1500);
}

function buildOrderForm(title, price, selectedColor) {
    const wilayas = Object.keys(ALGERIA_DATA).map(w =>
        `<option value="${w}">${w}</option>`
    ).join('');

    return `
    <button type="button" onclick="closeOrderModal()" style="
        position:absolute;top:16px;right:20px;background:none;border:none;
        font-size:26px;cursor:pointer;color:#999;line-height:1;
        transition:color 0.2s,transform 0.2s;
    " onmouseenter="this.style.color='#333';this.style.transform='rotate(90deg)'"
       onmouseleave="this.style.color='#999';this.style.transform='rotate(0)'">&times;</button>

    <div style="margin-bottom:28px;">
        <h2 style="font-family:'Cinzel',serif;font-size:1.3rem;color:#be8762;margin-bottom:6px;">Place Your Order</h2>
        <p style="font-family:'Cormorant Garamond',serif;font-size:1.1rem;color:#888;font-style:italic;">${title} · <span style="color:#be8762;font-weight:600;">${price.toLocaleString()} DA</span></p>
        <p style="font-size:0.85rem;color:#aaa;margin-top:4px;">Color: <span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${getColorHex(selectedColor)};border:1px solid #ddd;vertical-align:middle;margin-right:4px;"></span>${selectedColor}</p>
    </div>

    <form id="order-form" autocomplete="off">

        <div style="margin-bottom:16px;">
            <label style="display:block;font-family:'Raleway',sans-serif;font-size:0.78rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#888;margin-bottom:6px;">Full Name</label>
            <input type="text" name="fullName" required placeholder="Your full name"
                style="${inputStyle()}">
        </div>

        <div style="margin-bottom:16px;">
            <label style="display:block;font-family:'Raleway',sans-serif;font-size:0.78rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#888;margin-bottom:6px;">Phone Number</label>
            <input type="tel" name="phone" required placeholder="05X XXX XX XX"
                pattern="[0-9]{10}" title="Enter a valid 10-digit Algerian phone number"
                style="${inputStyle()}">
        </div>

        <div style="margin-bottom:16px;">
            <label style="display:block;font-family:'Raleway',sans-serif;font-size:0.78rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#888;margin-bottom:6px;">Wilaya</label>
            <select id="wilaya-select" name="wilaya" required style="${inputStyle()} cursor:pointer;">
                <option value="">-- Select Wilaya --</option>
                ${wilayas}
            </select>
        </div>

        <div style="margin-bottom:16px;">
            <label style="display:block;font-family:'Raleway',sans-serif;font-size:0.78rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#888;margin-bottom:6px;">Commune</label>
            <select id="commune-select" name="commune" required style="${inputStyle()} cursor:pointer;" disabled>
                <option value="">-- Select Wilaya First --</option>
            </select>
        </div>

        <div style="margin-bottom:20px;">
            <label style="display:block;font-family:'Raleway',sans-serif;font-size:0.78rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#888;margin-bottom:10px;">Delivery Method (Yalidine)</label>
            <div style="display:flex;gap:12px;">
                <label style="flex:1;cursor:pointer;" id="delivery-office-label">
                    <input type="radio" name="delivery" value="office" checked style="display:none;" id="radio-office">
                    <div class="delivery-option selected" id="option-office" style="${deliveryOptionStyle(true)}">
                        <div style="font-size:1.4rem;margin-bottom:6px;">🏢</div>
                        <div style="font-family:'Cinzel',serif;font-size:0.82rem;font-weight:600;color:#333;">Office Pickup</div>
                        <div style="font-size:0.78rem;color:#be8762;font-weight:600;margin-top:4px;">400 DA</div>
                    </div>
                </label>
                <label style="flex:1;cursor:pointer;" id="delivery-home-label">
                    <input type="radio" name="delivery" value="home" style="display:none;" id="radio-home">
                    <div class="delivery-option" id="option-home" style="${deliveryOptionStyle(false)}">
                        <div style="font-size:1.4rem;margin-bottom:6px;">🏠</div>
                        <div style="font-family:'Cinzel',serif;font-size:0.82rem;font-weight:600;color:#333;">Home Delivery</div>
                        <div style="font-size:0.78rem;color:#be8762;font-weight:600;margin-top:4px;">600 DA</div>
                    </div>
                </label>
            </div>
        </div>

        <div id="home-address-field" style="display:none;margin-bottom:16px;">
            <label style="display:block;font-family:'Raleway',sans-serif;font-size:0.78rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#888;margin-bottom:6px;">Full Address</label>
            <textarea name="address" placeholder="Street, neighbourhood, building..." rows="2"
                style="${inputStyle()} resize:vertical;"></textarea>
        </div>

        <div id="order-summary" style="
            background:#fdf8f4;border:1px solid #f0e9e0;border-radius:12px;
            padding:16px;margin-bottom:20px;
        ">
            <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                <span style="font-size:0.9rem;color:#888;">Product</span>
                <span style="font-size:0.9rem;color:#333;font-weight:600;">${price.toLocaleString()} DA</span>
            </div>
            <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                <span style="font-size:0.9rem;color:#888;">Delivery</span>
                <span style="font-size:0.9rem;color:#333;font-weight:600;" id="delivery-price-display">400 DA</span>
            </div>
            <div style="border-top:1px solid #e8ddd4;margin:10px 0;"></div>
            <div style="display:flex;justify-content:space-between;">
                <span style="font-family:'Cinzel',serif;font-size:0.95rem;color:#666;">TOTAL</span>
                <span style="font-family:'Cinzel',serif;font-size:1.1rem;color:#be8762;font-weight:700;" id="order-total-display">${(price+400).toLocaleString()} DA</span>
            </div>
        </div>

        <input type="hidden" name="productName" value="${title}">
        <input type="hidden" name="productPrice" value="${price}">
        <input type="hidden" name="color" value="${selectedColor}">

        <button type="submit" id="submit-order-btn" style="
            width:100%;padding:15px;
            background:linear-gradient(135deg,#be8762,#964040);
            color:#fff;border:none;border-radius:12px;
            font-family:'Raleway',sans-serif;font-size:0.9rem;
            font-weight:700;letter-spacing:0.12em;text-transform:uppercase;
            cursor:pointer;transition:all 0.3s ease;
            box-shadow:0 4px 16px rgba(190,135,98,0.4);
        " onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 24px rgba(190,135,98,0.5)'"
           onmouseleave="this.style.transform='none';this.style.boxShadow='0 4px 16px rgba(190,135,98,0.4)'">
            ✓ Confirm Order
        </button>

    </form>
    `;
}

function inputStyle() {
    return `
        width:100%;padding:12px 14px;
        border:1.5px solid #e0d5c8;border-radius:10px;
        font-size:0.95rem;font-family:'Raleway',sans-serif;
        background:#fdfaf6;color:#444;
        box-sizing:border-box;
        transition:border-color 0.3s,box-shadow 0.3s;
        outline:none;
    `;
}

function deliveryOptionStyle(selected) {
    return `
        border:2px solid ${selected ? '#be8762' : '#e0d5c8'};
        border-radius:12px;padding:14px;text-align:center;
        background:${selected ? '#fdf8f4' : '#fff'};
        transition:all 0.25s ease;
    `;
}

function setupWilayaSelect() {
    const wilayaSelect = document.getElementById('wilaya-select');
    const communeSelect = document.getElementById('commune-select');
    if (!wilayaSelect || !communeSelect) return;

    wilayaSelect.addEventListener('change', function() {
        const wilaya = this.value;
        communeSelect.innerHTML = '<option value="">-- Select Commune --</option>';
        communeSelect.disabled = !wilaya;

        if (wilaya && ALGERIA_DATA[wilaya]) {
            ALGERIA_DATA[wilaya].forEach(commune => {
                const opt = document.createElement('option');
                opt.value = commune;
                opt.textContent = commune;
                communeSelect.appendChild(opt);
            });
        }
    });

    // Focus styles
    [wilayaSelect, communeSelect].forEach(sel => {
        sel.addEventListener('focus', () => {
            sel.style.borderColor = '#be8762';
            sel.style.boxShadow = '0 0 0 3px rgba(190,135,98,0.15)';
        });
        sel.addEventListener('blur', () => {
            sel.style.borderColor = '#e0d5c8';
            sel.style.boxShadow = 'none';
        });
    });

    // All inputs focus styles
    document.querySelectorAll('#order-form input[type="text"], #order-form input[type="tel"], #order-form textarea').forEach(input => {
        input.addEventListener('focus', () => {
            input.style.borderColor = '#be8762';
            input.style.boxShadow = '0 0 0 3px rgba(190,135,98,0.15)';
        });
        input.addEventListener('blur', () => {
            input.style.borderColor = '#e0d5c8';
            input.style.boxShadow = 'none';
        });
    });
}

function setupDeliveryToggle() {
    const radioOffice = document.getElementById('radio-office');
    const radioHome = document.getElementById('radio-home');
    const optionOffice = document.getElementById('option-office');
    const optionHome = document.getElementById('option-home');
    const addressField = document.getElementById('home-address-field');
    const deliveryDisplay = document.getElementById('delivery-price-display');
    const totalDisplay = document.getElementById('order-total-display');

    const productPrice = parseInt(document.querySelector('input[name="productPrice"]').value);

    function updateDelivery(isHome) {
        const deliveryCost = isHome ? 600 : 400;
        const total = productPrice + deliveryCost;

        deliveryDisplay.textContent = deliveryCost.toLocaleString() + ' DA';
        totalDisplay.textContent = total.toLocaleString() + ' DA';
        addressField.style.display = isHome ? 'block' : 'none';

        if (isHome) {
            optionHome.style.cssText = deliveryOptionStyle(true);
            optionOffice.style.cssText = deliveryOptionStyle(false);
        } else {
            optionOffice.style.cssText = deliveryOptionStyle(true);
            optionHome.style.cssText = deliveryOptionStyle(false);
        }
    }

    document.getElementById('delivery-office-label').addEventListener('click', () => {
        radioOffice.checked = true;
        updateDelivery(false);
    });
    document.getElementById('delivery-home-label').addEventListener('click', () => {
        radioHome.checked = true;
        updateDelivery(true);
    });
}

async function submitOrder(form, title, price, color) {
    const submitBtn = document.getElementById('submit-order-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    submitBtn.style.opacity = '0.7';

    const formData = new FormData(form);
    const isHome = formData.get('delivery') === 'home';
    const deliveryCost = isHome ? 600 : 400;
    const total = price + deliveryCost;

    const orderData = {
        timestamp: new Date().toLocaleString('fr-DZ'),
        fullName: formData.get('fullName'),
        phone: formData.get('phone'),
        wilaya: formData.get('wilaya'),
        commune: formData.get('commune'),
        delivery: isHome ? 'Home Delivery (600 DA)' : 'Office Pickup (400 DA)',
        address: formData.get('address') || 'N/A',
        product: title,
        color: color,
        productPrice: price + ' DA',
        deliveryCost: deliveryCost + ' DA',
        total: total + ' DA'
    };

    try {
        // Send to Google Sheets only if URL is configured
        if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderData)
            });
        }

        // Success
        closeOrderModal();
        showOrderSuccess(orderData);
        cart = cart.filter(i => i.name !== title);
        updateNavCartCount();

    } catch (err) {
        closeOrderModal();
        showOrderSuccess(orderData);
        cart = cart.filter(i => i.name !== title);
        updateNavCartCount();
    }
}

function showOrderSuccess(order) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position:fixed;inset:0;background:rgba(0,0,0,0.5);
        backdrop-filter:blur(5px);z-index:9999;
        display:flex;align-items:center;justify-content:center;
    `;

    overlay.innerHTML = `
        <div style="
            background:#fff;border-radius:24px;padding:48px 40px;
            text-align:center;max-width:420px;width:92vw;
            animation:cartIn 0.4s cubic-bezier(0.22,1,0.36,1);
            box-shadow:0 32px 80px rgba(0,0,0,0.2);
        ">
            <div style="font-size:3rem;margin-bottom:16px;">🕯✨</div>
            <h2 style="font-family:'Cinzel',serif;color:#be8762;font-size:1.4rem;margin-bottom:10px;">Order Confirmed!</h2>
            <p style="color:#888;font-size:0.95rem;margin-bottom:24px;line-height:1.7;">
                Thank you <strong style="color:#333;">${order.fullName}</strong>!<br>
                Your order for <strong style="color:#be8762;">${order.product}</strong> (${order.color}) has been received.
            </p>
            <div style="background:#fdf8f4;border-radius:12px;padding:16px;text-align:left;margin-bottom:24px;font-size:0.88rem;color:#666;line-height:2;">
                📍 ${order.wilaya} · ${order.commune}<br>
                📦 ${order.delivery}<br>
                💰 Total: <strong style="color:#be8762;">${order.total}</strong>
            </div>
            <p style="font-size:0.82rem;color:#aaa;margin-bottom:24px;">We will contact you on <strong>${order.phone}</strong> to confirm your order.</p>
            <button onclick="this.closest('div[style]').remove()" style="
                background:linear-gradient(135deg,#be8762,#964040);
                color:#fff;border:none;border-radius:10px;
                padding:13px 32px;font-family:'Raleway',sans-serif;
                font-weight:600;font-size:0.88rem;letter-spacing:0.1em;
                text-transform:uppercase;cursor:pointer;
            ">Close</button>
        </div>
    `;

    document.body.appendChild(overlay);
    overlay.addEventListener('click', (e) => { if(e.target===overlay) overlay.remove(); });
}

// ============================
// CHECKOUT MODAL (from cart)
// ============================
function openCheckoutModal(cartItems, total) {
    const overlay = document.createElement('div');
    overlay.id = 'order-modal-overlay';
    overlay.style.cssText = `
        position:fixed;inset:0;background:rgba(0,0,0,0.5);
        backdrop-filter:blur(5px);z-index:9999;
        display:flex;align-items:center;justify-content:center;
        animation:fadeIn 0.3s ease;
    `;

    const modal = document.createElement('div');
    modal.style.cssText = `
        background:#fff;border-radius:24px;
        box-shadow:0 32px 80px rgba(0,0,0,0.2);
        padding:40px;width:520px;max-width:95vw;
        max-height:90vh;overflow-y:auto;
        position:relative;
        animation:cartIn 0.4s cubic-bezier(0.22,1,0.36,1);
    `;

    const wilayas = Object.keys(ALGERIA_DATA).map(w =>
        `<option value="${w}">${w}</option>`
    ).join('');

    const itemsSummary = cartItems.map(i =>
        `<div style="display:flex;justify-content:space-between;margin-bottom:6px;">
            <span style="font-size:0.88rem;color:#666;">${i.name} (${i.color}) x${i.quantity}</span>
            <span style="font-size:0.88rem;color:#333;font-weight:600;">${(i.price*i.quantity).toLocaleString()} DA</span>
        </div>`
    ).join('');

    modal.innerHTML = `
        <button type="button" onclick="closeOrderModal()" style="
            position:absolute;top:16px;right:20px;background:none;border:none;
            font-size:26px;cursor:pointer;color:#999;line-height:1;
        ">&times;</button>

        <div style="margin-bottom:28px;">
            <h2 style="font-family:'Cinzel',serif;font-size:1.3rem;color:#be8762;margin-bottom:6px;">Complete Your Order</h2>
        </div>

        <form id="order-form" autocomplete="off">
            <div style="margin-bottom:16px;">
                <label style="${labelStyle()}">Full Name</label>
                <input type="text" name="fullName" required placeholder="Your full name" style="${inputStyle()}">
            </div>
            <div style="margin-bottom:16px;">
                <label style="${labelStyle()}">Phone Number</label>
                <input type="tel" name="phone" required placeholder="05X XXX XX XX" pattern="[0-9]{10}" style="${inputStyle()}">
            </div>
            <div style="margin-bottom:16px;">
                <label style="${labelStyle()}">Wilaya</label>
                <select id="wilaya-select" name="wilaya" required style="${inputStyle()} cursor:pointer;">
                    <option value="">-- Select Wilaya --</option>
                    ${wilayas}
                </select>
            </div>
            <div style="margin-bottom:16px;">
                <label style="${labelStyle()}">Commune</label>
                <select id="commune-select" name="commune" required style="${inputStyle()} cursor:pointer;" disabled>
                    <option value="">-- Select Wilaya First --</option>
                </select>
            </div>

            <div style="margin-bottom:20px;">
                <label style="${labelStyle()}">Delivery Method (Yalidine)</label>
                <div style="display:flex;gap:12px;margin-top:8px;">
                    <label style="flex:1;cursor:pointer;" id="delivery-office-label">
                        <input type="radio" name="delivery" value="office" checked style="display:none;" id="radio-office">
                        <div id="option-office" style="${deliveryOptionStyle(true)}">
                            <div style="font-size:1.3rem;margin-bottom:4px;">🏢</div>
                            <div style="font-family:'Cinzel',serif;font-size:0.8rem;font-weight:600;color:#333;">Office Pickup</div>
                            <div style="font-size:0.78rem;color:#be8762;font-weight:600;margin-top:4px;">400 DA</div>
                        </div>
                    </label>
                    <label style="flex:1;cursor:pointer;" id="delivery-home-label">
                        <input type="radio" name="delivery" value="home" style="display:none;" id="radio-home">
                        <div id="option-home" style="${deliveryOptionStyle(false)}">
                            <div style="font-size:1.3rem;margin-bottom:4px;">🏠</div>
                            <div style="font-family:'Cinzel',serif;font-size:0.8rem;font-weight:600;color:#333;">Home Delivery</div>
                            <div style="font-size:0.78rem;color:#be8762;font-weight:600;margin-top:4px;">600 DA</div>
                        </div>
                    </label>
                </div>
            </div>

            <div id="home-address-field" style="display:none;margin-bottom:16px;">
                <label style="${labelStyle()}">Full Address</label>
                <textarea name="address" placeholder="Street, neighbourhood..." rows="2" style="${inputStyle()} resize:vertical;"></textarea>
            </div>

            <div id="order-summary" style="background:#fdf8f4;border:1px solid #f0e9e0;border-radius:12px;padding:16px;margin-bottom:20px;">
                ${itemsSummary}
                <div style="border-top:1px solid #e8ddd4;margin:10px 0;"></div>
                <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                    <span style="font-size:0.9rem;color:#888;">Products Total</span>
                    <span style="font-size:0.9rem;color:#333;font-weight:600;">${total.toLocaleString()} DA</span>
                </div>
                <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                    <span style="font-size:0.9rem;color:#888;">Delivery</span>
                    <span style="font-size:0.9rem;color:#333;font-weight:600;" id="delivery-price-display">400 DA</span>
                </div>
                <div style="border-top:1px solid #e8ddd4;margin:10px 0;"></div>
                <div style="display:flex;justify-content:space-between;">
                    <span style="font-family:'Cinzel',serif;font-size:0.95rem;color:#666;">TOTAL</span>
                    <span style="font-family:'Cinzel',serif;font-size:1.1rem;color:#be8762;font-weight:700;" id="order-total-display">${(total+400).toLocaleString()} DA</span>
                </div>
            </div>

            <input type="hidden" name="cartItems" value="${encodeURIComponent(JSON.stringify(cartItems))}">
            <input type="hidden" name="productPrice" value="${total}">

            <button type="submit" id="submit-order-btn" style="
                width:100%;padding:15px;
                background:linear-gradient(135deg,#be8762,#964040);
                color:#fff;border:none;border-radius:12px;
                font-family:'Raleway',sans-serif;font-size:0.9rem;
                font-weight:700;letter-spacing:0.12em;text-transform:uppercase;
                cursor:pointer;box-shadow:0 4px 16px rgba(190,135,98,0.4);
                transition:all 0.3s;
            ">✓ Confirm Order</button>
        </form>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeOrderModal();
    });

    setupWilayaSelect();
    setupDeliveryToggleCart(total);

    document.getElementById('order-form').addEventListener('submit', function(e) {
        e.preventDefault();
        submitCartOrder(this, cartItems, total);
    });
}

function labelStyle() {
    return `display:block;font-family:'Raleway',sans-serif;font-size:0.78rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#888;margin-bottom:6px;`;
}

function setupDeliveryToggleCart(productTotal) {
    const addressField = document.getElementById('home-address-field');
    const deliveryDisplay = document.getElementById('delivery-price-display');
    const totalDisplay = document.getElementById('order-total-display');
    const optionOffice = document.getElementById('option-office');
    const optionHome = document.getElementById('option-home');

    function updateDelivery(isHome) {
        const deliveryCost = isHome ? 600 : 400;
        deliveryDisplay.textContent = deliveryCost.toLocaleString() + ' DA';
        totalDisplay.textContent = (productTotal + deliveryCost).toLocaleString() + ' DA';
        addressField.style.display = isHome ? 'block' : 'none';
        optionHome.style.cssText = deliveryOptionStyle(isHome);
        optionOffice.style.cssText = deliveryOptionStyle(!isHome);
    }

    document.getElementById('delivery-office-label').addEventListener('click', () => updateDelivery(false));
    document.getElementById('delivery-home-label').addEventListener('click', () => updateDelivery(true));
}

async function submitCartOrder(form, cartItems, productsTotal) {
    const submitBtn = document.getElementById('submit-order-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    submitBtn.style.opacity = '0.7';

    const formData = new FormData(form);
    const isHome = formData.get('delivery') === 'home';
    const deliveryCost = isHome ? 600 : 400;
    const total = productsTotal + deliveryCost;

    const itemsList = cartItems.map(i => `${i.name} (${i.color}) x${i.quantity}`).join(', ');

    const orderData = {
        timestamp: new Date().toLocaleString('fr-DZ'),
        fullName: formData.get('fullName'),
        phone: formData.get('phone'),
        wilaya: formData.get('wilaya'),
        commune: formData.get('commune'),
        delivery: isHome ? 'Home Delivery (600 DA)' : 'Office Pickup (400 DA)',
        address: formData.get('address') || 'N/A',
        product: itemsList,
        color: 'Multiple',
        productPrice: productsTotal + ' DA',
        deliveryCost: deliveryCost + ' DA',
        total: total + ' DA'
    };

    try {
        if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderData)
            });
        }
    } catch(e) {}

    closeOrderModal();
    cart = [];
    updateNavCartCount();
    showOrderSuccess({ ...orderData, color: '' });
}

function closeOrderModal() {
    const overlay = document.getElementById('order-modal-overlay');
    if (overlay) {
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.3s';
        setTimeout(() => overlay.remove(), 300);
    }
}

// ============================
// CONTACT FORM
// ============================
function setupContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        showToast('Your message has been sent! We\'ll get back to you soon. 🕯');
        this.reset();
    });
}

// ============================
// TOAST NOTIFICATION
// ============================
function showToast(msg) {
    const toast = document.createElement('div');
    toast.textContent = msg;
    toast.style.cssText = `
        position:fixed;top:24px;right:24px;
        background:#be8762;color:#fff;
        padding:14px 20px;border-radius:10px;
        box-shadow:0 6px 20px rgba(0,0,0,0.15);
        z-index:99999;font-family:'Raleway',sans-serif;
        font-size:0.92rem;font-weight:500;
        transform:translateY(-10px);opacity:0;
        transition:all 0.4s cubic-bezier(0.22,1,0.36,1);
        max-width:320px;line-height:1.5;
    `;
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
    });
    setTimeout(() => {
        toast.style.transform = 'translateY(-10px)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// ============================
// 3D CARD TILT
// ============================
function setup3DCardTilt() {
    const cards = document.querySelectorAll('.shop-item');
    if (cards.length === 0) return;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const xc = (e.clientX - rect.left) / rect.width - 0.5;
            const yc = (e.clientY - rect.top) / rect.height - 0.5;
            const maxTilt = 12;
            card.style.transform = `perspective(1000px) rotateX(${-yc * maxTilt}deg) rotateY(${xc * maxTilt}deg) translateY(-8px)`;
            const img = card.querySelector('.shop-image');
            const title = card.querySelector('.shop-item-title');
            const price = card.querySelector('.shop-item-price');
            if (img) img.style.transform = `translateZ(25px) scale(1.03) translateX(${xc * -6}px) translateY(${yc * -6}px)`;
            if (title) title.style.transform = `translateZ(15px) translateX(${xc * -3}px) translateY(${yc * -3}px)`;
            if (price) price.style.transform = `translateZ(18px) translateX(${xc * -5}px) translateY(${yc * -5}px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
            const img = card.querySelector('.shop-image');
            const title = card.querySelector('.shop-item-title');
            const price = card.querySelector('.shop-item-price');
            if (img) { img.style.transition = 'all 0.5s'; img.style.transform = 'translateZ(20px) scale(1)'; }
            if (title) { title.style.transition = 'all 0.5s'; title.style.transform = 'translateZ(15px)'; }
            if (price) { price.style.transition = 'all 0.5s'; price.style.transform = 'translateZ(18px)'; }
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s, transform 0.6s, box-shadow 0.35s, background 0.3s';
            }, 500);
        });
    });
}

// ============================
// 3D CANDLE (THREE.JS)
// ============================
function init3DCandle() {
    const container = document.getElementById('candle-3d-container');
    if (!container) return;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.1, 3.6);
    camera.lookAt(0, 0, 0);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    container.classList.add('loaded');
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dirLight = new THREE.DirectionalLight(0xadd8e6, 0.6);
    dirLight.position.set(2, 4, -2);
    scene.add(dirLight);
    const keyLight = new THREE.DirectionalLight(0xfffdf0, 0.45);
    keyLight.position.set(-2, 2, 2);
    scene.add(keyLight);
    const candleGroup = new THREE.Group();
    scene.add(candleGroup);
    const waxMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.55, 0.58, 1.6, 32),
        new THREE.MeshStandardMaterial({ color: 0xdfbca7, roughness: 0.65, metalness: 0.1 })
    );
    waxMesh.position.y = -0.15;
    waxMesh.castShadow = true;
    candleGroup.add(waxMesh);
    const topMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.51, 0.55, 0.04, 32),
        new THREE.MeshStandardMaterial({ color: 0xcda68f, roughness: 0.75 })
    );
    topMesh.position.y = 0.63;
    candleGroup.add(topMesh);
    const wickMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.015, 0.015, 0.18, 8),
        new THREE.MeshStandardMaterial({ color: 0x1f1f1f, roughness: 0.9 })
    );
    wickMesh.position.y = 0.72;
    candleGroup.add(wickMesh);
    const flameGroup = new THREE.Group();
    flameGroup.position.set(0, 0.81, 0);
    candleGroup.add(flameGroup);
    const flameCoreGeom = new THREE.SphereGeometry(0.08, 16, 16);
    flameCoreGeom.translate(0, 0.08, 0);
    const flameCore = new THREE.Mesh(flameCoreGeom, new THREE.MeshBasicMaterial({ color: 0xffffff }));
    flameCore.scale.set(1, 2.2, 1);
    flameGroup.add(flameCore);
    const flameGlowGeom = new THREE.SphereGeometry(0.12, 16, 16);
    flameGlowGeom.translate(0, 0.12, 0);
    const flameGlow = new THREE.Mesh(flameGlowGeom, new THREE.MeshBasicMaterial({ color: 0xff5500, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending }));
    flameGlow.scale.set(1.1, 2.4, 1.1);
    flameGroup.add(flameGlow);
    const flameLight = new THREE.PointLight(0xff9d3b, 2.4, 8, 1.5);
    flameLight.position.set(0, 0.15, 0);
    flameLight.castShadow = true;
    flameGroup.add(flameLight);
    let isLit = true;
    container.classList.add('lit');
    function toggleFlame() {
        isLit = !isLit;
        flameGroup.visible = isLit;
        container.classList.toggle('lit', isLit);
        showToast(isLit ? "You lit the candle! 🕯️" : "You blew out the candle. 🌬️");
    }
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationX = 0, targetRotationY = 0;
    container.addEventListener('click', () => { if (!isDragging) toggleFlame(); });
    container.addEventListener('mousedown', (e) => { isDragging = true; previousMousePosition = { x: e.clientX, y: e.clientY }; });
    window.addEventListener('mouseup', () => { setTimeout(() => { isDragging = false; }, 20); });
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) {
            const rect = container.getBoundingClientRect();
            candleGroup.rotation.z = -(e.clientX - (rect.left + rect.width/2)) * 0.0003;
            candleGroup.rotation.x = (e.clientY - (rect.top + rect.height/2)) * 0.0003;
            return;
        }
        targetRotationY += (e.clientX - previousMousePosition.x) * 0.005;
        targetRotationX += (e.clientY - previousMousePosition.y) * 0.005;
        targetRotationX = Math.max(-0.4, Math.min(0.4, targetRotationX));
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });
    container.addEventListener('touchstart', (e) => { isDragging = true; previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY }; });
    window.addEventListener('touchend', () => { setTimeout(() => { isDragging = false; }, 20); });
    window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        targetRotationY += (e.touches[0].clientX - previousMousePosition.x) * 0.0075;
        targetRotationX += (e.touches[0].clientY - previousMousePosition.y) * 0.0075;
        targetRotationX = Math.max(-0.4, Math.min(0.4, targetRotationX));
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    });
    const clock = new THREE.Clock();
    function animate() {
        requestAnimationFrame(animate);
        const time = clock.getElapsedTime();
        candleGroup.rotation.y += (targetRotationY - candleGroup.rotation.y) * 0.08;
        candleGroup.rotation.x += ((targetRotationX + (isDragging ? 0 : candleGroup.rotation.x)) - candleGroup.rotation.x) * 0.08;
        if (!isDragging) targetRotationY += 0.0012;
        if (isLit) {
            const sy = 2.2 + Math.sin(time * 24) * 0.12 + Math.cos(time * 48) * 0.06;
            const sxz = 1.0 + Math.cos(time * 30) * 0.06;
            flameCore.scale.set(sxz, sy, sxz);
            flameGlow.scale.set(sxz * 1.1, sy * 1.1, sxz * 1.1);
            flameGroup.position.x = Math.sin(time * 16) * 0.012;
            flameGroup.position.z = Math.cos(time * 20) * 0.012;
            flameLight.intensity = 2.0 + Math.sin(time * 35) * 0.25 + Math.random() * 0.15;
        }
        renderer.render(scene, camera);
    }
    animate();
    window.addEventListener('resize', () => {
        const w = container.clientWidth, h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    });
}

// ============================
// AMBIENT SOUND
// ============================
class FireplaceSoundGenerator {
    constructor() { this.ctx=null; this.isPlaying=false; this.rumbleNode=null; this.crackleTimeout=null; this.gainNode=null; }
    init() {
        const AC = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AC();
        this.gainNode = this.ctx.createGain();
        this.gainNode.gain.setValueAtTime(0.18, this.ctx.currentTime);
        this.gainNode.connect(this.ctx.destination);
    }
    createPinkNoise() {
        const buf = this.ctx.createBuffer(1, 4096*4, this.ctx.sampleRate);
        const out = buf.getChannelData(0);
        let b0=0,b1=0,b2=0,b3=0,b4=0,b5=0,b6=0;
        for(let i=0;i<out.length;i++){
            const w=Math.random()*2-1;
            b0=0.99886*b0+w*0.0555179; b1=0.99332*b1+w*0.0750759;
            b2=0.96900*b2+w*0.1538520; b3=0.86650*b3+w*0.3104856;
            b4=0.55000*b4+w*0.5329522; b5=-0.7616*b5-w*0.0168980;
            out[i]=(b0+b1+b2+b3+b4+b5+b6+w*0.5362)*0.11; b6=w*0.115926;
        }
        const n=this.ctx.createBufferSource(); n.buffer=buf; n.loop=true; return n;
    }
    start() {
        if(this.isPlaying) return;
        if(!this.ctx) this.init();
        if(this.ctx.state==='suspended') this.ctx.resume();
        this.isPlaying=true;
        this.rumbleNode=this.createPinkNoise();
        const f=this.ctx.createBiquadFilter(); f.type='lowpass'; f.frequency.setValueAtTime(150,this.ctx.currentTime);
        const g=this.ctx.createGain(); g.gain.setValueAtTime(0.7,this.ctx.currentTime);
        this.rumbleNode.connect(f); f.connect(g); g.connect(this.gainNode); this.rumbleNode.start(0);
        this.triggerCrackles();
    }
    triggerCrackles() {
        if(!this.isPlaying) return;
        this.playPop();
        this.crackleTimeout=setTimeout(()=>this.triggerCrackles(), 50+Math.random()*650);
    }
    playPop() {
        if(!this.ctx||!this.isPlaying) return;
        const sz=this.ctx.sampleRate*0.05;
        const buf=this.ctx.createBuffer(1,sz,this.ctx.sampleRate);
        const d=buf.getChannelData(0);
        for(let i=0;i<sz;i++) d[i]=Math.random()*2-1;
        const src=this.ctx.createBufferSource(); src.buffer=buf;
        const f=this.ctx.createBiquadFilter(); f.type='bandpass';
        f.frequency.setValueAtTime(1800+Math.random()*2200,this.ctx.currentTime); f.Q.setValueAtTime(8,this.ctx.currentTime);
        const g=this.ctx.createGain(); const now=this.ctx.currentTime; const v=0.15+Math.random()*0.6;
        g.gain.setValueAtTime(0,now); g.gain.linearRampToValueAtTime(v,now+0.001);
        g.gain.exponentialRampToValueAtTime(0.001,now+0.015+Math.random()*0.035);
        src.connect(f); f.connect(g); g.connect(this.gainNode); src.start(0);
    }
    stop() {
        if(!this.isPlaying) return;
        this.isPlaying=false;
        try { this.rumbleNode.stop(); } catch(e) {}
        if(this.rumbleNode) this.rumbleNode.disconnect();
        if(this.crackleTimeout) clearTimeout(this.crackleTimeout);
    }
}

function setupAmbientSound() {
    const btn = document.getElementById('nav-sound-btn');
    const icon = document.getElementById('sound-icon');
    if (!btn || !icon) return;
    const generator = new FireplaceSoundGenerator();
    btn.addEventListener('click', () => {
        if (generator.isPlaying) {
            generator.stop();
            icon.className = 'fas fa-volume-mute';
            btn.style.color = '';
            showToast("Ambient sound off 🔈");
        } else {
            generator.start();
            icon.className = 'fas fa-volume-up';
            btn.style.color = '#be8762';
            showToast("Cozy ambient crackling on 🕯️🔥");
        }
    });
}

// ============================
// COMING SOON SUBSCRIPTION
// ============================
function initComingSoon() {
    // Initialize 3D Candle
    initComingSoon3DCandle();

    const form = document.getElementById('cs-subscription-form');
    const feedback = document.getElementById('cs-form-feedback');
    if (!form || !feedback) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const emailInput = document.getElementById('cs-email');
        const submitBtn = form.querySelector('.cs-submit-btn');
        if (!emailInput || !submitBtn) return;

        const email = emailInput.value.trim();
        if (!email) return;

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        feedback.className = 'cs-feedback-message';
        feedback.textContent = '';

        const subscriptionData = {
            timestamp: new Date().toLocaleString('fr-DZ'),
            email: email,
            type: 'Newsletter/Coming Soon Subscription'
        };

        try {
            if (typeof GOOGLE_SCRIPT_URL !== 'undefined' && GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
                await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(subscriptionData)
                });
            } else {
                // Mock success for local testing or if sheets URL is not configured
                console.log('Mock saving subscription:', subscriptionData);
                await new Promise(resolve => setTimeout(resolve, 800));
            }

            feedback.className = 'cs-feedback-message success';
            feedback.textContent = '✓ Thank you! We will notify you when we go live.';
            emailInput.value = '';
        } catch (err) {
            console.error('Error submitting newsletter subscription:', err);
            feedback.className = 'cs-feedback-message error';
            feedback.textContent = '✗ Something went wrong. Please try again.';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Notify Me';
        }
    });
}

// ============================
// COMING SOON 3D CANDLE
// ============================
function initComingSoon3DCandle() {
    const container = document.getElementById('cs-candle-3d-container');
    const logoContainer = document.querySelector('.cs-logo-container');
    if (!container) return;

    const width = container.clientWidth || 200;
    const height = container.clientHeight || 200;

    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.9, 2.8);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    if (logoContainer) {
        logoContainer.classList.add('loaded');
    }

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    
    const keyLight = new THREE.DirectionalLight(0xfffdf0, 0.8);
    keyLight.position.set(-2, 3, 2);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xadd8e6, 0.4);
    fillLight.position.set(2, 2, -1);
    scene.add(fillLight);

    // Candle Group
    const candleGroup = new THREE.Group();
    scene.add(candleGroup);

    // Glass Jar (Semi-transparent luxury jar)
    const jarGeom = new THREE.CylinderGeometry(0.42, 0.42, 0.9, 32);
    const jarMat = new THREE.MeshStandardMaterial({
        color: 0x2a1f1a, // Dark amber glass
        roughness: 0.1,
        metalness: 0.9,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide
    });
    const jarMesh = new THREE.Mesh(jarGeom, jarMat);
    jarMesh.position.y = -0.1;
    candleGroup.add(jarMesh);

    // Candle Wax inside the jar
    const waxGeom = new THREE.CylinderGeometry(0.39, 0.39, 0.7, 32);
    const waxMat = new THREE.MeshStandardMaterial({
        color: 0xdfbca7, // Cream wax
        roughness: 0.6,
        metalness: 0.1
    });
    const waxMesh = new THREE.Mesh(waxGeom, waxMat);
    waxMesh.position.y = -0.18;
    candleGroup.add(waxMesh);

    // Wick
    const wickGeom = new THREE.CylinderGeometry(0.012, 0.012, 0.12, 8);
    const wickMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.9 });
    const wickMesh = new THREE.Mesh(wickGeom, wickMat);
    wickMesh.position.y = 0.22;
    candleGroup.add(wickMesh);

    // Flame Group
    const flameGroup = new THREE.Group();
    flameGroup.position.set(0, 0.3, 0);
    candleGroup.add(flameGroup);

    // Inner Flame (White core)
    const flameCoreGeom = new THREE.SphereGeometry(0.05, 16, 16);
    flameCoreGeom.translate(0, 0.05, 0);
    const flameCore = new THREE.Mesh(flameCoreGeom, new THREE.MeshBasicMaterial({ color: 0xffffff }));
    flameCore.scale.set(1, 2.5, 1);
    flameGroup.add(flameCore);

    // Outer Flame (Warm orange glow)
    const flameOuterGeom = new THREE.SphereGeometry(0.08, 16, 16);
    flameOuterGeom.translate(0, 0.08, 0);
    const flameOuter = new THREE.Mesh(flameOuterGeom, new THREE.MeshBasicMaterial({
        color: 0xff6600,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending
    }));
    flameOuter.scale.set(1.1, 2.8, 1.1);
    flameGroup.add(flameOuter);

    // Light source from the flame
    const flameLight = new THREE.PointLight(0xffaa44, 2.5, 6, 1.2);
    flameLight.position.set(0, 0.1, 0);
    flameGroup.add(flameLight);

    // Animation variables
    const clock = new THREE.Clock();
    let mouseX = 0, mouseY = 0;
    let targetRotationX = 0, targetRotationY = 0;

    // Mouse tilt interaction
    window.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        mouseX = (e.clientX - cx) / (window.innerWidth / 2);
        mouseY = (e.clientY - cy) / (window.innerHeight / 2);
        
        targetRotationY = mouseX * 0.4;
        targetRotationX = mouseY * 0.3;
    });

    function animate() {
        requestAnimationFrame(animate);
        const time = clock.getElapsedTime();

        // Smoothly orbit/auto-rotate
        candleGroup.rotation.y += 0.008;

        // Apply mouse tilt response
        candleGroup.rotation.y += (targetRotationY - (candleGroup.rotation.y % (Math.PI * 2))) * 0.05;
        candleGroup.rotation.x += (targetRotationX - candleGroup.rotation.x) * 0.05;

        // Floating animation
        candleGroup.position.y = Math.sin(time * 1.5) * 0.08;

        // Flicker flame scale
        const scaleFlicker = 1.0 + Math.sin(time * 30) * 0.06 + Math.cos(time * 60) * 0.03;
        flameGroup.scale.set(scaleFlicker, scaleFlicker * (1.0 + Math.sin(time * 20) * 0.05), scaleFlicker);
        
        // Flicker light intensity
        flameLight.intensity = 2.2 + Math.sin(time * 25) * 0.3 + Math.cos(time * 50) * 0.1;

        renderer.render(scene, camera);
    }

    animate();
}

