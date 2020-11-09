const name = 'world';
console.log(`Hello ${name}`);

const outputList = document.getElementById("list-output");

let item, title, author, publisher, bookLink, bookImg;
const bookUrl = "https://www.googleapis.com/books/v1/volumes?q=";
const placeHldr = '<img src="https://via.placeholder.com/150">';
let searchData;

// $("#search").click(function() {
//     outputList.innerHTML = "";
//     searchData = $("search-box").val();
// })

//const fetch = require('node-fetch');
//const messageElement = document.getElementById('hearthStone_cardSelector_message');

// const headers = new Headers();
// headers.append('x-rapidapi-host', 'omgvamp-hearthstone-v1.p.rapidapi.com');
// headers.append('x-rapidapi-key', 'f9a203395amshe0d59b8f897d225p190182jsn0d2c4887b30a');

// const headers = new Headers();
// headers.append('x-rapidapi-host',  "GoodreadsraygorodskijV1.p.rapidapi.com");
// headers.append('x-rapidapi-key', 'e595630d23msh7340762f77a966ap1a5c30jsnb397fd102097');
// headers.append('useQueryString', true);

async function getEndpoint(url) {
  try {
    // messageElement.innerHTML = '';
    const response = await fetch(url);
    const apiData = await response.json();

    return apiData;
  } catch (err) {
    console.log('fetch failed', err);
  }
};

function displayResults(res) {
    let books = res.items.map(element => {
        return {
            title : element.volumeInfo.title,
            author : element.volumeInfo.authors[1],
            publisher : element.volumeInfo.publisher,
            //bookLink : element.volumeInfo.industryIdentifier[1].identifier,
            bookImg : (element.volumeInfo.imageLinks) ? element.volumeInfo.imageLinks.thumbnail : placeHldr,
        }
    });

    return books;
}


async function doWork() {
    const id = 'B91TKeLQ54EC';
    const url_1 = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:huxley&maxResults=40&key=';
    const url_3 = `https://www.googleapis.com/books/v1/volumes/${id}?key=`;
    const apiKey = 'AIzaSyD8wVn-OEh85cX4Xt3X9zcD8Nh4cu-QfIk';
    let res = await getEndpoint(url_3 + apiKey);
    console.log(res);
    // console.log(displayResults(res));

    
    // const url_2 =  "https://rapidapi.p.rapidapi.com/getAuthorBooks";
    
    // const goodReadsKey = 'pjKKxsp7oUe6o9k8GLOBQ';

    // let res1 = await getEndpoint(url_2);
    // console.log(res1);
    // res1.totalItems.forEach(element => {
    //     console.log(element);
    // });
}

doWork();

// async function callingFn() {
//     try {
//         const response = await fetch("https://v1.nocodeapi.com/juanma86/gr/zHksRndMXrTNGFTV/authorList?id=3487", {
//             method: "get",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         const json = await response.json();
//         console.log(json);
//         //console.log("Success:", JSON.stringify(json));
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// callingFn();