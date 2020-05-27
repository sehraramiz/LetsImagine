
var head = document.head || document.getElementsByTagName('head')[0],
    body = document.body || document.getElementsByTagName('body')[0],
    style = document.createElement('style');

var css = `

    #box {
      background-color: #fff;
      font-family: arial, "Times New Roman";
      font-size: 20px;
      color: #555555;
      border: 5px solid pink;
      padding: 40px;
      margin: 30px;
      text-align: center;
      line-height: 1.8;
      letter-spacing: 1px;
      word-spacing: 0.5px;
 	}
    
    a {
      color: #FA8072;
      text-decoration: none;'
      animation: heartbeat 5s infinite;
      font-weight: bold;
    }
    
    a : visited {
      color: #FA8072;
  	}
    
    span {
      font-weight: bold;
      font-size: 22px;
    }
    
    h1 {
    	animation: heartbeat 4s infinite;
        color: #000;
        text-shadow: 2px 2px #B22222;
    }

    .title {
        border: 3px solid #ddd;
    }

    @keyframes heartbeat
    {
      0%
      {
        transform: scale( 1.5 );
      }
      20%
      {
        transform: scale( .9 );
      }
      40%
      {
        transform: scale( 1.5 );
      }
      60%
      {
        transform: scale( .9 );
      }
      80%
      {
        transform: scale( 1.5 );
      }
      100%
      {
        transform: scale( 1.5 );
      }
  }

`;

var bodyContent = `
    <div id="box">
       <h1>Attention!</h1>
       <div>Did you know your internet provider is watching you right now?</div>
       <div>You seriously need some <a href="https://en.wikipedia.org/wiki/Privacy#Internet">Privacy</a> !</div>
       <div>You think you are fine with your internet browser's private tab and some vpn?</div>
       <h3 class="title">We offer a better solution!</h3>
       <div><span>99%</span> privacy guaranteed !</div>
       <div>Why jerk off to some cheap porn star,<br>when you can have a good time with your favorite movie star.</div>
       <h3 class="title">Just Use Your <a href="https://en.wikipedia.org/wiki/Imagination">Imagination</a><br><span>instead of porn</span></h3>
       <div>Join the <span>Imaginative</span> side</div>
       <div>a place where only <span>god</span>, <span>you</span>, and a <span>mind reader</span><br>can know about your ugly, fucked up desires.</div>
    </div>

`;

body.innerHTML = bodyContent;
head.appendChild(style);

style.type = 'text/css';
style.appendChild(document.createTextNode(css));
