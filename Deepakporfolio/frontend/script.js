// // toggle icon navbar
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

// // scroll sections
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 100;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             // active navbar links
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//             // active sections for animation on scroll
//             sec.classList.add('show-animate');
//         }
//         // if want to animation that repeats on scroll use this
//         else {
//             sec.classList.remove('show-animate');
//         }
//     });

//     // sticky navbar
//     let header = document.querySelector('header');

//     header.classList.toggle('sticky', window.scrollY > 100);

//     // remove toggle icon and navbar when click navbar links (scroll)
//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');

//     // animation footer on scroll
//     let footer = document.querySelector('footer');

//     footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     AOS.init({
//         duration: 1200,
//         once: true,
//         offset: 200,
//         delay: 200,
//         easing: 'ease-in-out'
//     });
// });
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        mobileNumber: document.getElementById('mobileNumber').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('http://localhost:8080/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.text();
        alert(result); // Show response (e.g., "Message saved successfully!...")
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send message. Check console for details.');
    }

    // Optional: Clear form after submission
    document.getElementById('contactForm').reset();
});

// AOS initialization
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1200,
        once: true,
        offset: 200,
        delay: 200,
        easing: 'ease-in-out'
    });
});