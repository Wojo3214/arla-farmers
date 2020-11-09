"use strict"

const _newsRef = _db.collection("news");
let news = [];

_newsRef.onSnapshot(function (snapshotData) {
    let articles = [];
    snapshotData.forEach(function (doc) {
      let article = doc.data();
      console.log(article);
      article.id = doc.id;
      news.push(article);
    });
    appendNews(news);
  });

  let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if(viewportWidth > 700){
    document.querySelector(".current-category").style.display = "none";
}   

window.addEventListener('resize', function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	if (viewportWidth < 700) {
        document.querySelector(".current-category").setAttribute("style", "display: flex; justify-content: space-between");
    } else {
        document.querySelector(".current-category").style.display = "none";
    }
});

  function appendNews(articles){
      let htmlTemplate = "";

      for (let article of articles) {
          console.log(article.title);
          console.log(article.img);
          
          htmlTemplate +=`
            <div class="news-article">
            <a href="#select-article" class="link-to-article" onclick="appendArticleDetails('${article.id}')"><img src="${article.img}" class="news-big-pic" alt="article image"></a>
                <div class="article-main-info">
                    <h3 class="news-title"><a href="#select-article" class="link-to-article" onclick="appendArticleDetails('${article.id}')">${article.title}</a></h3>
                    <p class="desc-short">${article.desc}</p>
                    <p class="author-and-date">Author: ${article.author}</p>
                    <p class="author-and-date">Publish date: ${article.publicDate}</p>
                </div>
            </div>
          `
      }
    document.querySelector(".news-main-top").innerHTML = htmlTemplate;
  }

  function appendArticleDetails(id){
      console.log(id);
      let specificArticle = "";
      for (const article of news) {
          if(article.id == id){
              specificArticle = article;
          }
      }
      let htmlTemplate = '';
      htmlTemplate +=`
      <div class="specific-article">
        <a href="news.html" class="go-back">Go back</a>
        <div class="specific-article-img">
        <h3 class="specific-title">${specificArticle.title}</h3>
            <img src="${specificArticle.img}" class="specific-big-pic" alt="article image">
        </div>
        <p class="author-and-date">Author: ${specificArticle.author}</p>
        <p class="author-and-date">Publish date: ${specificArticle.publicDate}</p>
          <div class="article-main-info">
              <p class="specific-text article-text">${specificArticle.text}</p>
              
          </div>
      </div>
    `
    document.querySelector(".filteredNews").style.display = "none";  
    document.querySelector(".news-main-top").style.display = "none";  
    document.querySelector(".article-details").innerHTML = htmlTemplate;
      
  }

  function openFood(value){
    _newsRef.onSnapshot(function(snapshotData){
        let articles = [];
        snapshotData.forEach(function (doc){
            let article = doc.data();
            article.id = doc.id;
            articles.push(article);
        });
        value = "Food";
        let filteredNews = articles.filter(article => article.category.includes("Food"));
        console.log(filteredNews);
        appendFilteredNews(filteredNews);

        if(viewportWidth < 700){
            document.querySelector(".current-category").style.display = "flex";
            appendFilteredNewsName(value);
            slideUp();
        }

        
        

        document.querySelector(".news-main-top").style.display = "none";
    });
}

function openAnimals(value){
    _newsRef.onSnapshot(function(snapshotData){
        let articles = [];
        snapshotData.forEach(function (doc){
            let article = doc.data();
            article.id = doc.id;
            articles.push(article);
        });
        value = "Animals";
        let filteredNews = articles.filter(article => article.category.includes("Animals"));
        console.log(filteredNews);
        appendFilteredNews(filteredNews);
        
        if(viewportWidth < 700){
            document.querySelector(".current-category").style.display = "flex";
            appendFilteredNewsName(value);
            slideUp();
        }

        document.querySelector(".news-main-top").style.display = "none";
    });
}

function openTechnology(value){
    _newsRef.onSnapshot(function(snapshotData){
        let articles = [];
        snapshotData.forEach(function (doc){
            let article = doc.data();
            article.id = doc.id;
            articles.push(article);
        });
        value = "technology";
        let filteredNews = articles.filter(article => article.category.includes("technology"));
        console.log(filteredNews);
        appendFilteredNews(filteredNews);
        
        if(viewportWidth < 700){
            document.querySelector(".current-category").style.display = "flex";
            appendFilteredNewsName(value);
            slideUp();
        }

        document.querySelector(".news-main-top").style.display = "none";
    });
}

function openEvents(value){
    _newsRef.onSnapshot(function(snapshotData){
        let articles = [];
        snapshotData.forEach(function (doc){
            let article = doc.data();
            article.id = doc.id;
            articles.push(article);
        });
        value = "events";
        let filteredNews = articles.filter(article => article.category.includes("events"));
        console.log(filteredNews);
        appendFilteredNews(filteredNews);
        
        if(viewportWidth < 700){
            document.querySelector(".current-category").style.display = "flex";
            appendFilteredNewsName(value);
            slideUp();
        }

        document.querySelector(".news-main-top").style.display = "none";
    });
}

function openEnvironment(value){
    _newsRef.onSnapshot(function(snapshotData){
        let articles = [];
        snapshotData.forEach(function (doc){
            let article = doc.data();
            article.id = doc.id;
            articles.push(article);
        });
        value = "Environment";
        let filteredNews = articles.filter(article => article.category.includes("Environment"));
        console.log(filteredNews);
        appendFilteredNews(filteredNews);
        
        if(viewportWidth < 700){
            document.querySelector(".current-category").style.display = "flex";
            appendFilteredNewsName(value);
            slideUp();
        }

        document.querySelector(".news-main-top").style.display = "none";
    });
}

function appendFilteredNews(filteredNews){
    let htmlTemplate = "";

    for (let article of filteredNews) {
        console.log(article.title);
        console.log(article.img);
        
        htmlTemplate +=`
        <div class="news-article">
        <a href="#select-article" class="link-to-article" onclick="appendArticleDetails('${article.id}')"><img src="${article.img}" class="news-big-pic" alt="article image"></a>
            <div class="article-main-info">
                <h3 class="news-title"><a href="#select-article" class="link-to-article" onclick="appendArticleDetails('${article.id}')">${article.title}</a></h3>
                <p class="desc-short">${article.desc}</p>
                <p class="author-and-date">Author: ${article.author}</p>
                <p class="author-and-date">Publish date: ${article.publicDate}</p>
            </div>
        </div>
        `
    }

  document.querySelector(".filteredNews").innerHTML = htmlTemplate;
}

function appendFilteredNewsName(name){
    console.log("works");
    let htmlTemplateCurrentNews = `
        <span class="category-btn" id="${name}-news"><img src="../img/${name}-icon.png" alt="all news">${name}</span>
        <img src="../img/icon-up-down.png" class="icon-up-down" onclick="slideDown()">
    `

    document.querySelector(".current-category").innerHTML = htmlTemplateCurrentNews;
    console.log("changed");
}

function slideDown(){
    let currentCategory = document.querySelector(".categories");
    currentCategory.style.transform = "translateY(0px)";
    currentCategory.style.margin = "0px";
    console.log("clicked");
}

function slideUp(){
    let currentCategory = document.querySelector(".categories");
    currentCategory.style.transform = "translateY(-2000px)";
}

  /*
  function setActiveCategory(categoryId){
      let categories = document.querySelectorAll(".category-btn");
      for (const category of categories) {
          if(`#${categoryId}` === category.getAttribute("class")){
              category.classList.add("active");
          } else{
              category.classList.remove("active");
          }
      }
  }*/
