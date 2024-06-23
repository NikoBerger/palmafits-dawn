// Open outbound links in new tab
var links = document.links; 
for(let i = 0, linksLength = links.length; i &lt; linksLength; i++){
    if (links<i>.hostname !== window.location.hostname) { 
    links<i>.target = '_blank';
    links<i>.rel = 'noreferrer noopener';
    } 
}