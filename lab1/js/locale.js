const translations = {
    ru: {
        travelingHeader: "Путешествия по России",
        travelingSecondHeader: "Настоящая страна не в выпусках новостей, а здесь.",
        leadPolka: "ваша полка — нижняя",
        didntSee: "Чего мы там не видели?",
        introDesk: `
            По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только 36% планируют провести отпуск в родной стране. 
            Мол, чего мы тут, дома, не видели? На самом деле, Россия — это целая вселенная с ласковым морем юга, густыми лесами Саян и суровыми льдами плато Путорана. 
            А ещё увидеть все эти красоты можно без миллионов на счету, загранпаспорта и многочасовых перелетов. 
            Как, например, Вера Башмакова — смелая молодая мама, которая взяла в охапку троих детей, усадила их в свою «Ладу» и проехала 20 тысяч километров по родной стране. 
            Мы выбрали и описали некоторые интересные места, достойные вашего отпуска.
        `,
        timeZones: "Часовых поясов",
        naturalUNESCO: "Объектов природного наследия ЮНЕСКО",
        cultureUNESCO: "Объектов культурного наследия ЮНЕСКО",
        natureReserves: "Природных заповедников",
        Airports: "Аэропортов",

        placeKursKosa: "Куршская коса",
        placeKolskiy: "Кольский",
        placeAltai: "Алтай",
        placeBaikal: "Зимний Байкал",
        placeKarelia: "Карелия",


        kosaTextFirst: `
            Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два водных горизонта — спокойного Куршского залива с одной стороны и подёрнутого рябью волн Балтийского моря с другой. Уникальная природная зона на краю российского анклава.
        `,
        kosaTextSecond: `
            На этом Калининградская область не заканчивается. Для путешественника и исследователя там же по соседству — самая западная точка России, Балтийская коса, — и немецкое наследие россыпи небольших приморских городов. Атмосфера здешних мест исключает суету, окуная в спокойствие природы и запах стального, прохладного моря.
        `,

        kolskyTextFirst: `Почти весь полуостров находится за Полярным кругом. Саамская тундра, от которой на юг — 
тайга, а на север — Ледовитый океан, прикидывающийся Баренцевым морем`,
        kolskyTextSecond: `Возможно, вы смотрели Звягинцева и даже слышали историю арктического фестиваля в Териберке. Возможно, слово «Хибины» не осталось под снегом школьных воспоминаний об уроках географии. Возможно, вы не интересовались пронизывающей земную кору сверхглубокой скважиной, а от апатитов вас давно накрывает апатия. Но ваша мечта увидеть северное сияние начинает сбываться с билетом
в Мурманск.`,

        altaiTextFirst: `Алтай — одно из красивейших мест в России. 
В первую очередь из-за гор: если ехать вдоль хребта, вы увидите склоны, усыпанные соснами, горные реки и озёра. А если вы откроете в автомобиле окна, сможете познакомиться с невидимым чудом здешних мест — горным воздухом.`,
        altaiTextSecond: `Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом. Так вы увидите всё разнообразие местной флоры и фауны. По лесам Алтая бродят лоси, над хребтами летают орлы, а на равнинах пасутся косули. И знаменитые манулы — тоже обитатели Алтайского края.`, 
        
        kareliaTextFirst: `Карелия — волшебный край озер и лесов на севере России.
Прежде всего она покоряет водными просторами: если плыть на лодке среди шхер, перед вами откроются зеркала тысяч озер, обрамленных гранитными скалами и сосновыми бором. А если остановиться у берега на рассвете, можно услышать древнее эхо этих мест — тишину, нарушаемую лишь всплеском рыбы и криком чаек.`,
        kareliaTextSecond: `Климат здесь прохладный и влажный, поэтому лучше приезжать в конце лета или ранней осенью. В это время леса вспыхивают багрянцем мхов и золотом брусники, а воздух наполнен ароматом хвои и влажной земли. В карельских чащах бродят медведи, по речным перекатам скачут норки, а в ладожских водах играют нерпы. И легендарные кряквы с гагарами — вечные спутники здешних рассветов, когда туман стелется над водой как дымка забытых снов.`,

        baikalTextFirst: `Байкал — жемчужина Сибири, самое глубокое и древнее озеро планеты.
Прежде всего оно поражает бескрайней синевой: когда стоишь на скалистом берегу, взгляду открывается бездонная гладь, обрамленная хребтами с заснеженными вершинами. А если опустить руку в кристальную воду у мыса Хобой, можно прикоснуться к вечности — ледяной пульс озера хранит тайны 25 миллионов лет.`,
        baikalTextSecond: `Климат здесь суровый и переменчивый, поэтому идеальное время для посещения — конец зимы или бархатный сентябрь. Зимой Байкал превращается в царство льда: торосы сверкают сапфировыми гротами, а пузыри метана застывают фантастическими узорами. В байкальских глубинах плавают нерпы, у ручьев резвятся хариусы, а в кедрачах Саянских гор прячутся соболя. И уникальные голомянки — полупрозрачные рыбки, светящиеся в темноте как призрачные огоньки, — живые символы этого заповедного мира, где волны шепчут легенды бурятских шаманов.`,

        fromBaikal: "До Байкала «на собаках»",
        fromBaikalDesc: "По мотивам учебной темы о Транссибе — путешествие от столицы до Байкала на электричках.",

        map: "Карты",
        weather: "Погода",
        schedule: "Расписание",
        calendare: "Календарь",
        travel: "Путешествия"
    },
    en: {
        travelingHeader: "Traveling in Russia",
        travelingSecondHeader: "The real country is not in the news releases, but here.",
        leadPolka: "your shelf is the top one",
        didntSee: "What didn't we see there?",
        introDesk: `
        According to VTsIOM polls, 95% of Russians dream of going somewhere, but only 36% plan to spend their holidays in their native country. 
        Like, what haven't we seen here at home? In fact, Russia is a whole universe with the gentle sea of the south, the dense forests of the Sayan Mountains and the harsh ice of the Putorana plateau. 
        And you can also see all these beauties without millions in your account, a passport and many hours of flights. 
        Like, for example, Vera Bashmakova, a brave young mother who took three children in her arms, put them in her Lada and drove 20 thousand kilometers across her native country. 
        We have selected and described some interesting places worthy of your vacation.
        `,
        timeZones: "Time zones",
        naturalUNESCO: "UNESCO Natural Heritage Sites",
        cultureUNESCO: "UNESCO Cultural Heritage Sites",
        natureReserves: "Nature reserves",
        Airports: "Airports",

        placeKursKosa: "Curonian Spit",
        placeKolskiy: "Kolsky",
        placeAltai: "Altai",
        placeBaikal: "Winter Baikal",
        placeKarelia: "Karelia",


        kosaTextFirst: `
            Here, in the midst of forests and sand dunes, you can see two water horizons — the calm Curonian Lagoon on one side and the rippling waves of the Baltic Sea on the other. A unique natural area on the edge of the Russian enclave.
        `,
        kosaTextSecond: `
            The Kaliningrad Region does not end there. For the traveler and researcher, there is also the westernmost point of Russia, the Baltic Spit, next door, and the German heritage of a scattering of small seaside towns. The atmosphere of these places eliminates the hustle and bustle, plunging into the tranquility of nature and the smell of the steely, cool sea.    
        `,


        kolskyTextFirst: `Almost the entire peninsula is located beyond the Arctic Circle. The Sami tundra, from which to the south — 
taiga, and to the north — the Arctic Ocean, pretending to be the Barents Sea`,
        kolskyTextSecond: `You may have watched Zvyagintsev and even heard the story of the Arctic festival in Teriberka. Perhaps the word "Khibiny" did not remain under the snow of school memories of geography lessons. You may not have been interested in the ultra-deep borehole penetrating the earth's crust, but apatites have been covering you with apathy for a long time. But your dream of seeing the northern Lights begins to come true with a ticket
to Murmansk.`,

        altaiTextFirst: `Altai is one of the most beautiful places in Russia. 
First of all, because of the mountains: if you drive along the ridge, you will see slopes strewn with pine trees, mountain rivers and lakes. And if you open the windows in the car, you can get acquainted with the invisible wonder of the local places — the mountain air.`,
        altaiTextSecond: `The climate in Altai is temperate, so it is best to go here in the summer. This is how you will see all the diversity of the local flora and fauna. Moose roam the forests of Altai, eagles fly over the ridges, and roe deer graze on the plains. And the famous manuls are also inhabitants of the Altai Territory.`, 

        kareliaTextFirst: `Karelia — a magical land of lakes and forests in northern Russia.
First and foremost, it captivates with its vast waterways: if you sail a boat among the skerries, you’ll discover thousands of mirror-like lakes framed by granite cliffs and pine groves. And if you pause at the shore at dawn, you can hear the ancient echo of this place — a silence broken only by the splash of fish and the cry of seagulls.`,
        kareliaTextSecond: `The climate here is cool and humid, so the best time to visit is late summer or early autumn. During this season, forests blaze with crimson mosses and golden lingonberries, while the air fills with the scent of pine and damp earth. Bears roam Karelian thickets, minks leap along river rapids, and seals play in Ladoga’s waters. And the legendary mallards and loons — eternal companions of the local sunrises, when mist spreads over the water like the haze of forgotten dreams.`, 

        baikalTextFirst: `Baikal — Siberia’s jewel, the planet’s deepest and oldest lake.
First and foremost, it stuns with its boundless blue: standing on a rocky shore, your gaze meets an abyssal expanse framed by snow-capped mountain ranges. And if you dip your hand into the crystalline water near Cape Khoboy, you can touch eternity — the lake’s icy pulse holds secrets of 25 million years.`,
        baikalTextSecond: `The climate here is harsh and unpredictable, making late winter or velvety September ideal for visiting. In winter, Baikal transforms into an ice kingdom: hummocks glitter like sapphire grottoes, and methane bubbles freeze into fantastical patterns. Baikal seals glide through its depths, graylings dart in streams, and sables hide in the cedar forests of the Sayan Mountains. And the unique golomyanka fish — translucent creatures glowing in the dark like phantom flames — are living symbols of this pristine world, where waves whisper legends of Buryat shamans.`, 


        fromBaikal: "To Lake Baikal «by dog»",
        fromBaikalDesc: "Based on the educational theme about the Trans—Siberian Railway, a journey from the capital to Lake Baikal by train.",

        map: "Maps",
        weather: "Weather",
        schedule: "Schedule",
        calendare: "Calendare",
        travel: "Travel",

    }
};


const DEFAULT_LANG = 'ru';
const STORAGE_KEY = 'user_lang';

const i18n = {
    currentLang: DEFAULT_LANG,

    init() {

        const savedLang = localStorage.getItem(STORAGE_KEY);
        const browserLang = navigator.language.substring(0, 2);

        this.currentLang = savedLang ||
            (translations[browserLang] ? browserLang : DEFAULT_LANG);

        this.loadLanguage(this.currentLang);
        this.setupEventListeners();
    },

    loadLanguage(lang) {
        this.currentLang = lang;
        document.documentElement.lang = lang;

        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            let text = translations[lang][key];

            if (el.dataset.i18nName) {
                text = text.replace('{name}', el.dataset.i18nName);
            }

            el.textContent = text;
        });
        localStorage.setItem(STORAGE_KEY, lang);

        document.querySelectorAll('.header-locale div').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    },

    setupEventListeners() {
        document.querySelectorAll('.header-locale div').forEach(btn => {
            btn.addEventListener('click', () => {
                this.loadLanguage(btn.dataset.lang);
            });
        });
    }
};
window.addEventListener('DOMContentLoaded', () => i18n.init());