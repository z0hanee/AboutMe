import React, { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About"
import Cards from "./components/Cards";
import Footer from "./components/footer";
import bannerBg from './assets/img/background.png';
import img from './assets/img/jamal.png'
import imgCards from './assets/img/bratjamala.png'
import Telegram from './assets/img/telegram.svg'
import Instagram from './assets/img/inst.svg'
import Facebook from './assets/img/facebook.svg'
import Email from './assets/img/email.svg'
import whatusup from './assets/img/whatusup.svg'



const App = () => {
  const [logo, setLogo] = useState({
    name: 'PROWEB',
    url: 'https://proweb.uz/'
  });
  const [navLinks, setNavLinks] = useState([
    { id: 1, name: "Обо мне", url: "https://www.instagram.com/z0hanee_/" },
    { id: 2, name: "Мои работы", url: "https://www.richardmille.com/ru" },
    { id: 3, name: "Контакты", url: "https://t.me/Only_gym" },

  ])
  const [BannerWrap, setBannerWrap] = useState({
    bannerBg: bannerBg,
    title: 'Добро пожаловать на мой сайт',
    phone_number: '+998994632970',
    btn_name: 'Позвонить',
  });
  const [about, setAbout] = useState({
    titleUp: 'Обо мне',
    img: img,
    name: 'Зубенко Михаил Петрович',
    desc: 'Я могу делать семейные портреты в студии, работать на показах мод, снимать моделей для рекламы или фотографировать на свадьбах. Отдельное направление -- съёмки предметов и еды, которые заказывают для рекламы или меню ресторанов. Я могу быть криминальным фотографом мест преступлений, охотником за знаменитостями или снимать диких животных для журналов о природе. Я востребованный специалист в новостных изданиях, работаю в паре с журналистом и могу оказаться где угодно: от гламурной вечеринки до места пожара, наводнения и даже вооруженного конфликта. Моя профессия будет востребована и в будущем, ведь 80% успеха фотографии -- это не качество техники, а профессионализм фотографа. '
  });
  const [cards, setCards] = useState([

    {
      id: 1,
      imgCards: imgCards,
      cardDescGeo: 'Чиланзар',
      cardDesc: 'Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году ',
      cardWrapBtn: 'Посмотреть', url: 'https://www.google.com/search?q=%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80&sca_esv=e204b5e803cfdc8c&sxsrf=AHTn8zpYCmpmU5l7LVsKOMteS3_eGmKIFg%3A1739703435619&ei=i8SxZ5nCJYqPwPAP0KmqUA&ved=0ahUKEwjZs62qhMiLAxWKBxAIHdCUCgoQ4dUDCBA&uact=5&oq=%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80&gs_lp=Egxnd3Mtd2l6LXNlcnAiENCn0LjQu9Cw0L3Qt9Cw0YAyChAjGIAEGCcYigUyChAuGIAEGBQYhwIyChAAGIAEGEMYigUyChAuGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGBQYhwIyChAuGIAEGEMYigUyChAuGIAEGEMYigUyBRAuGIAEMgUQLhiABDIZEC4YgAQYFBiHAhiXBRjcBBjeBBjgBNgBAUjURVDwF1i-Q3AMeAGQAQSYAaoBoAHrEaoBBDAuMTW4AQPIAQD4AQGYAhegAuoNqAIPwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAggQABiABBiiBMICBRAAGO8FwgIHECMYJxjqAsICFhAuGIAEGEMYtAIYyAMYigUY6gLYAQHCAhwQLhiABBhDGLQCGMcBGMgDGIoFGOoCGK8B2AEBwgILEC4YgAQYsQMYgwHCAg4QABiABBixAxiDARiKBcICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMYgwEY1ALCAgQQIxgnwgIZEC4YgAQYQxiKBRiXBRjcBBjeBBjgBNgBAcICBxAAGIAEGArCAgcQLhiABBgKwgIFEAAYgASYAwjiAwUSATEgQPEFppJa0FoIOGWIBgGQBhK6BgYIARABGAmSBwUxMi4xMaAHvp4C&sclient=gws-wiz-serp'
    },
    {
      id: 2,
      imgCards: imgCards,
      cardDescGeo: 'Чиланзар',
      cardDesc: 'Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году ',
      cardWrapBtn: 'Посмотреть', url: 'https://www.google.com/search?q=%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80&sca_esv=e204b5e803cfdc8c&sxsrf=AHTn8zpYCmpmU5l7LVsKOMteS3_eGmKIFg%3A1739703435619&ei=i8SxZ5nCJYqPwPAP0KmqUA&ved=0ahUKEwjZs62qhMiLAxWKBxAIHdCUCgoQ4dUDCBA&uact=5&oq=%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80&gs_lp=Egxnd3Mtd2l6LXNlcnAiENCn0LjQu9Cw0L3Qt9Cw0YAyChAjGIAEGCcYigUyChAuGIAEGBQYhwIyChAAGIAEGEMYigUyChAuGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGBQYhwIyChAuGIAEGEMYigUyChAuGIAEGEMYigUyBRAuGIAEMgUQLhiABDIZEC4YgAQYFBiHAhiXBRjcBBjeBBjgBNgBAUjURVDwF1i-Q3AMeAGQAQSYAaoBoAHrEaoBBDAuMTW4AQPIAQD4AQGYAhegAuoNqAIPwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAggQABiABBiiBMICBRAAGO8FwgIHECMYJxjqAsICFhAuGIAEGEMYtAIYyAMYigUY6gLYAQHCAhwQLhiABBhDGLQCGMcBGMgDGIoFGOoCGK8B2AEBwgILEC4YgAQYsQMYgwHCAg4QABiABBixAxiDARiKBcICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMYgwEY1ALCAgQQIxgnwgIZEC4YgAQYQxiKBRiXBRjcBBjeBBjgBNgBAcICBxAAGIAEGArCAgcQLhiABBgKwgIFEAAYgASYAwjiAwUSATEgQPEFppJa0FoIOGWIBgGQBhK6BgYIARABGAmSBwUxMi4xMaAHvp4C&sclient=gws-wiz-serp'
    },
    {
      id: 3,
      imgCards: imgCards,
      cardDescGeo: 'Чиланзар',
      cardDesc: 'Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году ',
      cardWrapBtn: 'Посмотреть', url: 'https://www.google.com/search?q=%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80&sca_esv=e204b5e803cfdc8c&sxsrf=AHTn8zpYCmpmU5l7LVsKOMteS3_eGmKIFg%3A1739703435619&ei=i8SxZ5nCJYqPwPAP0KmqUA&ved=0ahUKEwjZs62qhMiLAxWKBxAIHdCUCgoQ4dUDCBA&uact=5&oq=%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80&gs_lp=Egxnd3Mtd2l6LXNlcnAiENCn0LjQu9Cw0L3Qt9Cw0YAyChAjGIAEGCcYigUyChAuGIAEGBQYhwIyChAAGIAEGEMYigUyChAuGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGBQYhwIyChAuGIAEGEMYigUyChAuGIAEGEMYigUyBRAuGIAEMgUQLhiABDIZEC4YgAQYFBiHAhiXBRjcBBjeBBjgBNgBAUjURVDwF1i-Q3AMeAGQAQSYAaoBoAHrEaoBBDAuMTW4AQPIAQD4AQGYAhegAuoNqAIPwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAggQABiABBiiBMICBRAAGO8FwgIHECMYJxjqAsICFhAuGIAEGEMYtAIYyAMYigUY6gLYAQHCAhwQLhiABBhDGLQCGMcBGMgDGIoFGOoCGK8B2AEBwgILEC4YgAQYsQMYgwHCAg4QABiABBixAxiDARiKBcICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMYgwEY1ALCAgQQIxgnwgIZEC4YgAQYQxiKBRiXBRjcBBjeBBjgBNgBAcICBxAAGIAEGArCAgcQLhiABBgKwgIFEAAYgASYAwjiAwUSATEgQPEFppJa0FoIOGWIBgGQBhK6BgYIARABGAmSBwUxMi4xMaAHvp4C&sclient=gws-wiz-serp'
    },
    {
      id: 4,
      imgCards: imgCards,
      cardDescGeo: 'Чиланзар',
      cardDesc: 'Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году ',
      cardWrapBtn: 'Посмотреть', url: 'https://www.google.com/search?q=%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80&sca_esv=e204b5e803cfdc8c&sxsrf=AHTn8zpYCmpmU5l7LVsKOMteS3_eGmKIFg%3A1739703435619&ei=i8SxZ5nCJYqPwPAP0KmqUA&ved=0ahUKEwjZs62qhMiLAxWKBxAIHdCUCgoQ4dUDCBA&uact=5&oq=%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80&gs_lp=Egxnd3Mtd2l6LXNlcnAiENCn0LjQu9Cw0L3Qt9Cw0YAyChAjGIAEGCcYigUyChAuGIAEGBQYhwIyChAAGIAEGEMYigUyChAuGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGBQYhwIyChAuGIAEGEMYigUyChAuGIAEGEMYigUyBRAuGIAEMgUQLhiABDIZEC4YgAQYFBiHAhiXBRjcBBjeBBjgBNgBAUjURVDwF1i-Q3AMeAGQAQSYAaoBoAHrEaoBBDAuMTW4AQPIAQD4AQGYAhegAuoNqAIPwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAggQABiABBiiBMICBRAAGO8FwgIHECMYJxjqAsICFhAuGIAEGEMYtAIYyAMYigUY6gLYAQHCAhwQLhiABBhDGLQCGMcBGMgDGIoFGOoCGK8B2AEBwgILEC4YgAQYsQMYgwHCAg4QABiABBixAxiDARiKBcICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMYgwEY1ALCAgQQIxgnwgIZEC4YgAQYQxiKBRiXBRjcBBjeBBjgBNgBAcICBxAAGIAEGArCAgcQLhiABBgKwgIFEAAYgASYAwjiAwUSATEgQPEFppJa0FoIOGWIBgGQBhK6BgYIARABGAmSBwUxMi4xMaAHvp4C&sclient=gws-wiz-serp'
    },
    {
      id: 5,
      imgCards: imgCards,
      cardDescGeo: 'Чиланзар',
      cardDesc: 'Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году ',
      cardWrapBtn: 'Посмотреть', url: 'https://www.google.com/search?q=%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80&sca_esv=e204b5e803cfdc8c&sxsrf=AHTn8zpYCmpmU5l7LVsKOMteS3_eGmKIFg%3A1739703435619&ei=i8SxZ5nCJYqPwPAP0KmqUA&ved=0ahUKEwjZs62qhMiLAxWKBxAIHdCUCgoQ4dUDCBA&uact=5&oq=%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80&gs_lp=Egxnd3Mtd2l6LXNlcnAiENCn0LjQu9Cw0L3Qt9Cw0YAyChAjGIAEGCcYigUyChAuGIAEGBQYhwIyChAAGIAEGEMYigUyChAuGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGBQYhwIyChAuGIAEGEMYigUyChAuGIAEGEMYigUyBRAuGIAEMgUQLhiABDIZEC4YgAQYFBiHAhiXBRjcBBjeBBjgBNgBAUjURVDwF1i-Q3AMeAGQAQSYAaoBoAHrEaoBBDAuMTW4AQPIAQD4AQGYAhegAuoNqAIPwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAggQABiABBiiBMICBRAAGO8FwgIHECMYJxjqAsICFhAuGIAEGEMYtAIYyAMYigUY6gLYAQHCAhwQLhiABBhDGLQCGMcBGMgDGIoFGOoCGK8B2AEBwgILEC4YgAQYsQMYgwHCAg4QABiABBixAxiDARiKBcICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMYgwEY1ALCAgQQIxgnwgIZEC4YgAQYQxiKBRiXBRjcBBjeBBjgBNgBAcICBxAAGIAEGArCAgcQLhiABBgKwgIFEAAYgASYAwjiAwUSATEgQPEFppJa0FoIOGWIBgGQBhK6BgYIARABGAmSBwUxMi4xMaAHvp4C&sclient=gws-wiz-serp'
    },
    {
      id: 6,
      imgCards: imgCards,
      cardDescGeo: 'Чиланзар',
      cardDesc: 'Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году ',
      cardWrapBtn: 'Посмотреть', url: 'https://www.google.com/search?q=%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80&sca_esv=e204b5e803cfdc8c&sxsrf=AHTn8zpYCmpmU5l7LVsKOMteS3_eGmKIFg%3A1739703435619&ei=i8SxZ5nCJYqPwPAP0KmqUA&ved=0ahUKEwjZs62qhMiLAxWKBxAIHdCUCgoQ4dUDCBA&uact=5&oq=%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80&gs_lp=Egxnd3Mtd2l6LXNlcnAiENCn0LjQu9Cw0L3Qt9Cw0YAyChAjGIAEGCcYigUyChAuGIAEGBQYhwIyChAAGIAEGEMYigUyChAuGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGBQYhwIyChAuGIAEGEMYigUyChAuGIAEGEMYigUyBRAuGIAEMgUQLhiABDIZEC4YgAQYFBiHAhiXBRjcBBjeBBjgBNgBAUjURVDwF1i-Q3AMeAGQAQSYAaoBoAHrEaoBBDAuMTW4AQPIAQD4AQGYAhegAuoNqAIPwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAggQABiABBiiBMICBRAAGO8FwgIHECMYJxjqAsICFhAuGIAEGEMYtAIYyAMYigUY6gLYAQHCAhwQLhiABBhDGLQCGMcBGMgDGIoFGOoCGK8B2AEBwgILEC4YgAQYsQMYgwHCAg4QABiABBixAxiDARiKBcICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMYgwEY1ALCAgQQIxgnwgIZEC4YgAQYQxiKBRiXBRjcBBjeBBjgBNgBAcICBxAAGIAEGArCAgcQLhiABBgKwgIFEAAYgASYAwjiAwUSATEgQPEFppJa0FoIOGWIBgGQBhK6BgYIARABGAmSBwUxMi4xMaAHvp4C&sclient=gws-wiz-serp'
    },
    {
      id: 7,
      imgCards: imgCards,
      cardDescGeo: 'Чиланзар',
      cardDesc: 'Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году ',
      cardWrapBtn: 'Посмотреть', url: 'https://www.google.com/search?q=%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80&sca_esv=e204b5e803cfdc8c&sxsrf=AHTn8zpYCmpmU5l7LVsKOMteS3_eGmKIFg%3A1739703435619&ei=i8SxZ5nCJYqPwPAP0KmqUA&ved=0ahUKEwjZs62qhMiLAxWKBxAIHdCUCgoQ4dUDCBA&uact=5&oq=%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80&gs_lp=Egxnd3Mtd2l6LXNlcnAiENCn0LjQu9Cw0L3Qt9Cw0YAyChAjGIAEGCcYigUyChAuGIAEGBQYhwIyChAAGIAEGEMYigUyChAuGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGBQYhwIyChAuGIAEGEMYigUyChAuGIAEGEMYigUyBRAuGIAEMgUQLhiABDIZEC4YgAQYFBiHAhiXBRjcBBjeBBjgBNgBAUjURVDwF1i-Q3AMeAGQAQSYAaoBoAHrEaoBBDAuMTW4AQPIAQD4AQGYAhegAuoNqAIPwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAggQABiABBiiBMICBRAAGO8FwgIHECMYJxjqAsICFhAuGIAEGEMYtAIYyAMYigUY6gLYAQHCAhwQLhiABBhDGLQCGMcBGMgDGIoFGOoCGK8B2AEBwgILEC4YgAQYsQMYgwHCAg4QABiABBixAxiDARiKBcICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMYgwEY1ALCAgQQIxgnwgIZEC4YgAQYQxiKBRiXBRjcBBjeBBjgBNgBAcICBxAAGIAEGArCAgcQLhiABBgKwgIFEAAYgASYAwjiAwUSATEgQPEFppJa0FoIOGWIBgGQBhK6BgYIARABGAmSBwUxMi4xMaAHvp4C&sclient=gws-wiz-serp'
    },
    {
      id: 8,
      imgCards: imgCards,
      cardDescGeo: 'Чиланзар',
      cardDesc: 'Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году ',
      cardWrapBtn: 'Посмотреть', url: 'https://www.google.com/search?q=%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80&sca_esv=e204b5e803cfdc8c&sxsrf=AHTn8zpYCmpmU5l7LVsKOMteS3_eGmKIFg%3A1739703435619&ei=i8SxZ5nCJYqPwPAP0KmqUA&ved=0ahUKEwjZs62qhMiLAxWKBxAIHdCUCgoQ4dUDCBA&uact=5&oq=%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80&gs_lp=Egxnd3Mtd2l6LXNlcnAiENCn0LjQu9Cw0L3Qt9Cw0YAyChAjGIAEGCcYigUyChAuGIAEGBQYhwIyChAAGIAEGEMYigUyChAuGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGBQYhwIyChAuGIAEGEMYigUyChAuGIAEGEMYigUyBRAuGIAEMgUQLhiABDIZEC4YgAQYFBiHAhiXBRjcBBjeBBjgBNgBAUjURVDwF1i-Q3AMeAGQAQSYAaoBoAHrEaoBBDAuMTW4AQPIAQD4AQGYAhegAuoNqAIPwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAggQABiABBiiBMICBRAAGO8FwgIHECMYJxjqAsICFhAuGIAEGEMYtAIYyAMYigUY6gLYAQHCAhwQLhiABBhDGLQCGMcBGMgDGIoFGOoCGK8B2AEBwgILEC4YgAQYsQMYgwHCAg4QABiABBixAxiDARiKBcICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMYgwEY1ALCAgQQIxgnwgIZEC4YgAQYQxiKBRiXBRjcBBjeBBjgBNgBAcICBxAAGIAEGArCAgcQLhiABBgKwgIFEAAYgASYAwjiAwUSATEgQPEFppJa0FoIOGWIBgGQBhK6BgYIARABGAmSBwUxMi4xMaAHvp4C&sclient=gws-wiz-serp'
    },
    {
      id: 9,
      imgCards: imgCards,
      cardDescGeo: 'Чиланзар',
      cardDesc: 'Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году ',
      cardWrapBtn: 'Посмотреть', url: 'https://www.google.com/search?q=%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80&sca_esv=e204b5e803cfdc8c&sxsrf=AHTn8zpYCmpmU5l7LVsKOMteS3_eGmKIFg%3A1739703435619&ei=i8SxZ5nCJYqPwPAP0KmqUA&ved=0ahUKEwjZs62qhMiLAxWKBxAIHdCUCgoQ4dUDCBA&uact=5&oq=%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80&gs_lp=Egxnd3Mtd2l6LXNlcnAiENCn0LjQu9Cw0L3Qt9Cw0YAyChAjGIAEGCcYigUyChAuGIAEGBQYhwIyChAAGIAEGEMYigUyChAuGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGBQYhwIyChAuGIAEGEMYigUyChAuGIAEGEMYigUyBRAuGIAEMgUQLhiABDIZEC4YgAQYFBiHAhiXBRjcBBjeBBjgBNgBAUjURVDwF1i-Q3AMeAGQAQSYAaoBoAHrEaoBBDAuMTW4AQPIAQD4AQGYAhegAuoNqAIPwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAggQABiABBiiBMICBRAAGO8FwgIHECMYJxjqAsICFhAuGIAEGEMYtAIYyAMYigUY6gLYAQHCAhwQLhiABBhDGLQCGMcBGMgDGIoFGOoCGK8B2AEBwgILEC4YgAQYsQMYgwHCAg4QABiABBixAxiDARiKBcICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMYgwEY1ALCAgQQIxgnwgIZEC4YgAQYQxiKBRiXBRjcBBjeBBjgBNgBAcICBxAAGIAEGArCAgcQLhiABBgKwgIFEAAYgASYAwjiAwUSATEgQPEFppJa0FoIOGWIBgGQBhK6BgYIARABGAmSBwUxMi4xMaAHvp4C&sclient=gws-wiz-serp'
    },

  ])
  const titleUp = 'Мои работы'

  const [footer, setFooter] = useState({
    titleUp: 'Связаться со мной',
    links: [
      { name: 'Facebook', img: Facebook, url: 'https://facebook.com' },
      { name: 'Instagram', img: Instagram, url: 'https://instagram.com' },
      { name: 'Telegram', img: Telegram, url: 'https://telegram.org' },
      { name: 'Email', img: Email, url: 'mailto:example@example.com' },
      { name: 'WhatsApp', img: whatusup, url: 'https://wa.me/123456789' },
    ],
  })



  return (
    <>
      <Header
        navLinks={navLinks} logo={logo}
      />
      <Banner
        BannerWrap={BannerWrap}
      />
      <About
        about={about}
      />
      <Cards titleUp={titleUp} cards={cards} />
      <Footer footer={footer} />

    </>
  );
};

export default App;
