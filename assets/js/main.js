
const header = document.querySelector(".header-section");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});


const toggle = document.querySelector('.menu-toggle');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');
toggle.onclick = () => {
    toggle.classList.toggle('active');
    mobileMenuContainer.classList.toggle('active')
};




const slide = new Splide('#text-slider', {
    type: 'loop',
    autoplay: true,
    interval: 2000,
    speed: 1000,
    easing: 'ease-in-out',
    arrows: false,
    pagination: false,
    perPage: 3,
    perMove: 1,
    padding: { right: '50px' },

    breakpoints: {
        1024: {
            perPage: 2,
            padding: { right: '20px' }
        },
        768: {
            perPage: 1,
            padding: { right: '15px' }
        }
    }
});

slide.mount();

const daysContainer = document.getElementById("days");
const monthYear = document.getElementById("monthYear");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let date = new Date();
let selectedDay = null;

function renderCalendar() {
    daysContainer.innerHTML = "";

    const year = date.getFullYear();
    const month = date.getMonth();

    monthYear.innerText = date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric"
    });

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        daysContainer.appendChild(document.createElement("div"));
    }

    for (let day = 1; day <= lastDate; day++) {
        const dayEl = document.createElement("div");
        dayEl.innerText = day;

        const today = new Date();
        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            dayEl.classList.add("today");
        }

        dayEl.onclick = () => {
            document.querySelectorAll(".calendar-days div")
                .forEach(d => d.classList.remove("selected"));
            dayEl.classList.add("selected");
            selectedDay = day;
        };

        daysContainer.appendChild(dayEl);
    }
}

prevBtn.onclick = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
};

nextBtn.onclick = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
};

renderCalendar();

const timezoneSelect = document.getElementById("timezoneSelect");
const timeDisplay = document.getElementById("timeDisplay");

function updateTime() {
    const timezone = timezoneSelect.value;

    const now = new Date();
    const time = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        hour: "numeric",
        minute: "numeric",
        hour12: true
    }).format(now);

    timeDisplay.innerText = `(${time})`;
}

// change event
timezoneSelect.addEventListener("change", updateTime);

// auto update every minute
setInterval(updateTime, 60000);

// initial call
updateTime();
