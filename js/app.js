
let data = { 
  fullName: "Jane day",
  position: "UI/UX designer",
  socials: [
    {
      id: "fb",
      service: "Facebook",
      url: "https://www.facebook.com",
      icon: "fab fa-facebook",
    },
    {
      id: "db",
      service: "Dribbble",
      url: "https://www.dribbble.com",
      icon: "fas fa-basketball-ball",
    },
    {
      id: "ig",
      service: "Instagram",
      url: "https://www.instagram.com",
      icon: "fab fa-instagram-square",
    },
    {
      id: "gl",
      service: "Google",
      url: "https://www.google.com",
      icon: "fab fa-google",
    },
  ],
};
let cardApp = (data) => {
 let body = document.getElementsByTagName("body")[0];
 let root = document.createElement("div");
 let style = document.createElement("style");
 let card = document.createElement("section");
 let html = `<div class="card__wrapper">
          <img
            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            class="card__user-img"
            alt=""
          />
          <div class="card__info">
            <span class="card__name">${data.fullName}</span>
            <span class="card__title">${data.position}</span>
          </div>
          <div class="card__socials">
            
          </div>
        </div>`;
 let cssStyles = `.card{
 width: 100%;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 backdrop-filter: blur(40px);

}

.card__socials{
 margin-bottom: 1rem;

}

.card__wrapper{
 
 padding: 20px;
 max-width: 300px;
 width: 100%;
 background: white;
 box-shadow: 0px 0px 62px 0px rgba(0,0,0,.22);
 border-radius: 10px;
 display: flex;
 flex-direction: column;
 align-items: center;
}
.card__user-img{
 border: 2px solid #2c5eff;
 height: 70px;
 width: 70px;
 margin: 2rem 0 1.5rem;
 border-radius: 50%;
 object-fit: cover;
 object-position: center;
}

.card__info{
 margin-bottom: .5rem;
}

.card__name{
 text-align: center;
 display: block;
 font-weight: 600;
 font-size: 1.2rem;
 margin-bottom: .5rem;
}

.card__title{
 display: block;
 font-size: .7rem;
 margin-bottom: 2rem;
 text-align: center;
}

.card__icon{
 width: 200px;
 padding: 10px;
 border-radius: 3px;
 border: 1px solid #000;
 margin-bottom: .4rem;
 overflow: hidden;
 display: flex;
 /*justify-content: center;*/
 align-items: center;
 transition: background .3s ease-in-out, color .3s ease-in-out;
 cursor: pointer;
}

.card__icon-box{
 width: 25px;
 display: inline-block;
 text-align: center;
 display: flex;
 justify-content: center;
 align-items: center;
}

.card__icon-title{
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
}

.card__icon--fb{
 color: #2c5eff;
 border: 1px solid #2c5eff;
}

.card__icon--fb:hover{
 background: #2c5eff;
 color: white;
}

.card__icon--db{
 color: rgb(233, 97, 120);
 border: 1px solid rgb(233, 97, 120);
}

.card__icon--db:hover{
 background: rgb(233, 97,120);
 color: white;
}

.card__icon--ig{
 color: rgb(214, 22, 214);
 border: 1px solid rgb(214, 22, 214);
}

.card__icon--ig:hover{
 background: rgb(214, 22, 214);
 color: white;
}

.card__icon--gl{
 color: orange;
 border: 1px solid orange;
}

.card__icon--gl:hover{
 background: orange;
 color: white;
}`;

 body.prepend(root);
 root.classList.add("root");
 root.prepend(card);
 root.style.cssText = `
background: url('https://i.pinimg.com/736x/02/ba/86/02ba867e545f953631148c89629412b1.jpg');
background-size: cover;
background-position: center;`;
 root.prepend(style);
 card.classList.add("card");
 style.innerHTML = cssStyles;
 card.innerHTML = html;
 let cardSocials = card.getElementsByClassName("card__socials")[0];

 data.socials.forEach((item, index) => {
   let tempNode = document.createElement("div");
   tempNode.classList.add(`card__icon`, `card__icon--${item.id}`);
   tempNode.innerHTML = `
              <span class="card__icon-box">
                <i class="${item.icon}"></i>
              </span>
              <span class="card__icon-title">${item.service}</span>
            `;
   cardSocials.append(tempNode);
 });
};

cardApp(data);
