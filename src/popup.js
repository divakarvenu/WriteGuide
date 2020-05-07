// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let postGuide = document.getElementById('postguide');

chrome.storage.sync.get('postGuide', function(data) {
  console.log(data.postGuide);
  console.log(postGuide);
  if(!data.postGuide){
    postGuide.removeAttribute('checked');
    return;
  }
  postGuide.checked = true;
});

postGuide.addEventListener('change', (event) => {
  let value = event.target.checked;
  chrome.storage.sync.set( {'postGuide':value}, function(data) {
        // console.log(data.postGuide);
  })
});