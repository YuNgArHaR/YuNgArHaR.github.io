const slides = [
  {
    title: "Поддержка традиционных<br>семейных ценностей",
    text: "Мы стремимся сохранить и укрепить семейные традиции Вологды. Наша цель – оказать всестороннюю поддержку каждой семье, создавая благоприятные условия для воспитания детей и укрепления семейных уз. Присоединяйтесь к нашим программам и инициативам, направленным на развитие и защиту традиционных ценностей.",
    img: "img/slider/1.png",
    dottes: "img/1.svg",
  },
  {
    title: "Наши образовательные программы",
    text: "Участвуйте в наших образовательных инициативах! Присоединяйтесь к семинарам и тренингам для повышения знаний и навыков всей семьи. Будьте в курсе всех событий и станьте частью большого семейного праздника, где вас ждут полезные знания и незабываемые впечатления.",
    img: "img/slider/2.png",
    dottes: "img/2.svg",
  },
  {
    title: "Социальные и культурные инициативы",
    text: "Узнайте о наших разнообразных инициативах, направленных на популяризацию семейных праздников и традиций. Мы организуем культурные мероприятия, фестивали и мастер-классы, которые объединяют семьи и создают теплую атмосферу единства. Воспитываем уважение к семейным традициям и передаем их из поколения в поколение.",
    img: "img/slider/3.png",
    dottes: "img/3.svg",
  },
];

let currentIndex = 0;

function updateSlide(index) {
  const slide = slides[index];
  document.getElementById("slide-title").innerHTML = slide.title;
  document.getElementById("slide-text").innerHTML = slide.text;
  document.getElementById("slide-image").src = slide.img;
  document.getElementById("slide-dottes").src = slide.dottes;

  document.getElementById("prevBtn").disabled = index === 0;
  document.getElementById("nextBtn").disabled = index === slides.length - 1;
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex -= 1;
    updateSlide(currentIndex);
  }
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex += 1;
    updateSlide(currentIndex);
  }
}

updateSlide(currentIndex);

function openModal1() {
  document.querySelector(".mod1").style.display = "flex";
  document.querySelector(".bg").style.display = "block";
  document.querySelector("body").style.overflowY = "hidden";
}

function openModal2() {
  document.querySelector(".mod2").style.display = "flex";
  document.querySelector(".bg").style.display = "block";
  document.querySelector("body").style.overflowY = "hidden";
}

function openModal3() {
  document.querySelector(".mod3").style.display = "flex";
  document.querySelector(".bg").style.display = "block";
  document.querySelector("body").style.overflowY = "hidden";
}

function openModal4() {
  document.querySelector(".mod4").style.display = "flex";
  document.querySelector(".bg").style.display = "block";
  document.querySelector("body").style.overflowY = "hidden";
}

function openModal5() {
  document.querySelector(".mod5").style.display = "flex";
  document.querySelector(".bg").style.display = "block";
  document.querySelector("body").style.overflowY = "hidden";
}

function openModal6() {
  document.querySelector(".mod6").style.display = "flex";
  document.querySelector(".bg").style.display = "block";
  document.querySelector("body").style.overflowY = "hidden";
}

function openModalReg() {
  document.querySelector(".mod-reg").style.display = "flex";
  document.querySelector(".bg").style.display = "block";
  document.querySelector("body").style.overflowY = "hidden";
}

// Функция для закрытия модального окна
function closeModal1() {
  document.querySelector(".mod1").style.display = "none";
  document.querySelector(".bg").style.display = "none";
  document.querySelector("body").style.overflowY = "scroll";
}

function closeModal2() {
  document.querySelector(".mod2").style.display = "none";
  document.querySelector(".bg").style.display = "none";
  document.querySelector("body").style.overflowY = "scroll";
}

function closeModal3() {
  document.querySelector(".mod3").style.display = "none";
  document.querySelector(".bg").style.display = "none";
  document.querySelector("body").style.overflowY = "scroll";
}

function closeModal4() {
  document.querySelector(".mod4").style.display = "none";
  document.querySelector(".bg").style.display = "none";
  document.querySelector("body").style.overflowY = "scroll";
}

function closeModal5() {
  document.querySelector(".mod5").style.display = "none";
  document.querySelector(".bg").style.display = "none";
  document.querySelector("body").style.overflowY = "scroll";
}

function closeModal6() {
  document.querySelector(".mod6").style.display = "none";
  document.querySelector(".bg").style.display = "none";
  document.querySelector("body").style.overflowY = "scroll";
}

function closeModalReg() {
  document.querySelector(".mod-reg").style.display = "none";
  document.querySelector(".bg").style.display = "none";
  document.querySelector("body").style.overflowY = "scroll";
}

function clearForm() {
  document.getElementById("myForm").reset();
}
