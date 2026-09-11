const dramaDatabase = [
    // Korean Dramas (1–9)
    { rank: "#1", title: "When Life Gives You Tangerines", year: "2025", eps: "16 episodes", rating: "9.3", type: "Korean Drama", synopsis: "A story that resembles a tribute to our parents' tender and still youthful seasons..." },
    { rank: "#2", title: "Twinkling Watermelon", year: "2023", eps: "16 episodes", rating: "9.2", type: "Korean Drama", synopsis: "In 2023, high school student Eun Gyeol, a CODA with a passion for music, leads a double life..." },
    { rank: "#3", title: "Move to Heaven", year: "2021", eps: "10 episodes", rating: "9.1", type: "Korean Drama", synopsis: "Han Geu Ru is an autistic 20-year-old guy. He works for his father's business Move to Heaven..." },
    { rank: "#4", title: "Hospital Playlist", year: "2020", eps: "12 episodes", rating: "9.1", type: "Korean Drama", synopsis: "Hospital Playlist tells the story of doctors and nurses working at Yulje Medical Center..." },
    { rank: "#5", title: "Reply 1988", year: "2015", eps: "20 episodes", rating: "9.0", type: "Korean Drama", synopsis: "Five childhood friends who live in the same Ssangmundong neighborhood rely on each other..." },
    { rank: "#6", title: "Alchemy of Souls", year: "2022", eps: "20 episodes", rating: "8.9", type: "Korean Drama", synopsis: "A powerful sorceress in a blind woman's body encounters a man from a prestigious family..." },
    { rank: "#7", title: "Signal", year: "2016", eps: "16 episodes", rating: "8.9", type: "Korean Drama", synopsis: "A walkie-talkie allows a detective in 1989 and a cold case profiler in 2015 to communicate..." },
    { rank: "#8", title: "My Mister", year: "2018", eps: "16 episodes", rating: "8.9", type: "Korean Drama", synopsis: "A man in his 40s withstands the weight of life. A woman in her 20s goes through different experiences..." },
    { rank: "#9", title: "Flower of Evil", year: "2020", eps: "16 episodes", rating: "8.8", type: "Korean Drama", synopsis: "Hee Sung hides a dark secret about his real identity and pretends to be a loving husband..." },
    
    // Japanese Dramas (10–12)
    { rank: "#10", title: "Unnatural", year: "2018", eps: "10 episodes", rating: "8.6", type: "Japanese Drama", synopsis: "A team of forensic pathologists at the UDI Lab investigates suspicious deaths to uncover hidden truths..." },
    { rank: "#11", title: "Silent", year: "2022", eps: "11 episodes", rating: "8.5", type: "Japanese Drama", synopsis: "A young woman unexpectedly reunites with her high school sweetheart, only to learn he has lost his hearing..." },
    { rank: "#12", title: "Alice in Borderland", year: "2020", eps: "8 episodes", rating: "8.8", type: "Japanese Drama", synopsis: "An aimless gamer and his friends find themselves in a parallel Tokyo, forced to compete in dangerous games to survive..." },

    // Chinese Dramas (13–15)
    { rank: "#13", title: "Nirvana in Fire", year: "2015", eps: "54 episodes", rating: "9.1", type: "Chinese Drama", synopsis: "A strategist enters the capital under a pseudonym to clear his family's name and help a prince secure the throne..." },
    { rank: "#14", title: "The Untamed", year: "2019", eps: "50 episodes", rating: "9.0", type: "Chinese Drama", synopsis: "Two soulmate cultivators uncover a dark secret linking events in the present to a tragic past..." },
    { rank: "#15", title: "Meet Yourself", year: "2023", eps: "40 episodes", rating: "8.9", type: "Chinese Drama", synopsis: "A woman grieving her best friend retreats to a quiet village, where she finds healing and new purpose..." }
];

let currentIndex = 0;
const itemsPerBatch = 3;
const listContainer = document.getElementById('drama-list');
const sentinel = document.getElementById('loading-sentinel');

function renderNextBatch() {
    if (currentIndex >= dramaDatabase.length) {
        sentinel.innerText = "All dramas loaded!";
        return;
    }

    const nextBatch = dramaDatabase.slice(currentIndex, currentIndex + itemsPerBatch);
    
    nextBatch.forEach(item => {
        const card = document.createElement('div');
        card.className = 'drama-card';
        card.innerHTML = `
            <div class="poster-placeholder">Poster Image</div>
            <div class="drama-details">
                <div class="rank">${item.rank}</div>
                <h2 class="title">${item.title}</h2>
                <div class="meta">${item.type} - ${item.year}, ${item.eps}</div>
                <div class="rating">★ ${item.rating}</div>
                <div class="synopsis">${item.synopsis}</div>
            </div>
        `;
        listContainer.appendChild(card);
    });

    currentIndex += itemsPerBatch;
}

// Initial batch
renderNextBatch();

// Infinite Scroll Trigger via Scroll Event
window.addEventListener('scroll', () => {
    // Check if user scrolled near the bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        // Small delay to simulate network loading
        setTimeout(renderNextBatch, 300);
    }
});