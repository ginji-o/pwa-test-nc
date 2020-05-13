'use strict';

/**************************************************
 * ServiceWorker
 **************************************************/

// serviceWorkerの登録
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then(
   function (registration) {
    console.log('ServiceWorkerRegistrationSuccess');
    registration.onupdatefound = function() {
      registration.update();
      console.log('ServiceWorkerUpdateSuccess');
    }
   })
   .catch(function (error) {
     console.log('ServiceWorkerRegistrationError: ' + error);
   });
 }
