<!--
    - Form til at sende data
    - Chat vindue til fremvisning af beskeder
    - Script til at opdatere chat vinduet
-->

<html>
    <head>
        <title>Chatbot</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
<h1>Chatbot</h1>
        <!-- HTML kode..... -->
        <div id="chat-history"></div>
<form id="chat-form">
    <input type="text" id="user-input" name="message" placeholder="Skriv en besked">
    <input type="submit" value="Send" id="send-button">
</form>
        <script src="script.js"></script>
    </body>
</html>