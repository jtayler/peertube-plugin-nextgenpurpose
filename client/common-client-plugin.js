function register ({ registerHook, peertubeHelpers }) {
  var headers = document.getElementsByClassName('header');
  var header = headers[0];

  var menu = createMenu();
  let div = document.createElement('div');
  let logodiv = document.createElement('div');
  let mainbanner = document.createElement('div');
  let textdiv = document.createElement('div');

  textdiv.classList.add("textdiv");
  textdiv.textContent = "Business nutrients";

  mainbanner.classList.add("mainbanner");
  logodiv.classList.add("nextgenlogo");
  mainbanner.appendChild(logodiv);
  mainbanner.appendChild(textdiv);
  div.appendChild(mainbanner);

  div.classList.add("mainmenu");

  div.appendChild(menu);
  var story = createMenuItem('Story');
  story.setAttribute("href","https://www.nextgenpurpose.com/our-story");
  menu.appendChild(story);

  var podcast = createMenuItem('Podcast');
  podcast.setAttribute("href","https://www.nextgenpurpose.com/essential-ingredients");
  menu.appendChild(podcast);

  let community = createMenuItem('Community');
  community.setAttribute("href","http://oeinc.com:3001/");
  menu.appendChild(community);

  var contact = createMenuItem('Contact');
  contact.setAttribute("href","https://www.nextgenpurpose.com/contact-us");
  menu.appendChild(contact);

  header.parentNode.insertBefore(div, header);

}

function createMenu() {
    let ul = document.createElement('ol');
    return ul;
}

function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    let a = document.createElement('a');
    a.appendChild(li);
    return a;
}

export {
  register
}
