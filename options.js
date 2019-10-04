// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function updateDisplay(){
    let container = document.getElementById('contentContainer');
    chrome.storage.sync.get('content', function(data) {
        let contentHtml = '';
        for (let item of data.content) {
            contentHtml += '<div class="refcontent col-md-12"> <p>'+item.text+'</p> </div>';
        }
        container.innerHTML=contentHtml;
    })
}

window.onload = function(){
    updateDisplay();
}

chrome.storage.onChanged.addListener(function(changes, namespace) {
    console.log('beat');
    updateDisplay();
});