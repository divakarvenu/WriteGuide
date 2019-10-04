window.onload = function(e){ 
    chrome.storage.sync.get('content', function(data) {
        console.log(data.content);
    });
    document.addEventListener('keydown', logKey);
}

function updateStorage(newRef){
    chrome.storage.sync.get('content', function(data) {
        newRef = data.content.concat(newRef);
        chrome.storage.sync.set({content:newRef}, function(data) {
            return 'content updated';
        });
    });
}

function logKey(e) {
  var contentRef  = {
      'url':null,
      'text':[]
  }
  if(e.code === 'KeyC'){
    chrome.storage.sync.get('postGuide', function(data) {
        if(data.postGuide){
            var url = window.location.href;
            var text = window.getSelection().getRangeAt(0).toString();
            contentRef.url = url;
            contentRef.text.push(text);      
            updateStorage(contentRef); 
        }
    });  
  }
}