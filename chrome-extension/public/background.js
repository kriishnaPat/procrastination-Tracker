chrome.runtime.onInstalled.addListener(() => {
  let procTotal=0;
  let date = new Date();
  let prevTime = date.getSeconds() + date.getMinutes()*60 + date.getHours()*3600;
  chrome.storage.local.set({prevTime});
  chrome.storage.local.set({procTotal});
  let start=false;
  let procSessions = 0;
  chrome.storage.local.set({procSession});
  let hours= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  let days ={"0":[],"1":[],"2":[],"3":[],"4":[],"5":[],"6":[]};
  let workSites=[];
  let act=false;
  chrome.storage.local.set({act});
  chrome.storage.local.set({days});
  chrome.storage.local.set({hours});
  chrome.storage.local.set({start});
  chrome.storage.local.set({workSites});
});
chrome.runtime.onStartup.addListener(()=>{
    var date = new Date();
    let prevTime=date.getSeconds() + date.getHours()*3600 + date.getMinutes()*60;
    chrome.storage.local.set({prevTime});
    let start=false;
    let act=false;
    chrome.storage.local.set({act});
    chrome.storage.local.set({start});
});