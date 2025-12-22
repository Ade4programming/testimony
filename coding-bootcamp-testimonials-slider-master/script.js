const container = document.querySelector("main");

const array = [
  {
    author: {
      name: "Tanya Sinclair",
      image: "images/image-tanya.jpg",
    },
    job: {
      title: "UX Engineer",
    },
    testimonial: {
      description:
        "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
    },
  },
  {
    author: {
      name: "John Tarkpor",
      image: "images/image-john.jpg",
    },
    job: {
      title: "Junior Front-end Developer",
    },
    testimonial: {
      description:
        "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ",
    },
  },
];

let current = 0;

function next() {
    if (array.length) {
        current ++;
    }
    run(current)
}
function prev() {
  if (array.length > 0) {
        current -= 1;
    }
    run(current)
}

function run(single) {
  container.innerHTML = `
         <figure class="image-block">
            <img src="images/pattern-bg.svg" alt="" class="bg-img">
            <img src="${array[single].author.image}" alt="" class="author-img">
            <button class="span-block"><img onclick="prev()"
            src="images/icon-prev.svg" alt=""><img onclick="next()" src="images/icon-next.svg" alt=""></button>
        </figure>
        <figcaption class="hero-text">
            <p>“${array[single].testimonial.description}”</p>

            <section class="author">
                <h4 class="name">${array[single].author.name}</h4>
                <h4 class="job-title">${array[single].job.title}</h4>
            </section>
        </figcaption>
    `;
}

run(current);
