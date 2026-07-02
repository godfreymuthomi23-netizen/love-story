/* ============================================
   WORLD'S MOST CINEMATIC LOVE STORY WEBSITE
   Interactive Logic & Animations
   ============================================ */

// ============ CONFIGURATION ============
const QUESTIONS = [
    {
        text: "What is meant to be?",
        choices: ["Destiny", "Chance", "Something we build together"],
        quote: "Fate is not our enemy. Fate is just another word for chance."
    },
    {
        text: "What is trust?",
        choices: ["Blind faith", "Proof and evidence", "Choosing vulnerability"],
        quote: "Trust is the foundation upon which every strong relationship is built."
    },
    {
        text: "Can distance destroy true love?",
        choices: ["Yes, always", "It depends", "Never, if it's real"],
        quote: "Distance means so little when someone means so much."
    },
    {
        text: "What is loyalty?",
        choices: ["Obligation", "True companionship", "Being trapped"],
        quote: "Loyalty is not blind devotion. It is the choice to stand beside someone."
    },
    {
        text: "Would you stay during hard times?",
        choices: ["Only if it's easy", "Probably not", "Without question"],
        quote: "Love is tested not in moments of joy, but in storms."
    },
    {
        text: "What makes someone irreplaceable?",
        choices: ["Their appearance", "Their achievements", "How they make you feel"],
        quote: "Some people are worth more than words can ever express."
    },
    {
        text: "Would you choose love over pride?",
        choices: ["Never", "Sometimes", "Always"],
        quote: "Pride is a lonely throne. Love is home."
    },
    {
        text: "What does forever mean?",
        choices: ["A long time", "Until we're tired", "Every single day, always"],
        quote: "Forever is not a time. It's a promise."
    },
    {
        text: "Can silence still say 'I love you'?",
        choices: ["No, words matter most", "Sometimes", "Yes, completely"],
        quote: "The loudest love is often spoken without words."
    },
    {
        text: "What hurts love the most?",
        choices: ["Disagreements", "Taken for granted", "Different goals"],
        quote: "Love dies not from conflict, but from indifference."
    },
    {
        text: "If one person falls, should the other help them stand?",
        choices: ["It's their problem", "Maybe, if I feel like it", "With all my strength"],
        quote: "In true love, another's pain becomes your pain."
    },
    {
        text: "What is your biggest fear in love?",
        choices: ["Being hurt", "Losing myself", "Losing you"],
        quote: "Fear is just love with nowhere to go."
    },
    {
        text: "Can forgiveness heal broken hearts?",
        choices: ["Some breaks never heal", "Maybe, with time", "Forgiveness is healing"],
        quote: "Forgiveness is not weakness. It is the greatest strength."
    },
    {
        text: "Is honesty stronger than beauty?",
        choices: ["Beauty fades, honesty matters", "They're equal", "Beauty is more important"],
        quote: "True beauty is always honest. Always."
    },
    {
        text: "If everyone left, would you stay?",
        choices: ["No, I'd follow the crowd", "I'm not sure", "I'd stay forever"],
        quote: "Love is choosing one person when the whole world walks away."
    },
    {
        text: "Would you protect your partner even when nobody is watching?",
        choices: ["Only if it's public", "Sometimes", "Always, especially in silence"],
        quote: "True character is what you do when no one is looking."
    },
    {
        text: "What does home feel like?",
        choices: ["A place", "A feeling of comfort", "When I'm with you"],
        quote: "Home is not where you live. Home is who you love."
    },
    {
        text: "What makes someone unforgettable?",
        choices: ["Their talents", "Their accomplishments", "How they loved you"],
        quote: "People are remembered for how they made others feel."
    },
    {
        text: "Can you love someone and not want to be with them?",
        choices: ["That's not real love", "Rarely", "Yes, and that's the hardest love"],
        quote: "The greatest love sometimes means letting go."
    },
    {
        text: "What is worth more than love?",
        choices: ["Success", "Money", "Nothing"],
        quote: "All the riches in the world mean nothing without love."
    },
    {
        text: "If I lost everything tomorrow...",
        choices: ["You'd stay", "You'd leave", "You'd fight beside me"],
        quote: "Love is not about what you have. It's about who stands beside you."
    },
    {
        text: "How do you know it's real love?",
        choices: ["Butterflies in your stomach", "You can't live without them", "You feel it in your soul"],
        quote: "Real love transcends emotion. It becomes your truth."
    },
    {
        text: "What is the greatest gift of love?",
        choices: ["Affection", "Support", "Being truly seen and accepted"],
        quote: "To be truly loved is to be truly known."
    },
    {
        text: "Can love conquer all?",
        choices: ["It's naive to think so", "Most things", "Yes, absolutely"],
        quote: "Love may not solve everything, but it makes everything worth solving."
    },
    {
        text: "What is the deepest connection?",
        choices: ["Physical attraction", "Shared interests", "Understanding without words"],
        quote: "The deepest connection is when souls recognize each other."
    },
    {
        text: "Would you sacrifice for them?",
        choices: ["No", "Maybe", "Everything"],
        quote: "True love is measured by what you're willing to give up."
    },
    {
        text: "What makes a relationship last?",
        choices: ["Chemistry", "Compromise", "Choosing love every single day"],
        quote: "Forever is not destiny. It's a daily decision."
    },
    {
        text: "Can you love someone who hurt you?",
        choices: ["Never", "Eventually", "Never the same, but yes"],
        quote: "Healing and love can coexist, but they are not the same."
    },
    {
        text: "What is unconditional love?",
        choices: ["A fairy tale", "Love with boundaries", "Love that asks nothing in return"],
        quote: "Unconditional love is humanity's greatest paradox and greatest gift."
    },
    {
        text: "If you could give them one thing...",
        choices: ["Wealth", "Success", "A peaceful heart"],
        quote: "The greatest gift is inner peace. Everything else follows."
    },
    {
        text: "What does 'I love you' really mean?",
        choices: ["I like you", "I need you", "You are my home, my truth, my forever"],
        quote: "I love you means: I see your soul, and it makes mine sing."
    },
    {
        text: "Can you feel when they're thinking of you?",
        choices: ["That's superstition", "Sometimes", "Always"],
        quote: "True connection transcends time and space."
    },
    {
        text: "What is the opposite of love?",
        choices: ["Hate", "Indifference", "Forgetting"],
        quote: "The opposite of love is not hate. It's apathy."
    },
    {
        text: "Would you choose them in every lifetime?",
        choices: ["Just this one", "I hope so", "Without question, yes"],
        quote: "If souls reincarnate, mine would always find yours."
    },
    {
        text: "What makes you worthy of love?",
        choices: ["Your accomplishments", "Your perfection", "Just being you"],
        quote: "You are worthy of love simply because you exist."
    },
    {
        text: "Can love change you?",
        choices: ["No, you stay the same", "It teaches you", "It transforms you completely"],
        quote: "Love doesn't change who you are. It reveals who you can be."
    },
    {
        text: "What's worth more: their happiness or your comfort?",
        choices: ["Your comfort", "It's complicated", "Their happiness, always"],
        quote: "Love is choosing their smile over your ease."
    },
    {
        text: "If you could live one moment forever...",
        choices: ["Your first kiss", "A vacation together", "Waking up next to them"],
        quote: "The best moments are the ordinary ones spent with the right person."
    },
    {
        text: "What would you whisper to them right now?",
        choices: ["I miss you", "Thank you for being here", "I love you more each day"],
        quote: "Some words are best spoken from the heart, not the lips."
    },
    {
        text: "Is this love?",
        choices: ["No", "I think so", "Yes, with every fiber of my being"],
        quote: "When you stop questioning it, you know it's real."
    }
];

// ============ STATE MANAGEMENT ============
let currentQuestion = 0;
let musicPlaying = false;
let totalQuestions = QUESTIONS.length;

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
    }, 2000);

    // Initialize starfield on opening scene
    initStarfield();

    // Load progress from localStorage
    const savedProgress = localStorage.getItem('loveStoryProgress');
    if (savedProgress) {
        currentQuestion = parseInt(savedProgress);
    }

    // Initialize background music
    initializeMusic();
}

// ============ STARFIELD ANIMATION ============
function initStarfield() {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create stars
    const stars = [];
    for (let i = 0; i < 150; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5,
            opacity: Math.random() * 0.5 + 0.3,
            velocity: Math.random() * 0.3 + 0.1
        });
    }

    // Animate stars
    function animateStars() {
        ctx.fillStyle = 'rgba(10, 14, 39, 1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();

            star.opacity += (Math.random() - 0.5) * 0.05;
            star.opacity = Math.max(0.3, Math.min(1, star.opacity));
        });

        requestAnimationFrame(animateStars);
    }

    animateStars();

    // Responsive canvas
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ============ PARTICLE ANIMATION ============
function initParticles() {
    const canvas = document.getElementById('particle-bg');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.2
        });
    }

    // Animate particles
    function animateParticles() {
        ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            ctx.fillStyle = `rgba(255, 23, 68, ${p.opacity})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();

            p.x += p.vx;
            p.y += p.vy;
            p.opacity += (Math.random() - 0.5) * 0.02;

            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
        });

        requestAnimationFrame(animateParticles);
    }

    animateParticles();
}

// ============ NAVIGATION FUNCTIONS ============
function goToQuestions() {
    const openingScene = document.getElementById('opening-scene');
    const questionsScene = document.getElementById('questions-scene');

    openingScene.classList.remove('active');
    questionsScene.classList.add('active');

    // Initialize particles for questions scene
    setTimeout(() => {
        initParticles();
    }, 100);

    // Load first question
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion >= totalQuestions) {
        goToEnding();
        return;
    }

    const question = QUESTIONS[currentQuestion];
    const questionNumber = currentQuestion + 1;

    // Update question text and number
    document.getElementById('question-number').textContent = `Question ${questionNumber} of ${totalQuestions}`;
    document.getElementById('question-text').textContent = question.text;

    // Clear and rebuild choices
    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';

    question.choices.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = choice;
        btn.onclick = () => handleChoice(index, question.quote);
        choicesContainer.appendChild(btn);
    });

    // Update progress bar
    const progress = (currentQuestion / totalQuestions) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';

    // Show quote every 5 questions
    if ((currentQuestion + 1) % 5 === 0) {
        document.getElementById('quote-reveal').textContent = `"${question.quote}"`;
        document.getElementById('quote-reveal').style.opacity = '1';
    } else {
        document.getElementById('quote-reveal').textContent = '';
        document.getElementById('quote-reveal').style.opacity = '0';
    }
}

function handleChoice(choiceIndex, quote) {
    // Save progress
    currentQuestion++;
    localStorage.setItem('loveStoryProgress', currentQuestion);

    // Play sound effect (optional - using Web Audio API)
    playSound();

    // Animate choice selection
    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach((btn, index) => {
        if (index === choiceIndex) {
            btn.classList.add('selected');
        } else {
            btn.style.opacity = '0.3';
        }
    });

    // Load next question after delay
    setTimeout(() => {
        loadQuestion();
        document.getElementById('quote-reveal').style.opacity = '0';
    }, 1500);
}

function goToEnding() {
    const questionsScene = document.getElementById('questions-scene');
    const endingScene = document.getElementById('ending-scene');

    questionsScene.classList.remove('active');
    endingScene.classList.add('active');

    // Initialize ending animations
    setTimeout(() => {
        initializeEnding();
    }, 100);
}

function initializeEnding() {
    initEndingParticles();
    createFloatingHearts();
}

function initEndingParticles() {
    const canvas = document.getElementById('ending-particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    // Create heart burst particles
    for (let i = 0; i < 100; i++) {
        const angle = (Math.PI * 2 * i) / 100;
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 3,
            vx: Math.cos(angle) * (Math.random() * 4 + 2),
            vy: Math.sin(angle) * (Math.random() * 4 + 2),
            radius: Math.random() * 3 + 1,
            opacity: 1,
            life: 1
        });
    }

    function animate() {
        ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];

            ctx.fillStyle = `rgba(255, 23, 68, ${p.opacity})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();

            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.1; // gravity
            p.life -= 0.01;
            p.opacity = p.life;

            if (p.life <= 0) {
                particles.splice(i, 1);
            }
        }

        if (particles.length > 0) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}

function createFloatingHearts() {
    const container = document.getElementById('ending-scene');

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = '❤';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 10000);
        }, i * 200);
    }
}

function replayStory() {
    // Reset progress
    currentQuestion = 0;
    localStorage.removeItem('loveStoryProgress');

    // Reset scenes
    document.getElementById('ending-scene').classList.remove('active');
    document.getElementById('opening-scene').classList.add('active');

    // Reload page
    location.reload();
}

// ============ MUSIC FUNCTIONS ============
function initializeMusic() {
    const audio = document.getElementById('background-music');
    const musicBtn = document.getElementById('music-toggle');

    // Try to play music (autoplay restrictions may apply)
    audio.volume = 0.5;
}

function toggleMusic() {
    const audio = document.getElementById('background-music');
    const musicBtn = document.getElementById('music-toggle');

    if (audio.paused) {
        audio.play().catch(err => {
            console.log('Autoplay prevented:', err);
        });
        musicPlaying = true;
        musicBtn.textContent = '⏸';
    } else {
        audio.pause();
        musicPlaying = false;
        musicBtn.textContent = '🎵';
    }
}

function changeVolume(value) {
    const audio = document.getElementById('background-music');
    audio.volume = value / 100;
}

// ============ SOUND EFFECTS ============
function playSound() {
    // Create a simple beep sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// ============ RESPONSIVE HANDLING ============
window.addEventListener('resize', () => {
    // Handle responsive canvas resizing
    const starCanvas = document.getElementById('starfield');
    const particleCanvas = document.getElementById('particle-bg');
    const endingCanvas = document.getElementById('ending-particles');

    if (starCanvas) {
        starCanvas.width = window.innerWidth;
        starCanvas.height = window.innerHeight;
    }
    if (particleCanvas) {
        particleCanvas.width = window.innerWidth;
        particleCanvas.height = window.innerHeight;
    }
    if (endingCanvas) {
        endingCanvas.width = window.innerWidth;
        endingCanvas.height = window.innerHeight;
    }
});

// ============ KEYBOARD NAVIGATION ============
document.addEventListener('keydown', (e) => {
    // Allow Enter to confirm selections
    if (e.key === 'Enter') {
        const continueBtn = document.querySelector('.btn-continue:not(:disabled)');
        if (continueBtn) continueBtn.click();
    }

    // Allow Escape to exit fullscreen
    if (e.key === 'Escape') {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    }
});

// ============ ACCESSIBILITY ============
// Announce scene changes for screen readers
function announceScene(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.textContent = message;
    document.body.appendChild(announcement);

    setTimeout(() => {
        announcement.remove();
    }, 1000);
}
