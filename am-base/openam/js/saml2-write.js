/*
 * Copyright 2019 ForgeRock AS. All Rights Reserved
 *
 * Use of this code requires a commercial software license with ForgeRock AS.
 * or with one of its affiliates. All use shall be exclusively subject
 * to such license between the licensee and ForgeRock AS.
 */
function addToSessionStorage(field) {
    var element = document.getElementById(field);
    if (element && element.value) {
        try {
            sessionStorage.setItem(field, element.value);
        } catch (e) {
            // Failed to save item to session storage, the server side will have to use the in-memory caches instead.
        }
    }
}

window.addEventListener("DOMContentLoaded", function() {
    addToSessionStorage("saml2Request");
    addToSessionStorage("secondVisitUrl");
    window.location.href = document.getElementById("loginUrl").value;
});
