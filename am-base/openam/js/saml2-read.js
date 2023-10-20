/*
 * Copyright 2019 ForgeRock AS. All Rights Reserved
 *
 * Use of this code requires a commercial software license with ForgeRock AS.
 * or with one of its affiliates. All use shall be exclusively subject
 * to such license between the licensee and ForgeRock AS.
 */
function readFromSessionStorage(field) {
    try {
        return sessionStorage.getItem(field);
    } catch (e) {
        // Failed to retrieve item from session storage, the server side will have to use the in-memory caches instead.
    }
}

function clearItemsFromSessionStorage() {
    sessionStorage.removeItem("saml2Request");
    sessionStorage.removeItem("secondVisitUrl");
}

window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("saml2Request").value = readFromSessionStorage("saml2Request");
    var secondVisitUrl = readFromSessionStorage("secondVisitUrl");
    if (secondVisitUrl) {
        document.forms[0].action = secondVisitUrl;
    }
    clearItemsFromSessionStorage();
    document.forms[0].submit();
});
