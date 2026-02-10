// Data - Mapping relative paths for browser view
// Note: In a real app, these would be fetched or pre-compiled. 
// I will use internal paths that the user can serve.
// Projects data moved to data.js

// Initialize Lenis with smooth scrolling
let lenis;
if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false, // Disabled infinite scroll
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
} else {
    console.warn('Lenis not loaded. Smooth scrolling disabled.');
    // Add a class to body to indicate native scrolling if needed
    document.body.classList.add('no-lenis');
}

// Project Cards Click Handler
function handleProjectClick(project) {
    const detailOverlay = document.getElementById('project-detail');
    const detailScroll = document.getElementById('detail-scroll');
    const detailTitle = document.getElementById('detail-title');
    const detailCategory = document.getElementById('detail-category');

    // Populate Info
    detailTitle.innerText = project.title;
    detailCategory.innerText = project.category.replace('-', ' ').toUpperCase();

    // Populate Images (Simulating multiple views using the same image + placeholders if unique ones aren't available)
    // In a real app, 'project' object would have an array of 'gallery_images'.
    // Here we'll generate 5 horizontal scroll items.
    detailScroll.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'detail-image-container';
        imgContainer.innerHTML = `<img src="${project.image}" alt="${project.title} detail ${i + 1}">`;
        detailScroll.appendChild(imgContainer);
    }

    detailOverlay.classList.add('active');

    // Add horizontal scroll on wheel - DISABLED for vertical snap
    /*
    detailScroll.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        detailScroll.scrollLeft += evt.deltaY;
    });
    */

    // Update URL
    const slug = project.title.toLowerCase().replace(/ /g, '-');
    history.pushState({ projectId: project.id }, '', `/project/${slug}`);
}

function closeProjectDetail() {
    document.getElementById('project-detail').classList.remove('active');
    if (lenis) lenis.start(); // Resume Lenis for main page scroll
    // Revert URL to root if we are not already there
    if (window.location.pathname !== '/') {
        history.pushState(null, '', '/');
    }
}

document.getElementById('close-detail').addEventListener('click', closeProjectDetail);

// Close on ESC key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectDetail();
    }
});

// Handle Browser Back/Forward
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.projectId) {
        // Determine which project to open based on ID
        // Note: In a real app we'd look up by ID. For now we just close if we go back to root.
        // Since our 'projects' array is concise, we can find it.
        const project = projects.find(p => p.id === event.state.projectId);
        if (project) {
            // Re-open without pushing new state
            const detailOverlay = document.getElementById('project-detail');
            // ... (duplicate open logic needed here or refactor open to separate UI from history)
            // For simplicity in this step, let's just re-trigger click but avoid logic loop
            // OR better: Refactor `handleProjectClick` to `openProject(project, pushState = true)`
            openProject(project, false);
        }
    } else {
        // No state means root
        document.getElementById('project-detail').classList.remove('active');
        if (lenis) lenis.start();
    }
});

// Refactored Open Function
// Detail Elements
const detailScroll = document.getElementById('detail-scroll');
const detailOverlay = document.getElementById('project-detail');
const detailTitle = document.getElementById('detail-title');
const detailCategory = document.getElementById('detail-category');
const detailDescription = document.getElementById('detail-description');
const detailVideo = document.getElementById('detail-video');

// About Page Elements
const aboutPill = document.getElementById('about-pill');
const aboutOverlay = document.getElementById('about-overlay');
const closeAboutBtn = document.getElementById('close-about');

if (aboutPill && aboutOverlay && closeAboutBtn) {
    aboutPill.addEventListener('click', () => {
        aboutOverlay.classList.add('active');
        if (lenis) lenis.stop();
    });

    closeAboutBtn.addEventListener('click', () => {
        aboutOverlay.classList.remove('active');
        if (lenis) lenis.start();
    });

    // Close on overlay background click
    aboutOverlay.addEventListener('click', (e) => {
        if (e.target === aboutOverlay) {
            aboutOverlay.classList.remove('active');
            if (lenis) lenis.start();
        }
    });

    // About Category Links Filtering Logic
    const aboutCategoryLinks = document.querySelectorAll('.about-category-link');
    aboutCategoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log('About category clicked:', link.getAttribute('data-filter'));
            e.stopPropagation(); // Prevent bubbling to overlay
            const filter = link.getAttribute('data-filter');

            // Update Active State in Main Menu
            const menuItems = document.querySelectorAll('.category-item');
            menuItems.forEach(i => {
                i.classList.remove('active');
                if (i.getAttribute('data-filter') === filter) {
                    i.classList.add('active');
                    // Update Menu Label
                    const menuLabel = document.getElementById('menu-label');
                    menuLabel.innerText = i.innerText;
                }
            });

            // Perform Filtering
            renderProjects(filter);

            // Close About Overlay
            aboutOverlay.classList.remove('active');
            if (lenis) lenis.start();

            // Scroll to Grid
            const grid = document.getElementById('project-grid');
            if (grid) {
                grid.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Setup Scroll & Drag Listeners - DISABLED for vertical snap
/*
detailScroll.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    detailScroll.scrollLeft += evt.deltaY;
});
*/

let isDown = false;
let startX;
let scrollLeft;

/*
detailScroll.addEventListener('mousedown', (e) => {
    isDown = true;
    detailScroll.classList.add('active');
    startX = e.pageX - detailScroll.offsetLeft;
    scrollLeft = detailScroll.scrollLeft;
    e.preventDefault(); // Prevent image drag default
});

const stopDrag = () => {
    isDown = false;
    detailScroll.classList.remove('active');
};

detailScroll.addEventListener('mouseleave', stopDrag);
detailScroll.addEventListener('mouseup', stopDrag);

detailScroll.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - detailScroll.offsetLeft;
    const walk = (x - startX) * 2;
    detailScroll.scrollLeft = scrollLeft - walk;
});
*/

// Refactored Open Function
function openProject(project, pushState = true) {
    // Populate Info
    detailTitle.innerText = project.title;
    detailCategory.innerText = project.category.replace('-', ' ').toUpperCase();

    if (detailDescription) {
        detailDescription.innerText = project.description || '';
        // Only show if description exists
        detailDescription.style.display = project.description ? 'block' : 'none';
    }

    if (detailVideo) {
        if (project.youtubeLink) {
            detailVideo.href = project.youtubeLink;
            detailVideo.style.display = 'flex';
        } else {
            detailVideo.style.display = 'none';
        }
    }

    // Populate Images
    detailScroll.innerHTML = '';

    // Filter all images for this project
    // We match based on exact title
    const projectImages = allProjectImages.filter(img => img.title === project.title);

    // Fallback if no images found in the big list (shouldn't happen if data is consistent)
    // But we ensure at least the main image is shown
    let imagesToShow = projectImages.length > 0 ? projectImages : [{ image: project.image, title: project.title }];

    // Remove duplicates based on image path if any (though unlikely with our generator)
    const uniqueImages = [];
    const seen = new Set();
    for (const img of imagesToShow) {
        if (!seen.has(img.image)) {
            seen.add(img.image);
            uniqueImages.push(img);
        }
    }

    uniqueImages.forEach((img, index) => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'detail-image-container';
        imgContainer.innerHTML = `<img src="${img.image}" alt="${img.title} detail ${index + 1}" class="clickable-image">`;
        detailScroll.appendChild(imgContainer);
    });

    // Add click event for lightbox
    const images = detailScroll.querySelectorAll('.clickable-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');

    images.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.classList.add('active');
            lightboxImg.src = image.src;
        });
    });

    closeLightbox.onclick = function () {
        lightbox.classList.remove('active');
    }

    lightbox.onclick = function (e) {
        if (e.target !== lightboxImg) {
            lightbox.classList.remove('active');
        }
    }

    detailOverlay.classList.add('active');
    lenis.stop(); // Pause Lenis so detail scroll works

    if (pushState) {
        const slug = project.title.toLowerCase().replace(/ /g, '-');
        history.pushState({ projectId: project.id }, '', `/project/${slug}`);
    }
}

// Wrapper for click
function handleProjectClick(project) {
    if (project.directYoutube) {
        window.open(project.directYoutube, '_blank');
        return;
    }
    openProject(project, true);
}

// Grid Rendering
const grid = document.getElementById('project-grid');

// Full Dataset for filtered views (Injected)
// All Project Images data moved to data.js

function renderProjects(filter = 'all') {
    grid.innerHTML = '';

    let displayProjects = [];

    if (filter === 'all') {
        // Use curated list for main view
        displayProjects = projects;
    } else {
        // Use comprehensive dataset for filtered views
        displayProjects = allProjectImages.filter(p => p.category === filter);

        // Remove duplicate projects (keep only first occurrence per title)
        const seen = new Set();
        displayProjects = displayProjects.filter(p => {
            if (seen.has(p.title)) {
                return false;
            }
            seen.add(p.title);
            return true;
        });

        // Shuffle to avoid project clustering
        displayProjects = displayProjects.sort(() => Math.random() - 0.5);

        // Handle empty case
        if (displayProjects.length === 0) {
            grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 4rem; opacity: 0.5;">No projects found in this category.</div>';
            return;
        }
    }

    displayProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.onclick = () => handleProjectClick(project); // Add click event
        card.innerHTML = `
                    <img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'">
                    <div class="card-overlay">
                        <div class="overlay-title">${project.title}</div>
                    </div>
                `;
        grid.appendChild(card);
    });
}

// Menu Interaction (Click to Toggle)
const menuBtn = document.getElementById('menu-pill');
const menu = document.getElementById('category-menu');

function toggleMenu(e) {
    e.stopPropagation(); // Prevent immediate closing
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);

// Remove hover listeners as we switched to click
// menuBtn.addEventListener('mouseenter', showMenu);
// menuBtn.addEventListener('mouseleave', hideMenu);
// menu.addEventListener('mouseenter', showMenu);
// menu.addEventListener('mouseleave', hideMenu);

// Preview Interaction on Menu Items
const menuItems = document.querySelectorAll('.category-item');
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Here we could change a background image or preview
        // For now, let's just highlight the item smoothly
        menuItems.forEach(i => i.style.opacity = '0.5');
        item.style.opacity = '1';
    });
    item.addEventListener('mouseleave', () => {
        menuItems.forEach(i => i.style.opacity = '1');
    });
});

// Category Filtering
const items = document.querySelectorAll('.category-item');
items.forEach(item => {
    item.addEventListener('click', () => {
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const filter = item.getAttribute('data-filter');

        // Update Menu Label
        const menuLabel = document.getElementById('menu-label');
        if (filter === 'all') {
            menuLabel.innerText = 'SELECTED WORK';
        } else {
            menuLabel.innerText = item.innerText;
        }

        renderProjects(filter);
        menu.classList.remove('active');
        menuBtn.classList.remove('active'); // Also toggle button state
    });
});

// Close menu on click outside
window.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
    }
});

// Brand Pill Click Handler (Back to Home)
const brandPill = document.getElementById('brand-pill');
if (brandPill) {
    brandPill.addEventListener('click', () => {
        // Reset Category Menu
        const items = document.querySelectorAll('.category-item');
        items.forEach(i => i.classList.remove('active'));
        const allFilterBtn = document.querySelector('.category-item[data-filter="all"]');
        if (allFilterBtn) allFilterBtn.classList.add('active');

        // Reset Labels
        const menuLabel = document.getElementById('menu-label');
        if (menuLabel) menuLabel.innerText = 'SELECTED WORK';

        // Close Overlays
        if (typeof closeProjectDetail === 'function') closeProjectDetail();
        if (aboutOverlay) aboutOverlay.classList.remove('active');

        // Render All
        renderProjects('all');

        // Scroll Top
        if (lenis) {
            lenis.scrollTo(0, { immediate: false });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

// Initial Layout
renderProjects();

// Handle Direct URL Access (Deep Linking)
window.addEventListener('load', () => {
    const path = window.location.pathname;
    if (path.startsWith('/project/')) {
        const slug = path.split('/project/')[1];
        if (slug) {
            // Find project by slug
            const project = projects.find(p =>
                p.title.toLowerCase().replace(/ /g, '-') === slug
            );

            if (project) {
                openProject(project, false); // false = don't push state again
            }
        }
    }
});