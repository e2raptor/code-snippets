function loadSnippet(snippet) {
    // Set up the snippet using https://www.jsdelivr.com/
    var url = 'https://cdn.jsdelivr.net/gh/e2raptor/code-snippets@master/' + snippet;
    // download and run the script
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}