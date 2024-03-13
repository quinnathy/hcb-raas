function downloadFile() {
         var downloadLink = document.createElement('a');
         downloadLink.href = 'https://raw.githubusercontent.com/quinnathy/hcb-raas/main/hiiii.txt'; 
         downloadLink.download = 'hiiii.txt'; 
         document.body.appendChild(downloadLink);
         downloadLink.click();
         document.body.removeChild(downloadLink);
      }
