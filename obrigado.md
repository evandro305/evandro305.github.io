<!DOCTYPE html>
<html lang="en">
<head>
<title>Evandro Ottoni Soncin</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
header {
  background-color: #0000CD	;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  color: white;
}
nav {
  float: left;
  width: 30%;
  height: 300px; 
  background: #ccc;
  padding: 20px;
}
nav ul {
  list-style-type: none;
  padding: 0;
}
article {
  float: left;
  padding: 20px;
  width: 70%;
  background-color: #f1f1f1;
  height: 300px; 
}
section:after {
  content: "";
  display: table;
  clear: both;
}
footer {
  background-color: #ADD8E6;
  padding: 10px;
  text-align: center;
  color: white;
}
@media (max-width: 600px) {
  nav, article {
    width: 100%;
    height: auto;
  }
}
</style>
</head>
<body>
<header>
  <h2>Site do evandro</h2>
</header>

<section>
  <nav>
    <ul>
      <li><a href="index.md.">Principal</a></li>
      <li><a href="quemsou.md">Quem sou</a></li>
      <li><a href="contato.md">Contato</a></li>
      <li><a href="administrativo.md">Administrativo</a></li>
    </ul>
  </nav>
  <article>
    <h1>Muito obrigado.</h1>
    <p>Logo entraremos em contato.</p>
  </article>
</section>
<footer>
  <p>Apenas um site pessoal</p>
</footer>
</body>
</html>
