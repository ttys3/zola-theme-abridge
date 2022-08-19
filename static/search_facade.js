var baseUrl = document.querySelector("meta[name='base']").getAttribute("content");
if (baseUrl.slice(-1) == "/") {
    baseUrl = baseUrl.slice(0, -1);
}
var sha256='a4b6ea92ca8737f338fc8c78fcb62621b983cced9a0507aa864205bd7aa807fd';
var sha384='M7JvR78mOoM0fSQOc5ypscN72SzRvbViAugr4voH6PYrTyS/w6H0lLBgOKJaKfQl';
function loadSearchNow() {
    var loadSearch = document.createElement('script');
    loadSearch.src = baseUrl + '/search_bundle.min.js?h=' + sha256;
    loadSearch.setAttribute('integrity', 'sha384-' + sha384);
    document.head.appendChild(loadSearch);
    document.getElementById('searchinput').onclick = '';
}
window.onload = function() {
    document.getElementById('searchinput').onclick = function() { return loadSearchNow() }
};
