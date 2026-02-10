const projects = [
    // 1. Varied Start
    { id: 1, title: 'Aurora Healthcare', description: 'Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.', category: 'arch-comm', image: '/Mayaakars-asserts/architecture/architect-commercial/aurora-healthcare/hospital-gallery-1.webp' },
    { id: 2, title: 'Solaris Energy', description: 'Solaris Energy Office | Imperia Mindspace , Bangalore Located at Imperia Mindspace, Bangalore, the Solaris Energy office is a seamless blend of modern design, energy, and ambition. Spanning 10,000 sq.', category: 'int-comm', image: '/Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/solaris-energy/lobby-area.webp' },
    { id: 3, title: 'Panorama House', description: 'PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.', category: 'arch-res', image: '/Mayaakars-asserts/architecture/architect-residence/panorama-house/title-photo.webp' },
    { id: 4, title: 'The Grid', description: 'The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.', category: 'int-comm', image: '/Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/innova8-1.webp' },

    // 2. Residential Mix
    { id: 5, title: 'Kumar Residence', description: 'KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.', category: 'int-res', image: '/Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/living-area.webp' },
    { id: 6, title: 'House of 13 Arches', description: 'HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.', category: 'int-res', image: '/Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/entrance-.webp' },
    { id: 7, title: 'Skyline Hub', description: 'Skyline Commercial Hub – Mumbai (Design Development) In collaboration with NIBR, the Skyline Commercial Hub in Mumbai is currently in the design development phase. Spanning 300,000 sq.', category: 'arch-comm', image: '/Mayaakars-asserts/architecture/architect-commercial/skyline-commercial-hub/mumbai-building-1.webp' },
    { id: 8, title: 'Shizuka Nook', description: 'A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.', category: 'int-comm', image: '/Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/shizuka-nook/entrance.webp' },

    // 3. More Interiors & Architecture
    { id: 9, title: 'Patil Residence', description: 'Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.', category: 'int-res', image: '/Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/patil-residence/living-area.webp' },
    { id: 10, title: 'Sharma Residence', description: 'Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.', category: 'int-res', image: '/Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/sharma-residence/living-area.webp' },
    { id: 11, title: 'Aurora Healthcare', description: 'Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.', category: 'arch-comm', image: '/Mayaakars-asserts/architecture/architect-commercial/aurora-healthcare/hospital-gallery-3.webp' },
    { id: 12, title: 'The Grid', description: 'The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.', category: 'int-comm', image: '/Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/innova8-2.webp' },

    // 4. Continued Variety
    { id: 13, title: 'Panorama House', description: 'PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.', category: 'arch-res', image: '/Mayaakars-asserts/architecture/architect-residence/panorama-house/26.webp' },
    { id: 14, title: 'Kumar Residence', description: 'KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.', category: 'int-res', image: '/Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/kitchen.webp' },
    { id: 15, title: 'House of 13 Arches', description: 'HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.', category: 'int-res', image: '/Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/hall-.webp' },
    { id: 16, title: 'Seabreeze Office', description: 'The office design reflects the serenity of a coastal retreat while staying true to the brand’s color palette.', category: 'int-comm', image: '/Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/seabreeze-office/lobby-area-1-.webp' },

    // 5. Deep Cuts
    { id: 17, title: 'Prasad Residence', description: 'PRASAD RESIDENCE COORG , KARNATAKA The weekend home is nestled amidst a lush coffee plantation in Coorg , Karnataka, exudes a charming and rustic appeal.', category: 'arch-res', image: '/Mayaakars-asserts/architecture/architect-residence/prasad-residence/03.webp' },
    { id: 18, title: 'Rathod Residence', description: 'Rathore Residence – Hyderabad, Telangana The Rathore Residence in Hyderabad beautifully blends contemporary design with traditional architectural elements.', category: 'arch-res', image: '/Mayaakars-asserts/architecture/architect-residence/rathod-residence/1.webp' },
    { id: 19, title: 'Solaris Energy', description: 'Solaris Energy Office | Imperia Mindspace , Bangalore Located at Imperia Mindspace, Bangalore, the Solaris Energy office is a seamless blend of modern design, energy, and ambition. Spanning 10,000 sq.', category: 'int-comm', image: '/Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/solaris-energy/cafeteria.webp' },
    { id: 20, title: 'Aurora Healthcare', description: 'Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.', category: 'arch-comm', image: '/Mayaakars-asserts/architecture/architect-commercial/aurora-healthcare/hospital-gallery-16.webp' },

    // 6. Final Mix
    { id: 21, title: 'The Grid', description: 'The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.', category: 'int-comm', image: '/Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/innova8-3.webp' },
    { id: 22, title: 'Panorama Interior', description: 'PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.', category: 'int-res', image: '/Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/living-room.webp' },
    { id: 23, title: 'Kumar Residence', description: 'KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.', category: 'int-res', image: '/Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/bedroom-1.webp' },
    { id: 24, title: 'House of 13 Arches', description: 'HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.', category: 'int-res', image: '/Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/dining-area.webp' },

    {
        "id": 25,
        "title": "Bansal Residence",
        "description": "Bansal Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3852 sqft The client engaged Ordient Infra for complete residential construction supported by architectural planning and coordinated interior finishes.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/bansal-residence-3852sqft/finished-project.webp"
    },
    {
        "id": 26,
        "title": "Bose Residence",
        "description": "Bose Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4963sqft The client engaged Ordient Infra for large-scale residential construction supported by architectural planning and interior coordination.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/bose-residence-4963sqftsqft/finished-hall.webp",
        "youtubeLink": "https://youtu.be/cUOUOAFzsQQ"
    },
    {
        "id": 27,
        "title": "Chandrashekhar Residence",
        "description": "Chandrashekhar Residence (G+3) Construction-Led Project | Executed by Ordient Infra | Built up 4295 sqft The brief was to execute a G+3 residential construction with clear vertical planning and controlled execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/chandrashekhar-residence-4297sqft-g3/finished-project.webp"
    },
    {
        "id": 28,
        "title": "Gayatri Residency",
        "description": "Gayatri’s Residence Construction-Led Project | Executed by Ordient Infra | Built Up 2862 sqft The client engaged Ordient Infra for complete residential construction supported by architectural planning and coordinated interior execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/gayatri-residnece-2826sqft/finishing-project-.webp"
    },
    {
        "id": 29,
        "title": "Menon Residence",
        "description": "Menon Residence Traditional Kerala-Style Construction | Executed by Ordient Infra | Built up 3842 sqft The client required residential construction rooted in traditional Kerala architecture, with emphasis on sloped roofs, proportions, and durable materials.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/menon-residence-3842-sqft-/1711195234.webp"
    },
    {
        "id": 30,
        "title": "Pasar Residence",
        "description": "Pasar Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3564 sqft The requirement was to execute residential construction with strong structural focus and architectural planning.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pasar-residence-3564sqft/finished-.webp"
    },
    {
        "id": 31,
        "title": "Patill Residence",
        "description": "Patil Residence Construction-Led Project | Executed by Ordient Infra | Built up 1562 spft The brief focused on constructing a compact residence with efficient planning and dependable execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/patill-residence-1562sqft/finished-project.webp"
    },
    {
        "id": 32,
        "title": "Pawar Residence",
        "description": "Pawar Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4861 sqft The client required end-to-end residential construction with emphasis on build quality and functional planning.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pawar-residence-4816sqft/finished-project.webp"
    },
    {
        "id": 33,
        "title": "Pillai Residence",
        "description": "Pillai Residence Modern Kerala-Style Construction | Executed by Ordient Infra | Built Up 4856 sqft The brief focused on constructing a modern Kerala-style residence combining contemporary planning with regional architectural elements.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pillai-residence-4856-sqft-/bg_sub1.webp"
    },
    {
        "id": 34,
        "title": "Rao Residence",
        "description": "Rao Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3961 sqft The requirement was to deliver residential construction with emphasis on structural clarity and execution reliability.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/rao-residence-3691sqft/finished-project.webp"
    },
    {
        "id": 35,
        "title": "Sharma Residence",
        "description": "Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/sharma-residence-4753sqft/finished-project-.webp"
    },
    {
        "id": 36,
        "title": "Suman Residence",
        "description": "Suman Residence Construction-Led Project | Executed by Ordient Infra | Built Up 1097 sqft The client engaged Ordient Infra for residential construction with architectural planning support.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/suman-residence-1097sqft/finished-project.webp"
    },
    {
        "id": 37,
        "title": "Verma Residence",
        "description": "Verma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3476 sqft The brief focused on reliable residential construction with architectural planning and coordinated interior execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/verma-residence-3476sqft/finished-project.webp"
    },
    {
        "id": 38,
        "title": "Krishna Residence",
        "description": "Krishna Residence - A modern white single-story residence with a clean architectural design, featuring a prominent grey accent strip and a spacious porch.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/krishna-residence/cover.png",
        "directYoutube": "https://youtu.be/jkj4eOQN81Y?si=fB-UUMNtWFEbBhKl"
    },
    {
        "id": 39,
        "title": "Vinod Residence",
        "description": "Vinod Residence - Modern residential construction with elegant design elements and functional planning.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/vinod-residence/cover.png",
        "directYoutube": "https://youtu.be/Zdsif1rcFIE"
    },
    {
        "id": 40,
        "title": "Shastri Residence",
        "description": "Shastri Residence - Premium residential project focusing on structural excellence and modern aesthetics.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/shastri-residence/cover.png",
        "directYoutube": "https://youtu.be/cUOUOAFzsQQ"
    }
];

var allProjectImages = [
    {
        "title": "Skyline Hub",
        "description": "Skyline Commercial Hub – Mumbai (Design Development) In collaboration with NIBR, the Skyline Commercial Hub in Mumbai is currently in the design development phase. Spanning 300,000 sq.", "description": "Skyline Commercial Hub – Mumbai (Design Development) In collaboration with NIBR, the Skyline Commercial Hub in Mumbai is currently in the design development phase. Spanning 300,000 sq.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/skyline-commercial-hub/img-20190327-wa0003.webp",
        "id": "Skyline Hub-IMG-20190327-WA0003.webp"
    },
    {
        "title": "Skyline Hub",
        "description": "Skyline Commercial Hub – Mumbai (Design Development) In collaboration with NIBR, the Skyline Commercial Hub in Mumbai is currently in the design development phase. Spanning 300,000 sq.", "description": "Skyline Commercial Hub – Mumbai (Design Development) In collaboration with NIBR, the Skyline Commercial Hub in Mumbai is currently in the design development phase. Spanning 300,000 sq.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/skyline-commercial-hub/img-20190327-wa0007.webp",
        "id": "Skyline Hub-IMG-20190327-WA0007.webp"
    },
    {
        "title": "Skyline Hub",
        "description": "Skyline Commercial Hub – Mumbai (Design Development) In collaboration with NIBR, the Skyline Commercial Hub in Mumbai is currently in the design development phase. Spanning 300,000 sq.", "description": "Skyline Commercial Hub – Mumbai (Design Development) In collaboration with NIBR, the Skyline Commercial Hub in Mumbai is currently in the design development phase. Spanning 300,000 sq.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/skyline-commercial-hub/22.webp",
        "id": "Skyline Hub-22.webp"
    },
    {
        "title": "Skyline Hub",
        "description": "Skyline Commercial Hub – Mumbai (Design Development) In collaboration with NIBR, the Skyline Commercial Hub in Mumbai is currently in the design development phase. Spanning 300,000 sq.", "description": "Skyline Commercial Hub – Mumbai (Design Development) In collaboration with NIBR, the Skyline Commercial Hub in Mumbai is currently in the design development phase. Spanning 300,000 sq.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/skyline-commercial-hub/img-20190327-wa0008.webp",
        "id": "Skyline Hub-IMG-20190327-WA0008.webp"
    },
    {
        "title": "Skyline Hub",
        "description": "Skyline Commercial Hub – Mumbai (Design Development) In collaboration with NIBR, the Skyline Commercial Hub in Mumbai is currently in the design development phase. Spanning 300,000 sq.", "description": "Skyline Commercial Hub – Mumbai (Design Development) In collaboration with NIBR, the Skyline Commercial Hub in Mumbai is currently in the design development phase. Spanning 300,000 sq.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/skyline-commercial-hub/23.webp",
        "id": "Skyline Hub-23.webp"
    },
    {
        "title": "Skyline Hub",
        "description": "Skyline Commercial Hub – Mumbai (Design Development) In collaboration with NIBR, the Skyline Commercial Hub in Mumbai is currently in the design development phase. Spanning 300,000 sq.", "description": "Skyline Commercial Hub – Mumbai (Design Development) In collaboration with NIBR, the Skyline Commercial Hub in Mumbai is currently in the design development phase. Spanning 300,000 sq.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/skyline-commercial-hub/24.webp",
        "id": "Skyline Hub-24.webp"
    },
    {
        "title": "Skyline Hub",
        "description": "Skyline Commercial Hub – Mumbai (Design Development) In collaboration with NIBR, the Skyline Commercial Hub in Mumbai is currently in the design development phase. Spanning 300,000 sq.", "description": "Skyline Commercial Hub – Mumbai (Design Development) In collaboration with NIBR, the Skyline Commercial Hub in Mumbai is currently in the design development phase. Spanning 300,000 sq.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/skyline-commercial-hub/25.webp",
        "id": "Skyline Hub-25.webp"
    },
    {
        "title": "Skyline Hub",
        "description": "Skyline Commercial Hub – Mumbai (Design Development) In collaboration with NIBR, the Skyline Commercial Hub in Mumbai is currently in the design development phase. Spanning 300,000 sq.", "description": "Skyline Commercial Hub – Mumbai (Design Development) In collaboration with NIBR, the Skyline Commercial Hub in Mumbai is currently in the design development phase. Spanning 300,000 sq.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/skyline-commercial-hub/mumbai-building-1.webp",
        "id": "Skyline Hub-mumbai-building-1.webp"
    },
    {
        "title": "Aurora Healthcare",
        "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.", "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/aurora-healthcare/hospital-main-2.webp",
        "id": "Aurora Healthcare-Hospital-Main-2.webp"
    },
    {
        "title": "Aurora Healthcare",
        "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.", "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/aurora-healthcare/hospital-gallery-3.webp",
        "id": "Aurora Healthcare-Hospital-Gallery-3.webp"
    },
    {
        "title": "Aurora Healthcare",
        "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.", "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/aurora-healthcare/hospital-gallery-2.webp",
        "id": "Aurora Healthcare-Hospital-Gallery-2.webp"
    },
    {
        "title": "Aurora Healthcare",
        "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.", "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/aurora-healthcare/hospital-main-3.webp",
        "id": "Aurora Healthcare-Hospital-Main-3.webp"
    },
    {
        "title": "Aurora Healthcare",
        "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.", "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/aurora-healthcare/hospital-main-1.webp",
        "id": "Aurora Healthcare-Hospital-Main-1.webp"
    },
    {
        "title": "Aurora Healthcare",
        "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.", "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/aurora-healthcare/hospital-gallery-1.webp",
        "id": "Aurora Healthcare-Hospital-Gallery-1.webp"
    },
    {
        "title": "Aurora Healthcare",
        "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.", "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/aurora-healthcare/hospital-gallery-5.webp",
        "id": "Aurora Healthcare-Hospital-Gallery-5.webp"
    },
    {
        "title": "Aurora Healthcare",
        "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.", "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/aurora-healthcare/hospital-gallery-4.webp",
        "id": "Aurora Healthcare-Hospital-Gallery-4.webp"
    },
    {
        "title": "Aurora Healthcare",
        "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.", "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/aurora-healthcare/hospital-gallery-6.webp",
        "id": "Aurora Healthcare-Hospital-Gallery-6.webp"
    },
    {
        "title": "Aurora Healthcare",
        "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.", "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/aurora-healthcare/hospital-gallery-7.webp",
        "id": "Aurora Healthcare-Hospital-Gallery-7.webp"
    },
    {
        "title": "Aurora Healthcare",
        "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.", "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/aurora-healthcare/hospital-gallery-16.webp",
        "id": "Aurora Healthcare-Hospital-Gallery-16.webp"
    },
    {
        "title": "Aurora Healthcare",
        "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.", "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/aurora-healthcare/hospital-gallery-24.webp",
        "id": "Aurora Healthcare-Hospital-Gallery-24.webp"
    },
    {
        "title": "Aurora Healthcare",
        "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.", "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/aurora-healthcare/hospital-gallery-19.webp",
        "id": "Aurora Healthcare-Hospital-Gallery-19.webp"
    },
    {
        "title": "Aurora Healthcare",
        "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.", "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/aurora-healthcare/hospital-gallery-23.webp",
        "id": "Aurora Healthcare-Hospital-Gallery-23.webp"
    },
    {
        "title": "Aurora Healthcare",
        "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.", "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/aurora-healthcare/hospital-gallery-21.webp",
        "id": "Aurora Healthcare-Hospital-Gallery-21.webp"
    },
    {
        "title": "Aurora Healthcare",
        "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.", "description": "Aurora Healthcare – Chennai Located in the bustling city of Chennai, Aurora Healthcare is a state-of-the-art hospital designed to provide world-class medical care in a compassionate and welcoming environment.",
        "category": "arch-comm",
        "image": "Mayaakars-asserts/architecture/architect-commercial/aurora-healthcare/hospital-gallery-8.webp",
        "id": "Aurora Healthcare-Hospital-Gallery-8.webp"
    },
    {
        "title": "Rathod Residence",
        "description": "Rathore Residence – Hyderabad, Telangana The Rathore Residence in Hyderabad beautifully blends contemporary design with traditional architectural elements.", "description": "Rathore Residence – Hyderabad, Telangana The Rathore Residence in Hyderabad beautifully blends contemporary design with traditional architectural elements.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/rathod-residence/2.webp",
        "id": "Rathod Residence-2.webp"
    },
    {
        "title": "Rathod Residence",
        "description": "Rathore Residence – Hyderabad, Telangana The Rathore Residence in Hyderabad beautifully blends contemporary design with traditional architectural elements.", "description": "Rathore Residence – Hyderabad, Telangana The Rathore Residence in Hyderabad beautifully blends contemporary design with traditional architectural elements.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/rathod-residence/1.webp",
        "id": "Rathod Residence-1.webp"
    },
    {
        "title": "Prasad Residence",
        "description": "PRASAD RESIDENCE COORG , KARNATAKA The weekend home is nestled amidst a lush coffee plantation in Coorg , Karnataka, exudes a charming and rustic appeal.", "description": "PRASAD RESIDENCE COORG , KARNATAKA The weekend home is nestled amidst a lush coffee plantation in Coorg , Karnataka, exudes a charming and rustic appeal.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/prasad-residence/03.webp",
        "id": "Prasad Residence-03.webp"
    },
    {
        "title": "Prasad Residence",
        "description": "PRASAD RESIDENCE COORG , KARNATAKA The weekend home is nestled amidst a lush coffee plantation in Coorg , Karnataka, exudes a charming and rustic appeal.", "description": "PRASAD RESIDENCE COORG , KARNATAKA The weekend home is nestled amidst a lush coffee plantation in Coorg , Karnataka, exudes a charming and rustic appeal.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/prasad-residence/06.webp",
        "id": "Prasad Residence-06.webp"
    },
    {
        "title": "Prasad Residence",
        "description": "PRASAD RESIDENCE COORG , KARNATAKA The weekend home is nestled amidst a lush coffee plantation in Coorg , Karnataka, exudes a charming and rustic appeal.", "description": "PRASAD RESIDENCE COORG , KARNATAKA The weekend home is nestled amidst a lush coffee plantation in Coorg , Karnataka, exudes a charming and rustic appeal.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/prasad-residence/07.webp",
        "id": "Prasad Residence-07.webp"
    },
    {
        "title": "Prasad Residence",
        "description": "PRASAD RESIDENCE COORG , KARNATAKA The weekend home is nestled amidst a lush coffee plantation in Coorg , Karnataka, exudes a charming and rustic appeal.", "description": "PRASAD RESIDENCE COORG , KARNATAKA The weekend home is nestled amidst a lush coffee plantation in Coorg , Karnataka, exudes a charming and rustic appeal.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/prasad-residence/09.webp",
        "id": "Prasad Residence-09.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/img-4703.webp",
        "id": "Panorama House-IMG_4703.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/extra-1.webp",
        "id": "Panorama House-EXTRA 1.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/title-photo.webp",
        "id": "Panorama House-title photo.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/img-4854.webp",
        "id": "Panorama House-IMG_4854.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/img-4672.webp",
        "id": "Panorama House-IMG_4672.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/36.webp",
        "id": "Panorama House-36.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/29.webp",
        "id": "Panorama House-29.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/15.webp",
        "id": "Panorama House-15.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/12.webp",
        "id": "Panorama House-12.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/05.webp",
        "id": "Panorama House-05.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/11.webp",
        "id": "Panorama House-11.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/22.webp",
        "id": "Panorama House-22.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/23.webp",
        "id": "Panorama House-23.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/33.webp",
        "id": "Panorama House-33.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/27.webp",
        "id": "Panorama House-27.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/img-4791.webp",
        "id": "Panorama House-IMG_4791.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/26.webp",
        "id": "Panorama House-26.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/24.webp",
        "id": "Panorama House-24.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/30.webp",
        "id": "Panorama House-30.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/35.webp",
        "id": "Panorama House-35.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/19.webp",
        "id": "Panorama House-19.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/42.webp",
        "id": "Panorama House-42.webp"
    },
    {
        "title": "Panorama House",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "arch-res",
        "image": "Mayaakars-asserts/architecture/architect-residence/panorama-house/41.webp",
        "id": "Panorama House-41.webp"
    },
    {
        "title": "Sharma Residence",
        "description": "Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.", "description": "Sharma Residence – Bangalore Situated in the heart of Bangalore, the Sharma Residence is a modern sanctuary designed for a family of four, combining sleek contemporary design with natural elements.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/sharma-residence/dining-area.webp",
        "id": "Sharma Residence-Dining Area.webp"
    },
    {
        "title": "Sharma Residence",
        "description": "Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.", "description": "Sharma Residence – Bangalore Situated in the heart of Bangalore, the Sharma Residence is a modern sanctuary designed for a family of four, combining sleek contemporary design with natural elements.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/sharma-residence/bedroom-1.webp",
        "id": "Sharma Residence-Bedroom 1.webp"
    },
    {
        "title": "Sharma Residence",
        "description": "Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.", "description": "Sharma Residence – Bangalore Situated in the heart of Bangalore, the Sharma Residence is a modern sanctuary designed for a family of four, combining sleek contemporary design with natural elements.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/sharma-residence/lawn-.webp",
        "id": "Sharma Residence-Lawn .webp"
    },
    {
        "title": "Sharma Residence",
        "description": "Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.", "description": "Sharma Residence – Bangalore Situated in the heart of Bangalore, the Sharma Residence is a modern sanctuary designed for a family of four, combining sleek contemporary design with natural elements.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/sharma-residence/bedroom-2.webp",
        "id": "Sharma Residence-Bedroom 2.webp"
    },
    {
        "title": "Sharma Residence",
        "description": "Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.", "description": "Sharma Residence – Bangalore Situated in the heart of Bangalore, the Sharma Residence is a modern sanctuary designed for a family of four, combining sleek contemporary design with natural elements.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/sharma-residence/living-area.webp",
        "id": "Sharma Residence-Living Area.webp"
    },
    {
        "title": "Sharma Residence",
        "description": "Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.", "description": "Sharma Residence – Bangalore Situated in the heart of Bangalore, the Sharma Residence is a modern sanctuary designed for a family of four, combining sleek contemporary design with natural elements.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/sharma-residence/lawn-1-.webp",
        "id": "Sharma Residence-Lawn (1).webp"
    },
    {
        "title": "Sharma Residence",
        "description": "Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.", "description": "Sharma Residence – Bangalore Situated in the heart of Bangalore, the Sharma Residence is a modern sanctuary designed for a family of four, combining sleek contemporary design with natural elements.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/sharma-residence/living-room-.webp",
        "id": "Sharma Residence-Living Room .webp"
    },
    {
        "title": "Sharma Residence",
        "description": "Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.", "description": "Sharma Residence – Bangalore Situated in the heart of Bangalore, the Sharma Residence is a modern sanctuary designed for a family of four, combining sleek contemporary design with natural elements.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/sharma-residence/living-area-1-.webp",
        "id": "Sharma Residence-Living Area(1).webp"
    },
    {
        "title": "Sharma Residence",
        "description": "Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.", "description": "Sharma Residence – Bangalore Situated in the heart of Bangalore, the Sharma Residence is a modern sanctuary designed for a family of four, combining sleek contemporary design with natural elements.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/sharma-residence/puja-room-.webp",
        "id": "Sharma Residence-Puja Room .webp"
    },
    {
        "title": "Patil Residence",
        "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.", "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/patil-residence/bedroom-3-1-.webp",
        "id": "Patil Residence-Bedroom 3(1).webp"
    },
    {
        "title": "Patil Residence",
        "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.", "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/patil-residence/bedroom-4.webp",
        "id": "Patil Residence-Bedroom 4.webp"
    },
    {
        "title": "Patil Residence",
        "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.", "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/patil-residence/bedroom-1.webp",
        "id": "Patil Residence-Bedroom 1.webp"
    },
    {
        "title": "Patil Residence",
        "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.", "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/patil-residence/bedroom-3.webp",
        "id": "Patil Residence-Bedroom 3.webp"
    },
    {
        "title": "Patil Residence",
        "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.", "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/patil-residence/bedroom-2.webp",
        "id": "Patil Residence-Bedroom 2.webp"
    },
    {
        "title": "Patil Residence",
        "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.", "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/patil-residence/study-table-.webp",
        "id": "Patil Residence-Study Table .webp"
    },
    {
        "title": "Patil Residence",
        "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.", "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/patil-residence/bedroom-1-1-.webp",
        "id": "Patil Residence-Bedroom 1(1).webp"
    },
    {
        "title": "Patil Residence",
        "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.", "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/patil-residence/living-area.webp",
        "id": "Patil Residence-Living Area.webp"
    },
    {
        "title": "Patil Residence",
        "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.", "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/patil-residence/stairs-.webp",
        "id": "Patil Residence-Stairs .webp"
    },
    {
        "title": "Patil Residence",
        "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.", "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/patil-residence/entrance-.webp",
        "id": "Patil Residence-Entrance .webp"
    },
    {
        "title": "Patil Residence",
        "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.", "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/patil-residence/kitchen-.webp",
        "id": "Patil Residence-Kitchen .webp"
    },
    {
        "title": "Patil Residence",
        "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.", "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/patil-residence/washroom-2.webp",
        "id": "Patil Residence-Washroom 2.webp"
    },
    {
        "title": "Patil Residence",
        "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.", "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/patil-residence/bedroom-2-1-.webp",
        "id": "Patil Residence-Bedroom 2(1).webp"
    },
    {
        "title": "Patil Residence",
        "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.", "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/patil-residence/puja-room.webp",
        "id": "Patil Residence-Puja Room.webp"
    },
    {
        "title": "Patil Residence",
        "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.", "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/patil-residence/dining-.webp",
        "id": "Patil Residence-Dining .webp"
    },
    {
        "title": "Patil Residence",
        "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.", "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/patil-residence/entrance-1-.webp",
        "id": "Patil Residence-Entrance (1).webp"
    },
    {
        "title": "Patil Residence",
        "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.", "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/patil-residence/bedroom-1-2-.webp",
        "id": "Patil Residence-Bedroom 1(2).webp"
    },
    {
        "title": "Patil Residence",
        "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.", "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/patil-residence/stairs.webp",
        "id": "Patil Residence-Stairs.webp"
    },
    {
        "title": "Patil Residence",
        "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.", "description": "Patil Residence – Yelahanka, Bangalore Patil Residence is a thoughtfully designed interior project for a 4BHK bungalow in Yelahanka, Bangalore.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/patil-residence/washrooms-.webp",
        "id": "Patil Residence-Washrooms .webp"
    },
    {
        "title": "Kumar Residence",
        "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.", "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/bedroom-3-1-.webp",
        "id": "Kumar Residence-Bedroom 3(1).webp"
    },
    {
        "title": "Kumar Residence",
        "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.", "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/wadrobe.webp",
        "id": "Kumar Residence-Wadrobe.webp"
    },
    {
        "title": "Kumar Residence",
        "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.", "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/dining-area.webp",
        "id": "Kumar Residence-Dining Area.webp"
    },
    {
        "title": "Kumar Residence",
        "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.", "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/bedroom-1.webp",
        "id": "Kumar Residence-Bedroom 1.webp"
    },
    {
        "title": "Kumar Residence",
        "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.", "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/vanity-table-.webp",
        "id": "Kumar Residence-Vanity Table .webp"
    },
    {
        "title": "Kumar Residence",
        "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.", "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/bedroom-3.webp",
        "id": "Kumar Residence-Bedroom 3.webp"
    },
    {
        "title": "Kumar Residence",
        "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.", "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/bedroom-2.webp",
        "id": "Kumar Residence-Bedroom 2.webp"
    },
    {
        "title": "Kumar Residence",
        "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.", "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/study-table-.webp",
        "id": "Kumar Residence-Study Table .webp"
    },
    {
        "title": "Kumar Residence",
        "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.", "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/living-area.webp",
        "id": "Kumar Residence-Living Area.webp"
    },
    {
        "title": "Kumar Residence",
        "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.", "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/living-area-.webp",
        "id": "Kumar Residence-Living Area .webp"
    },
    {
        "title": "Kumar Residence",
        "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.", "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/kitchen-.webp",
        "id": "Kumar Residence-Kitchen .webp"
    },
    {
        "title": "Kumar Residence",
        "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.", "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/bedroom1.webp",
        "id": "Kumar Residence-Bedroom1.webp"
    },
    {
        "title": "Kumar Residence",
        "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.", "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/cabinet-1-.webp",
        "id": "Kumar Residence-Cabinet (1).webp"
    },
    {
        "title": "Kumar Residence",
        "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.", "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/cabinet-2-.webp",
        "id": "Kumar Residence-Cabinet (2).webp"
    },
    {
        "title": "Kumar Residence",
        "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.", "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/study-table.webp",
        "id": "Kumar Residence-Study Table.webp"
    },
    {
        "title": "Kumar Residence",
        "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.", "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/kitchen.webp",
        "id": "Kumar Residence-Kitchen.webp"
    },
    {
        "title": "Kumar Residence",
        "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.", "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/living-area-1-.webp",
        "id": "Kumar Residence-Living Area(1).webp"
    },
    {
        "title": "Kumar Residence",
        "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.", "description": "KUMAR RESIDENCE BENGLURU A 3BHK Interior project for a family of a couple with grandmother and 2 kids is made in Japandi style.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/kumar-residence/cabinet-.webp",
        "id": "Kumar Residence-Cabinet .webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/bedroom-3-1-.webp",
        "id": "House of 13 Arches-Bedroom 3(1).webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/dining-area.webp",
        "id": "House of 13 Arches-Dining Area.webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/bedroom-1.webp",
        "id": "House of 13 Arches-Bedroom 1.webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/hall-.webp",
        "id": "House of 13 Arches-Hall .webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/hall-1-.webp",
        "id": "House of 13 Arches-Hall 1 .webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/living-space.webp",
        "id": "House of 13 Arches-Living Space.webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/bedroom-3.webp",
        "id": "House of 13 Arches-Bedroom 3.webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/bedroom-2.webp",
        "id": "House of 13 Arches-Bedroom 2.webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/bedroom-1-1-.webp",
        "id": "House of 13 Arches-Bedroom 1(1).webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/living-area.webp",
        "id": "House of 13 Arches-Living Area.webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/stairs-.webp",
        "id": "House of 13 Arches-Stairs .webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/entrance-.webp",
        "id": "House of 13 Arches-Entrance .webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/kitchen-.webp",
        "id": "House of 13 Arches-Kitchen .webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/bedroom2.webp",
        "id": "House of 13 Arches-Bedroom2.webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/bedroom1.webp",
        "id": "House of 13 Arches-Bedroom1.webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/dining-area-1.webp",
        "id": "House of 13 Arches-Dining Area 1.webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/kitchen-1-.webp",
        "id": "House of 13 Arches-Kitchen (1).webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/entrance-1-.webp",
        "id": "House of 13 Arches-Entrance (1).webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/stairs.webp",
        "id": "House of 13 Arches-Stairs.webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/tv-cabinet.webp",
        "id": "House of 13 Arches-TV Cabinet.webp"
    },
    {
        "title": "House of 13 Arches",
        "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.", "description": "HOUSE OF 13 ARCHES Bengluru An Interior Project made in the modern neo classical style in the heart of the Bengluru city. Modern neo classical style incorporates elements of minimalism to create a more contemporary feel.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/house-of-13-arches/bedroom-3-2-.webp",
        "id": "House of 13 Arches-Bedroom 3(2).webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/vanity-area.webp",
        "id": "Panorama Interior-Vanity Area.webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/living-room.webp",
        "id": "Panorama Interior-Living Room.webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/gallery.webp",
        "id": "Panorama Interior-Gallery.webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/hall-.webp",
        "id": "Panorama Interior-Hall .webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/drawing-room-.webp",
        "id": "Panorama Interior-Drawing Room .webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/dining-room-1-.webp",
        "id": "Panorama Interior-Dining Room (1).webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/outside-elevation-.webp",
        "id": "Panorama Interior-Outside Elevation .webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/bedroom-.webp",
        "id": "Panorama Interior-Bedroom .webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/kitchen-.webp",
        "id": "Panorama Interior-Kitchen .webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/entrance.webp",
        "id": "Panorama Interior-Entrance.webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/living-room-.webp",
        "id": "Panorama Interior-Living Room .webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/front-of-the-house-.webp",
        "id": "Panorama Interior-Front of the house .webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/puja-room-1-.webp",
        "id": "Panorama Interior-Puja Room (1).webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/coffee-table-.webp",
        "id": "Panorama Interior-Coffee Table .webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/puja-room-.webp",
        "id": "Panorama Interior-Puja Room .webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/front-of-the-house.webp",
        "id": "Panorama Interior-Front of the house.webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/stairs-1-.webp",
        "id": "Panorama Interior-Stairs(1).webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/drawing-room-1-.webp",
        "id": "Panorama Interior-Drawing Room (1).webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/dining-room-.webp",
        "id": "Panorama Interior-Dining Room .webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/stairs.webp",
        "id": "Panorama Interior-Stairs.webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/front-of-the-house-1-.webp",
        "id": "Panorama Interior-Front of the house (1).webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/wardrobe.webp",
        "id": "Panorama Interior-Wardrobe.webp"
    },
    {
        "title": "Panorama Interior",
        "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.", "description": "PANORAMA HOUSE The architecture of the panorama house is characterized by clean lines, geometric shapes, wooden finished louvers and large expanses of glass, allowing for uninterrupted views of the surrounding landscape.",
        "category": "int-res",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-residencial/panorama-house/living-room-.webp",
        "id": "Panorama Interior-Living Room .webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/whatsapp-image-2019-10-16-at-12-40-10-pm.webp",
        "id": "The Grid-WhatsApp-Image-2019-10-16-at-12-40-10-PM.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/innova8-3.webp",
        "id": "The Grid-innova8-3.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/innova8-2.webp",
        "id": "The Grid-innova8-2.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/innova8-1.webp",
        "id": "The Grid-innova8-1.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/whatsapp-image-2019-10-16-at-12-40-06-pm.webp",
        "id": "The Grid-WhatsApp-Image-2019-10-16-at-12-40-06-PM.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/whatsapp-image-2019-10-16-at-12-39-30-pm-copy.webp",
        "id": "The Grid-WhatsApp-Image-2019-10-16-at-12-39-30-PM-Copy.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/app-26.webp",
        "id": "The Grid-app-26.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/whatsapp-image-2019-10-16-at-12-40-15-pm.webp",
        "id": "The Grid-WhatsApp-Image-2019-10-16-at-12-40-15-PM.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/whatsapp-image-2019-10-16-at-12-39-33-pm1.webp",
        "id": "The Grid-WhatsApp-Image-2019-10-16-at-12-39-33-PM1.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/whatsapp-image-2019-10-16-at-12-40-26-pm.webp",
        "id": "The Grid-WhatsApp-Image-2019-10-16-at-12-40-26-PM.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/whatsapp-image-2019-10-02-at-6-04-43-pm.webp",
        "id": "The Grid-WhatsApp-Image-2019-10-02-at-6-04-43-PM.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/whatsapp-image-2019-10-16-at-12-40-42-pm.webp",
        "id": "The Grid-WhatsApp-Image-2019-10-16-at-12-40-42-PM.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/whatsapp-image-2019-10-16-at-12-39-56-pm.webp",
        "id": "The Grid-WhatsApp-Image-2019-10-16-at-12-39-56-PM.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/whatsapp-image-2019-10-16-at-12-40-37-pm.webp",
        "id": "The Grid-WhatsApp-Image-2019-10-16-at-12-40-37-PM.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/whatsapp-image-2019-10-16-at-12-39-25-pm.webp",
        "id": "The Grid-WhatsApp-Image-2019-10-16-at-12-39-25-PM.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/whatsapp-image-2019-10-16-at-12-40-01-pm.webp",
        "id": "The Grid-WhatsApp-Image-2019-10-16-at-12-40-01-PM.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/whatsapp-image-2019-10-16-at-12-39-29-pm.webp",
        "id": "The Grid-WhatsApp-Image-2019-10-16-at-12-39-29-PM.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/whatsapp-image-2019-10-16-at-12-40-43-pm.webp",
        "id": "The Grid-WhatsApp-Image-2019-10-16-at-12-40-43-PM.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/whatsapp-image-2019-10-16-at-12-39-48-pm.webp",
        "id": "The Grid-WhatsApp-Image-2019-10-16-at-12-39-48-PM.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/whatsapp-image-2019-10-16-at-12-39-37-pm.webp",
        "id": "The Grid-WhatsApp-Image-2019-10-16-at-12-39-37-PM.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/whatsapp-image-2019-10-16-at-12-39-59-pm-copy.webp",
        "id": "The Grid-WhatsApp-Image-2019-10-16-at-12-39-59-PM-Copy.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/whatsapp-image-2019-10-02-at-6-04-40-pm1.webp",
        "id": "The Grid-WhatsApp-Image-2019-10-02-at-6-04-40-PM1.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/whatsapp-image-2019-10-16-at-12-39-26-pm.webp",
        "id": "The Grid-WhatsApp-Image-2019-10-16-at-12-39-26-PM.webp"
    },
    {
        "title": "The Grid",
        "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.", "description": "The Grid | Bangalore This 24,000 sq. ft. co-working environment in Bangalore is designed as a dynamic ecosystem that brings people, ideas, and collaboration together.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/the-grid/whatsapp-image-2019-10-16-at-12-39-33-pm.webp",
        "id": "The Grid-WhatsApp-Image-2019-10-16-at-12-39-33-PM.webp"
    },
    {
        "title": "Shizuka Nook",
        "description": "A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.", "description": "A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/shizuka-nook/dining-area-1-.webp",
        "id": "Shizuka Nook-Dining Area(1).webp"
    },
    {
        "title": "Shizuka Nook",
        "description": "A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.", "description": "A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/shizuka-nook/dining-area.webp",
        "id": "Shizuka Nook-Dining Area.webp"
    },
    {
        "title": "Shizuka Nook",
        "description": "A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.", "description": "A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/shizuka-nook/4-table-corner-1-.webp",
        "id": "Shizuka Nook-4 Table Corner(1).webp"
    },
    {
        "title": "Shizuka Nook",
        "description": "A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.", "description": "A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/shizuka-nook/1-table-corner.webp",
        "id": "Shizuka Nook-1 Table Corner.webp"
    },
    {
        "title": "Shizuka Nook",
        "description": "A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.", "description": "A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/shizuka-nook/2-table-corner.webp",
        "id": "Shizuka Nook-2 Table Corner.webp"
    },
    {
        "title": "Shizuka Nook",
        "description": "A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.", "description": "A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/shizuka-nook/front-off-the-house.webp",
        "id": "Shizuka Nook-Front Off the house.webp"
    },
    {
        "title": "Shizuka Nook",
        "description": "A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.", "description": "A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/shizuka-nook/entrance.webp",
        "id": "Shizuka Nook-Entrance.webp"
    },
    {
        "title": "Shizuka Nook",
        "description": "A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.", "description": "A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/shizuka-nook/4-table-corner.webp",
        "id": "Shizuka Nook-4 table Corner.webp"
    },
    {
        "title": "Shizuka Nook",
        "description": "A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.", "description": "A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/shizuka-nook/chandelier.webp",
        "id": "Shizuka Nook-Chandelier.webp"
    },
    {
        "title": "Shizuka Nook",
        "description": "A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.", "description": "A thoughtfully designed quaint corner that offers a peaceful escape from the fast-paced rhythm of city life, inspired by the calm philosophy of Japanese design.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/shizuka-nook/sitting.webp",
        "id": "Shizuka Nook-Sitting.webp"
    },
    {
        "title": "Seabreeze Office",
        "description": "The office design reflects the serenity of a coastal retreat while staying true to the brand’s color palette.", "description": "The office design reflects the serenity of a coastal retreat while staying true to the brand’s color palette.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/seabreeze-office/lobby-area-2-.webp",
        "id": "Seabreeze Office-Lobby Area(2).webp"
    },
    {
        "title": "Seabreeze Office",
        "description": "The office design reflects the serenity of a coastal retreat while staying true to the brand’s color palette.", "description": "The office design reflects the serenity of a coastal retreat while staying true to the brand’s color palette.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/seabreeze-office/lobby-area-1-.webp",
        "id": "Seabreeze Office-Lobby Area(1).webp"
    },
    {
        "title": "Seabreeze Office",
        "description": "The office design reflects the serenity of a coastal retreat while staying true to the brand’s color palette.", "description": "The office design reflects the serenity of a coastal retreat while staying true to the brand’s color palette.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/seabreeze-office/cabin.webp",
        "id": "Seabreeze Office-Cabin.webp"
    },
    {
        "title": "Seabreeze Office",
        "description": "The office design reflects the serenity of a coastal retreat while staying true to the brand’s color palette.", "description": "The office design reflects the serenity of a coastal retreat while staying true to the brand’s color palette.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/seabreeze-office/pathway.webp",
        "id": "Seabreeze Office-Pathway.webp"
    },
    {
        "title": "Seabreeze Office",
        "description": "The office design reflects the serenity of a coastal retreat while staying true to the brand’s color palette.", "description": "The office design reflects the serenity of a coastal retreat while staying true to the brand’s color palette.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/seabreeze-office/office-area.webp",
        "id": "Seabreeze Office-Office Area.webp"
    },
    {
        "title": "Seabreeze Office",
        "description": "The office design reflects the serenity of a coastal retreat while staying true to the brand’s color palette.", "description": "The office design reflects the serenity of a coastal retreat while staying true to the brand’s color palette.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/seabreeze-office/cubicles-1-.webp",
        "id": "Seabreeze Office-Cubicles (1).webp"
    },
    {
        "title": "Solaris Energy",
        "description": "Solaris Energy Office | Imperia Mindspace , Bangalore Located at Imperia Mindspace, Bangalore, the Solaris Energy office is a seamless blend of modern design, energy, and ambition. Spanning 10,000 sq.", "description": "Solaris Energy Office | Imperia Mindspace , Bangalore Located at Imperia Mindspace, Bangalore, the Solaris Energy office is a seamless blend of modern design, energy, and ambition. Spanning 10,000 sq.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/solaris-energy/cubicles.webp",
        "id": "Solaris Energy-Cubicles.webp"
    },
    {
        "title": "Solaris Energy",
        "description": "Solaris Energy Office | Imperia Mindspace , Bangalore Located at Imperia Mindspace, Bangalore, the Solaris Energy office is a seamless blend of modern design, energy, and ambition. Spanning 10,000 sq.", "description": "Solaris Energy Office | Imperia Mindspace , Bangalore Located at Imperia Mindspace, Bangalore, the Solaris Energy office is a seamless blend of modern design, energy, and ambition. Spanning 10,000 sq.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/solaris-energy/cabin-.webp",
        "id": "Solaris Energy-Cabin .webp"
    },
    {
        "title": "Solaris Energy",
        "description": "Solaris Energy Office | Imperia Mindspace , Bangalore Located at Imperia Mindspace, Bangalore, the Solaris Energy office is a seamless blend of modern design, energy, and ambition. Spanning 10,000 sq.", "description": "Solaris Energy Office | Imperia Mindspace , Bangalore Located at Imperia Mindspace, Bangalore, the Solaris Energy office is a seamless blend of modern design, energy, and ambition. Spanning 10,000 sq.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/solaris-energy/lobby-area.webp",
        "id": "Solaris Energy-Lobby Area.webp"
    },
    {
        "title": "Solaris Energy",
        "description": "Solaris Energy Office | Imperia Mindspace , Bangalore Located at Imperia Mindspace, Bangalore, the Solaris Energy office is a seamless blend of modern design, energy, and ambition. Spanning 10,000 sq.", "description": "Solaris Energy Office | Imperia Mindspace , Bangalore Located at Imperia Mindspace, Bangalore, the Solaris Energy office is a seamless blend of modern design, energy, and ambition. Spanning 10,000 sq.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/solaris-energy/cafeteria.webp",
        "id": "Solaris Energy-Cafeteria.webp"
    },
    {
        "title": "Solaris Energy",
        "description": "Solaris Energy Office | Imperia Mindspace , Bangalore Located at Imperia Mindspace, Bangalore, the Solaris Energy office is a seamless blend of modern design, energy, and ambition. Spanning 10,000 sq.", "description": "Solaris Energy Office | Imperia Mindspace , Bangalore Located at Imperia Mindspace, Bangalore, the Solaris Energy office is a seamless blend of modern design, energy, and ambition. Spanning 10,000 sq.",
        "category": "int-comm",
        "image": "Mayaakars-asserts/ordient-infra-interior-portfolio/interior-commercial/solaris-energy/cabin.webp",
        "id": "Solaris Energy-Cabin.webp"
    }
    ,

    {
        "title": "Bansal Residence",
        "description": "Bansal Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3852 sqft The client engaged Ordient Infra for complete residential construction supported by architectural planning and coordinated interior finishes.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/bansal-residence-3852sqft/finished-project.webp",
        "id": "Bansal Residence-finished-project.webp"
    },
    {
        "title": "Bansal Residence",
        "description": "Bansal Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3852 sqft The client engaged Ordient Infra for complete residential construction supported by architectural planning and coordinated interior finishes.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/bansal-residence-3852sqft/finishing-.webp",
        "id": "Bansal Residence-finishing-.webp"
    },
    {
        "title": "Bansal Residence",
        "description": "Bansal Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3852 sqft The client engaged Ordient Infra for complete residential construction supported by architectural planning and coordinated interior finishes.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/bansal-residence-3852sqft/plastering.webp",
        "id": "Bansal Residence-plastering.webp"
    },
    {
        "title": "Bose Residence",
        "description": "Bose Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4963sqft The client engaged Ordient Infra for large-scale residential construction supported by architectural planning and interior coordination.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/bose-residence-4963sqftsqft/3d-design.webp",
        "id": "Bose Residence-3d-design.webp"
    },
    {
        "title": "Bose Residence",
        "description": "Bose Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4963sqft The client engaged Ordient Infra for large-scale residential construction supported by architectural planning and interior coordination.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/bose-residence-4963sqftsqft/block-work-1st-floorjpg.webp",
        "id": "Bose Residence-block-work-1st-floorjpg.webp"
    },
    {
        "title": "Bose Residence",
        "description": "Bose Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4963sqft The client engaged Ordient Infra for large-scale residential construction supported by architectural planning and interior coordination.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/bose-residence-4963sqftsqft/block-work.webp",
        "id": "Bose Residence-block-work.webp"
    },
    {
        "title": "Bose Residence",
        "description": "Bose Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4963sqft The client engaged Ordient Infra for large-scale residential construction supported by architectural planning and interior coordination.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/bose-residence-4963sqftsqft/finished-hall.webp",
        "id": "Bose Residence-finished-hall.webp"
    },
    {
        "title": "Bose Residence",
        "description": "Bose Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4963sqft The client engaged Ordient Infra for large-scale residential construction supported by architectural planning and interior coordination.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/bose-residence-4963sqftsqft/finished-project.webp",
        "id": "Bose Residence-finished-project.webp"
    },
    {
        "title": "Bose Residence",
        "description": "Bose Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4963sqft The client engaged Ordient Infra for large-scale residential construction supported by architectural planning and interior coordination.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/bose-residence-4963sqftsqft/finished-project.webp",
        "id": "Bose Residence-finished-project.webp"
    },
    {
        "title": "Bose Residence",
        "description": "Bose Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4963sqft The client engaged Ordient Infra for large-scale residential construction supported by architectural planning and interior coordination.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/bose-residence-4963sqftsqft/finished-project1.webp",
        "id": "Bose Residence-finished-project1.webp"
    },
    {
        "title": "Bose Residence",
        "description": "Bose Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4963sqft The client engaged Ordient Infra for large-scale residential construction supported by architectural planning and interior coordination.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/bose-residence-4963sqftsqft/finishing.webp",
        "id": "Bose Residence-finishing.webp"
    },
    {
        "title": "Bose Residence",
        "description": "Bose Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4963sqft The client engaged Ordient Infra for large-scale residential construction supported by architectural planning and interior coordination.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/bose-residence-4963sqftsqft/slab.webp",
        "id": "Bose Residence-slab.webp"
    },
    {
        "title": "Chandrashekhar Residence",
        "description": "Chandrashekhar Residence (G+3) Construction-Led Project | Executed by Ordient Infra | Built up 4295 sqft The brief was to execute a G+3 residential construction with clear vertical planning and controlled execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/chandrashekhar-residence-4297sqft-g3/3d-design-.webp",
        "id": "Chandrashekhar Residence-3d-design-.webp"
    },
    {
        "title": "Chandrashekhar Residence",
        "description": "Chandrashekhar Residence (G+3) Construction-Led Project | Executed by Ordient Infra | Built up 4295 sqft The brief was to execute a G+3 residential construction with clear vertical planning and controlled execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/chandrashekhar-residence-4297sqft-g3/block-work.webp",
        "id": "Chandrashekhar Residence-block-work.webp"
    },
    {
        "title": "Chandrashekhar Residence",
        "description": "Chandrashekhar Residence (G+3) Construction-Led Project | Executed by Ordient Infra | Built up 4295 sqft The brief was to execute a G+3 residential construction with clear vertical planning and controlled execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/chandrashekhar-residence-4297sqft-g3/finished-.webp",
        "id": "Chandrashekhar Residence-finished-.webp"
    },
    {
        "title": "Chandrashekhar Residence",
        "description": "Chandrashekhar Residence (G+3) Construction-Led Project | Executed by Ordient Infra | Built up 4295 sqft The brief was to execute a G+3 residential construction with clear vertical planning and controlled execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/chandrashekhar-residence-4297sqft-g3/finished-project-.webp",
        "id": "Chandrashekhar Residence-finished-project-.webp"
    },
    {
        "title": "Chandrashekhar Residence",
        "description": "Chandrashekhar Residence (G+3) Construction-Led Project | Executed by Ordient Infra | Built up 4295 sqft The brief was to execute a G+3 residential construction with clear vertical planning and controlled execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/chandrashekhar-residence-4297sqft-g3/finished-project.webp",
        "id": "Chandrashekhar Residence-finished-project.webp"
    },
    {
        "title": "Chandrashekhar Residence",
        "description": "Chandrashekhar Residence (G+3) Construction-Led Project | Executed by Ordient Infra | Built up 4295 sqft The brief was to execute a G+3 residential construction with clear vertical planning and controlled execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/chandrashekhar-residence-4297sqft-g3/finishing.webp",
        "id": "Chandrashekhar Residence-finishing.webp"
    },
    {
        "title": "Chandrashekhar Residence",
        "description": "Chandrashekhar Residence (G+3) Construction-Led Project | Executed by Ordient Infra | Built up 4295 sqft The brief was to execute a G+3 residential construction with clear vertical planning and controlled execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/chandrashekhar-residence-4297sqft-g3/finishing1.webp",
        "id": "Chandrashekhar Residence-finishing1.webp"
    },
    {
        "title": "Chandrashekhar Residence",
        "description": "Chandrashekhar Residence (G+3) Construction-Led Project | Executed by Ordient Infra | Built up 4295 sqft The brief was to execute a G+3 residential construction with clear vertical planning and controlled execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/chandrashekhar-residence-4297sqft-g3/lintern-stage.webp",
        "id": "Chandrashekhar Residence-lintern-stage.webp"
    },
    {
        "title": "Chandrashekhar Residence",
        "description": "Chandrashekhar Residence (G+3) Construction-Led Project | Executed by Ordient Infra | Built up 4295 sqft The brief was to execute a G+3 residential construction with clear vertical planning and controlled execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/chandrashekhar-residence-4297sqft-g3/plinth-.webp",
        "id": "Chandrashekhar Residence-plinth-.webp"
    },
    {
        "title": "Gayatri Residency",
        "description": "Gayatri’s Residence Construction-Led Project | Executed by Ordient Infra | Built Up 2862 sqft The client engaged Ordient Infra for complete residential construction supported by architectural planning and coordinated interior execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/gayatri-residnece-2826sqft/3d-design.webp",
        "id": "Gayatri Residency-3d-design.webp"
    },
    {
        "title": "Gayatri Residency",
        "description": "Gayatri’s Residence Construction-Led Project | Executed by Ordient Infra | Built Up 2862 sqft The client engaged Ordient Infra for complete residential construction supported by architectural planning and coordinated interior execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/gayatri-residnece-2826sqft/finishing-project-.webp",
        "id": "Gayatri Residency-finishing-project-.webp"
    },
    {
        "title": "Menon Residence",
        "description": "Menon Residence Traditional Kerala-Style Construction | Executed by Ordient Infra | Built up 3842 sqft The client required residential construction rooted in traditional Kerala architecture, with emphasis on sloped roofs, proportions, and durable mat...",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/menon-residence-3842-sqft-/1711195234-1.webp",
        "id": "Menon Residence-1711195234-1.webp"
    },
    {
        "title": "Menon Residence",
        "description": "Menon Residence Traditional Kerala-Style Construction | Executed by Ordient Infra | Built up 3842 sqft The client required residential construction rooted in traditional Kerala architecture, with emphasis on sloped roofs, proportions, and durable mat...",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/menon-residence-3842-sqft-/1711195234.webp",
        "id": "Menon Residence-1711195234.webp"
    },
    {
        "title": "Menon Residence",
        "description": "Menon Residence Traditional Kerala-Style Construction | Executed by Ordient Infra | Built up 3842 sqft The client required residential construction rooted in traditional Kerala architecture, with emphasis on sloped roofs, proportions, and durable mat...",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/menon-residence-3842-sqft-/1711195345.webp",
        "id": "Menon Residence-1711195345.webp"
    },
    {
        "title": "Menon Residence",
        "description": "Menon Residence Traditional Kerala-Style Construction | Executed by Ordient Infra | Built up 3842 sqft The client required residential construction rooted in traditional Kerala architecture, with emphasis on sloped roofs, proportions, and durable mat...",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/menon-residence-3842-sqft-/1711195397-1.webp",
        "id": "Menon Residence-1711195397-1.webp"
    },
    {
        "title": "Menon Residence",
        "description": "Menon Residence Traditional Kerala-Style Construction | Executed by Ordient Infra | Built up 3842 sqft The client required residential construction rooted in traditional Kerala architecture, with emphasis on sloped roofs, proportions, and durable mat...",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/menon-residence-3842-sqft-/1711195397.webp",
        "id": "Menon Residence-1711195397.webp"
    },
    {
        "title": "Pasar Residence",
        "description": "Pasar Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3564 sqft The requirement was to execute residential construction with strong structural focus and architectural planning.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pasar-residence-3564sqft/finished-.webp",
        "id": "Pasar Residence-finished-.webp"
    },
    {
        "title": "Pasar Residence",
        "description": "Pasar Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3564 sqft The requirement was to execute residential construction with strong structural focus and architectural planning.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pasar-residence-3564sqft/finishing.webp",
        "id": "Pasar Residence-finishing.webp"
    },
    {
        "title": "Pasar Residence",
        "description": "Pasar Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3564 sqft The requirement was to execute residential construction with strong structural focus and architectural planning.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pasar-residence-3564sqft/flooring.webp",
        "id": "Pasar Residence-flooring.webp"
    },
    {
        "title": "Patill Residence",
        "description": "Patil Residence Construction-Led Project | Executed by Ordient Infra | Built up 1562 spft The brief focused on constructing a compact residence with efficient planning and dependable execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/patill-residence-1562sqft/finished-hall.webp",
        "id": "Patill Residence-finished-hall.webp"
    },
    {
        "title": "Patill Residence",
        "description": "Patil Residence Construction-Led Project | Executed by Ordient Infra | Built up 1562 spft The brief focused on constructing a compact residence with efficient planning and dependable execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/patill-residence-1562sqft/finished-project.webp",
        "id": "Patill Residence-finished-project.webp"
    },
    {
        "title": "Patill Residence",
        "description": "Patil Residence Construction-Led Project | Executed by Ordient Infra | Built up 1562 spft The brief focused on constructing a compact residence with efficient planning and dependable execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/patill-residence-1562sqft/finishing-.webp",
        "id": "Patill Residence-finishing-.webp"
    },
    {
        "title": "Patill Residence",
        "description": "Patil Residence Construction-Led Project | Executed by Ordient Infra | Built up 1562 spft The brief focused on constructing a compact residence with efficient planning and dependable execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/patill-residence-1562sqft/foundation.webp",
        "id": "Patill Residence-foundation.webp"
    },
    {
        "title": "Patill Residence",
        "description": "Patil Residence Construction-Led Project | Executed by Ordient Infra | Built up 1562 spft The brief focused on constructing a compact residence with efficient planning and dependable execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/patill-residence-1562sqft/slab.webp",
        "id": "Patill Residence-slab.webp"
    },
    {
        "title": "Pawar Residence",
        "description": "Pawar Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4861 sqft The client required end-to-end residential construction with emphasis on build quality and functional planning.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pawar-residence-4816sqft/finished-hall.webp",
        "id": "Pawar Residence-finished-hall.webp"
    },
    {
        "title": "Pawar Residence",
        "description": "Pawar Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4861 sqft The client required end-to-end residential construction with emphasis on build quality and functional planning.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pawar-residence-4816sqft/finished-project-.webp",
        "id": "Pawar Residence-finished-project-.webp"
    },
    {
        "title": "Pawar Residence",
        "description": "Pawar Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4861 sqft The client required end-to-end residential construction with emphasis on build quality and functional planning.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pawar-residence-4816sqft/finished-project.webp",
        "id": "Pawar Residence-finished-project.webp"
    },
    {
        "title": "Pawar Residence",
        "description": "Pawar Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4861 sqft The client required end-to-end residential construction with emphasis on build quality and functional planning.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pawar-residence-4816sqft/finished-project1.webp",
        "id": "Pawar Residence-finished-project1.webp"
    },
    {
        "title": "Pawar Residence",
        "description": "Pawar Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4861 sqft The client required end-to-end residential construction with emphasis on build quality and functional planning.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pawar-residence-4816sqft/finishing-.webp",
        "id": "Pawar Residence-finishing-.webp"
    },
    {
        "title": "Pawar Residence",
        "description": "Pawar Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4861 sqft The client required end-to-end residential construction with emphasis on build quality and functional planning.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pawar-residence-4816sqft/finishing.webp",
        "id": "Pawar Residence-finishing.webp"
    },
    {
        "title": "Pawar Residence",
        "description": "Pawar Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4861 sqft The client required end-to-end residential construction with emphasis on build quality and functional planning.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pawar-residence-4816sqft/foundation.webp",
        "id": "Pawar Residence-foundation.webp"
    },
    {
        "title": "Pawar Residence",
        "description": "Pawar Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4861 sqft The client required end-to-end residential construction with emphasis on build quality and functional planning.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pawar-residence-4816sqft/plinth.webp",
        "id": "Pawar Residence-plinth.webp"
    },
    {
        "title": "Pawar Residence",
        "description": "Pawar Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4861 sqft The client required end-to-end residential construction with emphasis on build quality and functional planning.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pawar-residence-4816sqft/slab.webp",
        "id": "Pawar Residence-slab.webp"
    },
    {
        "title": "Pillai Residence",
        "description": "Pillai Residence Modern Kerala-Style Construction | Executed by Ordient Infra | Built Up 4856 sqft The brief focused on constructing a modern Kerala-style residence combining contemporary planning with regional architectural elements.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pillai-residence-4856-sqft-/39a.webp",
        "id": "Pillai Residence-39a.webp"
    },
    {
        "title": "Pillai Residence",
        "description": "Pillai Residence Modern Kerala-Style Construction | Executed by Ordient Infra | Built Up 4856 sqft The brief focused on constructing a modern Kerala-style residence combining contemporary planning with regional architectural elements.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pillai-residence-4856-sqft-/39b.webp",
        "id": "Pillai Residence-39b.webp"
    },
    {
        "title": "Pillai Residence",
        "description": "Pillai Residence Modern Kerala-Style Construction | Executed by Ordient Infra | Built Up 4856 sqft The brief focused on constructing a modern Kerala-style residence combining contemporary planning with regional architectural elements.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pillai-residence-4856-sqft-/39c.webp",
        "id": "Pillai Residence-39c.webp"
    },
    {
        "title": "Pillai Residence",
        "description": "Pillai Residence Modern Kerala-Style Construction | Executed by Ordient Infra | Built Up 4856 sqft The brief focused on constructing a modern Kerala-style residence combining contemporary planning with regional architectural elements.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pillai-residence-4856-sqft-/39d.webp",
        "id": "Pillai Residence-39d.webp"
    },
    {
        "title": "Pillai Residence",
        "description": "Pillai Residence Modern Kerala-Style Construction | Executed by Ordient Infra | Built Up 4856 sqft The brief focused on constructing a modern Kerala-style residence combining contemporary planning with regional architectural elements.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pillai-residence-4856-sqft-/39e.webp",
        "id": "Pillai Residence-39e.webp"
    },
    {
        "title": "Pillai Residence",
        "description": "Pillai Residence Modern Kerala-Style Construction | Executed by Ordient Infra | Built Up 4856 sqft The brief focused on constructing a modern Kerala-style residence combining contemporary planning with regional architectural elements.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pillai-residence-4856-sqft-/39f.webp",
        "id": "Pillai Residence-39f.webp"
    },
    {
        "title": "Pillai Residence",
        "description": "Pillai Residence Modern Kerala-Style Construction | Executed by Ordient Infra | Built Up 4856 sqft The brief focused on constructing a modern Kerala-style residence combining contemporary planning with regional architectural elements.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pillai-residence-4856-sqft-/39g.webp",
        "id": "Pillai Residence-39g.webp"
    },
    {
        "title": "Pillai Residence",
        "description": "Pillai Residence Modern Kerala-Style Construction | Executed by Ordient Infra | Built Up 4856 sqft The brief focused on constructing a modern Kerala-style residence combining contemporary planning with regional architectural elements.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/pillai-residence-4856-sqft-/bg_sub1.webp",
        "id": "Pillai Residence-bg_sub1.webp"
    },
    {
        "title": "Rao Residence",
        "description": "Rao Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3961 sqft The requirement was to deliver residential construction with emphasis on structural clarity and execution reliability.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/rao-residence-3691sqft/3d-design.webp",
        "id": "Rao Residence-3d-design.webp"
    },
    {
        "title": "Rao Residence",
        "description": "Rao Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3961 sqft The requirement was to deliver residential construction with emphasis on structural clarity and execution reliability.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/rao-residence-3691sqft/block-work.webp",
        "id": "Rao Residence-block-work.webp"
    },
    {
        "title": "Rao Residence",
        "description": "Rao Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3961 sqft The requirement was to deliver residential construction with emphasis on structural clarity and execution reliability.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/rao-residence-3691sqft/finished-hall.webp",
        "id": "Rao Residence-finished-hall.webp"
    },
    {
        "title": "Rao Residence",
        "description": "Rao Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3961 sqft The requirement was to deliver residential construction with emphasis on structural clarity and execution reliability.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/rao-residence-3691sqft/finished-project.webp",
        "id": "Rao Residence-finished-project.webp"
    },
    {
        "title": "Rao Residence",
        "description": "Rao Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3961 sqft The requirement was to deliver residential construction with emphasis on structural clarity and execution reliability.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/rao-residence-3691sqft/finished-project1.webp",
        "id": "Rao Residence-finished-project1.webp"
    },
    {
        "title": "Rao Residence",
        "description": "Rao Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3961 sqft The requirement was to deliver residential construction with emphasis on structural clarity and execution reliability.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/rao-residence-3691sqft/finishing.webp",
        "id": "Rao Residence-finishing.webp"
    },
    {
        "title": "Rao Residence",
        "description": "Rao Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3961 sqft The requirement was to deliver residential construction with emphasis on structural clarity and execution reliability.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/rao-residence-3691sqft/plastering.webp",
        "id": "Rao Residence-plastering.webp"
    },
    {
        "title": "Rao Residence",
        "description": "Rao Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3961 sqft The requirement was to deliver residential construction with emphasis on structural clarity and execution reliability.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/rao-residence-3691sqft/plinth.webp",
        "id": "Rao Residence-plinth.webp"
    },
    {
        "title": "Rao Residence",
        "description": "Rao Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3961 sqft The requirement was to deliver residential construction with emphasis on structural clarity and execution reliability.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/rao-residence-3691sqft/slab.webp",
        "id": "Rao Residence-slab.webp"
    },
    {
        "title": "Sharma Residence",
        "description": "Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.", "description": "Sharma Residence – Bangalore Situated in the heart of Bangalore, the Sharma Residence is a modern sanctuary designed for a family of four, combining sleek contemporary design with natural elements.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/sharma-residence-4753sqft/3d-design.webp",
        "id": "Sharma Residence-3d-design.webp"
    },
    {
        "title": "Sharma Residence",
        "description": "Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.", "description": "Sharma Residence – Bangalore Situated in the heart of Bangalore, the Sharma Residence is a modern sanctuary designed for a family of four, combining sleek contemporary design with natural elements.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/sharma-residence-4753sqft/block-work.webp",
        "id": "Sharma Residence-block-work.webp"
    },
    {
        "title": "Sharma Residence",
        "description": "Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.", "description": "Sharma Residence – Bangalore Situated in the heart of Bangalore, the Sharma Residence is a modern sanctuary designed for a family of four, combining sleek contemporary design with natural elements.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/sharma-residence-4753sqft/finished-project-.webp",
        "id": "Sharma Residence-finished-project-.webp"
    },
    {
        "title": "Sharma Residence",
        "description": "Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.", "description": "Sharma Residence – Bangalore Situated in the heart of Bangalore, the Sharma Residence is a modern sanctuary designed for a family of four, combining sleek contemporary design with natural elements.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/sharma-residence-4753sqft/finished-project.webp",
        "id": "Sharma Residence-finished-project.webp"
    },
    {
        "title": "Sharma Residence",
        "description": "Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.", "description": "Sharma Residence – Bangalore Situated in the heart of Bangalore, the Sharma Residence is a modern sanctuary designed for a family of four, combining sleek contemporary design with natural elements.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/sharma-residence-4753sqft/finished-project1.webp",
        "id": "Sharma Residence-finished-project1.webp"
    },
    {
        "title": "Sharma Residence",
        "description": "Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.", "description": "Sharma Residence – Bangalore Situated in the heart of Bangalore, the Sharma Residence is a modern sanctuary designed for a family of four, combining sleek contemporary design with natural elements.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/sharma-residence-4753sqft/finishing-hall.webp",
        "id": "Sharma Residence-finishing-hall.webp"
    },
    {
        "title": "Sharma Residence",
        "description": "Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.", "description": "Sharma Residence – Bangalore Situated in the heart of Bangalore, the Sharma Residence is a modern sanctuary designed for a family of four, combining sleek contemporary design with natural elements.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/sharma-residence-4753sqft/finishing.webp",
        "id": "Sharma Residence-finishing.webp"
    },
    {
        "title": "Sharma Residence",
        "description": "Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.", "description": "Sharma Residence – Bangalore Situated in the heart of Bangalore, the Sharma Residence is a modern sanctuary designed for a family of four, combining sleek contemporary design with natural elements.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/sharma-residence-4753sqft/plastering.webp",
        "id": "Sharma Residence-plastering.webp"
    },
    {
        "title": "Sharma Residence",
        "description": "Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.", "description": "Sharma Residence – Bangalore Situated in the heart of Bangalore, the Sharma Residence is a modern sanctuary designed for a family of four, combining sleek contemporary design with natural elements.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/sharma-residence-4753sqft/plinth.webp",
        "id": "Sharma Residence-plinth.webp"
    },
    {
        "title": "Sharma Residence",
        "description": "Sharma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 4753 sqft The brief focused on dependable residential construction supported by architectural planning.", "description": "Sharma Residence – Bangalore Situated in the heart of Bangalore, the Sharma Residence is a modern sanctuary designed for a family of four, combining sleek contemporary design with natural elements.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/sharma-residence-4753sqft/slab.webp",
        "id": "Sharma Residence-slab.webp"
    },
    {
        "title": "Suman Residence",
        "description": "Suman Residence Construction-Led Project | Executed by Ordient Infra | Built Up 1097 sqft The client engaged Ordient Infra for residential construction with architectural planning support.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/suman-residence-1097sqft/fininshed-project.webp",
        "id": "Suman Residence-fininshed-project.webp"
    },
    {
        "title": "Suman Residence",
        "description": "Suman Residence Construction-Led Project | Executed by Ordient Infra | Built Up 1097 sqft The client engaged Ordient Infra for residential construction with architectural planning support.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/suman-residence-1097sqft/finished-project.webp",
        "id": "Suman Residence-finished-project.webp"
    },
    {
        "title": "Suman Residence",
        "description": "Suman Residence Construction-Led Project | Executed by Ordient Infra | Built Up 1097 sqft The client engaged Ordient Infra for residential construction with architectural planning support.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/suman-residence-1097sqft/finishing-hall.webp",
        "id": "Suman Residence-finishing-hall.webp"
    },
    {
        "title": "Suman Residence",
        "description": "Suman Residence Construction-Led Project | Executed by Ordient Infra | Built Up 1097 sqft The client engaged Ordient Infra for residential construction with architectural planning support.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/suman-residence-1097sqft/finishing-project.webp",
        "id": "Suman Residence-finishing-project.webp"
    },
    {
        "title": "Suman Residence",
        "description": "Suman Residence Construction-Led Project | Executed by Ordient Infra | Built Up 1097 sqft The client engaged Ordient Infra for residential construction with architectural planning support.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/suman-residence-1097sqft/finishing-touch.webp",
        "id": "Suman Residence-finishing-touch.webp"
    },
    {
        "title": "Suman Residence",
        "description": "Suman Residence Construction-Led Project | Executed by Ordient Infra | Built Up 1097 sqft The client engaged Ordient Infra for residential construction with architectural planning support.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/suman-residence-1097sqft/finishing-touch1.webp",
        "id": "Suman Residence-finishing-touch1.webp"
    },
    {
        "title": "Verma Residence",
        "description": "Verma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3476 sqft The brief focused on reliable residential construction with architectural planning and coordinated interior execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/verma-residence-3476sqft/finished-project.webp",
        "id": "Verma Residence-finished-project.webp"
    },
    {
        "title": "Verma Residence",
        "description": "Verma Residence Construction-Led Project | Executed by Ordient Infra | Built Up 3476 sqft The brief focused on reliable residential construction with architectural planning and coordinated interior execution.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/verma-residence-3476sqft/finishing-touch.webp",
        "id": "Verma Residence-finishing-touch.webp"
    },
    {
        "title": "Krishna Residence",
        "description": "Krishna Residence - A modern white single-story residence with a clean architectural design, featuring a prominent grey accent strip and a spacious porch.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/krishna-residence/cover.webp",
        "id": "Krishna Residence-cover.png"
    },
    {
        "title": "Vinod Residence",
        "description": "Vinod Residence - Modern residential construction with elegant design elements and functional planning.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/vinod-residence/cover.png",
        "id": "Vinod Residence-cover.png"
    },
    {
        "title": "Shastri Residence",
        "description": "Shastri Residence - Premium residential project focusing on structural excellence and modern aesthetics.",
        "category": "construction",
        "image": "Mayaakars-asserts/constructions/shastri-residence/cover.png",
        "id": "Shastri Residence-cover.png"
    }
];

