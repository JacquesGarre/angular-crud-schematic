export interface <%= capitalizedEntity %> {
<% for(let prop in properties) { %>    <%= prop %>: <%= properties[prop] %>,
<% } %>}   