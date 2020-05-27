
var head = document.head || document.getElementsByTagName('head')[0],
    body = document.body || document.getElementsByTagName('body')[0],
    style = document.createElement('style');

var css = `
    #box {
      background-color: khaki;
      border: 15px solid darkkhaki;
      padding: 50px;
      margin: 20px;
    }
`;

var bodyContent = `
    <div id="box">
        <div>Do you need full privacy?</div>
        <div>Did you know your internet provider is watching you right now?</div>
        <div>You think you are fine with broswer private tabs, incognito mode and some vpn?</div>
        <div><b>We offer a better solution!</b></div>
        <div>99% privacy guaranteed!</div>
        <h3>Just Use Your <a href="https://en.wikipedia.org/wiki/Imagination">Imagination</a></h3>
        <div>Join us</div>
        <div>Join the <b>Imaginative</b> side</div>
        <div>a place where only god, you, and a sick mind reader<br>can know about your ugly, fucked up desires</div>
    </div>
`;

body.innerHTML = bodyContent;
head.appendChild(style);

style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
