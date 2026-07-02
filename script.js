// ========================================
// CINEMATIC LOVE STORY WEBSITE
// Godfrey ❤️ Mark
// ========================================

// === COLOR PALETTE ===
const colors = {
    deepBlack: '#0a0a0a',
    midnightBlue: '#0f1e2e',
    wineRed: '#722e3d',
    softCrimson: '#a74458',
    roseGold: '#b76e79',
    warmGold: '#d4a574',
    softWhite: '#f5f5f5',
};

// === QUESTIONS & RESPONSES ===
const questions = [
    {
        text: 'What do you believe love truly is?',
        options: [
            'A choice we make every single day.',
            'The feeling of finally being home.',
            'Two souls recognizing each other.'
        ],
        responses: [
            'A beautiful answer. Love is indeed a conscious choice.',
            'Home is wherever two hearts choose to be together.',
            'Two souls that belong together—like you and me.'
        ]
    },
    {
        text: 'If the world became difficult tomorrow... Would you still choose us?',
        options: [
            'Always. Through anything.',
            'Forever, no matter what.',
            'Yes. A thousand times, yes.'
        ],
        responses: [
            'Your commitment is my greatest blessing.',
            'That promise means everything to me.',
            'Thank you for never letting me doubt us.'
        ]
    },
    {
        text: 'What makes someone impossible to replace?',
        options: [
            'The way they see you.',
            'Their presence in your life.',
            'The love they give so freely.'
        ],
        responses: [
            'You see me like no one else ever could.',
            'Your presence is my greatest comfort.',
            'Your love is my reason for everything.'
        ]
    },
    {
        text: 'Can true love survive distance, silence, and time?',
        options: [
            'Yes. True love transcends everything.',
            'Distance fades when hearts are connected.',
            'Our love is stronger than any obstacle.'
        ],
        responses: [
            'Real love grows stronger through every challenge.',
            'Miles apart, but infinitely connected.',
            'Nothing could ever separate what we have.'
        ]
    },
    {
        text: 'What does forever mean to you?',
        options: [
            'Waking up next to you every morning.',
            'Growing old together, hand in hand.',
            'A lifetime of moments with you.'
        ],
        responses: [
            'Every morning with you is my forever.',
            'I want to grow old and gray beside you.',
            'Forever is every moment with you.'
        ]
    },
    {
        text: 'If two hearts truly belong together... Should they ever stop fighting for each other?',
        options: [
            'Never. Love is worth fighting for.',
            'Not when it\'s real.',
            'Every day is worth fighting for us.'
        ],
        responses: [
            'I will always fight for us. Always.',
            'Our love is worth more than anything.',
            'I\'ll never stop choosing you.'
        ]
    },
    {
        text: 'What memory would you never want to lose?',
        options: [
            'The day we became us.',
            'Every moment that felt like home.',
            'The day I realized you were my forever.'
        ],
        responses: [
            'That day is etched in my heart forever.',
            'Every moment with you is sacred to me.',
            'And I promise, Mark, you are my forever.'
        ]
    },
    {
        text: 'After everything you\'ve seen... Who deserves your heart?',
        options: [
            'The one who has always been there.',
            'You. It\'s always been you.',
            'Only you, Godfrey.'
        ],
        responses: [
            'Thank you for giving me your heart.',
            'And I will guard yours with my life.',
            'I love you, Mark. Forever and always.'
        ]
    }
];

// === GLOBAL STATE ===
let currentQuestion = 0;
let isAnswered = false;
let totalQuestionsAnswered = 0;
let musicPlaying = false;
let isMuted = false;
let bgMusic = null;
let particles = [];
let audioInitialized = false;
let audioContext = null;

// === INITIALIZATION ===
window.addEventListener('DOMContentLoaded', () => {
    console.log('🎬 DOM Content Loaded - Initializing story...');
    initializeStarfield();
    initializeAudio();
    initializeEventListeners();
    startSequence();
});

// ========================================
// STARFIELD & BACKGROUND ANIMATION
// ========================================
function initializeStarfield() {
    console.log('⭐ Initializing starfield...');
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create stars
    const stars = [];
    const starCount = Math.floor(window.innerWidth / 10);
    
    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5,
            opacity: Math.random() * 0.5 + 0.3,
            twinkleSpeed: Math.random() * 0.02 + 0.005
        });
    }
    
    // Create particles
    const particleCount = Math.floor(window.innerWidth / 30);
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: Math.random() * 0.5,
            opacity: Math.random() * 0.3 + 0.1
        });
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw stars
        stars.forEach((star) => {
            star.opacity += (Math.random() - 0.5) * star.twinkleSpeed;
            star.opacity = Math.max(0.2, Math.min(0.8, star.opacity));
            
            ctx.fillStyle = `rgba(245, 245, 245, ${star.opacity})`;
            ctx.fillRect(star.x, star.y, star.radius, star.radius);
        });
        
        // Draw particles
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce particles
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            
            ctx.fillStyle = `rgba(212, 165, 116, ${particle.opacity})`;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    console.log('✅ Starfield initialized');
}

// ========================================
// AUDIO SYSTEM - FIXED & ROBUST
// ========================================
function initializeAudio() {
    console.log('🎵 Initializing audio system...');
    bgMusic = document.getElementById('backgroundMusic');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const muteBtn = document.getElementById('muteBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    
    if (!bgMusic) {
        console.error('❌ Audio element not found!');
        return;
    }
    
    // Generate audio
    try {
        generateCinematicSoundtrack();
        console.log('✅ Audio generated successfully');
    } catch (error) {
        console.error('❌ Error generating audio:', error);
        createFallbackAudio();
    }
    
    // Play button
    playBtn.addEventListener('click', () => {
        console.log('▶️ Play button clicked');
        if (bgMusic.paused) {
            const playPromise = bgMusic.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log('✅ Audio is now playing');
                    musicPlaying = true;
                    playBtn.classList.add('hidden');
                    pauseBtn.classList.remove('hidden');
                }).catch(error => {
                    console.error('❌ Playback failed:', error);
                    alert('Audio playback failed. Please try again.');
                });
            }
        }
    });
    
    // Pause button
    pauseBtn.addEventListener('click', () => {
        console.log('⏸️ Pause button clicked');
        bgMusic.pause();
        musicPlaying = false;
        pauseBtn.classList.add('hidden');
        playBtn.classList.remove('hidden');
    });
    
    // Mute button
    muteBtn.addEventListener('click', () => {
        console.log('🔇 Mute toggled');
        isMuted = !isMuted;
        bgMusic.muted = isMuted;
        muteBtn.style.opacity = isMuted ? '0.5' : '1';
    });
    
    // Volume slider
    volumeSlider.addEventListener('input', (e) => {
        bgMusic.volume = e.target.value / 100;
        console.log(`🔊 Volume set to ${e.target.value}%`);
    });
    
    bgMusic.volume = 0.7;
    console.log('✅ Audio system initialized');
}

// Generate cinematic soundtrack using Web Audio API
function generateCinematicSoundtrack() {
    console.log('🎼 Generating cinematic soundtrack...');
    
    try {
        // Create audio context
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        console.log('✅ Audio context created');
        
        const sampleRate = audioContext.sampleRate;
        const duration = 60;
        const buffer = audioContext.createAudioBuffer(2, sampleRate * duration, sampleRate);
        
        console.log(`📊 Buffer created: ${duration}s at ${sampleRate}Hz`);
        
        const left = buffer.getChannelData(0);
        const right = buffer.getChannelData(1);
        
        // Create orchestral composition
        let t = 0;
        for (let i = 0; i < sampleRate * duration; i++) {
            t = i / sampleRate;
            
            const pianoFreq = 261.63;
            const stringsFreq = 329.63;
            const orchestralFreq = 440;
            
            // Piano intro
            let piano = 0;
            if (t < 20) {
                piano = Math.sin(2 * Math.PI * pianoFreq * t) * (1 - t / 20) * 0.3;
            }
            
            // Strings building
            let strings = 0;
            if (t >= 15 && t < 40) {
                const fadeIn = Math.max(0, (t - 15) / 10);
                strings = Math.sin(2 * Math.PI * stringsFreq * t) * fadeIn * 0.2;
            }
            
            // Full orchestra
            let orchestral = 0;
            if (t >= 35) {
                const fadeIn = Math.min(1, (t - 35) / 5);
                orchestral = Math.sin(2 * Math.PI * orchestralFreq * t) * fadeIn * 0.3;
            }
            
            // Choir effect
            const choirEffect = Math.sin(2 * Math.PI * 220 * t) * 0.1;
            
            // Climax
            let climax = 0;
            if (t > 50) {
                climax = Math.sin(2 * Math.PI * (pianoFreq * 2) * t) * ((t - 50) / 10) * 0.2;
            }
            
            const sample = piano + strings + orchestral + choirEffect + climax;
            left[i] = sample;
            right[i] = sample * 0.95;
        }
        
        console.log('✅ Audio buffer populated with sound data');
        
        // Convert to WAV and play
        const wav = audioBufferToWav(buffer);
        const blob = new Blob([wav], { type: 'audio/wav' });
        const url = URL.createObjectURL(blob);
        
        bgMusic.src = url;
        bgMusic.loop = true;
        bgMusic.preload = 'auto';
        
        console.log('✅ Audio URL set:', url.substring(0, 50) + '...');
        console.log('✅ Cinematic soundtrack generated successfully');
        
        audioInitialized = true;
        return true;
    } catch (error) {
        console.error('❌ Error generating soundtrack:', error);
        createFallbackAudio();
        return false;
    }
}

// Helper function to convert AudioBuffer to WAV
function audioBufferToWav(audioBuffer) {
    console.log('🔧 Converting audio buffer to WAV...');
    
    const numberOfChannels = audioBuffer.numberOfChannels;
    const sampleRate = audioBuffer.sampleRate;
    const format = 1;
    const bitDepth = 16;
    
    const bytesPerSample = bitDepth / 8;
    const blockAlign = numberOfChannels * bytesPerSample;
    
    const channelData = [];
    for (let i = 0; i < numberOfChannels; i++) {
        channelData.push(audioBuffer.getChannelData(i));
    }
    
    const interleaved = new Float32Array(audioBuffer.length * numberOfChannels);
    let offset = 0;
    for (let i = 0; i < audioBuffer.length; i++) {
        for (let j = 0; j < numberOfChannels; j++) {
            interleaved[offset++] = channelData[j][i];
        }
    }
    
    const dataLength = interleaved.length * bytesPerSample;
    const buffer = new ArrayBuffer(44 + dataLength);
    const view = new DataView(buffer);
    
    const writeString = (offset, string) => {
        for (let i = 0; i < string.length; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    };
    
    writeString(0, 'RIFF');
    view.setUint32(4, 36 + dataLength, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, format, true);
    view.setUint16(22, numberOfChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * blockAlign, true);
    view.setUint16(32, blockAlign, true);
    view.setUint16(34, bitDepth, true);
    writeString(36, 'data');
    view.setUint32(40, dataLength, true);
    
    let index = 44;
    const volume = 0.8;
    for (let i = 0; i < interleaved.length; i++) {
        let s = Math.max(-1, Math.min(1, interleaved[i]));
        view.setInt16(index, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        index += 2;
    }
    
    console.log('✅ WAV conversion complete');
    return buffer;
}

// Fallback audio creation
function createFallbackAudio() {
    console.warn('⚠️ Creating fallback audio...');
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        
        osc.connect(gain);
        gain.connect(audioContext.destination);
        osc.frequency.value = 440;
        gain.gain.setValueAtTime(0.1, audioContext.currentTime);
        
        osc.start(audioContext.currentTime);
        osc.stop(audioContext.currentTime + 0.5);
        
        console.log('✅ Fallback audio created');
    } catch (error) {
        console.error('❌ Fallback audio creation failed:', error);
    }
}

// ========================================
// EVENT LISTENERS
// ========================================
function initializeEventListeners() {
    console.log('🔗 Initializing event listeners...');
    
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => {
        btn.addEventListener('click', handleAnswer);
    });
    
    const replayBtn = document.querySelector('.replay-btn');
    replayBtn?.addEventListener('click', replayStory);
    
    const letterBtn = document.querySelector('.letter-btn');
    letterBtn?.addEventListener('click', openLetter);
    
    const journeyBtn = document.querySelector('.journey-btn');
    journeyBtn?.addEventListener('click', openJourney);
    
    const modalClose = document.querySelector('.modal-close');
    modalClose?.addEventListener('click', closeModal);
    
    const modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay?.addEventListener('click', closeModal);
    
    console.log('✅ Event listeners initialized');
}

// ========================================
// SEQUENCE MANAGEMENT
// ========================================
function startSequence() {
    console.log('🎬 Starting story sequence...');
    
    setTimeout(() => {
        console.log('📍 Hiding loading screen...');
        document.getElementById('loadingScreen').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
        playHeartbeat();
    }, 3000);
    
    setTimeout(() => {
        console.log('📍 Transitioning to questions...');
        transitionToQuestions();
    }, 6500);
}

function transitionToQuestions() {
    console.log('➡️ Transition to questions section');
    const introSection = document.getElementById('introSection');
    introSection.classList.add('hidden');
    
    const questionsSection = document.getElementById('questionsSection');
    questionsSection.classList.remove('hidden');
    
    displayQuestion(0);
    
    // Auto-play music with error handling
    console.log('🎵 Attempting to auto-play music...');
    const playPromise = bgMusic.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log('✅ Auto-play successful');
            musicPlaying = true;
            document.getElementById('playBtn').classList.add('hidden');
            document.getElementById('pauseBtn').classList.remove('hidden');
        }).catch(error => {
            console.warn('⚠️ Auto-play blocked by browser:', error);
            console.log('💡 User will need to click play button');
        });
    }
}

function displayQuestion(index) {
    if (index >= questions.length) {
        transitionToFinal();
        return;
    }
    
    currentQuestion = index;
    const question = questions[index];
    
    document.getElementById('questionNumber').textContent = index + 1;
    document.getElementById('questionText').textContent = question.text;
    
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach((btn, i) => {
        btn.querySelector('.option-content').textContent = question.options[i];
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
    });
    
    document.querySelector('.quote-response').classList.add('hidden');
    isAnswered = false;
}

function handleAnswer(e) {
    if (isAnswered) return;
    isAnswered = true;
    totalQuestionsAnswered++;
    
    const optionIndex = e.currentTarget.dataset.option;
    const question = questions[currentQuestion];
    const response = question.responses[optionIndex];
    
    const quoteResponse = document.querySelector('.quote-response');
    document.getElementById('quoteText').textContent = response;
    quoteResponse.classList.remove('hidden');
    
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.style.opacity = '0.5';
        btn.style.pointerEvents = 'none';
    });
    
    setTimeout(() => {
        displayQuestion(currentQuestion + 1);
    }, 3000);
}

function transitionToFinal() {
    console.log('🎬 Transitioning to final reveal...');
    const questionsSection = document.getElementById('questionsSection');
    questionsSection.classList.add('hidden');
    
    const finalSection = document.getElementById('finalSection');
    finalSection.classList.remove('hidden');
    
    setTimeout(() => {
        const endingSection = document.getElementById('endingSection');
        endingSection.classList.remove('hidden');
    }, 21000);
}

function replayStory() {
    console.log('🔄 Replaying story...');
    location.reload();
}

function openLetter() {
    console.log('💌 Opening letter...');
    const letterModal = document.getElementById('letterModal');
    letterModal.classList.remove('hidden');
}

function openJourney() {
    console.log('📖 Opening journey...');
    alert('Our journey together is the greatest adventure of my life. ❤️');
}

function closeModal() {
    console.log('✖️ Closing modal...');
    const letterModal = document.getElementById('letterModal');
    letterModal.classList.add('hidden');
}

// ========================================
// SOUND EFFECTS
// ========================================
function playHeartbeat() {
    try {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        const now = audioContext.currentTime;
        
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        
        osc.connect(gain);
        gain.connect(audioContext.destination);
        
        osc.frequency.setValueAtTime(80, now);
        osc.frequency.exponentialRampToValueAtTime(60, now + 0.1);
        
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0, now + 0.1);
        
        osc.start(now);
        osc.stop(now + 0.1);
        
        console.log('💓 Heartbeat played');
    } catch (error) {
        console.error('❌ Heartbeat error:', error);
    }
}

// ========================================
// LOCAL STORAGE
// ========================================
function saveProgress() {
    localStorage.setItem('loveStoryProgress', JSON.stringify({
        currentQuestion,
        totalQuestionsAnswered,
        timestamp: new Date().getTime()
    }));
    console.log('💾 Progress saved');
}

function loadProgress() {
    const saved = localStorage.getItem('loveStoryProgress');
    if (saved) {
        const data = JSON.parse(saved);
        currentQuestion = data.currentQuestion;
        totalQuestionsAnswered = data.totalQuestionsAnswered;
        console.log('📂 Progress loaded');
    }
}

// ========================================
// ACCESSIBILITY
// ========================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => announcement.remove(), 1000);
}

// Initialize progress tracking
window.addEventListener('beforeunload', saveProgress);
loadProgress();

// === STARTUP LOG ===
console.log('%c❤️ GODFREY ❤️ MARK ❤️', 'color: #ff6b8a; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to our love story...', 'color: #d4a574; font-size: 14px;');
console.log('%c✅ All systems initialized', 'color: #00ff00; font-size: 12px;');
console.log('%c🎵 Audio Status: ', 'color: #ffd700; font-size: 12px;', audioInitialized ? 'READY' : 'INITIALIZING');
