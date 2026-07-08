import { prisma } from './config/prisma.config.js';
import bcrypt from 'bcrypt';
// Curated list of high-quality Unsplash image URLs for avatars
const USER_PHOTO_IDS = [
    'photo-1534528741775-53994a69daeb',
    'photo-1507003211169-0a1dd7228f2d',
    'photo-1494790108377-be9c29b29330',
    'photo-1500648767791-00dcc994a43e',
    'photo-1438761681033-6461ffad8d80',
    'photo-1472099645785-5658abf4ff4e',
    'photo-1544005313-94ddf0286df2',
    'photo-1517841905240-472988babdf9',
    'photo-1539571696357-5a69c17a67c6',
    'photo-1519085360753-af0119f7cbe7',
    'photo-1506794778202-cad84cf45f1d',
    'photo-1488426862026-3ee34a7d66df',
    'photo-1522075469751-3a6694fb2f61',
    'photo-1531746020798-e6953c6e8e04',
    'photo-1508214751196-bcfd4ca60f91',
    'photo-1501196354995-cbb51c65aaea',
    'photo-1573496359142-b8d87734a5a2',
    'photo-1560250097-0b93528c311a',
    'photo-1580489944761-15a19d654956',
    'photo-1504257404764-5a9898c83c18'
];
const USER_IMAGES = USER_PHOTO_IDS.map(id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=150&h=150&q=80`);
// Curated list of high-quality Unsplash image URLs for organizations
const ORG_PHOTO_IDS = [
    'photo-1497366216548-37526070297c',
    'photo-1497215728101-856f4ea42174',
    'photo-1517245386807-bb43f82c33c4',
    'photo-1522071820081-009f0129c71c',
    'photo-1531535934226-a17d9d0c608e',
    'photo-1556761175-5973dc0f32e7',
    'photo-1542744094-3a31f103e35f',
    'photo-1521737711867-e3b97375f902',
    'photo-1528605248644-14dd04022da1',
    'photo-1511556532299-8f662fc26c06',
    'photo-1513364776144-60967b0f800f',
    'photo-1427504494785-3a9ca7044f45',
    'photo-1562774053-701939374585',
    'photo-1454165804606-c3d57bc86b40',
    'photo-1552664730-d307ca884978',
    'photo-1444653389962-8149286c578a',
    'photo-1582213782179-e0d53f98f2ca',
    'photo-1559027615-cd4451a2939b',
    'photo-1509062522246-3755977927d7',
    'photo-1516321318423-f06f85e504b3'
];
const ORG_IMAGES = ORG_PHOTO_IDS.map(id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&h=400&q=80`);
// Curated list of high-quality Unsplash image URLs for events
const EVENT_PHOTO_IDS = [
    'photo-1540575467063-178a50c2df87',
    'photo-1515187029135-18ee286d815b',
    'photo-1531482615713-2afd69097998',
    'photo-1504384308090-c894fdcc538d',
    'photo-1486406146926-c627a92ad1ab',
    'photo-1529156069898-49953e39b3ac',
    'photo-1464822759023-fed622ff2c3b',
    'photo-1501555088652-021faa106b9b',
    'photo-1460661419201-fd4cecdf8a8b',
    'photo-1513364776144-60967b0f800f',
    'photo-1517245386807-bb43f82c33c4',
    'photo-1556761175-b413da4b2c8c',
    'photo-1485827404703-89b55fcc595e',
    'photo-1507413245164-6160d8298b31',
    'photo-1542601906990-b4d3fb778b09',
    'photo-1469571486040-0b3b21409112',
    'photo-1509099836639-18ba1795216d',
    'photo-1517486808906-6ca8b3f04846',
    'photo-1517048676732-d65bc937f952',
    'photo-1511578314322-379afb476865'
];
const EVENT_IMAGES = EVENT_PHOTO_IDS.map(id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&h=630&q=80`);
// Curated list of Nepali First Names
const NEPALI_FIRST_NAMES = [
    'Ram', 'Shyam', 'Hari', 'Sita', 'Gita', 'Nabin', 'Nabina', 'Puja', 'Roshan', 'Ramesh',
    'Sandeep', 'Rajesh', 'Milan', 'Shreya', 'Sneha', 'Manoj', 'Karishma', 'Rekha', 'Kiran', 'Alisha',
    'Amit', 'Sunil', 'Anish', 'Bibek', 'Aarati', 'Laxmi', 'Saraswati', 'Maya', 'Pradeep', 'Bikash',
    'Dipendra', 'Raju', 'Anil', 'Santosh', 'Subash', 'Sagar', 'Prakash', 'Dipesh', 'Jeevan', 'Arjun',
    'Kumar', 'Goma', 'Kabita', 'Manisha', 'Deepa', 'Namrata', 'Barsha', 'Isha', 'Nisha', 'Smriti',
    'Anjali', 'Bipana', 'Kriti', 'Shraddha', 'Susma', 'Sabitri', 'Pooja', 'Aarti', 'Rupa', 'Bhupal',
    'Niraj', 'Miraj', 'Bimal', 'Dinesh', 'Suresh', 'Dharma', 'Prem', 'Dev', 'Suraj', 'Tek',
    'Man', 'Khem', 'Min', 'Sher', 'Bir', 'Lal', 'Jagadish', 'Kalyan', 'Bhim', 'Ganesh',
    'Mahesh', 'Rudra', 'Yam', 'Keshav', 'Madhav', 'Narayan', 'Ishwor', 'Govinda', 'Janak', 'Balaram'
];
// Curated list of Nepali Last Names
const NEPALI_LAST_NAMES = [
    'Karki', 'Thapa', 'Shrestha', 'Adhikari', 'Gautam', 'Pandey', 'Baral', 'Basnet', 'Bhattarai', 'Bhandari',
    'Dahal', 'Acharya', 'Joshi', 'Giri', 'Khadka', 'Poudel', 'Regmi', 'Rijal', 'Subedi', 'Sharma',
    'Tamang', 'Gurung', 'Sherpa', 'Magar', 'Rai', 'Limbu', 'Shakya', 'Bajracharya', 'Maharjan', 'Pradhan',
    'Devkota', 'Koirala', 'Oli', 'Nepal', 'Baniya', 'Khatri', 'Ghimire', 'Bista', 'Panta', 'Dhakal',
    'Lamichhane', 'Pathak', 'Khanal', 'Mainali', 'Wagle', 'Bhatta', 'Pyakurel', 'Sapkota'
];
// Helper to pick random item from array
function pickRandom(arr) {
    const index = Math.floor(Math.random() * arr.length);
    const item = arr[index];
    if (item === undefined) {
        throw new Error('PickRandom encountered empty array or undefined index');
    }
    return item;
}
// Simple unique slug generator
function generateSlug(title, uniqueSuffix) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '') + '-' + uniqueSuffix;
}
// Simple random token generator for check-ins
function generateCheckInToken() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = '';
    for (let i = 0; i < 5; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
}
// Structured organization and event templates to ensure data alignment
const TEMPLATES = [
    {
        orgNamePrefix: "Kathmandu Tech",
        orgNameSuffixes: ["Hub", "Community", "Solutions", "Labs", "Coders"],
        orgType: "COMPANY",
        description: "A community-focused technology company organizing tech events, workshops, hackathons, and seminars across Nepal to foster innovation.",
        websiteDomain: "kathmandutech.org.np",
        events: [
            {
                title: "React & Next.js Advanced Workshop",
                description: "Dive deep into server components, dynamic rendering, and performance optimization techniques for modern web apps using Next.js.",
                category: "WORKSHOP",
                tags: ["tech", "coding", "nextjs", "web", "nepal"]
            },
            {
                title: "Kathmandu Tech Summit 2026",
                description: "The annual gathering of tech enthusiasts, developers, and industry leaders in Nepal. Keynotes, panel discussions, and networking sessions.",
                category: "CONFERENCE",
                tags: ["conference", "tech", "networking", "nepal", "it"]
            },
            {
                title: "Nepali Web Developers Meetup",
                description: "A casual evening of networking and lightning talks from local developers sharing their experiences and projects.",
                category: "MEETUP",
                tags: ["meetup", "web", "coding", "nepal", "networking"]
            },
            {
                title: "Building Scalable APIs with Prisma & Node.js",
                description: "Learn how to build, secure, and scale REST and GraphQL APIs using Prisma ORM and Express in this comprehensive webinar.",
                category: "WEBINAR",
                tags: ["webinar", "api", "prisma", "backend", "coding"]
            }
        ]
    },
    {
        orgNamePrefix: "Himalayan Adventure",
        orgNameSuffixes: ["Club", "Expeditions", "Trekkers", "Outdoors", "Hikers"],
        orgType: "COMMUNITY",
        description: "Promoting sustainable tourism, hiking, and mountaineering in the Nepal Himalayas. We organize weekend hikes, photowalks, and gear reviews.",
        websiteDomain: "himalayanadventure.com",
        events: [
            {
                title: "Shivapuri National Park Weekend Hike",
                description: "Join us for our weekly weekend hike to Shivapuri Peak. A perfect escape from the city dust, suitable for beginners and intermediates.",
                category: "MEETUP",
                tags: ["hiking", "adventure", "outdoors", "nature", "meetup"]
            },
            {
                title: "High-Altitude Trekking Preparation Seminar",
                description: "Essential training, gear walkthrough, and physical preparation tips for trekking above 4000m in Nepal.",
                category: "WORKSHOP",
                tags: ["trekking", "safety", "adventure", "nepal", "workshop"]
            },
            {
                title: "Sustainable Mountaineering & Eco-Tourism Webinar",
                description: "Exploring the impact of tourism on mountain ecosystems and discussing guidelines for green and sustainable trekking.",
                category: "WEBINAR",
                tags: ["sustainability", "eco", "mountains", "conservation", "webinar"]
            }
        ]
    },
    {
        orgNamePrefix: "Kantipur Creative",
        orgNameSuffixes: ["Studio", "Art Collective", "Arts & Culture", "Pottery", "Gallery"],
        orgType: "INDIVIDUAL",
        description: "An art and design space dedicated to preserving and celebrating traditional Nepali arts while encouraging modern creative expressions.",
        websiteDomain: "kantipurart.com",
        events: [
            {
                title: "Mithila Painting Hands-on Workshop",
                description: "Learn the rich history and beautiful techniques of Mithila painting from traditional artists in this interactive workshop.",
                category: "WORKSHOP",
                tags: ["art", "culture", "mithila", "painting", "workshop"]
            },
            {
                title: "Traditional Clay Pottery Session",
                description: "Get your hands dirty and learn the art of wheel throwing and clay pottery from local artisans of Bhaktapur.",
                category: "WORKSHOP",
                tags: ["pottery", "bhaktapur", "craft", "art", "workshop"]
            },
            {
                title: "Kathmandu Heritage Photowalk",
                description: "A photowalk through the historic alleys of Patan Durbar Square, capturing the wood carvings, temples, and daily lifestyle.",
                category: "MEETUP",
                tags: ["photography", "heritage", "patan", "art", "meetup"]
            }
        ]
    },
    {
        orgNamePrefix: "Nepal Startups",
        orgNameSuffixes: ["Hub", "Alliance", "Network", "Ventures", "Incubator"],
        orgType: "COMPANY",
        description: "Supporting Nepali entrepreneurs and early-stage startups through mentorship, incubation, networking events, and access to capital.",
        websiteDomain: "nepalstartups.net",
        events: [
            {
                title: "Nepal Startup Pitching Competition",
                description: "Early-stage startups pitch their ideas to a panel of judges and angel investors for a chance to win seed funding and mentorship.",
                category: "COMPETITION",
                tags: ["startup", "business", "pitching", "funding", "competition"]
            },
            {
                title: "Fundraising & Valuation Webinar for Founders",
                description: "A webinar outlining how to structure your pitch deck, calculate valuation, and negotiate terms with investors in Nepal.",
                category: "WEBINAR",
                tags: ["business", "startup", "finance", "webinar", "education"]
            },
            {
                title: "Founder-to-Founder Networking Dinner",
                description: "Connect with fellow entrepreneurs, share challenges, and find potential collaborators in a relaxed networking setup.",
                category: "MEETUP",
                tags: ["networking", "business", "meetup", "founders", "nepal"]
            }
        ]
    },
    {
        orgNamePrefix: "Patan Educational",
        orgNameSuffixes: ["Foundation", "Robotics Club", "Academy", "Astronomy Guild"],
        orgType: "EDUCATIONAL",
        description: "Dedicated to promoting STEM education, robotics, and scientific exploration among students and young learners in Nepal.",
        websiteDomain: "patanstem.edu.np",
        events: [
            {
                title: "National STEM Robotics Competition 2026",
                description: "Students from across Nepal compete in custom bot building, line-following, and maze-solving challenges.",
                category: "COMPETITION",
                tags: ["robotics", "stem", "education", "competition", "coding"]
            },
            {
                title: "Stargazing & Astronomy Night at Nagarkot",
                description: "Join us for an evening of telescope stargazing, constellations identification, and basic astrophotography workshop at Nagarkot.",
                category: "MEETUP",
                tags: ["astronomy", "nagarkot", "science", "stargazing", "meetup"]
            },
            {
                title: "Intro to Python for Science & Engineering",
                description: "A 3-hour beginner-friendly workshop focusing on python syntax, data analysis, and basic graphing for scientific research.",
                category: "WORKSHOP",
                tags: ["python", "coding", "science", "learning", "workshop"]
            }
        ]
    },
    {
        orgNamePrefix: "Nepal Green",
        orgNameSuffixes: ["Initiative", "Foundation", "Cleaners", "Eco Society", "Care"],
        orgType: "NON_PROFIT",
        description: "A non-profit voluntary organization dedicated to environmental conservation, waste management campaigns, and reforestation drives in Nepal.",
        websiteDomain: "nepalgreen.org.np",
        events: [
            {
                title: "Bagmati River Voluntary Cleaning Drive",
                description: "Let's clean our rivers! Join us this Saturday morning at Guhyeshwari for our weekly Bagmati cleaning campaign.",
                category: "MEETUP",
                tags: ["cleanup", "volunteer", "environment", "bagmati", "socialwork"]
            },
            {
                title: "Urban Tree Plantation & Care Campaign",
                description: "Help us plant 500 saplings along the ring road and learn about correct plant care and urban green space management.",
                category: "OTHER",
                tags: ["plantation", "green", "environment", "volunteer", "socialwork"]
            },
            {
                title: "Climate Change & Nepal's Mountains Webinar",
                description: "Experts discuss the accelerating melting of glaciers in Nepal and local adaptation strategies.",
                category: "WEBINAR",
                tags: ["climatechange", "environment", "glaciers", "webinar", "science"]
            }
        ]
    }
];
const NEPAL_LOCATIONS = [
    "Kathmandu, Nepal",
    "Lalitpur, Nepal",
    "Bhaktapur, Nepal",
    "Pokhara, Nepal",
    "Chitwan, Nepal",
    "Dharan, Nepal",
    "Butwal, Nepal"
];
async function seed() {
    console.log('🌱 Starting database seeding script...');
    // 1. Clean up existing tables to prevent unique constraint errors
    console.log('🗑️ Cleaning up existing data...');
    await prisma.errorLog.deleteMany({});
    await prisma.adminLogs.deleteMany({});
    await prisma.otpdetails.deleteMany({});
    await prisma.session.deleteMany({});
    await prisma.eventMessage.deleteMany({});
    await prisma.eventMetric.deleteMany({});
    await prisma.eventParticipants.deleteMany({});
    await prisma.event.deleteMany({});
    await prisma.organizationMember.deleteMany({});
    await prisma.creditPurchase.deleteMany({});
    await prisma.organization.deleteMany({});
    await prisma.user.deleteMany({});
    console.log('✅ Cleaned up old database entries.');
    // 2. Hash default password once for efficiency
    const saltRounds = 10;
    console.log('🔑 Hashing default password for speed optimization...');
    const hashedPassword = await bcrypt.hash('password123', saltRounds);
    console.log('✅ Hashing complete.');
    // 3. Generate 100 Users and 100 Organizations
    console.log('👥 Generating 100 Users & Organizations...');
    const users = [];
    const organizations = [];
    const orgTemplateMapping = {};
    // Build list of unique names first
    const usedEmails = new Set();
    for (let i = 1; i <= 100; i++) {
        // Generate unique Nepali Name
        const firstName = pickRandom(NEPALI_FIRST_NAMES);
        const lastName = pickRandom(NEPALI_LAST_NAMES);
        const fullName = `${firstName} ${lastName}`;
        let email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
        let emailSuffix = 1;
        while (usedEmails.has(email)) {
            email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${emailSuffix}@example.com`;
            emailSuffix++;
        }
        usedEmails.add(email);
        // Get matching Organization details from templates
        const template = TEMPLATES[(i - 1) % TEMPLATES.length];
        const orgSuffix = template.orgNameSuffixes[Math.floor(Math.random() * template.orgNameSuffixes.length)];
        const orgName = `${fullName}'s ${template.orgNamePrefix} ${orgSuffix}`;
        const orgWebsite = `https://${fullName.toLowerCase().replace(/[^a-z]/g, '')}.${template.websiteDomain}`;
        // Create User record
        const user = await prisma.user.create({
            data: {
                email,
                name: fullName,
                password: hashedPassword,
                role: 'CUSTOMER',
                image: pickRandom(USER_IMAGES),
                userScore: parseFloat((Math.random() * 5).toFixed(2)),
                clickedEventsCount: Math.floor(Math.random() * 20),
            }
        });
        // Create Organization record
        const org = await prisma.organization.create({
            data: {
                name: orgName,
                thumbnail: pickRandom(ORG_IMAGES),
                image: pickRandom(ORG_IMAGES),
                website: orgWebsite,
                description: `Official event hub for ${orgName}. ${template.description}`,
                type: template.orgType,
                credits: 50,
                isPremium: Math.random() > 0.8, // 20% premium organisations
            }
        });
        // Link user and organization as OWNER member
        await prisma.organizationMember.create({
            data: {
                userId: user.id,
                organizationId: org.id,
                role: 'OWNER',
            }
        });
        users.push(user);
        organizations.push(org);
        orgTemplateMapping[org.id] = template;
    }
    console.log(`✅ Created ${users.length} users and ${organizations.length} organizations.`);
    // 4. Generate 100 Events
    console.log('📅 Creating 100 Events...');
    const events = [];
    const baseTime = new Date();
    for (let i = 1; i <= 100; i++) {
        // Pick a random Organization to host the event
        const org = pickRandom(organizations);
        const template = orgTemplateMapping[org.id];
        // Pick one of the matching template events
        const eventDetails = pickRandom(template.events);
        // Make Event Title & Description unique to this organization
        const eventTitle = `${eventDetails.title} by ${org.name.split("'s")[0]}'s Team`;
        const eventDescription = `${eventDetails.description} Join us for an amazing and productive session organized by ${org.name}.`;
        // Calculate dates (mix of past and future events)
        // Days offset ranges from -150 to +150 days
        const daysOffset = Math.floor(Math.random() * 300) - 150;
        const startDate = new Date(baseTime);
        startDate.setDate(baseTime.getDate() + daysOffset);
        // Event duration 2 to 5 hours
        const durationHours = Math.floor(Math.random() * 4) + 2;
        const endDate = new Date(startDate);
        endDate.setHours(startDate.getHours() + durationHours);
        const capacity = Math.floor(Math.random() * 121) + 30; // 30 to 150 capacity
        // Create unique slug
        const slug = generateSlug(eventDetails.title, `${i}-${Math.random().toString(36).substring(2, 6)}`);
        // Get the creatorId (which is the user who owns this organization)
        const ownerMember = await prisma.organizationMember.findFirst({
            where: { organizationId: org.id, role: 'OWNER' },
            select: { userId: true }
        });
        const creatorId = ownerMember?.userId || users[0].id;
        const event = await prisma.event.create({
            data: {
                slug,
                organizationId: org.id,
                creatorId,
                title: eventTitle,
                description: eventDescription,
                location: pickRandom(NEPAL_LOCATIONS),
                latitude: 27.65 + (Math.random() * 0.1), // Roughly around Lalitpur/Kathmandu area
                longitude: 85.3 + (Math.random() * 0.1),
                startDate,
                endDate,
                capacity,
                registeredCount: 0, // Will be updated during participant registrations
                status: (daysOffset > 0 && Math.random() > 0.95) ? 'CANCELLED' : 'PUBLISHED', // 5% future events cancelled
                category: eventDetails.category,
                tags: eventDetails.tags,
                image: pickRandom(EVENT_IMAGES),
                eventScore: parseFloat((Math.random() * 5).toFixed(2)),
            }
        });
        events.push(event);
    }
    console.log(`✅ Created ${events.length} events.`);
    // 5. Generate Event Participants (Registrations & Attendances)
    console.log('🎟️ Generating event participants and check-ins...');
    let totalParticipantsCreated = 0;
    for (const event of events) {
        const isPastEvent = event.startDate < baseTime;
        // Choose random number of registrations (between 10 and 45, capped by event capacity)
        const maxRegs = Math.min(event.capacity - 2, Math.floor(Math.random() * 36) + 10);
        // Shuffle users to pick a random unique subset of participants
        const shuffledUsers = [...users].sort(() => 0.5 - Math.random());
        const participantsList = shuffledUsers.slice(0, maxRegs);
        const checkInRecords = [];
        let registeredCount = 0;
        for (const participant of participantsList) {
            // Avoid creator registering for their own event
            if (participant.id === event.creatorId)
                continue;
            const checkInToken = generateCheckInToken();
            const attended = isPastEvent ? Math.random() > 0.35 : false; // 65% attendance for past events
            let checkedInAt = null;
            if (attended) {
                checkedInAt = new Date(event.startDate);
                // Arrive between 5 mins early to 45 mins late
                const offsetMinutes = Math.floor(Math.random() * 50) - 5;
                checkedInAt.setMinutes(checkedInAt.getMinutes() + offsetMinutes);
            }
            checkInRecords.push({
                eventId: event.id,
                userId: participant.id,
                checkInToken,
                attended,
                checkedInAt,
                registeredAt: new Date(event.createdAt)
            });
            registeredCount++;
        }
        // Create participant records in database
        if (checkInRecords.length > 0) {
            await prisma.eventParticipants.createMany({
                data: checkInRecords
            });
            // Update registeredCount in Event table
            await prisma.event.update({
                where: { id: event.id },
                data: { registeredCount }
            });
            totalParticipantsCreated += registeredCount;
        }
    }
    console.log(`✅ Created ${totalParticipantsCreated} event registrations across all events.`);
    console.log('🎉 Database seeding completed successfully!');
}
seed()
    .catch((e) => {
    console.error('❌ Error during seeding database:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map