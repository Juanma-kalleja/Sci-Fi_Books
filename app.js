const menu = document.getElementById('mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
// async function doWork() {
//     const ids = {
//         // social : ['XcAgAQAAIAAJ', 'IVYDQW9ka_MC', '9AGGqgPcD00C', 'kotPYEqx7kMC', 'iDdCPgAACAAJ', 'AU9YtwAACAAJ', '357DuwEACAAJ', 'c9RGBAAAQBAJ', 'uYwyjgEACAAJ', 'YGQkDwAAQBAJ', 'pQRCHAAACAAJ'],
//         social : ['IVYDQW9ka_MC', '9AGGqgPcD00C', 'kotPYEqx7kMC', 'iDdCPgAACAAJ', 'AU9YtwAACAAJ', '357DuwEACAAJ', 'c9RGBAAAQBAJ', 'uYwyjgEACAAJ', 'YGQkDwAAQBAJ', 'pQRCHAAACAAJ'],
//         postApocaliptic : ['B91TKeLQ54EC', 'B91TKeLQ54EC', 'B91TKeLQ54EC'],
//         military : ['B91TKeLQ54EC', 'B91TKeLQ54EC', 'B91TKeLQ54EC'],
//         space : ['B91TKeLQ54EC', 'B91TKeLQ54EC', 'B91TKeLQ54EC'],
//         retrofuturism : ['B91TKeLQ54EC', 'B91TKeLQ54EC', 'B91TKeLQ54EC'],
//         timeTravel : ['B91TKeLQ54EC', 'B91TKeLQ54EC', 'B91TKeLQ54EC']
//     };
//     let books = [];
//     let selectedBookId;
//     //const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=`;
//     const apiKey = 'AIzaSyD8wVn-OEh85cX4Xt3X9zcD8Nh4cu-QfIk';
//     const placeHldr = '<img src="https://via.placeholder.com/150">';

//     //Get book info
//     async function getEndpoint(url) {
//         try {
//           const response = await fetch(url);
//           const apiData = await response.json();
      
//           return apiData;
//         } catch (err) {
//           console.log('fetch failed', err);
//         }
//       };

     

//     //Filter response details
//     function getBookObj(res) {
//             return {
//                 id : res.id,
//                 title : res.volumeInfo.title,
//                 author : res.volumeInfo.authors[0],
//                 categories : res.volumeInfo.categories,
//                 publisher : res.volumeInfo.publisher,
//                 description : res.volumeInfo.description,
//                 bookIdentifier : (res.volumeInfo.industryIdentifiers[1]) ? res.volumeInfo.industryIdentifiers[1] : "Error",
//                 bookImg : (res.volumeInfo.imageLinks) ? res.volumeInfo.imageLinks.thumbnail : placeHldr,
//                 bookSample : res.accessInfo.webReaderLink
//             }
//     };


//     const bookListSocial = document.getElementById("list-output_social");
//     const cardLinks = document.getElementsByClassName("card_link");
    
//     window.onload = function() {
//     //Add event listeners to cards
//     console.log(bookListSocial);
//     bookListSocial.addEventListener("click", openNewTab, false);
//     }
    
//     function openNewTab(event) {
//         selectedBookId = event.target.parentElement.parentElement.id;
//         console.log(selectedBookId);
        
//         localStorage.setItem("selectedBookId", JSON.stringify(selectedBookId));
//         window.open("book-detail.html", '_blank');
//      }


//     //Create card
//     function createCard(bookObj, bookList) {
//         const card = document.createElement('div');
//         card.className = "card";
//         card.id = bookObj.id;

//         const cardImageContainer = document.createElement('div');
//         cardImageContainer.className = "card_image-container";

//         const image = document.createElement('img');
//         image.src = bookObj.bookImg;
//         image.id = bookObj.id;
//         // cardImageContainer.innerHTML = bookObj.description;

//         cardImageContainer.append(image);
        
//         const cardContent = document.createElement('div');
//         cardContent.className = "card_content";
        
//         const card_title = document.createElement('p');
//         card_title.innerText = bookObj.title;
//         card_title.className = "card_title"

//         const card_author = document.createElement('p');
//         card_author.innerText = bookObj.author;
//         cardContent.append(card_title);
//         cardContent.append(card_author);

//         card.append(cardImageContainer);
//         card.append(cardContent);
        
//         //Add event listener
//         // card.addEventListener("click", (e) => {
//         //     console.log(e.target);
//         //     selectedBookId = e.target.firstChild.id;
//         //     console.log(selectedBookId);
//         // })

//         const bookLink = document.createElement('a');
//         //bookLink.href = 'book-detail.html';
//         bookLink.className = 'card_link';
//         bookLink.append(card);

//         bookList.append(bookLink);
//     }

//     async function addBooks(ids) {
//         console.log("adding books");
//         books = (JSON.parse(localStorage.getItem("books")) || []);
//         let storedBooksIds = books.map((item) => item.id);
//         console.log(storedBooksIds);
//         for (let id of ids) {
//             if (!storedBooksIds.includes(id)) {
//                 console.log("requesting book");
//                 let urlId = `https://www.googleapis.com/books/v1/volumes/${id}?key=`;
//                 let res = await getEndpoint(urlId + apiKey);
//                 console.log(res);
//                 let book = getBookObj(res);
//                 books.push(book);
//             };
//          } 
//         localStorage.setItem("books", JSON.stringify(books));
//         console.log(books);
//     };
    
//     function createCardsByCategory(ids, bookList) {
//         console.log(JSON.parse(localStorage.getItem("books")));
//         let categoryBooks = JSON.parse(localStorage.getItem("books")).filter((item) => !(ids.indexOf(item.id) < 0));
//         console.log(categoryBooks);
//         categoryBooks.forEach(book => {
//             createCard(book, bookList);
//         });
//     }




//     await addBooks(ids.social);
//     await addBooks(ids.space);
//     createCardsByCategory(ids.social, bookListSocial);
    
// }

// doWork();
