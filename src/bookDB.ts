export interface Book {
    bookId: string
    author: string
    title: string
    description: string
    coverURL?: string
    imageId?: string
    labels?: string[]
    status?: 'NORMAL' | 'ARCHIVED' | 'DELETED'
}

export const bookTypes: string[] = [
    'fantasy', 'science-fiction',
    'fiction', 'young-adult', 'love',
    'non-fiction', 'children', 'history',
    'mystery', 'covers', 'classics', 'best',
    'paranormal'
]


export const DEMO_BOOKS: Book[] = [
    {
        "bookId": "03600.03655",
        "author": "Thomas Mann",
        "title": "József és testvérei",
        "description": "\"Igen, igen, igen, te mondád, Júda, kitűnően mondád! Eladni, eladni az izmáelitáknak, így helyes, így célszerű, így szabadulunk meg tőle! Föl, kerítsétek elő Józsefet, hozzátok napvilágra, jönnek már, s hihetőleg még van élet benne, az ember kibírja tizenkét napig vagy tizennégyig is, a tapasztalat szerint.\"",
        "coverURL": "/public/borito.03600.03655.jpg",
        "imageId": "borito.03600.03655.jpg",
        "labels": [
            "fantasy",
            "classics",
            "mystery"
        ]
    },
    {
        "bookId": "05800.05877",
        "author": "Gárdonyi Géza",
        "title": "A bor",
        "description": "\"No nézd, még rám akasztják! Hát nem én adtam-e most is ide ezt a bort? Annyi az igaz, hogy ezt a Julit kissé puhán nevelte az anyja, oszt hogy Imrének ezön állott mög a szöme, hát beszélgettünk, hogy Uram teremtőm mit is tögyünk? Mer Juli is halálig érte vót, röttentően öszvegyönyörödtek.\"",
        "coverURL": "/public/borito.05800.05877.jpg",
        "imageId": "borito.05800.05877.jpg",
        "labels": [
            "fantasy",
            "classics",
            "best",
            "history"
        ]
    },
    {
        "bookId": "07300.07357",
        "author": "József Attila",
        "title": "La coscienza del poeta",
        "description": "\"Sono nato a Budapest nel 1905... Mio padre - fu Áron József - emigrò quando io avevo tre anni e la Lega nazionale per la protezione dell' infanzia mi diede dei genitori adottivi a Öcsöd. Dove vissi fino ai sette anni. Già allora ho lavorato, come di norma i bambini poveri di campagna: facevo il guardiano di maiali.\"",
        "coverURL": "/public/borito.07300.07357.jpg",
        "imageId": "borito.07300.07357.jpg",
        "labels": [
            "classics",
            "best"
        ]
    },
    {
        "bookId": "00300.00384",
        "author": "Antoine de Saint-Exupéry",
        "title": "A kis herceg",
        "description": "\"- Jobb lett volna, ha ugyanabban az időben jössz - mondta a róka. - Ha például délután négykor érkezel majd, én már háromkor elkezdek örülni. Minél előrébb halad az idő, annál boldogabb leszek. Négykor már tele leszek izgalommal és aggodalommal; fölfedezem, milyen drága kincs a boldogság.\"",
        "imageId": "borito.00300.00384.jpg",
        "status": "NORMAL",
        "labels": [
            "young-adult",
            "fiction",
            "children"
        ]
    },
    {
        "bookId": "05800.05805",
        "author": "Fjodor Mihajlovics Dosztojevszkij",
        "title": "A kamasz",
        "description": "\"Igaz, a nőkről nem tudok semmit, és nem is akarok tudni, mert halálomig fütyülni fogok rájuk, ezt megfogadtam. Annyit azonban mégis tudok, hogy némelyik nő az első pillanatban rabul ejti a férfit szépségével vagy valami affélével, a másikat ellenben fél esztendeig kell ízlelgetni, mielőtt az ember rájön, hogy van benne valami.\"",
        "coverURL": "/public/borito.05800.05805.jpg",
        "imageId": "borito.05800.05805.jpg",
        "labels": [
            "children",
            "fantasy"
        ],
        "status": "ARCHIVED"
    },
    {
        "bookId": "DELETED-100915.The_Lion_the_Witch_and_the_Wardrobe-1661866309",
        "author": "C.S. Lewis",
        "title": "The Lion, the Witch and the Wardrobe",
        "description": "Narnia… the land beyond the wardrobe door, a secret place frozen in eternal winter, a magical country waiting to be set free.\n\nLucy is the first to find the secret of the wardrobe in the professor's mysterious old house. At first her brothers and sister don't believe her when she tells of her visit to the land of Narnia. But soon Edmund, then Peter and Susan step through the wardrobe themselves. In Narnia they find a country buried under the evil enchantment of the White Witch. When they meet the Lion Aslan, they realize they've been called to a great adventure and bravely join the battle to free Narnia from the Witch's sinister spell.",
        "imageId": "narnia.jpg",
        "status": "DELETED",
        "labels": [
            "fantasy",
            "young-adult"
        ]
    },
    {
        "bookId": "10091",
        "author": "C.S. Lewis",
        "title": "The Lion, the Witch and the Wardrobe",
        "description": "Narnia… the land beyond the wardrobe door, a secret place frozen in eternal winter, a magical country waiting to be set free.\n\nLucy is the first to find the secret of the wardrobe in the professor's mysterious old house. At first her brothers and sister don't believe her when she tells of her visit to the land of Narnia. But soon Edmund, then Peter and Susan step through the wardrobe themselves. In Narnia they find a country buried under the evil enchantment of the White Witch. When they meet the Lion Aslan, they realize they've been called to a great adventure and bravely join the battle to free Narnia from the Witch's sinister spell.",
        "imageId": "narnia.jpg",
        "status": "NORMAL",
        "labels": [
            "fantasy",
            "young-adult"
        ]
    },
    {
        "bookId": "2767052",
        "author": "Suzanne Collins",
        "title": "The Hunger Games",
        "description": "Could you survive on your own in the wild, with every one out to make sure you don't live to see the morning?\n\nIn the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.\n\nSixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love.",
        "imageId": "thehungergames.jpg",
        "status": "NORMAL",
        "labels": [
            "fiction",
            "young-adult"
        ]
    },
    {
        "bookId": "15881",
        "author": "J.K. Rowling",
        "title": "Harry Potter and the Chamber of Secrets",
        "description": "Ever since Harry Potter had come home for the summer, the Dursleys had been so mean and hideous that all Harry wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he’s packing his bags, Harry receives a warning from a strange impish creature who says that if Harry returns to Hogwarts, disaster will strike.\n\nAnd strike it does. For in Harry’s second year at Hogwarts, fresh torments and horrors arise, including an outrageously stuck-up new professor and a spirit who haunts the girls’ bathroom. But then the real trouble begins – someone is turning Hogwarts students to stone. Could it be Draco Malfoy, a more poisonous rival than ever? Could it possibly be Hagrid, whose mysterious past is finally told? Or could it be the one everyone at Hogwarts most suspects… Harry Potter himself!",
        "imageId": "harrypotter_chamber.jpg",
        "status": "NORMAL",
        "labels": [
            "fantasy",
            "children"
        ]
    },
    {
        "bookId": "00300.00341",
        "author": "Mihail Afanaszjevics Bulgakov",
        "title": "Kutyaszív",
        "description": "\"U-u-u-u-úúú! Ó, nézzetek rám, haldoklom. A szélvihar halotti fohászt süvölt értem a kapualjban, én pedig vele együtt üvöltök. Az a piszkos süveges gazember - a Népgazdasági Tanács szabványétkeztetési ebédlőjének szakácsa - leöntött forró vízzel, s leforrázta a bal oldalamat.\"",
        "imageId": "borito.00300.00341.jpg",
        "status": "ARCHIVED",
        "labels": [
            "classics",
            "best"
        ]
    },
    {
        "bookId": "00700.00708",
        "author": "József Attila",
        "title": "József Attila összes költeménye",
        "description": "\"A rakodópart alsó kövén ültem,\nnéztem, hogy úszik el a dinnyehéj.\nAlig hallottam, sorsomba merülten,\nhogy fecseg a felszin, hallgat a mély.\"",
        "imageId": "borito.00700.00708.jpg",
        "status": "ARCHIVED",
        "labels": [
            "classics"
        ]
    },
    {
        "bookId": "01000.01080",
        "author": "Szerb Antal",
        "title": "Utas és holdvilág",
        "description": "\"Tamás olyan finom volt, hogy nem tudott aludni, ha a harmadik szobában megmozdult valami, és egy erősebb szaggal ki lehetett kergetni a világból. Csak az volt a baj, hogy szerelmes volt a húgába. Viszonyuk volt, és amikor Éva teherbe esett, Tamás lelkiismeretfurdalásában megölte magát.\"",
        "imageId": "borito.01000.01080.jpg",
        "status": "ARCHIVED",
        "labels": [
            "fiction",
            "classics"
        ]
    },
    {
        "bookId": "01000.01044",
        "author": "Rejtő Jenő",
        "title": "A tizennégy karátos autó",
        "description": "\"Vanek úrhoz sietett a kikötőbe, bár nem bízott benne, hogy megtalálja. Azonban legnagyobb meglepetésére titkárja még most is ugyanazon a helyen állt, ugyanabban a pózban, sőt ugyanabban a fürdőnadrágban, csak a fogpiszkáló változott a szájában. Azóta körülbelül az ötödiknél tartott.\"",
        "imageId": "borito.01000.01044.jpg",
        "status": "ARCHIVED",
        "labels": [
            "classics"
        ]
    },
    {
        "bookId": "00900.00954",
        "author": "Mikszáth Kálmán",
        "title": "Szent Péter esernyője",
        "description": "\"A kosár ott állt még most is. A gyermek a kosárban ült és a lúd az udvarban szaladgált, s az eső zuhogott egyre, zuhogott az eszterhaj alá is, patakban folyt ott is az esővíz, de a gyermek szárazon maradt, sértetlenül, mert egy hatalmas, fakó, piros szövetű esernyő volt a kosár fölé borítva.\"",
        "imageId": "borito.00900.00954.jpg",
        "status": "ARCHIVED",
        "labels": [
            "fiction",
            "mystery"
        ]
    }
]
